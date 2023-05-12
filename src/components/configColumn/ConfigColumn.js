import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import NormalButton from '../normalButton/Button';


const ConfigColumn = forwardRef((props, ref) => {
    const [show, setShow] = useState(false)
  
    useImperativeHandle(ref, () => ({
        showConfigColumns,
        // closeConfigColumns
    }))
  
    const showConfigColumns = (e) => {
      setShow(!show)
    }
  
    // const closeConfigColumns = () => {
    //   setShow(false)
    // }
  
    return (
      <div className={`dropdownShowHide-contentShowHide ${show ? "show" : ""}`}>
        {props.columns.map((column) => (
          <div>
            <label key={column?.id}>
              <input
                className="normal"
                type="checkbox"
                checked={!props.hiddenColumns.includes(column?.id)}
                onChange={() => props.handleChangeConfigColumns(column?.id)}
              />
              {column?.Header}
            </label>
          </div>
        ))}

        {/* <NormalButton 
            label="Đóng"
            onClick={showConfigColumns}
        /> */}
      </div>
    );
  })

export default ConfigColumn