import React from 'react'
import PropTypes from 'prop-types'
import style from './MemeThumbnail.module.css'

const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail"></div>
  )
}

MemeThumbnail.propTypes = {

}

export default MemeThumbnail
