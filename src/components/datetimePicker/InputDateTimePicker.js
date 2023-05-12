import * as React from 'react';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import FormControl from "@mui/material/FormControl";
import {useStylesMui} from "../../css/makeStyles";
import "../../css/custom.css"


export default function InputDateTimePicker({label, value, onChange, disabled = false}) {
    const classes = useStylesMui();

    return (
      <FormControl sx={{ width: "100%" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            disabled={disabled}
            className={classes.root}
            label={label}
            value={value}
            onChange={onChange}
            inputFormat="DD/MM/YYYY HH:mm"
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
