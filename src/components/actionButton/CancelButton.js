import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const CancelButton = ({onOpenCancelDialog, onCancel, isOpenCancelDialog}) => {
    return(
        <>
            <NormalButton
                label="Hủy"
                variant="outlined"
                onClick={onOpenCancelDialog}
            ></NormalButton>
            <DialogConfirm
                content={`Bạn có chắc chắn muốn hủy?`}
                title={"Thông báo"}
                onSave={() => {
                    onCancel()
                    onOpenCancelDialog();
                }}
                handleCloseConfirm={onOpenCancelDialog}
                open={isOpenCancelDialog}
            />
        </>
    )
}

export default CancelButton