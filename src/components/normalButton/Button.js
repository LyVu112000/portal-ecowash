import * as React from 'react';
import {Button} from '@mui/material'
import './Button.css'
import {useStylesMui} from "../../css/makeStyles";
export default function NormalButton({label, sx, icon, variant="outlined", onClick, color, size, loading = false}) {
  const classes = useStylesMui();

  return (
      <Button
          className={classes.root}
          startIcon={icon}
          style={{textTransform: 'none', marginRight: "8px"}}
          variant={variant}
          onClick={onClick}
          color={color}
          size={size}
          sx={sx}
          loading={loading}
          disabled={loading}
      >
        {label}
      </Button>
  );
}