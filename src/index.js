import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    createMuiTheme,
    MuiThemeProvider
} from '@material-ui/core/styles'

import { orange } from '@material-ui/core/colors'

const theme = createMuiTheme({
    palette: {
        primary: orange
    }
})

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
