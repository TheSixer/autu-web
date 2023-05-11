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
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
  padding: '12px 8px',
});

function createData(name, calories, fat, carbs, protein, protin, rotin) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    protin,
    rotin,
  };
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'login',
    numeric: false,
    disablePadding: false,
    label: '账号',
  },
  {
    id: 'status',
    numeric: true,
    disablePadding: false,
    label: '状态',
  },
  {
    id: 'leverageInCents',
    numeric: true,
    disablePadding: false,
    label: '杠杆',
  },
  {
    id: 'balance',
    numeric: true,
    disablePadding: false,
    label: '余额',
  },
  {
    id: 'depositCurrency',
    numeric: true,
    disablePadding: false,
    label: '货币',
  },
];

function EnhancedTableHead(props) {
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
        <TableCell align="right">操作</TableCell>
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
    if (amount * 100 > balance) {
      toast.warn('转入金额不能超过您的可用余额');
      return;
    }
    setLoading(true);
    transferToTrader({
      login: currentRow.login,
      amount: amount * 100,
    }).then(({code}) => {
      if (!code) {
        toast.success('转入成功');
        fetchList()
        onUpdate();
        setOpen(false);
        setLoading(false);
      }
    });
  }

  const handleWithdraw = () => {
    if (amount * 100 > currentRow.balance) {
      toast.warn('账户余额不足');
      return;
    }
    setLoading(true);
    transferToWallet({
      login: currentRow.login,
      amount: amount * 100,
    }).then(({code}) => {
      if (!code) {
        toast.success('转出成功');
        fetchList()
        onUpdate();
        setOpen(false);
        setLoading(false);
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
                        row.balance >= 10000 ? 
                        <Button className='ml-2' size="small" disabled={row.status !== 'FULL_ACCESS' || row.balance < 10000} variant="outlined" color="info" onClick={() => handleClickOpen(row, 1)}>出金</Button>
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
            暂无账户信息
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
        <DialogTitle>{type ? '出金' : '入金'}</DialogTitle>
        <DialogContent>
          <Stack sx={{ width: 320, p: 2 }} spacing={2}>
            <TextField
              error={(parseInt(amount || 0) % 100) !== 0}
              label={`${type ? '转出' : '转入'}金额（${currentRow?.depositCurrency}）`}
              value={amount}
              helperText={(parseInt(amount || 0) % 100) !== 0 ? '请输入100的倍数' : ''}
              onChange={e => setAmount(e.target.value)}
              InputProps={{
                inputComponent: NumericFormatUSD,
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
          <Button onClick={() => setOpen(false)} disabled={loading}>取消</Button>
          <LoadingButton
            size="small"
            onClick={handleConfirm}
            loading={loading}
            disabled={loading || !amount || (parseInt(amount || 0) % 100) !== 0}
          >
            <span>确认{type ? '转出' : '转入'}</span>
          </LoadingButton>
        </DialogActions>
      </Dialog>

      {/* <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='pr-2 pt-2'>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <span className='font-semibold'>变更奖金</span>
            <IconButton onClick={handleClose}>
              <Close/>
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ p: 5 }}>
          <Paper
            variant="outlined"
            component="form"
            sx={{ mb: 2, display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-blue-700 hover:bg-blue-700' variant="contained" disableRipple>
              <Add />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额' }}
            />
          </Paper>
          <Paper
            variant="outlined"
            component="form"
            sx={{ display: 'flex', alignItems: 'center', width: 300 }}
          >
            <BootstrapButton className='bg-gray-50 text-gray-400 hover:bg-gray-50' variant="contained" disableRipple>
              <HorizontalRuleIcon />
            </BootstrapButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="变更金额"
              inputProps={{ 'aria-label': '变更金额', textAlign: 'right' }}
            />
          </Paper>
          <Button className="bg-blue-900" sx={{mt:4, py: 1.5}} onClick={handleClose} variant="contained" fullWidth>确认</Button>
        </DialogContent>
      </Dialog> */}
    </Box>
  );
}