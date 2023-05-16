import { Link, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@material-ui/core'
import _ from 'lodash'
import React from 'react'
import { emptyRow, StyledTableCell, useStylesTableMUI } from 'src/css/stylesCellTableMUI'
import { heightOfTblMUI } from 'src/util/Utils'

// let data = [
//     {
//         "isDelivery": true,
//         "date": "2023-03-03",
//         "receipts": [
//             {
//                 "id": 297,
//                 "code": "Elite_Q1-020323-001G",
//                 "productItemQuantity": 1,
//                 "debtNumber": 19,
//                 "subReceipts": [
//                     {
//                         "id": 811,
//                         "code": "Elite_Q1-010323-010N",
//                         "date": "2023-03-01 15:47:00.0",
//                         "productItemQuantity": 20,
//                         "isRewash": false
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "isDelivery": true,
//         "date": "2023-03-13",
//         "receipts": [
//             {
//                 "id": 292,
//                 "code": "Elite_Q1-010323-004G",
//                 "productItemQuantity": 1,
//                 "debtNumber": 19,
//                 "subReceipts": [
//                     {
//                         "id": 811,
//                         "code": "Elite_Q1-010323-010N",
//                         "date": "2023-03-01 15:47:00.0",
//                         "productItemQuantity": 20,
//                         "isRewash": false
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "isDelivery": true,
//         "date": "2023-03-15",
//         "receipts": [
//             {
//                 "id": 413,
//                 "code": "Elite_Q1-150323-004G",
//                 "productItemQuantity": 2,
//                 "debtNumber": 9,
//                 "subReceipts": [
//                     {
//                         "id": 1119,
//                         "code": "Elite_Q1-150323-001N",
//                         "date": "2023-03-15 09:43:00.0",
//                         "productItemQuantity": 11,
//                         "isRewash": false
//                     }
//                 ]
//             },
//             {
//                 "id": 411,
//                 "code": "Elite_Q1-150323-002G",
//                 "productItemQuantity": 11,
//                 "debtNumber": 0,
//                 "subReceipts": [
//                     {
//                         "id": 1119,
//                         "code": "Elite_Q1-150323-001N",
//                         "date": "2023-03-15 09:43:00.0",
//                         "productItemQuantity": 11,
//                         "isRewash": false
//                     }
//                 ]
//             }
//         ]
//     }
// ]

const DetailedReportDelivery = ({handleOpenDetailPopup, data}) => {
    const classes = useStylesTableMUI()

    const renderTableBody = () => {
        if(data.length > 0){
            let emptyObj = {}
            return data.map((record, indexRecord) => {
                return record.receipts.map((subRecord, indexSubRecord) => {
                    if(subRecord.subReceipts.length === 0){
                        subRecord.subReceipts.push(emptyObj)
                    }

                    return subRecord.subReceipts.map((row, indexRow) => {
                        let deliveryDateEl
                        let deliveryCodeEl
                        
                        if(indexSubRecord === 0 && indexRow === 0){
                            let rowSpanEl = 0
                            record.receipts.map(item => rowSpanEl += item.subReceipts.length)

                            deliveryDateEl = <TableCell size='small' align="center" rowSpan={rowSpanEl}>{record.date}</TableCell>
                        }

                        if(indexRow === 0){
                            deliveryCodeEl = (
                                <TableCell size='small' rowSpan={subRecord.subReceipts.length}>
                                    <Link
                                        className="link-code"
                                        component="button"
                                        variant="body2"
                                        onClick={e => handleOpenDetailPopup(subRecord.id, "delivery")}
                                    >
                                        {subRecord.code}
                                    </Link>
                                </TableCell>
                            )
                        }

                        return (
                            <TableRow>
                                {deliveryDateEl}
                                {deliveryCodeEl}
                                <TableCell size='small' align="center">{row.date}</TableCell>
                                <TableCell size='small' align="center">
                                    <Link
                                        className="link-code"
                                        component="button"
                                        variant="body2"
                                        onClick={e => handleOpenDetailPopup(row.id, "received")}
                                    >
                                        {row.code}
                                    </Link>
                                </TableCell>
                                <TableCell size='small' align="center">{row?.productItemQuantity?.toLocaleString()}</TableCell>
                                <TableCell size='small' align="center">{subRecord?.productItemQuantity?.toLocaleString()}</TableCell>
                                <TableCell size='small' align="center">{subRecord?.debtNumber?.toLocaleString()}</TableCell>
                            </TableRow>
                        )
                    })
                })
            })
        }else{
            return emptyRow(7)
        }         
    }

    const sumOfNumberReceipt = () => {
        let sum = 0
        data.map(item => (
            item.receipts.map(subItem => (
                subItem.subReceipts.map(recored => sum += recored?.productItemQuantity ? recored?.productItemQuantity : 0)
            ))
        ))

        return sum.toLocaleString()
    }

    const sumOfNumberDelivery = () => {
        let sum = 0
        data.map(item => (
            item.receipts.map(subItem => sum += subItem?.productItemQuantity ? subItem?.productItemQuantity : 0)
        ))

        return sum.toLocaleString()
    }

    const sumOfDebt = () => {
        let sum = 0
        data.map(item => (
            item.receipts.map(subItem => sum += subItem?.debtNumber ? subItem?.debtNumber : 0)
        ))

        return sum.toLocaleString()
    }

    return (
        <div className='tableHeigthMUI'>
            <TableContainer mt={4}>
                <Table 
                    className={classes.table} 
                    stickyHeader
                    aria-label="simple table" 
                    style={{border: '1px solid rgba(224, 224, 224, 1)'}}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Ngày giao</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Phiếu giao</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Ngày nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Phiếu nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng giao</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng còn</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {renderTableBody()}
                    </TableBody>
                    {data.length > 0 &&
                        <TableFooter style={{insetBlockEnd: 0, position: "sticky", zIndex: 999}}>
                            <TableRow style={{background: "rgb(236 237 239)"}}>
                                <TableCell size='small' align="right" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}} colSpan={4}>Tổng: </TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfNumberReceipt()}</TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfNumberDelivery()}</TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfDebt()}</TableCell>
                            </TableRow>
                        </TableFooter>
                    }
                </Table>
            </TableContainer>
        </div>
    )
}

export default DetailedReportDelivery