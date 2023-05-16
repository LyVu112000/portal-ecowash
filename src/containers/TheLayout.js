import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

import {ThemeProvider, createTheme} from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0179ff'
    },
    waiting: {
      main: 'rgb(249, 177, 21)',
      contrastText: '#fff'
    },
    done: {
      main: '#029e4d',
      contrastText: '#fff',
    },
    doing: {
      main: '#0094d3',
      contrastText: '#fff',
    },
    success: {
      main: '#029e4d',
    }
  },
  MuiDialogTitle: {
    styleOverrides: {
      root: {
        backgroundColor: 'red',
      },
    },
  },
});

// MuiTypography-root-MuiDialogTitle-root

const TheLayout = () => {

  return (
    <ThemeProvider theme={theme}>
      <div className="c-app c-default-layout">
        <TheSidebar />
        <div className="c-wrapper">
          <TheHeader />
          <div className="c-body">
            <TheContent />
          </div>
          {/* <TheFooter/> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default TheLayout
