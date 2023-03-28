import React from 'react'
import ListChild from './ListChild';

export default function mapExercise() {
  const items = [
    {
      item: "PS5",
      price: "685,000원", 
    },
    { 
      item: "에어 프라이어", 
      price: "50,000원",
    }, 
    {
      item:"시세 치킨왕",
      price: "11,500원", 
    },
];

  return (
    <div>
      {items.map((el, index) => {
        return <ListChild item={el.item} price={el.price} key={index}/>
      })}
      {items.map((el, index) => {
        return (
          <div key={index}>
            <h1>품목명 : {el.item}</h1>
            <p>가격 : {el.price}</p>
            <hr />
        </div>
        )
      })}
    </div>
    
  )
}
