import * as React from "react"
import Svg, { Path } from "react-native-svg"

function News(props) {
  return (
    <Svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.542 4.833H8.458v18.125h12.084V4.833zM6.042 7.25H3.625v13.292h2.417V7.25zM25.375 7.25h-2.417v13.292h2.417V7.25z"
        fill="#F7F3F3"
      />
    </Svg>
  )
}

export default News
