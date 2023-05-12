import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import NormalButton from "../normalButton/Button";
import { useStylesMui } from "../../css/makeStyles";
import { Backdrop, CircularProgress, DialogContentText } from "@mui/material";
import DialogConfirm from "../dialogConfirm/DialogConfirm";
import InputField from "../inputField/InputField";
import ApproveButton from "../actionButton/ApproveButton";
import CancelButton from "../actionButton/CancelButton";
import LockAndUnLockButton from "../actionButton/LockAndUnLockButton";
import CancelReceivedReceiptButton from "../actionButton/CancelReceivedReceiptButton";
import RequestToCheckProductButton from "../actionButton/RequestToCheckProductButton";
import ReceivedProductButton from "../actionButton/ReceivedProductButton";
import { useEffect, useState } from "react";
import CheckEnoughReceivedProductButton from "../actionButton/CheckEnoughReceivedProductButton";
import PackingConfirmationButton from "../actionButton/PackingConfirmationButton";
import DebtClosingButton from "../actionButton/DebtClosingButton";
import ProductDeliveryCheckedButton from "../actionButton/ProductDeliveryCheckedButton";
import NumberDeliveryIncorrectButton from "../actionButton/NumberDeliveryIncorrectButton";
import FinishDeliveryButton from "../actionButton/FinishDeliveryButton";
import ReceivedButton from "../actionButton/ReceivedButton";

export default function DialogDetail({
  title,
  children,
  handleClose,
  open,
  maxWidth = "md",
  isChecked = false,
  isReChecked = false,
  isReceived = false,
  onReceived,
  isActive = false,
  onActive,
  onDeActive,
  isResetPassword = false,
  isCopy = false,
  onCopy,
  onSave,
  isSave = true,
  status,
  isCancel = false,
  onCancel,
  isApprove = false,
  onApprove,
  approve,
  reject,
  isCancelReceivedReceipt = false,
  onCancelReceivedReceipt,
  isReceivedProduct = false,
  onReceivedProduct,
  isRequestToCheckProduct = false,
  onRequestToCheckProduct,
  isCheckEnoughReceivedProduct = false,
  onCheckEnoughReceivedProduct,
  isPackingConfirmation,
  onPackingConfirmation,
  isConfirmNumberReceivedReceiptError = false,
  onOpenConfirmNumberReceivedReceiptError,
  loading = false,
  onDebtClosing,
  isDebtClosing = false,
  customAction = "",
  onOpenCancelReceiptConfirmDialog,
  isCancelReceivedWithMessage = false,
  isProductDeliveryChecked = false,
  onProductDeliveryChecked,
  isNumberDeliveryIncorrect = false,
  onNumberDeliveryIncorrect,
  isFinishDelivery = false,
  onFinishDelivery,
  isConfirmNoErrorPopup = false,
  onConfirmNoErrorPopup,
  isExtend,
  onExtend
}) {
  const classes = useStylesMui();
  const [isOpenDialogConfirm, setIsOpenDialogConfirm] = React.useState(false);
  const [isOpenCancelDialog, setIsOpenCancelDialog] = React.useState(false);
  const [isOpenApproveDialog, setIsOpenApproveDialog] = React.useState(false);
  const [isOpenCancelReceivedReceipt, setOpenCancelReceivedReceipt] =
    React.useState(false);
  const [isOpenReceivedProduct, setOpenReceivedProduct] = React.useState(false);
  const [isOpenReceived, setOpenReceived] = React.useState(false);
  const [isOpenRequestToCheckProduct, setOpenRequestToCheckProduct] =
    React.useState(false);
  const [isOpenCheckEnoughReceivedProduct, setOpenCheckEnoughReceivedProduct] =
    useState(false);
  const [isOpenPackingConfirmation, setOpenPackingConfirmation] =
    useState(false);
  const [isOpenDebtClosing, setOpenDebtClosing] = useState(false);
  const [
    isOpenProductDeliveryCheckedConfirm,
    setOpenProductDeliveryCheckedConfirm,
  ] = React.useState(false);
  const [
    isOpenNumberDeliveryIncorrectConfirm,
    setOpenNumberDeliveryIncorrectConfirm,
  ] = React.useState(false);
  const [isFinishDeliveryConfirm, setFinishDeliveryConfirm] =
    React.useState(false);

  const onOpenDebtClosing = () => {
    setOpenDebtClosing(!isOpenDebtClosing);
  };
  const onOpenPackingConfirmation = () => {
    setOpenPackingConfirmation(!isOpenPackingConfirmation);
  };
  const onOpenCheckEnoughReceivedProduct = () => {
    setOpenCheckEnoughReceivedProduct(!isOpenCheckEnoughReceivedProduct);
  };

  const onOpenRequestToCheckProduct = () => {
    setOpenRequestToCheckProduct(!isOpenRequestToCheckProduct);
  };

  const onOpenReceivedProduct = () => {
    setOpenReceivedProduct(!isOpenReceivedProduct);
  };

  const onOpenReceived = () => {
    setOpenReceived(!isOpenReceived);
  };

  const onOpenCancelReceivedReceipt = () => {
    setOpenCancelReceivedReceipt(!isOpenCancelReceivedReceipt);
  };
  const onOpenDialogConfirm = () => {
    setIsOpenDialogConfirm(!isOpenDialogConfirm);
  };

  const onOpenCancelDialog = () => {
    setIsOpenCancelDialog(!isOpenCancelDialog);
  };

  const onOpenApproveDialog = () => {
    setIsOpenApproveDialog(!isOpenApproveDialog);
  };

  const onOpenProductDeliveryCheck = () => {
    setOpenProductDeliveryCheckedConfirm(!isOpenProductDeliveryCheckedConfirm);
  };

  const onOpenNumberDeliveryIncorrect = () => {
    setOpenNumberDeliveryIncorrectConfirm(
      !isOpenNumberDeliveryIncorrectConfirm
    );
  };
  const onFinishDeliveryConfirm = () => {
    setFinishDeliveryConfirm(!isFinishDeliveryConfirm);
  };

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={maxWidth}
        open={open}
        PaperProps={{ className: classes.dialogPaper }}
      >
        <DialogTitle
          sx={{
            height: "36px",
            lineHeight: "0.2",
            fontSize: "1.2rem",
            marginLeft: "-15px",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent className={classes.dialogPaper}>
          <DialogContentText>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <div style={{ margin: "15px" }}>{children}</div>
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {isActive ? (
                approve && approve !== "PENDING" && approve !== "WAITING" ? (
                  ""
                ) : (
                  <LockAndUnLockButton
                    status={status}
                    onOpenDialogConfirm={onOpenDialogConfirm}
                    onDeActive={onDeActive}
                    onActive={onActive}
                    isOpenDialogConfirm={isOpenDialogConfirm}
                  />
                )
              ) : (
                ""
              )}
              {isConfirmNoErrorPopup && (
                <NormalButton
                  label="Đủ hàng"
                  variant="outlined"
                  onClick={onConfirmNoErrorPopup}
                ></NormalButton>
              )}
              {isResetPassword && (
                <NormalButton
                  label="Cấp lại mật khẩu"
                  variant="outlined"
                  // onClick={isCloseDialogConfirmPassword}
                ></NormalButton>
              )}

              {isChecked && (
                <NormalButton
                  label="Đã kiểm hàng"
                  variant="outlined"
                  color="success"
                ></NormalButton>
              )}

              {isReChecked && (
                <NormalButton
                  label="NVHT kiểm lại hàng"
                  variant="outlined"
                  color="error"
                ></NormalButton>
              )}

              {isCancel && (
                <CancelButton
                  onOpenCancelDialog={onOpenCancelDialog}
                  onCancel={onCancel}
                  isOpenCancelDialog={isOpenCancelDialog}
                />
              )}

              {isApprove &&
                (approve === "WAITING" || approve === "PENDING") && (
                  <ApproveButton
                    onOpenApproveDialog={onOpenApproveDialog}
                    onApprove={onApprove}
                    isOpenApproveDialog={isOpenApproveDialog}
                  />
                )}

              {isCancelReceivedReceipt &&
                (isCancelReceivedWithMessage ? (
                  <NormalButton
                    onClick={onOpenCancelReceiptConfirmDialog}
                    label="Hủy phiếu"
                    variant="contained"
                  ></NormalButton>
                ) : (
                  <CancelReceivedReceiptButton
                    onClose={onOpenCancelReceivedReceipt}
                    open={isOpenCancelReceivedReceipt}
                    onSave={onCancelReceivedReceipt}
                  />
                ))}

              {isRequestToCheckProduct && (
                <RequestToCheckProductButton
                  open={isOpenRequestToCheckProduct}
                  onClose={onOpenRequestToCheckProduct}
                  onSave={onRequestToCheckProduct}
                />
              )}

              {isReceived && (
                <ReceivedButton
                  open={isOpenReceived}
                  onClose={onOpenReceived}
                  onSave={onReceived}
                />
              )}

              {isReceivedProduct && (
                <ReceivedProductButton
                  open={isOpenReceivedProduct}
                  onClose={onOpenReceivedProduct}
                  onSave={onReceivedProduct}
                />
              )}

              {isCheckEnoughReceivedProduct && (
                <CheckEnoughReceivedProductButton
                  open={isOpenCheckEnoughReceivedProduct}
                  onClose={onOpenCheckEnoughReceivedProduct}
                  onSave={onCheckEnoughReceivedProduct}
                />
              )}

              {isPackingConfirmation && (
                <PackingConfirmationButton
                  open={isOpenPackingConfirmation}
                  onClose={onOpenPackingConfirmation}
                  onSave={onPackingConfirmation}
                />
              )}

              {isConfirmNumberReceivedReceiptError && (
                <NormalButton
                  onClick={onOpenConfirmNumberReceivedReceiptError}
                  label="Xác nhận đúng số lượng nhận"
                  variant="contained"
                ></NormalButton>
              )}

              {isDebtClosing && (
                <DebtClosingButton
                  open={isOpenDebtClosing}
                  onSave={onDebtClosing}
                  onClose={onOpenDebtClosing}
                />
              )}
              {isNumberDeliveryIncorrect && (
                <NumberDeliveryIncorrectButton
                  open={isOpenNumberDeliveryIncorrectConfirm}
                  onClose={onOpenNumberDeliveryIncorrect}
                  onSave={onNumberDeliveryIncorrect}
                />
              )}
              {isProductDeliveryChecked && (
                <ProductDeliveryCheckedButton
                  open={isOpenProductDeliveryCheckedConfirm}
                  onClose={onOpenProductDeliveryCheck}
                  onSave={onProductDeliveryChecked}
                />
              )}

              {isFinishDelivery && (
                <FinishDeliveryButton
                  open={isFinishDeliveryConfirm}
                  onClose={onFinishDeliveryConfirm}
                  onSave={onFinishDelivery}
                />
              )}

              {customAction}
            </div>
            <div>
              {isExtend &&(  <NormalButton
                variant="contained"
                label={"Gia hạn"}
                onClick={onExtend }
              ></NormalButton>)}
              <NormalButton
                onClick={handleClose}
                label="Đóng"
                variant="contained"
              ></NormalButton>
              {isCopy && (
                <NormalButton
                  onClick={onCopy}
                  label="Sao Chép"
                  variant="contained"
                ></NormalButton>
              )}
              {isSave && (
                <NormalButton
                  label="Lưu"
                  variant="contained"
                  onClick={onSave}
                  loading={loading}
                ></NormalButton>
              )}
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
