import { Box, Link } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import DialogDetail from 'src/components/dialogDetail/DialogDetail'
import TableComponent from 'src/components/table/TableComponent'
import { default as ReceivedPopup } from "../../order/recevied/OrderDetail"
import { default as DeliveryPopup } from "../../order/delivery/OrderDetail"
import NormalButton from 'src/components/normalButton/Button'
import { ReportAPI } from 'src/service/report/Report'
import { convertDate, convertDateToDDMMYY, delayTimeWhenCallAPI } from 'src/common/FuncCommon'
import DetailedReportReceived from './detail/DetailedReportReceived'
import DetailedReportDelivery from './detail/DetailedReportDelivery'
import dayjs from 'dayjs'

const stylePtag = { padding: "0px 10px", fontWeight: "bold" }
const styleSpanTag = { fontWeight: "normal" }


const DetailedReportPopup = ({ open, onOpenAndClose, selectedData, billType, searchData, headerDataDetail, getParamsSearch }) => {
  const [receivedId, setReceivedId] = useState("")
  const [deliveryId, setDeliveryId] = useState("")
  const [isOpenReceivedPopup, setOpenReceivedPopup] = useState(false)
  const [isOpenDeliveryPopup, setOpenDeliveryPopup] = useState(false)
  const [detailData, setDetailData] = useState([])
  const [loading, setLoading] = useState(false)

  const parseData = (data) => {
    let dataClone = [...data]
   
    if(billType === "received"){
      dataClone.forEach(item => (
        item.receipts.forEach(subItem => {
          if(subItem.isRewash){
            subItem.code = `${subItem.code} (RW)`
          }
        })
      ))
    }else{
      dataClone.forEach(item => {
        item.receipts.forEach(subItem => {
          subItem.subReceipts.forEach(row => {
            if(row.isRewash){
              row.code = `${row.code} (RW)`
            }
          })
        })
      })
    }

    return dataClone
  }

  const paramsDetail = () => {
    let paramsSearch = getParamsSearch()

    let params = {
      customerId: paramsSearch?.customerId,
      fromDate: paramsSearch?.fromDate,
      toDate: paramsSearch?.toDate,
      productType: paramsSearch?.productType,
      productItemId: selectedData?.productId,
      specialInstructions: paramsSearch?.specialInstructions,
      isDelivery: billType === "delivery" ? true : false,
      laundryFormValue: headerDataDetail?.laundryFormValue ? headerDataDetail?.laundryFormValue : undefined,
      isRewash: headerDataDetail.isRewash
    }
    
    return params
  }

  useEffect(() => {
    let params = paramsDetail()
    getReportDetail(params)
  }, [])

  const getReportDetail = async (params) => {
    setLoading(true)
    let respone = await ReportAPI.getReportDetail(params)
    if(respone.status === 200){
      await delayTimeWhenCallAPI()
      let newData = parseData(respone.data.data)
      setDetailData(newData)
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

  const handleOpenDetailPopup = (billId, type) => {
    if (type === "received") {
      setReceivedId(billId)
      onOpenAndCloseReceivedPopup()
    } else {
      setDeliveryId(billId)
      onOPenAndCloseDeliveryPopup()
    }
  }

  const onOpenAndCloseReceivedPopup = () => {
    setOpenReceivedPopup(!isOpenReceivedPopup)
  }

  const onOPenAndCloseDeliveryPopup = () => {
    setOpenDeliveryPopup(!isOpenDeliveryPopup)
  }

  const hanldeExportReportDetail = async () => {
    try {
      setLoading(true)
      let params = paramsDetail()
      let response = await ReportAPI.exportReportDetail(params)
      if(response.status === 200){
        let blob = new Blob([response.data], {type: ''})

        let billName = "phieugiao"
        if(headerDataDetail?.isRewash){
          billName = "phieuRW"
        }else if(billType === "received" && !headerDataDetail?.isRewash){
          billName = "phieunhan"
        }

        let date = dayjs(new Date()).format("DDMMYYYY")
        let fileName = `Detail-${searchData?.customer?.code}-${billName}-${date}.xlsx`
        const link = document.createElement('a')

        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        setLoading(false)
      }else{
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  const checkPermissionToDisplayExportButton = () => {
      if(detailData.length > 0){
        return true
      }

      return false
  }

  return (
    <DialogDetail
      open={open}
      handleClose={onOpenAndClose}
      title="Báo cáo chi tiết công nợ"
      isSave={false}
      loading={loading}
      maxWidth="xl"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <p style={stylePtag}>
            Khách hàng: <span style={styleSpanTag}>{searchData?.customer?.label}</span>
          </p>
          <p style={stylePtag}>
            Từ ngày: <span style={styleSpanTag}>{convertDate(searchData?.fromDate, false)}</span>
          </p>
        </div>

        <div>
          <p style={stylePtag}>
            Mặt hàng: <span style={styleSpanTag}>{selectedData?.productName}</span>
          </p>
          <p style={stylePtag}>
            Đến ngày: <span style={styleSpanTag}>{convertDate(searchData?.toDate, false)}</span>
          </p>
        </div>

        <div>
          <p style={stylePtag}>
            Hình thức giặt ủi: <span style={styleSpanTag}>{headerDataDetail?.laundryFormName}</span>
          </p>
          <p style={stylePtag}>
            Yêu cầu: <span style={styleSpanTag}>{headerDataDetail?.specialInstructions}</span>
          </p>
        </div>
      </div>

      {checkPermissionToDisplayExportButton() &&
        <Box sx={{ display: "flex", justifyContent: "flex-end", marginBottom: "15px" }}>
          <NormalButton
            label="Xuất báo cáo"
            variant='contained'
            onClick={hanldeExportReportDetail}
          />
        </Box>
      }

      {billType === "received" ?
        <DetailedReportReceived
          handleOpenDetailPopup={handleOpenDetailPopup}
          data={detailData}
        /> :
        <DetailedReportDelivery
          handleOpenDetailPopup={handleOpenDetailPopup}
          data={detailData}
        />
      }

      {isOpenReceivedPopup ?
        <ReceivedPopup
          open={isOpenReceivedPopup}
          handleClose={onOpenAndCloseReceivedPopup}
          title={"Chi tiết phiếu nhận"}
          selectedId={receivedId}
          isView={true}
        /> : <div />
      }

      {isOpenDeliveryPopup ?
        <DeliveryPopup
          openDetail={isOpenDeliveryPopup}
          selectId={deliveryId}
          title={"Chi tiết phiếu giao"}
          handleClickOpenDetail={onOPenAndCloseDeliveryPopup}
        />
        : <div />
      }
    </DialogDetail>
  );
}

export default DetailedReportPopup