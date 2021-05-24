import React from 'react'

const Button = ({ onClick, filters }) => {

   return (
      <button className={`btn-filter post-filters__filter${filters.length === 0 ? ' isActive' : ''}`} onClick={onClick}>All</button>
   )
}

export default Button;