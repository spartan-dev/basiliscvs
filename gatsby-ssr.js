import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="fontawesome"
      src="https://kit.fontawesome.com/8b2ab9f0eb.js"
      crossOrigin="anonymous"
      defer={true}
    />,
  ])
}
