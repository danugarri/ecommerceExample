import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './CartBadge.css'

export const CartBadge = ({counter}) => {
    const element = <FontAwesomeIcon icon={faCartShopping} />
  return (
     <section className='container'><div className='badge'><span className='counter'>{counter}</span></div>{element}</section>
    
  )
}
