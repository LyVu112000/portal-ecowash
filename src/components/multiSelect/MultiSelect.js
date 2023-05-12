import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import {useStylesMui} from "../../css/makeStyles";
import {useEffect} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const MultiSelect = ({options, label, name, value, onChange, disabled = false}) => {
    const classes = useStylesMui();
    const [valueData, setValueData] = React.useState([]);


    useEffect(() => {
        if(value){
            setValueData(value)
        }
    }, [value])

    const renderValue = (selectedValue) => {
        let labelValue = []
        options
            .filter(item => selectedValue.includes(item.value))
            .map(item => labelValue.push(item.label))

        return labelValue.join(", ")
    }

    return (
        <div>
            <FormControl size="small" fullWidth>
                <InputLabel sx={{ fontSize: "0.9rem", color: "#000" }}>{label}</InputLabel>
                <Select
                    disabled={disabled}
                    multiple
                    value={valueData}
                    onChange={onChange}
                    input={<OutlinedInput label={label} />}
                    renderValue={(selected) => renderValue(selected)}
                    MenuProps={MenuProps}
                    sx={{height: "2.35rem", fontSize: "0.9rem"}}
                    className={classes.root}
                    name={name}
                >
                    {options.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                            <Checkbox checked={valueData.indexOf(item.value) > -1} />
                            <ListItemText primary={item.label} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default MultiSelect