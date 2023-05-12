import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const ReceivedtButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Tiếp nhận"
                variant="contained"
                color="success"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Phiếu nhận được tiếp nhận.`}
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

export default ReceivedtButton
