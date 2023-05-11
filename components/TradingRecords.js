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

const headCells = [
  {
    id: 'orderCode',
    numeric: false,
    disablePadding: false,
    label: '订单号',
  },
  {
    id: 'amount',
    numeric: true,
    disablePadding: false,
    label: '充值金额（RMB）',
  },
  {
    id: 'usdAmount',
    numeric: true,
    disablePadding: false,
    label: '充值金额（USD）',
  },
  {
    id: 'usdRate',
    numeric: true,
    disablePadding: false,
    label: '汇率',
  },
  {
    id: 'channel',
    numeric: true,
    disablePadding: false,
    label: '支付方式',
  },
  {
    id: 'createTime',
    numeric: true,
    disablePadding: false,
    label: '创建时间',
  },
  {
    id: 'auditTime',
    numeric: true,
    disablePadding: false,
    label: '审核时间',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: '审核状态',
  },
];

function EnhancedTableHead(props) {
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
          <InputLabel id="demo-simple-select-label">审核状态</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={status}
            label="审核状态"
            onChange={e => setStatus(e.target.value)}
          >
            <MenuItem value={'0'}>全部</MenuItem>
            <MenuItem value={'paying'}>审核中</MenuItem>
            <MenuItem value={'success'}>审核通过</MenuItem>
            <MenuItem value={'fail'}>审核不通过</MenuItem>
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
          <span>搜索</span>
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
                    <TableCell align="left">¥{row.amount / 100}</TableCell>
                    <TableCell align="left">≈ ${Math.floor(row.usdAmount * 100) / 10000}</TableCell>
                    <TableCell align="left">{row.usdRate}</TableCell>
                    <TableCell align="left">{row.channel}</TableCell>
                    <TableCell align="left">{row.createTime}</TableCell>
                    <TableCell align="left">{row.auditTime || '-'}</TableCell>
                    <TableCell align="right">
                      <Chip
                        label={row.status === 'paying' ? '审核中' : row.status === 'success' ? '已通过' : '未通过'}
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
            暂无交易记录
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