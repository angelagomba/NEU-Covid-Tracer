import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Resources(props) {
  return (
    <Svg
      width={26}
      height={26}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.75 5.417c-1.203-.38-2.524-.542-3.792-.542-2.112 0-4.387.433-5.958 1.625-1.57-1.192-3.846-1.625-5.958-1.625-2.113 0-4.388.433-5.959 1.625v15.87c0 .272.271.543.542.543.108 0 .163-.055.27-.055 1.463-.704 3.576-1.191 5.147-1.191 2.112 0 4.387.433 5.958 1.625 1.463-.921 4.117-1.625 5.958-1.625 1.788 0 3.63.325 5.146 1.137a.489.489 0 00.271.054c.27 0 .542-.27.542-.541V6.5c-.65-.487-1.355-.813-2.167-1.083zm0 14.625c-1.192-.38-2.492-.542-3.792-.542-1.841 0-4.495.704-5.958 1.625V8.667c1.463-.921 4.117-1.625 5.958-1.625 1.3 0 2.6.162 3.792.541v12.459z"
        fill="#F7F3F3"
      />
      <Path
        d="M18.958 11.375c.954 0 1.875.098 2.709.282V10.01a14.628 14.628 0 00-2.709-.26c-1.841 0-3.51.314-4.875.9v1.797c1.224-.693 2.925-1.072 4.875-1.072zM14.083 13.53v1.8c1.224-.694 2.925-1.073 4.875-1.073.954 0 1.875.097 2.709.281v-1.646a14.628 14.628 0 00-2.709-.26c-1.841 0-3.51.325-4.875.899zM18.958 15.524c-1.841 0-3.51.314-4.875.9v1.798c1.224-.694 2.925-1.073 4.875-1.073.954 0 1.875.098 2.709.282v-1.647a13.75 13.75 0 00-2.709-.26z"
        fill="#F7F3F3"
      />
    </Svg>
  )
}

export default Resources