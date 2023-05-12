import * as React from 'react';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControl } from '@mui/material';
import "../../css/custom.css"
import {useStylesMui} from "../../css/makeStyles";

export default function InputDatePicker({
    value, 
    onChange, 
    label, 
    name, 
    disabled = false, 
    now
}) {
    const classes = useStylesMui();
    const [maxDate, setMaxDate] = React.useState(undefined)
    const [minDate, setMinDate] = React.useState(undefined)

    // const addYears = (date, years) => {
    //     date.setFullYear(date.getFullYear() + years);
    //     return date;
    // }

    // React.useEffect(() => {
    //     if(now){
    //         let fromDate = new Date(now)
    //         let maxDate = addYears(fromDate, 0)
    //         setMaxDate(maxDate)
    //         // setMinDate(fromDate)
    //     }
    // }, [now])

    return (
        <FormControl sx={{width: "100%"}}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    // minDate={minDate}
                    maxDate={maxDate}
                    name={name}
                    className={classes.root}
                    label={label}
                    value={value}
                    onChange={onChange}
                    inputFormat="DD/MM/YYYY"
                    disabled={disabled}
                    renderInput={(params) =>
                        <TextField
                            size="small"
                            {...params}
                        />
                    }
                />
            </LocalizationProvider>
        </FormControl>
    );
}

