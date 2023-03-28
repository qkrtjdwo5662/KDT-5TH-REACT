import React from 'react'

export default function CustomList({arr}) {
  return (
    <ul>
      {arr?.map((el, index) => {
        return <li key={index}>{el}</li>
      })}
    </ul>
  )
}
