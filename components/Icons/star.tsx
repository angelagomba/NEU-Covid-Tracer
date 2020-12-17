import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Star(props) {
  return (
    <Svg
      width={26}
      height={24}
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13 0l2.919 8.983h9.445l-7.642 5.551 2.92 8.983L13 17.966l-7.641 5.551 2.918-8.983-7.64-5.551h9.444L13 0z"
        fill="#9C2C2C"
      />
    </Svg>
  )
}

export default Star