import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {useStylesMui} from "../../css/makeStyles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AutoSuggestMultiCheckbox({label, value, className, options, onInputChange, onChange, disabled = false}) {
    const classes = useStylesMui();
    return (
        <Autocomplete
            disabled={disabled}
            onInputChange={(e, value) => onInputChange(e, value)}
            onChange={(e, value) => onChange(e, value)}
            size={"small"}
            className={className}
            value={value}
            multiple
            options={options}
            disableCloseOnSelect
            getOptionLabel={(option) => option.label}
            renderOption={(props, option, { selected }) => {
                return (
                    <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            // checked={option.selected}
                            checked={selected}
                        />
                        {option.label}
                    </li>
                )
            }
            }
            renderInput={(params) => (
                <TextField {...params} label={label} className={classes.root}/>
            )}
        />
    );
}