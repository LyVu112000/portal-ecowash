import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";
const DebtClosingButton = ({onClose, open, onSave}) => {
    return(
        <>
            <NormalButton
                label="Chốt công nợ"
                variant="contained"
                color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng còn lại chưa được giao trên phiếu sẽ bù tiền chi khách.`}
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

export default DebtClosingButton