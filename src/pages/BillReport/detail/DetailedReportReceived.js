import { Link, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { emptyRow, StyledTableCell, useStylesTableMUI } from 'src/css/stylesCellTableMUI'
import { heightOfTblMUI, heightOfTblMUIWithPopup } from 'src/util/Utils'


// let data = [
//     {
//         "isDelivery": false,
//         "isRewash": false,
//         "date": "2023-03-10",
//         "receipts": [
//             {
//                 "code": "Elite_Q1-100323-002N",
//                 "productItemQuantity": 4,
//                 "debtNumber": 4,
//                 "subReceipts": []
//             }
//         ]
//     },
//     {
//         "isDelivery": false,
//         "isRewash": false,
//         "date": "2023-03-13",
//         "receipts": [
//             {
//                 "code": "Elite_Q1-130323-004N",
//                 "productItemQuantity": 6,
//                 "debtNumber": 6,
//                 "subReceipts": []
//             }
//         ]
//     },
//     {
//         "isDelivery": false,
//         "isRewash": false,
//         "date": "2023-03-01",
//         "receipts": [
//             {
//                 "code": "Elite_Q1-010323-003N",
//                 "productItemQuantity": 1,
//                 "debtNumber": 1,
//                 "subReceipts": []
//             },
//             {
//                 "code": "Elite_Q1-010323-010N",
//                 "productItemQuantity": 20,
//                 "debtNumber": 19,
//                 "subReceipts": [
//                     {
//                         "code": "Elite_Q1-010323-004G",
//                         "date": "2023-03-13 11:10:56.0",
//                         "productItemQuantity": 1
//                     },
//                     {
//                         "code": "Elite_Q1-020323-001G",
//                         "date": "2023-03-03 07:40:25.0",
//                         "productItemQuantity": 1
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "isDelivery": false,
//         "isRewash": false,
//         "date": "2023-03-08",
//         "receipts": [
//             {
//                 "code": "Elite_Q1-080323-004N",
//                 "productItemQuantity": 28,
//                 "debtNumber": 28,
//                 "subReceipts": []
//             },
//             {
//                 "code": "Elite_Q1-080323-005N",
//                 "productItemQuantity": 2,
//                 "debtNumber": 2,
//                 "subReceipts": []
//             }
//         ]
//     }
// ]

const DetailedReportReceived = ({handleOpenDetailPopup, data}) => {
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
                        let receivedDateEl
                        let receivedCodeEl
                        let numberReceivedEl
                        let debtNumberEl

                        if(indexSubRecord === 0 && indexRow == 0){
                            let rowSpanEl = 0
                            record.receipts.forEach(item => rowSpanEl += item.subReceipts.length)

                            receivedDateEl = <TableCell size='small' align="center" rowSpan={rowSpanEl}>{record.date}</TableCell>
                        }

                        if(indexRow === 0){
                            receivedCodeEl = (
                                <TableCell size='small' rowSpan={subRecord.subReceipts.length}>
                                    <Link
                                        className="link-code"
                                        component="button"
                                        variant="body2"
                                        onClick={e => handleOpenDetailPopup(subRecord.id, "received")}
                                    >
                                        {subRecord.code}
                                    </Link>
                                </TableCell>
                            )
                            numberReceivedEl = <TableCell size='small' align="center" rowSpan={subRecord.subReceipts.length}>{subRecord?.productItemQuantity?.toLocaleString()}</TableCell>
                            debtNumberEl = <TableCell size='small' align="center" rowSpan={subRecord.subReceipts.length}>{subRecord?.debtNumber?.toLocaleString()}</TableCell>
                        }

                        return (
                            <TableRow>
                                {receivedDateEl}
                                {receivedCodeEl}
                                {numberReceivedEl}
                                <TableCell size='small' align="center">{row.date}</TableCell>
                                <TableCell size='small' align="center">
                                    <Link
                                        className="link-code"
                                        component="button"
                                        variant="body2"
                                        onClick={e => handleOpenDetailPopup(row.id, "delivery")}
                                    >
                                        {row.code}
                                    </Link>
                                </TableCell>
                                <TableCell size='small' align="center">{row?.productItemQuantity?.toLocaleString()}</TableCell>
                                {debtNumberEl}
                            </TableRow>
                        )
                    })
                })
            })
        }else{
            return emptyRow(7)
        }
    }

    const sumOfReceived = () => {
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

    const sumOfDelivery = () => {
        let sum = 0
        data.map(item => (
            item.receipts.map(subItem => (
                subItem.subReceipts.map(record => sum += record?.productItemQuantity ? record?.productItemQuantity : 0)
            ))
        ))

        return sum.toLocaleString()
    }

    return (
        <div>
            <TableContainer mt={4} className='tableHeigthMUI'>
                <Table 
                    className={classes.table} 
                    aria-label="simple table" 
                    stickyHeader
                    style={{border: '1px solid rgba(224, 224, 224, 1)'}}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Ngày nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Phiếu nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Số lượng nhận</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Ngày giao</TableCell>
                            <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold"}}>Phiếu giao</TableCell>
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
                                <TableCell size='small' align="right" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}} colSpan={2}>Tổng: </TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfReceived()}</TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}></TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}></TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfDelivery()}</TableCell>
                                <TableCell size='small' align="center" style={{color: "rgb(61,180,118)", fontWeight: "bold", fontSize: "14px"}}>{sumOfDebt()}</TableCell>
                            </TableRow>
                        </TableFooter>  
                    }
                </Table>
            </TableContainer>
        </div>
    )
}

export default DetailedReportReceived