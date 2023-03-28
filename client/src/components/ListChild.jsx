import React from 'react'

export default function ListChild(props) {
  return (
    <div>
      <h1>품목명 : {props.item}</h1>
      <p>가격 : {props.price}</p>
      <hr />
    </div>
  )
}
