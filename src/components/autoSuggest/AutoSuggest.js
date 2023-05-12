import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useStylesMui } from "../../css/makeStyles";

export default function AutoSuggest({
  options,
  onInputChange,
  value,
  label,
  className,
  onChange,
  style,
  multiple = false,
  filterSelectedOptions = false,
  error = false,
  name,
  disabled = false,
  isRequired = false,
  typeDisableClearable = "search",
  onBlur
}) {
  const classes = useStylesMui();

  const handleChange = (e, newValue) => {
    if (onInputChange) {
      onInputChange(e, newValue);
    }
  };
  return (
    <Autocomplete
      disabled={disabled}
      filterSelectedOptions={filterSelectedOptions}
      multiple={multiple}
      style={style}
      size={"small"}
      className={className}
      fullWidth
      value={value}
      disableClearable
      freeSolo
      options={options.map((option) => option)}
      renderInput={(params) => (
        <TextField
          onBlur={onBlur}
          size={"small"}
          error={error}
          className={classes.root}
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            type: typeDisableClearable,
          }}
          required={isRequired}
          InputLabelProps={{
            style: {
              color: disabled ? "#B9B9B9" : "#000000"
            }
          }}
        />
      )}
      onInputChange={(e, newValue) => handleChange(e, newValue)}
      onChange={(e, newValue) => onChange(e, newValue)}
    />
  );
}
