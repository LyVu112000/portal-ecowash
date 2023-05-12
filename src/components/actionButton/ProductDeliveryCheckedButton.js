import React from "react";
import NormalButton from "../normalButton/Button";
import DialogConfirm from "../dialogConfirm/DialogConfirm";

const ProductDeliveryCheckedButton = ({open, onClose, onSave}) => {
    return (
        <>
            <NormalButton
                label="Đã kiểm hàng giao"
                variant="contained"
                color="primary"
                onClick={onClose}
            ></NormalButton>
            <DialogConfirm
                content={`Số lượng giao cho khách hàng đã đúng. Phiếu giao đã sẵn sàng để đi giao.`}
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

export default ProductDeliveryCheckedButton