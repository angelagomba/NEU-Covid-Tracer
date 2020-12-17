import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.208 12.833h-.724l-.257-.247a5.932 5.932 0 001.44-3.878 5.958 5.958 0 10-5.959 5.959c1.476 0 2.833-.541 3.878-1.44l.247.257v.724l4.584 4.574 1.365-1.365-4.574-4.584zm-5.5 0a4.12 4.12 0 01-4.125-4.125 4.12 4.12 0 014.125-4.125 4.12 4.12 0 014.125 4.125 4.12 4.12 0 01-4.125 4.125z"
        fill="#9C2C2C"
      />
    </Svg>
  )
}

export default SvgComponent