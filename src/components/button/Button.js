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
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <>
      {external ? (
        <a href={location} target="_blank">
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            onClick={onClick}
          >
            {children}
          </button>
        </a>
      ) : (
        <Link to={location} className="btn-mobile">
          <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
            onClick={onClick}
          >
            {children}
          </button>
        </Link>
      )}
    </>
  )
}

export default Button
