import { toast } from "react-toastify";
import dayjs from "dayjs";

export const validateCustomerCode = (customerCode) => {
  let errorText = "";
  if (!customerCode) {
    errorText = "Vui lòng nhập mã khách hàng";
  }
  return errorText;
};
export const validateStaffCode = (customerCode) => {
  let errorText = "";
  if (!customerCode) {
    errorText = "Vui lòng nhập MSNV ";
  }
  return errorText;
};
export const validateTruckCode = (code) => {
  let errorText = "";
  if (!code) {
    errorText = "Vui lòng nhập Biển số xe ";
  }
  return errorText;
};
export const validateCustomerAccountCode = (customerCode) => {
  let errorText = "";
  if (!customerCode) {
    errorText = "Vui lòng nhập TKKH ";
  }
  return errorText;
};
export const validateCustomerUserName = (customerUserName) => {
  let errorText = "";
  if (!customerUserName) {
    errorText = "Vui lòng nhập username";
  }

  if (
    (customerUserName?.length > 0 && customerUserName?.length < 7) ||
    customerUserName?.length > 20
  ) {
    errorText = "Username tối thiểu 7 ký tự, tối đa 20 ký tự";
  }
  return errorText;
};

export const validateCustomerObject = (object) => {
  let errorText = "";

  if (!object) {
    errorText = "Vui lòng nhập tên khách hàng";
  } else {
    if (!object?.value) {
      errorText = "Khách hàng không tồn tại trong hệ thống";
    }
  }

  return errorText;
};

export const validateStaffUserName = (staffUserName) => {
  let errorText = "";
  let re = /^[a-z0-9 -]*$/;
  if (!staffUserName) {
    errorText = "Vui lòng nhập username";
  }
  if (
    (staffUserName?.length > 0 && staffUserName?.length < 7) ||
    staffUserName?.length > 20
  ) {
    errorText = "Username tối thiểu 7 ký tự, tối đa 20 ký tự";
  }
  if (!re.test(staffUserName)) {
    errorText = "Username chỉ bao gồm số và chữ cái thường";
  }
  return errorText;
};
export const validateAccountName = (accountName) => {
  let errorText = "";
  let re = /^[a-z0-9 -]*$/;
  if (!accountName) {
    errorText = "Vui lòng nhập tên tài khoản";
  }
  if (
      (accountName?.length > 0 && accountName?.length < 7) ||
      accountName?.length > 20
  ) {
    errorText = "Tên tài khoản tối thiểu 7 ký tự, tối đa 20 ký tự";
  }
  if (!re.test(accountName)) {
    errorText = "Tên tài khoản chỉ bao gồm số và chữ cái thường";
  }
  return errorText;
};
export const validateEmail = (email) => {
  let errorText = "";
  var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)+$/;
  if (!email) {
    errorText = "Vui lòng nhập email";
  } else {
    if ((!letter.test(email))  & email?.length < 100|| email?.length > 100) {
      errorText = "Email không hợp lệ";
    }
  }
  return errorText;
};

export const validateProductType = (productType) => {
  let errorText = "";
  if (!productType) {
    errorText = "Vui lòng chọn loại hàng";
  }
  return errorText;
};
export const validateRole = (role) => {
  let errorText = "";
  if (!role) {
    errorText = "Vui lòng chọn phân quyền";
  }
  return errorText;
};


export const validateCustomerName = (customerName) => {
  let errorText = "";
  if (!customerName) {
    errorText = "Vui lòng nhập tên khách hàng";
  }
  return errorText;
};
export const validateCustomerCodeName = (customerName) => {
  let errorText = ""
  if (!customerName) {
    errorText = "Vui lòng nhập tên khách hàng ";
  } else {
    if (!customerName?.value) {
      errorText = "Khách hàng không tồn tại trong hệ thống";
    }
  }
    return errorText;
  };
export const validateStaffName = (staffName) => {
  let errorText = "";
  if (!staffName) {
    errorText = "Vui lòng nhập tên nhân viên";
  }
  return errorText;
};
export const validateUserAccountName = (userAccount) => {
  let errorText = "";
  if (!userAccount) {
    errorText = "Vui lòng nhập tên người dùng";
  }
  return errorText;
};
export const validateProductGroupCode = (code) => {
  let errorText = "";
  if (!code) {
    errorText = "Vui lòng nhập mã nhóm hàng";
  }
  return errorText;
};

export const validateProductItemCode = (code) => {
  let errorText = "";
  if (!code) {
    errorText = "Vui lòng nhập mã mặt hàng";
  }
  return errorText;
};


export const validateProductGroupName = (name) => {
  let errorText = "";
  if (!name) {
    errorText = "Vui lòng nhập tên nhóm hàng";
  }
  return errorText;
};

export const validateProductGroup = (productGroup) => {
  let errorText = "";

  if (productGroup === null || productGroup === undefined) {
    return errorText;
  }

  if (productGroup?.value === undefined) {
    errorText = "Nhóm hàng không hợp lệ";
  }

  return errorText;
};

export const validatePieceType = (pieceType) => {
  let errorText = "";
  if (!pieceType) {
    errorText = "Vui lòng chọn đơn vị tính";
  }
  return errorText;
};
export const validateDepartmentCode = (code) => {
  let errorText = "";
  if (!code) {
    errorText = "Vui lòng nhập mã phòng ban";
  }
  return errorText;
};
export const validateDepartmentName = (name) => {
  let errorText = "";
  if (!name) {
    errorText = "Vui lòng nhập tên phòng ban";
  }
  return errorText;
};

export const validateProductItemName = (name) => {
  let errorText = "";
  if (!name) {
    errorText = "Vui lòng nhập tên mặt hàng";
  }
  return errorText;
};

export const validateText = (name, errMessage) => {
  let errorText = "";
  if (!name) {
    errorText = errMessage;
  }
  return errorText;
};

export const validateReceiptImage = (name, errMessage) => {
  let errorText = "";
  if (!name) {
    errorText = errMessage;
  }
  return errorText;
};

export const validateNumber = (number, message) => {
  let error = ""
  if(!number){
    error = `Vui lòng nhập ${message}`
  }else if(typeof number === "number"){
    if(Number(number) === 0){
      error = `Vui lòng nhập ${message}`
    }else if(Number(number) < 0){
      error = `${message} phải lớn hơn không`
    }
  }else{
    error = `${message} không hợp lệ!`
  }

  return error
}

export const validateDate = (date, message) => {
  let maxDate = new Date("01/01/2100")
  let minDate = new Date("01/01/1900")

  let errorText = "";
  if (!date) {
      errorText = `Vui lòng chọn ${message}`
  } else if (date instanceof Object && !date?.isValid()) {
      errorText = `${message} sai định dạng`;
  }else{
    if(new Date(date).getTime() > maxDate.getTime()){
      errorText = `${message} vượt quá ngày giới hạn`
    }

    if(new Date(date).getTime() < minDate.getTime()){
      errorText = `${message} nhỏ hơn ngày giới hạn`
    }
  }

  return errorText;
};

export const formatDateTime = (time, originalHours) => {
  let addThreeZero = time + "000";
  let convertToNumber = parseInt(addThreeZero);
  let date = new Date(convertToNumber);
  let day = date.getUTCDate();
  let month = date.getUTCMonth() + 1;
  let year = date.getUTCFullYear();
  let hours;
  if (originalHours === "originalHours") {
    hours = date.getUTCHours();
  } else {
    hours = date.getUTCHours() + 7;
  }
  let minutes = date.getUTCMinutes();

  //--------------------------------------------------------------
  if(hours === 24){
    hours = "00"
  }else if(hours > 24){
    let temp = hours - 24
    hours = 0 + temp
  }
  //--------------------------------------------------------------

  if (hours.toString().length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  if (day.toString().length < 2) {
    day = `0${day}`;
  }

  if (month.toString().length < 2) {
    month = `0${month}`;
  }

  if (originalHours === "originalHours") {
    return `${month}-${day}-${year} ${hours}:${minutes}`;
  }else if(originalHours === "originalHoursYYMMDD"){
    return `${year}-${month}-${day}`;
  } else {
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }
};

export const initialDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  if (month > 12) {
    month = 1;
  }

  if(month < 10){
    month = `0${month}`
  }
  return `${year}-${month}-${day}`;
};

export const validateContractTimeList = (listData) => {
  let errorText = "";
  for (let item of listData) {
    console.log("item", item)
    if(Object.keys(item || {}).length <= 0){
      errorText = "Vui lòng điền đầy đủ thông tin vào bảng thời gian nhận/giao";
    }else if (!item.timeDelivery || !item.timeReceived || !item.productTypeValue) {
      errorText = "Vui lòng điền đầy đủ thông tin vào bảng thời gian nhận/giao";
      break;
    }
  }
  return errorText;
};

export const validateProductList = (listData, status = "", productType = "", actiocType = "") => {
  let errorText = "";
  if (listData.length > 0) {
    for (let item of listData) {
      if (item.name === "" || item.productItem === "") {
        errorText = "Vui lòng điền đầy đủ thông tin vào bảng";
        break;
      }

      if(status === "WAITING_RANDOM_CHECK"){
        if(item.numberReceived === "" || item.numberReceived <= 0){
          errorText = "Vui lòng nhập số lượng nhận";
          break;
        }
      }

      if(status === "WAITING" && actiocType === "STAFF_RECEIVED"){
        if(item.numberReceived === "" || item.numberReceived <= 0){
          errorText = "Phiếu nhận cần có ít nhất 1 mặt hàng và số lượng lớn hơn 0!";
          break;
        }
      }

      if(status === "WASHING"){
        if(item.numberAfterProduction === "" || item.numberAfterProduction < 0){
          errorText = "Vui lòng nhập số lượng sau sản xuất";
          break;
        }
      }

      if(productType === "special_product" && status !== "WAITING" && status !== ""){
        if(!item.laundryForm){
          errorText = "Vui lòng chọn hình thức giặt ủi";
          break;
        }
      }
      
    }
  } else {
    errorText = "Vui lòng chọn danh sách mặt hàng";
  }
  return errorText;
};

export const validateWeigth = (weigth) => {
  let errorText = "";
  if(typeof weigth === "number"){
    if(weigth <= 0){
      errorText = "Bạn chưa có trọng lượng (vui lòng thêm số lần cân)";
    }
  }else{
    if(weigth?.length > 0){
      for(let item of weigth){
        if(Number(item.value) <= 0){
          errorText = "Số lần cân phải lớn hơn không."
          return errorText
        }
      }
    }
  }

  return errorText;
}

export const checkDay = (date) => {
  return dayjs(new Date(date).toLocaleDateString()).format("DD/MM/YYYY HH:mm");
};

export const convertDateToDDMMYYHHMM = (date, isSecond = false) => {
  if(isSecond){
    return dayjs(date).format("YYYY-MM-DDTHH:mm:ss");
  }
  return dayjs(date).format("YYYY-MM-DDTHH:mm");
};

export const convertDateToDDMMYY = (date) => {
  return dayjs(date).format("YYYY-MM-DD");
};

//format ISO with timezone
const toISOStringWithTimezone = (date) => {
  const tzOffset = -date.getTimezoneOffset();
  const diff = tzOffset >= 0 ? "+" : "-";
  const pad = (n) => `${Math.floor(Math.abs(n))}`.padStart(2, "0");
  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    ".000Z"
  );
};

export const formatDateParams = (date) => {
  if (date) {
    let dateValue = new Date(date);
    return !isNaN(dateValue.getFullYear())
      ? toISOStringWithTimezone(dateValue)
      : undefined;
  }
  return null;
};


export const convertDate = (date, isSecond = true) => {
  if(isSecond){
    return dayjs(date).format("DD-MM-YYYY HH:mm");
  }

  return dayjs(date).format("DD-MM-YYYY");
}

export const convertDateToMMDDYYYYFromAPI = (date, hours) => {
  if(date){
    let newDate = date.split("-")
    let day = newDate[0]
    let month = newDate[1]
    let yearAndHours = newDate[2]
    let year
    if(!hours){
      let newYear = newDate[2].split(" ")
      year = newYear[0]
    }

    if(hours){
      return `${month}-${day}-${yearAndHours}`;
    }else{
      return `${year}-${month}-${day}`;
    }
  }else{
    return date
  }
}

export const formatNumber = (number, maxIntDigits, maxDecimalDigits) => {
  if(number <= 0){
    return 0
  }

  const [integer, decimal = ''] = number.toString().split('.');

  const formattedInteger = integer.length > maxIntDigits ? integer.slice(0, maxIntDigits) : integer;

  const formattedDecimal = decimal ? removeLastZero(decimal.slice(0, maxDecimalDigits)) : '';

  const result = formattedDecimal ? `${formattedInteger}.${formattedDecimal}` : formattedInteger;

  return Number(result);
}

const removeLastZero = (number) => {
  let newNumber = number.split("")
  if(newNumber[number.length-1] === "0"){
    newNumber.pop()
  }

  return newNumber.join('')
}

export const validateCompareTwoDate = (startDate, endDate, startDateMessage = "", endDateMessage = "") => {
  let errorMessage = ""
  if(endDate){
    if(new Date(startDate).getTime() > new Date(endDate).getTime()){
      errorMessage = `Mốc thời gian ${endDateMessage} phải lớn hơn ${startDateMessage}`
    }
  }

  return errorMessage
}

export const randomId = () => {
  let date = convertDateToDDMMYYHHMM(new Date(), true)
  let newDate = date.replaceAll(":", "").replaceAll("-", "")
  return newDate
}

export const validateOneYearlaterFromSelectedDate = (selectedDate, maxDate, firstMessage, secondMessage) => {
  let error = ""
  if(selectedDate && maxDate){
    let newSelectedDate = new Date(selectedDate)
    let newMaxDate = new Date(maxDate)
    //tính khoảng cách trong khoảng 1n vd 03/05/2022 - 03/05/2024
    // newSelectedDate.setFullYear(newSelectedDate.getFullYear() + 1)

    if(newMaxDate.getFullYear() > newSelectedDate.getFullYear()){
      error = `Khoảng cách giữa ${firstMessage} và ${secondMessage} phải trong khoảng thời gian 1 năm`
    }
  }

  return error
}

export const delayTimeWhenCallAPI = () => {
  return new Promise(resolve => setTimeout(resolve, 200));
}