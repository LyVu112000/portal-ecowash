import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

export const useStylesMui = makeStyles({
  root: {
    "& .MuiFormLabel-root": {
      color: "#01509B"
    },
    "& .MuiOutlinedInput-root": {
      fontSize: "0.9rem",
      // height: "2.6em" //css time picker
      // padding: "5px!important"
    },
    "& .MuiAutocomplete-root": {
      "& .MuiOutlinedInput-root": {
        // padding: "4px !important"
      },
    },
    "& .MuiFormLabel-root": {
      "& .MuiInputLabel-root": {
        // lineHeight: "1.4375em",

      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      // top: "3px"
    },
    "& .MuiInputLabel-root": {
      color: "black",
      fontSize: "0.9rem"
    },
    "& .MuiOutlinedInput-input": {
      // padding: "0px 0px 6px 14px !important",
      // marginTop: "14px",
      // boxSizing: "border-box"
    },
    "& .MuiTypography-root": {
      fontSize: "0.9rem"
    },
    "& 	.MuiAutocomplete-inputRoot": {
      // height: "3.1em"
    },
    "& .css-eov1p8-MuiFormLabel-root-MuiInputLabel-root": {
      // top: "7px !important"
    },
    "& .MuiAutocomplete-endAdornment": {
      // marginTop: "3px"
    },
    "& .css-k4qjio-MuiFormHelperText-root": {
      color: "rgb(245 19 19 / 60%)"
    },
    "& .MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select": {
      fontSize: "0.9rem",
      height: "1.4375em"
    },
    "& .css-18g55r8-MuiFormLabel-root-MuiInputLabel-root": {
      top: "-7px"
    },
    "& MuiSvgIcon-fontSizeMedium": {
      fontSize: "0.9rem",
    },
    "& .MuiInputBase-input.Mui-disabled": {
      WebkitTextFillColor: "rgba(0, 0, 0, 0.65)",
    },
    "& .MuiTabPanel-root":{
      padding: "0px !important"
    }
  }
});
