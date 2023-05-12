import React, { useState, forwardRef, useImperativeHandle } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import NormalButton from '../normalButton/Button';


const FilterModel = forwardRef((props, ref) => {
  const [show, setShow] = useState(false)

  useImperativeHandle(ref, () => ({
    showFilterModel,
    closeFilter
  }))

  const showFilterModel = (e) => {
    setShow(!show)
  }

  const closeFilter = () => {
    setShow(false)
  }

  return (
    <section 
      style={{width: props.width}}
      className={`filter-model ${show ? "show" : ""}`} 
      onClick={(e) => {
        e.preventDefault()

        if (e.target === e.currentTarget) {
          showFilterModel()
        }
      }}
    >
      <div className='filter-model-content'>
        {props.children}
      </div>
      <div className='filter-model-footer'>
        <NormalButton
          label="Đặt lại"
          variant="outlined"
          color="error"
          onClick={props.resetFilterSearch}
        />
        <NormalButton
          label="Lọc"
          variant="contained"
          className={` bg-button`}
          onClick={() => {
            props.filter()
            showFilterModel()
          }}
        />
      </div>

    </section>
  )
})

export default FilterModel