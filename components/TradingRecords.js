import React, { useState } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import LoadingButton from '@mui/lab/LoadingButton';
import TableContainer from '@mui/material/TableContainer';
import CircularProgress from '@mui/material/CircularProgress';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import { useThrottleFn } from 'ahooks';
import { getRechargeList } from '@/services';
import { useIntl } from "react-intl";

function EnhancedTableHead(props) {
  const intl = useIntl();

  const orderNumTxt = intl.formatMessage({ id: "audit.orderNum" });
  const paytypeTxt = intl.formatMessage({ id: "audit.paytype" });
  const amountTxt = intl.formatMessage({ id: "audit.amount" });
  const createTimeTxt = intl.formatMessage({ id: "audit.createTime" });
  const timeTxt = intl.formatMessage({ id: "audit.time" });
  const statusTxt = intl.formatMessage({ id: "audit.status" });

  const headCells = [
    {
      id: 'orderCode',
      numeric: false,
      disablePadding: false,
      label: orderNumTxt
    },
    {
      id: 'amount',
      numeric: true,
      disablePadding: false,
      label: amountTxt
    },
    {
      id: 'channel',
      numeric: true,
      disablePadding: false,
      label: paytypeTxt
    },
    {
      id: 'createTime',
      numeric: true,
      disablePadding: false,
      label: createTimeTxt
    },
    {
      id: 'auditTime',
      numeric: true,
      disablePadding: false,
      label: timeTxt
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: statusTxt
    },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, index) => (
          <TableCell align={index < headCells.length - 1 ? 'left' : "right"} key={headCell.id}>{ headCell.label }</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

function EnhancedTableToolbar(props) {
  const { numSelected } = props;
  const [status, setStatus] = React.useState('0');
  const intl = useIntl();

  const searchTxt = intl.formatMessage({ id: "audit.search" });
  const orderNumTxt = intl.formatMessage({ id: "audit.status" });
  const allTxt = intl.formatMessage({ id: "mine.index.personal.all" });
  const underReviewTxt = intl.formatMessage({ id: "mine.index.personal.underReview" });
  const passedTxt = intl.formatMessage({ id: "mine.index.personal.passed" });
  const rejectedTxt = intl.formatMessage({ id: "mine.index.personal.rejected" });
  const {
    run: handleSearch,
  } = useThrottleFn(() => {
    props.onSearch(status);
  });

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      <Stack direction="row" sx={{ my: 2 }} spacing={{ xs: 1, sm: 2, md: 4 }} alignItems="center" justifyContent="space-between">
        <FormControl sx={{ m: 1, minWidth: 180 }}>
          <InputLabel id="demo-simple-select-label">{orderNumTxt}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label={orderNumTxt}
            onChange={e => setStatus(e.target.value)}
          >
            <MenuItem value={'0'}>{allTxt}</MenuItem>
            <MenuItem value={'paying'}>{underReviewTxt}</MenuItem>
            <MenuItem value={'success'}>{passedTxt}</MenuItem>
            <MenuItem value={'fail'}>{rejectedTxt}</MenuItem>
          </Select>
        </FormControl>

        <LoadingButton
          className='bg-blue-900'
          loading={false}
          variant="contained"
          sx={{ py: 1.5 }}
          onClick={handleSearch}
          fullWidth
        >
          <span>{searchTxt}</span>
        </LoadingButton>
      </Stack>
    </Toolbar>
  );
}

export default function EnhancedTable() {
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = React.useState(0);
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [status, setStatus] = React.useState('');
  const intl = useIntl();

  const underReviewTxt = intl.formatMessage({ id: "mine.index.personal.underReview" });
  const passedTxt = intl.formatMessage({ id: "mine.index.personal.passed" });
  const rejectedTxt = intl.formatMessage({ id: "mine.index.personal.rejected" });
  const thirdPayTxt = intl.formatMessage({ id: "mine.index.recharge.thirdPay" });
  const cardPayTxt = intl.formatMessage({ id: "mine.index.recharge.cardPay" });
  const digitalCurrencyTxt = intl.formatMessage({ id: "mine.index.recharge.digitalCurrency" });
  const tnternationalWire = intl.formatMessage({ id: "mine.index.recharge.tnternationalWire" });
  const noRchargeRecords = intl.formatMessage({ id: "audit.no.recharge.records" });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - 100) : 0;


  React.useEffect(() => {
    fetchData({
      page: page + 1,
      limit: rowsPerPage,
      status
    });
  }, [page, rowsPerPage, status])
  
  const fetchData = (params) => {
    setLoading(true)
    getRechargeList(params)
      .then(({ code, data }) => {
        setLoading(false)
        if (!code) {
          setRows(data.rows || [])
          setTotal(data.total || 0)
        }
      });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <EnhancedTableToolbar onSearch={stat => setStatus(stat === '0' ? '' : stat)} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead />
            <TableBody>
              {rows.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.orderCode}
                    // sx={{ cursor: 'pointer' }}
                  >
                    <TableCell align="left">{row.orderCode}</TableCell>
                    <TableCell align="left">{row.type === 'thirdPay' || row.type === 'cardPay' ? '¥' : '$'}{(Math.floor(row.amount * 100) / 10000) }</TableCell>
                    <TableCell align="left">{row.type === 'thirdPay' ? thirdPayTxt : row.type === 'cardPay' ? cardPayTxt : row.type === 'digitalCurrency' ? digitalCurrencyTxt : tnternationalWire}</TableCell>
                    <TableCell align="left">{row.createTime}</TableCell>
                    <TableCell align="left">{row.auditTime || '-'}</TableCell>
                    <TableCell align="right">
                      <Chip
                        label={row.status === 'paying' ? underReviewTxt : row.status === 'success' ? passedTxt : rejectedTxt}
                        color={row.status === 'paying' ? 'warning' : row.status === 'success' ? 'success' : 'error'}
                        variant="outlined"
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        {
          loading ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            </>
          ) : null
        }
        
        {!total && !loading ? (
          <Typography sx={{ py: 4 }} variant="overline" align="center" display="block" gutterBottom>
            {noRchargeRecords}
          </Typography>
        ) : (
          <>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={total}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>
    </Box>
  );
}