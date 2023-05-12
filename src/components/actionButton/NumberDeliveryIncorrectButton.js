import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const NumberDeliveryIncorrectButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Số giao chưa đúng"
                variant="contained"
                color="error"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng giao cho khách hàng chưa đúng. Yêu cầu kiểm tra lại số lượng giao.`}
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

export default NumberDeliveryIncorrectButton