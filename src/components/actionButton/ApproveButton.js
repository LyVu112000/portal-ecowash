import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const ApproveButton = ({
  onOpenApproveDialog,
  onApprove,
  isOpenApproveDialog,
}) => {
  return (
    <>
      <NormalButton
        label="Duyệt"
        variant="outlined"
        onClick={onOpenApproveDialog}
      ></NormalButton>
      <DialogConfirm
        content={`Bạn có chắc chắn muốn duyệt?`}
        title={"Thông báo"}
        onSave={() => {
          onApprove();
          onOpenApproveDialog();
        }}
        handleCloseConfirm={onOpenApproveDialog}
        open={isOpenApproveDialog}
      />
    </>
  );
};

export default ApproveButton;
