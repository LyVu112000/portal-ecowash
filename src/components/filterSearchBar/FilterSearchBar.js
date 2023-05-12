import { Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React from 'react'

const FilterSearchBar = ({searchData, deleleteSearchFilter}) => {
  return (
    <div className='filter-searchBar-container'>
        {searchData.map(item => (
            <Box className='filter-searchBar-item'>
                <p>{item.label}</p>: <span className='value-search'>{item.searchValue}</span>
                <CloseIcon 
                  className='filter-searchBar-close'
                  onClick={() => deleleteSearchFilter(item)}
                />
            </Box>
        ))}
    </div>
  )
}

export default FilterSearchBar