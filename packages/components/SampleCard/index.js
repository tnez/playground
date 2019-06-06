import React from 'react'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  divider: {
    margin: theme.spacing(2, 0),
    opacity: 0.5,
  },
  img: {
    width: '120%',
  },
  imgSection: {
    alignItems: 'center',
    borderRadius: '50%',
    display: 'flex',
    height: 120,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 120,
  },
  root: {
    maxWidth: 560,
    minWidth: 320,
    padding: theme.spacing(3),
    textAlign: 'left',
  },
}))

/**
 * Player Card
 *
 * @description A component repsenting a card for a sportsball player that we
 * are using to demonstrate storybook functionality and interaction.
 *
 * @param {object} props
 * @param {string} props.bio - A blurb of background on the player
 * @param {string} props.img - URL to a headshot of the player
 * @param {string} props.name - The name of the player.
 * @param {string} props.position - The position(s) the player plays.
 * @param {string} props.team - The team for which the player plays.
 */
export default function SampleCard(props) {
  const { bio, img, name, position, team } = props
  const classes = useStyles()

  return (
    <Card className={classes.root} elevation={8}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h6">{position}</Typography>
          <Typography variant="h6">{team}</Typography>
        </Box>
        <Box className={classes.imgSection}>
          <img className={classes.img} alt="your-face" src={img} />
        </Box>
      </Box>
      <hr className={classes.divider} />
      <Box className={classes.bio}>
        <Typography variant="body1">{bio}</Typography>
      </Box>
    </Card>
  )
}
