import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const FinishDeliveryButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Hoàn thành"
                variant="contained"
                color="primary"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Bạn có chắc chắn muốn hoàn thành?`}
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

export default FinishDeliveryButton