import React from "react"
import "./button.css"
import { Link } from "gatsby"

const STYLES = ["btn--primary", "btn--outline"]
const SIZES = ["btn--medium", "btn--large"]

const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  location = "/",
  external = false,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const className = `btn ${checkButtonStyle} ${checkButtonSize}`

  if (external) {
    return (
      <a href={location} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link to={location} className={className} onClick={onClick} type={type}>
      {children}
    </Link>
  )
}

export default Button
