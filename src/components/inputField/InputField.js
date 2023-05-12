import { TextField } from "@mui/material";
import React from "react";
import { useStylesMui } from "../../css/makeStyles";

const InputField = ({
  isRequired = false,
  label,
  size = "small",
  isFullWidth = true,
  value,
  onChange,
  helperText = "",
  name,
  error = false,
  disabled = false,
  type,
  multiline,
  maxRows,
  rows,
  InputProps,
  style,
  endAdornment,
  inputProps,
  variant = "outlined",
  focused,
  width = ""
}) => {
  const classes = useStylesMui();

  return (
    <div className={width ? width : "w-100"}>
      <TextField
        InputLabelProps={{
          style: {
            color: error ? "#D32F2F" : disabled ? "#B9B9B9" : "#000000"
          }
        }}
        variant={variant}
        inputProps={inputProps}
        style={style}
        className={classes.root}
        disabled={disabled}
        type={type}
        error={error}
        required={isRequired}
        label={label}
        size={size}
        fullWidth={isFullWidth}
        name={name}
        value={value}
        onChange={onChange}
        helperText={helperText}
        multiline={multiline}
        maxRows={maxRows}
        rows={rows}
        InputProps={InputProps}
        endAdornment={endAdornment}
        focused={focused}
      />
    </div>
  );
};

export default InputField;
