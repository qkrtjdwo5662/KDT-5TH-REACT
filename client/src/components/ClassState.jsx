import React, { Component } from 'react'

export default class ClassState extends Component {
  // * 함수형 예전 형태
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     teacher: "이효석",
  //   }
  // }

  // * 함수형 발전 형태
  state = {
    teacher: "이효석석",
  }
  
  render() {
    const {teacher} = this.state;

    return (
      <div>
        <button onClick={() => this.setState({teacher:'tetz'})}>영어 변환 버튼</button>
        <div>{teacher}</div>
      </div>
    )
  }
}
