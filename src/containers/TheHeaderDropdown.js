import React, { useEffect, useState } from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { logout } from "src/service/login/login";
import DialogConfirm from "src/components/dialogConfirm/DialogConfirm";
import InputField from "src/components/inputField/InputField";
import { StaffAPI } from "src/service/staff/Staff";
import { toast } from "react-toastify";
import { validateText } from "src/common/FuncCommon";
const TheHeaderDropdown = () => {
  const [openDialogConfirmPassword, setOpenDialogConfirmPassword] =
    useState(false);
  const isCloseDialogConfirmPassword = (value) => {
    setOpenDialogConfirmPassword(value);
  };
  const [resetPassword, setResetPassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword1: "",
  });
  const [errorResetPassword, setErrorResetPassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword1: "",
  });
  const isValidate = () => {
    let errorOldPassword = validateText(
      resetPassword?.oldPassword,
      "Vui lòng nhập mật khẩu cũ"
    );
    let errorNewPassword = validateText(
      resetPassword?.newPassword,
      "Vui lòng nhập mật khẩu mới"
    );
    let errorNewPassword1 = validateText(
      resetPassword?.newPassword1,
      "Vui lòng xác nhập lại mật khẩu"
    );
    if (
      errorOldPassword !== "" ||
      errorNewPassword !== "" ||
      errorNewPassword1
    ) {
      setErrorResetPassword({
        oldPassword: errorNewPassword,
        newPassword: errorOldPassword,
        newPassword1: errorNewPassword1,
      });
      return false;
    } else {
      setErrorResetPassword({
        oldPassword: "",
        newPassword: "",
        newPassword1: "",
      });
      return true;
    }
  };
  useEffect(() => {
    if (errorResetPassword?.oldPassword !== "") {
      toast.error(errorResetPassword?.oldPassword);
    }

    if (errorResetPassword?.newPassword !== "") {
      toast.error(errorResetPassword?.newPassword);
    }

    if (errorResetPassword?.newPassword1 !== "") {
      toast.error(errorResetPassword?.newPassword1);
    }
  }, [errorResetPassword]);
  const handelResetPassWord = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setResetPassword({
      ...resetPassword,
      [name]: value,
    });
  };
  const handleOnSave = () => {
    const data = { ...resetPassword };
    delete data["newPassword1"];
    if (isValidate()) {
      if (resetPassword.newPassword === resetPassword.newPassword1) {
        const id = JSON.parse(localStorage.getItem("user")).id;
        return StaffAPI.changePassword(id, data).then((res) => {
          if (res.data.code === 2000) {
            toast.success("Thay Đổi Thành Công");
          } else {
            toast.error(res.data.message);
          }
        });
      }
      toast.error("Vui lòng nhập mật khẩu 2 lần để xác nhận");
    }
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={
              // JSON.parse(localStorage.getItem("user")).avatar
              //   ? JSON.parse(localStorage.getItem("user")).avatar
              //   :
              "https://vnn-imgs-f.vgcloud.vn/2020/01/11/18/dieu-gi-se-xay-ra-neu-trai-dat-hinh-vuong.jpg"
            }
            className="c-avatar-img"
            alt=""
          />
        </div>
        <CLabel className="mb-0">
          {JSON.parse(localStorage.getItem("user"))?.fullName}
        </CLabel>
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItem onClick={isCloseDialogConfirmPassword}>
          Đổi mật Khẩu
        </CDropdownItem>
        <CDropdownItem onClick={logout}>Đăng Xuất</CDropdownItem>
      </CDropdownMenu>
      {openDialogConfirmPassword && (
        <DialogConfirm
          title="Đổi Mật Khẩu"
          onSave={() => {
            handleOnSave();

            // isCloseDialogConfirmPassword(false);
          }}
          handleCloseConfirm={() => {
            isCloseDialogConfirmPassword(false);
          }}
          open={openDialogConfirmPassword}
          isChildren={true}
        >
          <InputField
            className="mg--8"
            label={"Mật khẩu Cũ"}
            name="oldPassword"
            onChange={handelResetPassWord}
            error={errorResetPassword?.oldPassword ? true : false}
            type="password"
          />
          <InputField
            style={{ marginTop: "20px" }}
            label={"Mật khẩu Mới"}
            name="newPassword"
            onChange={handelResetPassWord}
            error={errorResetPassword?.newPassword ? true : false}
            type="password"
          />
          <InputField
            style={{ marginTop: "20px" }}
            label={"Nhập Lại Mật khẩu"}
            name="newPassword1"
            onChange={handelResetPassWord}
            error={errorResetPassword?.newPassword1 ? true : false}
            type="password"
          />
        </DialogConfirm>
      )}
    </CDropdown>
  );
};

export default TheHeaderDropdown;
