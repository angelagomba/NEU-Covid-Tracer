import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function RedProfile(props) {
  return (
    <Svg
      width={67}
      height={67}
      viewBox="0 0 67 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={33.5} cy={33.5} r={33.5} fill="#C94040" />
      <Path
        d="M33.5 33.5a6.165 6.165 0 006.167-6.167 6.165 6.165 0 00-6.167-6.166 6.165 6.165 0 00-6.167 6.166A6.165 6.165 0 0033.5 33.5zm0 3.083c-4.116 0-12.333 2.066-12.333 6.167v3.083h24.666V42.75c0-4.1-8.217-6.167-12.333-6.167z"
        fill="#F7F3F3"
      />
    </Svg>
  )
}

export default RedProfile