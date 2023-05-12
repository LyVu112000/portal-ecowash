import React from 'react'
import {CImg} from "@coreui/react";

const DeleteRow = ({deleteRow, rowIndex}) => {

    // console.log("rowIndex",rowIndex)
    return(
        <CImg
            src="/delete-button.png"
            style={{height: "20px", width: "20px", marginLeft: "8px", cursor: "pointer"}}
            onClick={() => {
                deleteRow()
            }}
        />
    )
}

export default DeleteRow