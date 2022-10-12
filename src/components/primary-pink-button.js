import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './primary-pink-button.css'

const PrimaryPinkButton = (props) => {
  return (
    <div className="primary-pink-button-container">
      <Link
        to="/coming-soon"
        className="primary-pink-button-navlink button buttonSmall"
      >
        {props.button}
      </Link>
    </div>
  )
}

PrimaryPinkButton.defaultProps = {
  button: 'Coming Soon',
}

PrimaryPinkButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryPinkButton
