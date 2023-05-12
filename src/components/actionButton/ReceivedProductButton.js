import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const ReceivedProductButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Đã cân hàng"
                variant="contained"
                color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng kiểm tra tại xưởng đã đúng. Phiếu nhận được tiếp nhận.`}
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

export default ReceivedProductButton