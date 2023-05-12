import React, {useState} from "react";
import {CButton} from "@coreui/react";

export const addRowsComponent = (translationKeys = {}) =>
    // eslint-disable-next-line react/display-name
    ({addRows}) => {
        var _a, _b;
        const [value, setValue] = useState(1);
        const [rawValue, setRawValue] = useState(String(value));
        return (
            <div className='dsg-add-row'>
                <CButton color="success" variant="outline"
                         style={{
                             marginLeft: "auto",
                             marginRight: 0
                         }}
                         onClick={() => {
                             addRows(value)
                         }}>Thêm</CButton>
            </div>
        )
    };

export const AddRows = addRowsComponent()