import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ClearIcon from '@mui/icons-material/Clear';
import { useStylesMui } from "../../css/makeStyles";

export default function SelectComponent({
  label,
  options,
  value,
  isClear = true,
  onChange,
  name,
  error,
  disabled = false,
  onClear
}) {
  const classes = useStylesMui();
  const [valueData, setValueData] = React.useState("");

  React.useEffect(() => {
    setValueData(value);
  }, [value]);

  const clearData = () => {
    if(onClear){
      onClear()
    }
  }

  return (
    <FormControl fullWidth size={"small"} error={error} disabled={disabled} sx={{position: "relative"}}>
      <InputLabel
        sx={{ fontSize: "0.9rem", color: "#000" }}
        id="demo-simple-select-label"
      >
        {label}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={valueData}
        label={label}
        onChange={onChange}
        name={name}
        className={classes.root}
        sx={{height: "2.35rem", fontSize: "0.9rem"}}
        // sx={{ fontSize: "0.9rem", marginTop: "5px" }}
      >
        {options &&
          options.map((option) => (
            <MenuItem value={option.value}>
              {option.name || option.label}
            </MenuItem>
          ))}
      </Select>
      {valueData && isClear && 
        <div style={{position: "absolute", top: 6, right: 21, cursor: "pointer", opacity: 0.5}} onClick={clearData}>
          <ClearIcon />
        </div>
      }
    </FormControl>
  );
}
