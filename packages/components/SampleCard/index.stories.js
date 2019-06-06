import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import SampleCard from '.'

const stories = storiesOf('Sample Components/PlayerCard', module)
stories.addDecorator(withKnobs)

stories.add('default', () => {
  const bio = text(
    'bio',
    'Chili Davis was a designated hitter for the California Angels and later became a hitting coach for the Oakland Athletics as well as some other teams. He did some good things sometimes.',
  )
  const img = text(
    'img',
    'http://bioproj.sabr.org/bp_ftp/images5/DavisChili.jpg',
  )
  const name = text('name', 'Chili Davis')
  const position = text('position', 'Designated Hitter (DH)')
  const team = text('team', 'Los Angeles Angels of Anahiem')

  return (
    <SampleCard
      bio={bio}
      img={img}
      name={name}
      position={position}
      team={team}
    />
  )
})
