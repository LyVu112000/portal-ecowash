import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";
const CancelReceivedReceiptButton = ({onClose, open, onSave}) => {
    return(
        <>
            <NormalButton
                label="Hủy phiếu"
                variant="contained"
                // color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Bạn có chắc chắn muốn hủy phiếu không?`}
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

export default CancelReceivedReceiptButton