import React from 'react'

export default function Price( {price} ) {
  return (
    <div>
        <label>
        id: {price.id} 成交金额：NT${price.priceSold} 成交件数：{price.qtySold}
        <input type="checkbox" checked={price.deleted}/>
        </label>
    </div>
  )
}
