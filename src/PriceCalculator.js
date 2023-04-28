import React, {useState} from 'react'
import Price from './Price'

export default function PriceCalculator({ prices }) {
    
    return (
        
      prices.map(price => {
        return <Price key={price.id} price={price} />
      })

  )
}
