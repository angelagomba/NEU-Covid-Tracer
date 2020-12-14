import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function Home(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 426.667 426.667"
      {...props}
    >
      <Path d="M213.333 32L0 224h64v170.667h106.667v-128H256v128h106.667V224h64z" />
    </Svg>
  )
}

export default Home
