import {Box, Link, TableFooter} from '@material-ui/core';
import React, {useState} from 'react'
import ReactTable from "react-table";
import {makeStyles} from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import withFixedColumns from "react-table-hoc-fixed-columns";
import DetailedReportPopup from './DetailedReportPopup';
import {heightOfTbl, heightOfTblMUI} from 'src/util/Utils';
import "../../css/custom.css"
import _ from "lodash";
import { emptyRow, StyledTableCell, StyledTableRow, useStylesTableMUI } from 'src/css/stylesCellTableMUI';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const SummaryReportOrdinaryProductTab = (props) => {
    const [isOpenDetailPopup, setOpenDetailPopup] = useState(false)
    const [billType, setBillType] = useState("")
    const [selectedData, setSelectedData] = useState({})
    const classes = useStylesTableMUI();

    const hyperLink = (detailData, type, numberData, isRewash = false) => (
        <Link
            className="link-code"
            component="button"
            variant="body2"
            onClick={() => {
                props.getHeaderData(undefined, isRewash)
                setSelectedData(detailData)
                setBillType(type)
                onOpenAndCloseDetailPopup();
            }}
        >
            {numberData}
        </Link>
    );

    const onOpenAndCloseDetailPopup = () => {
      setOpenDetailPopup(!isOpenDetailPopup)
    }

    return (
      <div>
        <TableContainer mt={4} style={{height: heightOfTblMUI}}>
          <Table 
            className={classes.table} 
            aria-label="simple table" 
            stickyHeader
            style={{border: '1px solid rgba(224, 224, 224, 1)'}}
          >
            <TableHead>
              <TableRow>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>STT</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Tên mặt hàng</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng nhận</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng giao thực tế</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng giặt lại</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số nợ đầu kỳ</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số nợ trong kỳ</TableCell>
                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số nợ cuối kỳ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.length > 0 ?
                props.data.map((row, index) => (
                  <StyledTableRow key={row.productId}>
                    <StyledTableCell size='small' align="center">{index + 1}</StyledTableCell>
                    <StyledTableCell size='small' component="th" scope="row">{row.productName}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{hyperLink(row, "received", row?.numberReceived?.toLocaleString())}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{hyperLink(row, "delivery", row?.numberDeliveryActual?.toLocaleString())}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{hyperLink(row, "received", row?.numberReceivedOfRewash?.toLocaleString(), true)}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{row?.openNumberReceivedOfDebt?.toLocaleString()}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{row?.numberReceivedOfDebt?.toLocaleString()}</StyledTableCell>
                    <StyledTableCell size='small' align="center">{(row.openNumberReceivedOfDebt + row.numberReceivedOfDebt)?.toLocaleString()}</StyledTableCell>
                  </StyledTableRow>
                ))
                :
                emptyRow(8)
              }
              
            </TableBody>
          </Table>
        </TableContainer>

        {isOpenDetailPopup ? (
          <DetailedReportPopup
            open={isOpenDetailPopup}
            onOpenAndClose={onOpenAndCloseDetailPopup}
            selectedData={selectedData}
            billType={billType}
            searchData={props.searchData}
            headerDataDetail={props.headerDataDetail}
            getParamsSearch={props.getParamsSearch}
          />
        ) : (
          <div />
        )}
      </div>
    );
}

export default SummaryReportOrdinaryProductTab