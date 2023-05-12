import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const RequestToCheckProductButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Yêu cầu kiểm hàng"
                variant="contained"
                color="error"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content="Hàng về nhà máy không khớp với phiếu nhận. Yêu cầu nhân viên tại hiện trường kiểm tra lại hàng hoá"
                title={"Thông báo"}
                onSave={() => {
                    onSave()
                    onClose();
                }}
                handleCloseConfirm={onClose}
                open={open}
            />
        </>
    )
}

export default RequestToCheckProductButton