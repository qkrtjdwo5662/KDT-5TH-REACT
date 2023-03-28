import React from 'react'
import ListChild from './ListChild'

export default function List() {
  const dataArr = [
    {
      title: "리액트",
      todo : "State 사용법 익히기"
    },
    {
      title: "코테",
      todo : "Lv 0 정복하기"
    },
    {
      title: "굳",
      todo : "굳"
    }
  ]


  return (
    <div>
      <h1>오늘 해야할 일</h1>
      <hr />
      {dataArr.map((el, index) => {
        return <ListChild h2Content={el.title} pContent={el.todo} key={index}/>
      })}
      {dataArr.map((el, index)=> {
        return(
          <div key={index}>
            <h2>{el.title}</h2>
            <p>{el.todo}</p>
            <hr />
          </div>
        )
      })}
      {/* <ListChild h2Content="코테 문제 풀기" pContent="Lv 0 정복 가즈아"/> */}
    </div>
  )
}

