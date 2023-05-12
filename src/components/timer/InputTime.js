import React from "react";
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import {FormGroup} from "@mui/material";
import {useStylesMui} from "../../css/makeStyles";
import FormControl from "@mui/material/FormControl";
import "../../css/custom.css"
const InputTime = ({disabled=false, value, onChange, label, minutesStep}) => {
    const classes = useStylesMui();
    return (
      <FormControl size="small">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            minutesStep={minutesStep}
            disabled={disabled}
            className={classes.root}
            label={label}
            value={value}
            onChange={onChange}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                InputLabelProps={{
                  style: {
                    color: disabled ? "#B9B9B9" : "#000000",
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
      </FormControl>
    );
}

export default InputTime