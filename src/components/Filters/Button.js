import React from 'react'

const Button = ({ slug, name, onClick, filters }) => {
   return (
      <button key={slug} className={`btn-filter post-filters__filter${filters.indexOf(name) !== -1 ? ' isActive' : ''}`} onClick={() => filters.indexOf(name) === -1 ? onClick(name) : onClick(name, true)}>{name}</button>
   )
}

export default Button;