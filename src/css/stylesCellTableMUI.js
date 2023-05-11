import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
import { makeStyles } from '@material-ui/styles';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
}));

export const StyledTableBody = styled(TableBody)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // // hide last border
    // '&:last-child td, &:last-child th': {
    //   border: 0,
    // },
}));

export const useStylesTableMUI = makeStyles({
  table: {
    minWidth: 650,
    "& .MuiTableCell-root": {
      borderLeft: "1px solid rgba(224, 224, 224, 1)",
    },
  },
});

export const emptyRow = (colSpan) => {
  return (
    <TableRow>
      <TableCell colSpan={colSpan} align="center">Không có dữ liệu</TableCell>
    </TableRow>
  )
}