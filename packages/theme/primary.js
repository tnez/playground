import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import blueGrey from '@material-ui/core/colors/blueGrey'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: blue.A400,
    },
  },
})

export default theme
