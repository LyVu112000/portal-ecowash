import { Link, TableFooter } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react'
import ReactTable from "react-table";
import withFixedColumns from "react-table-hoc-fixed-columns";
import { makeStyles } from "@material-ui/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DetailedReportPopup from './DetailedReportPopup';
import { heightOfTbl, heightOfTblMUI } from 'src/util/Utils';
import "../../css/custom.css"
import _ from 'lodash';
import { emptyRow, StyledTableBody, StyledTableCell, StyledTableRow, useStylesTableMUI } from 'src/css/stylesCellTableMUI';

const ReactTableFixedColumns = withFixedColumns(ReactTable);

const SummaryReportTab = ({ data, searchData, headerDataDetail, getHeaderData, getParamsSearch }) => {
  const classes = useStylesTableMUI();
  const [isOpenDetailPopup, setOpenDetailPopup] = useState(false)
  const [billType, setBillType] = useState("")
  const [selectedData, setSelectedData] = useState({})

  const hyperLink = (numberdata, detailData, laundryForm, type, isRewash = false) => (
    <Link
      className="link-code"
      component="button"
      variant="body2"
      onClick={() => {
        getHeaderData(laundryForm, isRewash)
        setSelectedData(detailData)
        setBillType(type)
        onOpenAndCloseDetailPopup();
      }}
    >
      {numberdata}
    </Link>
  );
  //     headerClassName: "sticky-left",
  //     fixed: "left",
  //     columns: [
  //       {
  //         Header: "STT",
  //         className: "center",
  //         headerClassName: "sticky-left",
  //         id: "stt",
  //         width: 50,
  //         Cell: (row) => (<div align="center">{row.index + 1}</div>),
  //         Footer: <strong style={{ color: 'white' }}>. </strong>
  //       },
  //       {
  //         Header: "Tên mặt hàng",
  //         headerClassName: "sticky-left",
  //         id: "productName",
  //         width: 200,
  //         accessor: (data) => data.productName,
  //         Footer: <strong> Tổng: </strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng nhận</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "numberReceivedWash",
  //         className: "center border-left",
  //         accessor: (data) => hyperLink(data.numberReceived?.Wash, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.Wash ? item.numberReceived.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "numberReceivedLaundry",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberReceived?.laundry, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.laundry ? item.numberReceived.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "numberReceivedDry_cleaning",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberReceived?.dry_cleaning, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.dry_cleaning ? item.numberReceived.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "numberReceivedBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberReceived?.baby_dry_cleaning, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.baby_dry_cleaning ? item.numberReceived.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "numberReceivedBaby_laundry",
  //         accessor: (data) => hyperLink(data.numberReceived?.baby_laundry, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.baby_laundry ? item.numberReceived.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "numberReceivedPressing",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberReceived?.pressing, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.pressing ? item.numberReceived.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "numberReceivedBaby_pressing",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberReceived?.baby_pressing, data, "received"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceived.baby_pressing ? item.numberReceived.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng giao thực tế</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "numberDeliveryActualWash",
  //         className: "center border-left",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.Wash, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.Wash ? item.numberDeliveryActual.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "numberDeliveryActualLaundry",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.laundry, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.laundry ? item.numberDeliveryActual.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "numberDeliveryActualDry_cleaning",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.dry_cleaning, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.dry_cleaning ? item.numberDeliveryActual.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "numberDeliveryActualBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.baby_dry_cleaning, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.baby_dry_cleaning ? item.numberDeliveryActual.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "numberDeliveryActualBaby_laundry",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.baby_laundry, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.baby_laundry ? item.numberDeliveryActual.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "numberDeliveryActualPressing",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.pressing, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.pressing ? item.numberDeliveryActual.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "numberDeliveryActualBaby_pressing",
  //         className: "center",
  //         accessor: (data) => hyperLink(data.numberDeliveryActual.baby_pressing, data, "delivery"),
  //         Footer: <strong>{_.sum(data.map(item => item.numberDeliveryActual.baby_pressing ? item.numberDeliveryActual.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng giặt lại</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "numberReceivedOfRewashWash",
  //         className: "center border-left",
  //         accessor: (data) => data.numberReceivedOfRewash.Wash,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.Wash ? item.numberReceivedOfRewash.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "numberReceivedOfRewashLaundry",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfRewash.laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.laundry ? item.numberReceivedOfRewash.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "numberReceivedOfRewashDry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfRewash.dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.dry_cleaning ? item.numberReceivedOfRewash.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "numberReceivedOfRewashBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfRewash.baby_dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.baby_dry_cleaning ? item.numberReceivedOfRewash.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "numberReceivedOfRewashBaby_laundry",
  //         accessor: (data) => data.numberReceivedOfRewash.baby_laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.baby_laundry ? item.numberReceivedOfRewash.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "numberReceivedOfRewashPressing",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfRewash.pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.pressing ? item.numberReceivedOfRewash.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "numberReceivedOfRewashBaby_pressing",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfRewash.baby_pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfRewash.baby_pressing ? item.numberReceivedOfRewash.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng nợ đầu kỳ</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "openNumberReceivedOfDebtWash",
  //         className: "center border-left",
  //         accessor: (data) => data.openNumberReceivedOfDebt.Wash,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.Wash ? item.openNumberReceivedOfDebt.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "openNumberReceivedOfDebtLaundry",
  //         className: "center",
  //         accessor: (data) =>data.openNumberReceivedOfDebt.laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.laundry ? item.openNumberReceivedOfDebt.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "openNumberReceivedOfDebtDry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.openNumberReceivedOfDebt.dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.dry_cleaning ? item.openNumberReceivedOfDebt.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "openNumberReceivedOfDebtBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.openNumberReceivedOfDebt.baby_dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.baby_dry_cleaning ? item.openNumberReceivedOfDebt.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "openNumberReceivedOfDebtBaby_laundry",
  //         accessor: (data) => data.openNumberReceivedOfDebt.baby_laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.baby_laundry ? item.openNumberReceivedOfDebt.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "openNumberReceivedOfDebtPressing",
  //         className: "center",
  //         accessor: (data) => data.openNumberReceivedOfDebt.pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.pressing ? item.openNumberReceivedOfDebt.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "openNumberReceivedOfDebtBaby_pressing",
  //         className: "center",
  //         accessor: (data) => data.openNumberReceivedOfDebt.baby_pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.openNumberReceivedOfDebt.baby_pressing ? item.openNumberReceivedOfDebt.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng nợ trong kỳ</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "numberReceivedOfDebtWash",
  //         className: "center border-left",
  //         accessor: (data) => data.numberReceivedOfDebt.Wash,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.Wash ? item.numberReceivedOfDebt.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "numberReceivedOfDebtLaundry",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfDebt.laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.laundry ? item.numberReceivedOfDebt.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "numberReceivedOfDebtDry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfDebt.dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.dry_cleaning ? item.numberReceivedOfDebt.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "numberReceivedOfDebtBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfDebt.baby_dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.baby_dry_cleaning ? item.numberReceivedOfDebt.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "numberReceivedOfDebtBaby_laundry",
  //         accessor: (data) => data.numberReceivedOfDebt.baby_laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.baby_laundry ? item.numberReceivedOfDebt.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "numberReceivedOfDebtPressing",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfDebt.pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.pressing ? item.numberReceivedOfDebt.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "numberReceivedOfDebtBaby_pressing",
  //         className: "center",
  //         accessor: (data) => data.numberReceivedOfDebt.baby_pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.numberReceivedOfDebt.baby_pressing ? item.numberReceivedOfDebt.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  //   {
  //     Header: () => <strong>Số lượng nợ cuối kỳ</strong>,
  //     headerClassName: "border-left",
  //     columns: [
  //       {
  //         Header: "Giặt",
  //         headerClassName: "border-left",
  //         id: "totalDebtWash",
  //         className: "center border-left",
  //         accessor: (data) => data.totalDebt.Wash,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.Wash ? item.totalDebt.Wash : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi",
  //         id: "totalDebtLaundry",
  //         className: "center",
  //         accessor: (data) => data.totalDebt.laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.laundry ? item.totalDebt.laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô)",
  //         id: "totalDebtDry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.totalDebt.dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.dry_cleaning ? item.totalDebt.dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt hấp (khô) baby",
  //         id: "totalDebtBaby_dry_cleaning",
  //         className: "center",
  //         accessor: (data) => data.totalDebt.baby_dry_cleaning,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.baby_dry_cleaning ? item.totalDebt.baby_dry_cleaning : 0))}</strong>
  //       },
  //       {
  //         Header: "Giặt ủi baby",
  //         className: "center",
  //         id: "totalDebtBaby_laundry",
  //         accessor: (data) => data.totalDebt.baby_laundry,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.baby_laundry ? item.totalDebt.baby_laundry : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi",
  //         id: "totalDebtPressing",
  //         className: "center",
  //         accessor: (data) => data.totalDebt.pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.pressing ? item.totalDebt.pressing : 0))}</strong>
  //       },
  //       {
  //         Header: "Ủi baby",
  //         id: "totalDebtBaby_pressing",
  //         className: "center",
  //         accessor: (data) => data.totalDebt.baby_pressing,
  //         Footer: <strong>{_.sum(data.map(item => item.totalDebt.baby_pressing ? item.totalDebt.baby_pressing : 0))}</strong>
  //       },
  //     ],
  //   },
  // ];

  const onOpenAndCloseDetailPopup = () => {
    setOpenDetailPopup(!isOpenDetailPopup)
  }

  const renderTable = () => {
    let indexRow = 0
    return (
      <TableBody>
            {data.length > 0 ?
              data.map((row, index) => (
                <Fragment>
                  <TableRow key={row.productId}>
                    <TableCell size='small' align="center" rowSpan={row?.reportGeneralLaundryFormDetailDtoList?.length + 1}>{index + 1}</TableCell>
                    <TableCell size='small' component="th" scope="row" rowSpan={row?.reportGeneralLaundryFormDetailDtoList?.length + 1}>{row.productName}</TableCell>
                  </TableRow>

                  {row?.reportGeneralLaundryFormDetailDtoList?.map((item) => {
                    indexRow++
                    return (
                      <TableRow style={{background: `${indexRow % 2 === 0 || indexRow === 0 ? "rgb(255,255,255)" : "rgb(245,245,245)"}`}}>
                        <TableCell size='small' align="center">{item?.laundryFormName}</TableCell>
                        <TableCell size='small' align="center">{hyperLink(item?.numberReceived?.toLocaleString(), row, item, "received")}</TableCell>
                        <TableCell size='small' align="center">{hyperLink(item?.numberDeliveryActual?.toLocaleString(), row, item, "delivery")}</TableCell>
                        <TableCell size='small' align="center">{hyperLink(item?.numberReceivedOfRewash?.toLocaleString(), row, item, "received", true)}</TableCell>
                        <TableCell size='small' align="center">{item?.openNumberReceivedOfDebt?.toLocaleString()}</TableCell>
                        <TableCell size='small' align="center">{item?.numberReceivedOfDebt?.toLocaleString()}</TableCell>
                        <TableCell size='small' align="center">{(item?.openNumberReceivedOfDebt + item?.numberReceivedOfDebt)?.toLocaleString()}</TableCell>
                      </TableRow>
                    )
                  })}
                </Fragment>
              ))
              : emptyRow(9)
            }
          </TableBody>
    )
  }

  return (
    <div>
      <TableContainer mt={4} style={{ height: heightOfTblMUI }}>
        <Table
          className={classes.table}
          aria-label="simple table"
          stickyHeader
          style={{ border: "1px solid rgba(224, 224, 224, 1)" }}
        >
          <TableHead>
            <TableRow>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>STT</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold", width: "20%" }}>Tên mặt hàng</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold", width: "10%" }}>Hình thức</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số lượng nhận</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số lượng giao thực tế</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số lượng giặt lại</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số nợ đầu kỳ</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số nợ trong kỳ</TableCell>
              <TableCell size='small' align="center" style={{ color: "rgb(61,180,118)", fontWeight: "bold" }}>Số nợ cuối kỳ</TableCell>
            </TableRow>
          </TableHead>
          {renderTable()}
        </Table>
      </TableContainer>

      {isOpenDetailPopup ? (
        <DetailedReportPopup
          open={isOpenDetailPopup}
          onOpenAndClose={onOpenAndCloseDetailPopup}
          selectedData={selectedData}
          billType={billType}
          searchData={searchData}
          headerDataDetail={headerDataDetail}
          getParamsSearch={getParamsSearch}
        />
      ) : (
        <div />
      )}
    </div>
  );
}

export default SummaryReportTab