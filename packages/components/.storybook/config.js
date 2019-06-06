import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { ThemeProvider } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import CssBaseline from '@material-ui/core/CssBaseline'

import theme from '../../theme/primary'

function loadStories() {
  const req = require.context('..', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Box
      alignItems="center"
      display="flex"
      height="100vh"
      justifyContent="center"
    >
      {storyFn()}
    </Box>
  </ThemeProvider>
))

configure(loadStories, module)
