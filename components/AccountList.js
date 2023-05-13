import React, { forwardRef, useState, useMemo, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import { NumericFormat } from 'react-number-format';
import LoadingButton from '@mui/lab/LoadingButton';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useThrottleFn } from 'ahooks';
import { transferToTrader, transferToWallet, fetchAccountList } from '@/services';
import { toast } from 'react-toastify';
import { useIntl } from "react-intl";

function EnhancedTableHead(props) {
  const intl = useIntl();

  const loginTxt = intl.formatMessage({ id: "account.login" });
  const statusTxt = intl.formatMessage({ id: "status" });
  const balanceTxt = intl.formatMessage({ id: "balance" });
  const currencyTxt = intl.formatMessage({ id: "currency" });
  const leverTxt = intl.formatMessage({ id: "lever" });
  const actionsTxt = intl.formatMessage({ id: "actions" });
  
  const headCells = [
    {
      id: 'login',
      numeric: false,
      disablePadding: false,
      label: loginTxt,
    },
    {
      id: 'status',
      numeric: true,
      disablePadding: false,
      label: statusTxt,
    },
    {
      id: 'leverageInCents',
      numeric: true,
      disablePadding: false,
      label: leverTxt,
    },
    {
      id: 'balance',
      numeric: true,
      disablePadding: false,
      label: balanceTxt,
    },
    {
      id: 'depositCurrency',
      numeric: true,
      disablePadding: false,
      label: currencyTxt,
    },
  ];
  const { order, orderBy } =
    props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >{headCell.label}</TableCell>
        ))}
        <TableCell align="right">{actionsTxt}</TableCell>
      </TableRow>
    </TableHead>
  );
}

const NumericFormatRMB = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="¥"
    />
  );
});

const NumericFormatUSD = forwardRef(function NumericFormatCustom(
  props,
  ref,
) {
  const { onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      valueIsNumericString
      prefix="$"
    />
  );
});

export default function EnhancedTable({balance, rate, onUpdate}) {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [amount, setAmount] = useState('');
  const [open, setOpen] = React.useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [dataList, setDataList] = useState([]);
  const [type, setType] = useState(0);
  const intl = useIntl();

  const inSuccessTxt = intl.formatMessage({ id: "account.transfer.in.success" });
  const outSuccessTxt = intl.formatMessage({ id: "account.transfer.out.success" });
  const noBalanceTxt = intl.formatMessage({ id: "account.no.balance" });
  const noAccountsTxt = intl.formatMessage({ id: "account.no.accounts" });
  const fundTxt = intl.formatMessage({ id: "account.no.fund" });
  const withdrawTxt = intl.formatMessage({ id: "account.no.withdraw" });
  const transferIn = intl.formatMessage({ id: "account.transfer.in" });
  const transferOut = intl.formatMessage({ id: "account.transfer.in" });
  const amountTxt = intl.formatMessage({ id: "mine.index.personal.amount" });
  const confirmTxt = intl.formatMessage({ id: "confirm" });
  const cancelTxt = intl.formatMessage({ id: "cancel" });
  
  const handleClickOpen = (row, type) => {
    setAmount('')
    setType(type);
    setCurrentRow(row);
    setOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const usdCurrency = useMemo(() => {
    if (!rate || !currentRow) {
      return null;
    }
    return rate.find(({currency}) => currency === currentRow.depositCurrency);
  }, [rate, currentRow]);

  useEffect(() => {
    fetchList()
  }, [])

  const fetchList = () => {
    fetchAccountList()
      .then(({code, data}) => {
        if (!code) {
          setDataList(data);
          setInitLoading(false);
        }
      })
  }

  const {
    run: handleConfirm,
  } = useThrottleFn(() => {
    if (!type) {
      handleTransfer();
    } else {
      handleWithdraw();
    }
  });
  
  const handleTransfer = () => {
    setLoading(true);
    transferToTrader({
      login: currentRow.login,
      amount: amount * 100,
    }).then(({code}) => {
      if (!code) {
        toast.success(inSuccessTxt);
        fetchList()
        onUpdate();
        setOpen(false);
      }
      setLoading(false);
    });
  }

  const handleWithdraw = () => {
    if (amount * 100 > currentRow.balance) {
      toast.warn(noBalanceTxt);
      return;
    }
    setLoading(true);
    transferToWallet({
      login: currentRow.login,
      amount: amount * 100,
    }).then(({code}) => {
      setLoading(false);
      if (!code) {
        toast.success(outSuccessTxt);
        fetchList()
        onUpdate();
        setOpen(false);
      }
    });
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, py: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              rowCount={dataList.length}
            />
            <TableBody>
              {dataList.map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.login}
                  >
                    <TableCell align="left">
                      <Stack direction="column">
                        <span>cTrader</span>
                        <span>{row.login}</span>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">1:{row.leverageInCents / 100}</TableCell>
                    <TableCell align="right">{Math.floor(row.balance) / 100}</TableCell>
                    <TableCell align="right">{row.depositCurrency}</TableCell>
                    <TableCell align="right">
                      {/* <Button className='bg-blue-500 mr-2' size="small" variant="contained">修改密码</Button> */}
                      <Button className='bg-yellow-500' size="small" disabled={row.status !== 'FULL_ACCESS'} variant="contained" color="warning" onClick={() => handleClickOpen(row, 0)}>入金</Button>
                      {
                        row.balance ? 
                        <Button className='ml-2' size="small" disabled={row.status !== 'FULL_ACCESS'} variant="outlined" color="info" onClick={() => handleClickOpen(row, 1)}>出金</Button>
                        : null
                      }
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
          !dataList.length && initLoading ? (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 4 }}>
                <CircularProgress />
              </Box>
            </>
          ) : null
        }
        
        {!dataList.length && !initLoading ? (
          <Typography sx={{ mt: 4 }} variant="overline" align="center" display="block" gutterBottom>
            {noAccountsTxt}
          </Typography>
        ) : (
          <>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={dataList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        )}
      </Paper>

      <Dialog open={open} disableEscapeKeyDown>
        <DialogTitle>{type ? withdrawTxt : fundTxt}</DialogTitle>
        <DialogContent>
          <Stack sx={{ width: 320, p: 2 }} spacing={2}>
            <TextField
              label={`${type ? transferOut : transferIn} ${amountTxt}（${currentRow?.depositCurrency}）`}
              value={amount}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: currentRow?.depositCurrency === 'CNH' ? NumericFormatRMB : NumericFormatUSD,
              }}
              fullWidth
            />

            {/* <TextField
              label={`${type ? '转出' : '转入'}金额（${currentRow?.depositCurrency}）`}
              value={usdCurrency ? (Math.floor(amount / usdCurrency?.rate * 100) / 100) : 0}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatUSD,
              }}
              disabled
              fullWidth
            /> */}
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>{cancelTxt}</Button>
          <LoadingButton
            size="small"
            onClick={handleConfirm}
            loading={loading}
            disabled={loading || !amount}
          >
            <span>{confirmTxt} {type ? transferOut : transferIn}</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}