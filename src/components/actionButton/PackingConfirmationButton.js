import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const PackingConfirmationButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Xác nhận đã đóng gói"
                variant="contained"
                color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng sau sản xuất đã đúng với số lượng nhận.`}
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

export default PackingConfirmationButton