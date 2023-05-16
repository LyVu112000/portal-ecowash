import { CCol, CRow } from "@coreui/react";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Backdrop, CircularProgress } from "@mui/material";
import { CCollapse } from "@coreui/react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SummaryReportTab from "./SummaryReportTab";
import InputDatePicker from "../../components/datePicker/InputDatePicker";
import MultiSelect from "../../components/multiSelect/MultiSelect";
import NormalButton from "../../components/normalButton/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useEnumData } from "../../hooks/useEnumData";
import { toast } from "react-toastify";
import AutoSuggest from "../../components/autoSuggest/AutoSuggest";
import SelectComponent from "src/components/selectBox/SelectComponent";
import SummaryReportOrdinaryProductTab from "./SummaryReportOrdinaryProductTab";
import { ReportAPI } from "../../service/report/Report";
import { useStylesMui } from "../../css/makeStyles";
import { convertDateToDDMMYY, delayTimeWhenCallAPI, validateCompareTwoDate, validateDate, validateOneYearlaterFromSelectedDate, validateText } from "src/common/FuncCommon";
import { customerAPI } from "src/service/customer/customerAPI";
import dayjs from "dayjs";

const styleExportButton = {
  position: "absolute",
  display: "inline-block",
  top: "5px",
  right: 0,
};

const BillReportList = () => {
  const classes = useStylesMui();
  const { productTypes, specialInstructions } = useEnumData();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false)
  const [customerOption, setCustomerOption] = useState([]);
  const [searchData, setSearchData] = useState({
    customer: null,
    fromDate: null,
    toDate: null,
    specialInstruction: [],
    productType: "ordinary_product",
  });
  const [headerDataDetail, setHeaderDataDetail] = useState({
    specialInstructions: "",
    laundryFormName: "",
    laundryFormValue: "",
    isRewash: false
  })
  const [errorSearch, setErrorSearch] = useState({
    customer: "",
    fromDate: "",
    toDate: "",
    productType: "",
    maxDate: "",
    oneYearLater: ""
  })

  useEffect(() => {
    if (!searchData.customer?.value) {
      getCustomerOption(searchData.customer);
    }
  }, [searchData.customer]);

  const getHeaderData = (laudryForm, isRewash) => {
    let specialInstructionString = ""
    if(searchData?.specialInstruction.length > 0){
      for(let item of searchData?.specialInstruction){
        let index = specialInstructions.findIndex(_record => _record.value === item)
        if(index !== -1){
          specialInstructionString += `${specialInstructions[index].label}, `
        }
      }
    }

    setHeaderDataDetail({
      specialInstructions: specialInstructionString,
      laundryFormName: laudryForm ? laudryForm.laundryFormName : "",
      laundryFormValue: laudryForm ? laudryForm.laundryFormValue : "",
      isRewash: isRewash ? true : false
    })
  }

  const handleSpecialInstructionsParam = () => {
    let specialInstructionPayload = ''
    if(searchData?.specialInstruction.length > 0){
      let specicalIds = []
      for(let specical of searchData?.specialInstruction){
        let index = specialInstructions.findIndex(item => item.value === specical)
        if(index !== -1){
          specicalIds.push(specialInstructions[index].id)
        }
      }

      specicalIds.sort()
      specialInstructionPayload = specicalIds.join(",")
    }

    return specialInstructionPayload
  }

  const getParamsSearch = () => {
    let specialInstructionPayload = handleSpecialInstructionsParam()

    const params = {
      customerId: searchData?.customer?.value || searchData?.customer, //customer chi nhan ID
      fromDate: searchData?.fromDate
        ? `${convertDateToDDMMYY(searchData?.fromDate)}T00:00:00.000Z`
        : undefined,
      toDate: searchData?.toDate
        ? `${convertDateToDDMMYY(searchData?.toDate)}T23:59:59.000Z`
        : undefined,
      specialInstructions: specialInstructionPayload ? specialInstructionPayload : undefined,
      productType: searchData?.productType,
    };

    return params
  }

  const handleSearchBillReport = async () => {
    if(validateSearch()){
      setLoading(true)
      const data = getParamsSearch()
      try{
        let respone = await  ReportAPI.getReportOfOrdinaryProduct(data)

        if (respone?.status === 200) { 
          await delayTimeWhenCallAPI()   
          if(respone.data.data.length === 0){
            toast.warn("Không tìm thấy kết quả")
          } 

          let newData = respone?.data.data.map(item => ({...item, productName: `${item.productName} (${item.pieceTypeName})`}))
          // let newData = respone?.data.data.forEach(item => {
          //   item.productName = `${item.productName} (${item.pieceTypeName})`
          // })
          console.log("newData",newData)
          setData(newData); 
          setLoading(false)     
        }else{
          setLoading(false)   
        }
      }catch{
        setLoading(false)
      }
    }
  }

  const onChangeSearchData = (e, fieldName, newValue) => {
    if (fieldName === "customer") {
      setSearchData({
        ...searchData,
        customer: newValue,
      });
    } else if (fieldName === "specialInstruction") {
      setSearchData({
        ...searchData,
        specialInstruction: e.target.value,
      });
    } else if (fieldName === "productType") {
      setSearchData({
        ...searchData,
        productType: e.target.value,
      });
    } else {
      setSearchData({
        ...searchData,
        [fieldName]: e,
      });
    }
  };

  useEffect(() => {
    setData([])
  }, [searchData])

  const onClearSelectedValue = (type) => {
    if (type === "productType") {
      setSearchData({
        ...searchData,
        productType: undefined,
      });
    }
  };

  const getCustomerOption = (value = "") => {
    customerAPI
      .getAllCustomer({
        codeOrName: value,
      })
      .then((res) => {
        if (res.status === 200 || res.data.data) {
          let customerList = res?.data.data.map((item) => ({
            value: item.id,
            label: `${item.code} - ${item.fullName}`,
            code: item.code,
            fullName: item.fullName,
          }));
          // let arrCustomer = [...customerOption];
          // arrCustomer?.forEach((item) => {
          //   let index = customerList?.findIndex(
          //     (item1) => item1.value === item.value
          //   );
          //   if (index === -1) {
          //     customerList.push(item);
          //   }
          // });
          setCustomerOption(customerList);
        }
      });
  };

  const permissionToDisplayExportButton = () => {
      if(data && data.length > 0){
        return true
      }
      return false
  }

  const handleExportReport = async () => {
    let params = getParamsSearch()
    setLoading(true)
    let response = await ReportAPI.exportReport(params)

    if(response.status === 200){
      let blob = new Blob([response.data], {
        type: '',
      });

      let productType = "hangthuong"
      if(searchData?.productType === "special_product"){
        productType = "hangdacbiet"
      }

      let date = dayjs(new Date()).format("DDMMYYYY")

      let fileName = `Report-${searchData?.customer?.code}-${productType}-${date}.xlsx`
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      setLoading(false)
    }else{
      setLoading(false)
    }
  }

  const hanldeCheckWhenBlurCustomer = () => {
    if(!searchData.customer?.value){
      setSearchData({
        ...searchData,
        customer: undefined
      })
    }
  }

  const validateSearch = () => {
    let errorCustomer = validateText(searchData.customer?.value, "Vui lòng chọn khách hàng")
    let errorProductType = validateText(searchData.productType, "Vui lòng chọn loại hàng")
    let errorFromDate = validateDate(searchData?.fromDate, "Từ ngày")
    let errorToDate = validateDate(searchData?.toDate, "Đến ngày")
    let errorMaxDate = validateCompareTwoDate(searchData?.fromDate, searchData?.toDate, "Từ ngày", "Đến ngày")
    let errorOneYear = validateOneYearlaterFromSelectedDate(searchData?.fromDate, searchData?.toDate, 'Từ ngày', "Đến ngày")

    setErrorSearch({
      customer: errorCustomer,
      productType: errorProductType,
      fromDate: errorFromDate,
      toDate: errorToDate,
      maxDate: errorMaxDate,
      oneYearLater: errorOneYear
    })
    
    if(errorCustomer || errorProductType || errorFromDate || errorToDate || errorOneYear || errorMaxDate){
      return false
    }

    return true
  }

  useEffect(() => {
    if(errorSearch?.customer){
      toast.error(errorSearch?.customer)
    }

    if(errorSearch?.fromDate){
      toast.error(errorSearch?.fromDate)
    }

    if(errorSearch?.toDate){
      toast.error(errorSearch?.toDate)
    }

    if(errorSearch?.productType){
      toast.error(errorSearch?.productType)
    }

    if(errorSearch?.maxDate){
      toast.error(errorSearch?.maxDate)
    }

    if(errorSearch?.oneYearLater){
      toast.error(errorSearch?.oneYearLater)
    }
  }, [errorSearch])

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <CRow>
        <CCol>
          <AutoSuggest
            options={customerOption}
            label="Khách hàng"
            name="customer"
            value={searchData?.customer}
            onChange={(e, newValue) =>
              onChangeSearchData(e, "customer", newValue)
            }  
            onInputChange={(e, newValue) =>
              onChangeSearchData(e, "customer", newValue)
            }
            onBlur={hanldeCheckWhenBlurCustomer}
          />
        </CCol>
        <CCol>
          <SelectComponent
            options={
              productTypes && productTypes.length > 0 ? productTypes : undefined
            }
            label="Loại hàng"
            name="productType"
            value={searchData?.productType}
            onChange={(e) => onChangeSearchData(e, "productType", undefined)}
            // onClear={() => onClearSelectedValue("productType")}
            isClear={false}
          />
        </CCol>
        <CCol>
          <InputDatePicker
            label="Từ ngày"
            value={searchData?.fromDate}
            onChange={(e) => onChangeSearchData(e, "fromDate", undefined)}
          />
        </CCol>
        <CCol>
          <InputDatePicker
            label="Đến ngày"
            value={searchData?.toDate}
            onChange={(e) => onChangeSearchData(e, "toDate", undefined)}
            disabled={searchData.fromDate ? false : true}
            now={searchData?.fromDate}
          />
        </CCol>
        <CCol xs={1}>
          <div className="circle">
            <IconButton
              color="primary"
              aria-label="ArrowDown"
              component="label"
              style={{ marginTop: "-3px", marginLeft: "-3px" }}
              onClick={(event) => {
                event.preventDefault();
                setVisible(!visible);
              }}
            >
              <KeyboardArrowDownIcon />
            </IconButton>
          </div>
        </CCol>

        <CCol>
          <NormalButton
            label={"Tìm kiếm"}
            icon={<SearchIcon />}
            variant="outlined"
            onClick={handleSearchBillReport}
          />
        </CCol>
      </CRow>
      <CCollapse show={visible} style={{ marginTop: "20px" }}>
        <CRow>
          <CCol>
            <MultiSelect
              options={
                specialInstructions && specialInstructions.length > 0
                  ? specialInstructions
                  : []
              }
              label="Yêu cầu"
              name="specialInstruction"
              value={searchData?.specialInstruction}
              onChange={(e) =>
                onChangeSearchData(e, "specialInstruction", undefined)
              }
            />
          </CCol>
          <CCol></CCol>
          <CCol></CCol>
          <CCol></CCol>
          <CCol xs={1}></CCol>
          <CCol></CCol>
        </CRow>
      </CCollapse>
    
      <Box mt={4}>
        <Box sx={{display: "flex", justifyContent: "flex-end"}} mb={2}>    
          {permissionToDisplayExportButton() ? 
            <NormalButton label="Xuất báo cáo" variant="contained" onClick={handleExportReport}/>
            : 
            <div />
          }    
        </Box>

        {searchData.productType == "ordinary_product" ? (
          <SummaryReportOrdinaryProductTab
            data={data}
            searchData={searchData}
            headerDataDetail={headerDataDetail}
            getHeaderData={getHeaderData}
            getParamsSearch={getParamsSearch}
          />
        ) : (
          <SummaryReportTab
            data={data}
            searchData={searchData}
            headerDataDetail={headerDataDetail}
            getHeaderData={getHeaderData}
            getParamsSearch={getParamsSearch}
          />
        )}
      </Box>
    </div>
  );
};

export default BillReportList;
