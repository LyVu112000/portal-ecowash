import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const LockAndUnLockButton = ({status, onOpenDialogConfirm, onDeActive, onActive, isOpenDialogConfirm }) => {
    return(
        <>
            <NormalButton
                label={status ? "Khóa" : "Mở Khóa"}
                variant="outlined"
                onClick={() => {
                    onOpenDialogConfirm();
                }}
            ></NormalButton>
            <DialogConfirm
                content={`Bạn có chắc chắn muốn ${
                    status ? "khóa" : "mở khóa"
                } không?`}
                title={status ? "Khóa" : "Mở Khóa"}
                onSave={() => {
                    status ? onDeActive() : onActive();
                    onOpenDialogConfirm();
                }}
                handleCloseConfirm={onOpenDialogConfirm}
                open={isOpenDialogConfirm}
            />
        </>
    )
}

export default LockAndUnLockButton