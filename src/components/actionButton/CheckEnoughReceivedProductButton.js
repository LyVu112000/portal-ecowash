import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const CheckEnoughReceivedProductButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Đủ hàng"
                variant="contained"
                color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng đếm tại nhà máy đã đúng với số lượng nhận.`}
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

export default CheckEnoughReceivedProductButton