import React from 'react'

export default function Price( {price} ) {
  return (
    <div>
        <label>
        成交金额：{price.price} 成交件数：{price.qty}
        <input type="checkbox" checked={price.deleted}/>
        </label>
        
    </div>
  )
}
