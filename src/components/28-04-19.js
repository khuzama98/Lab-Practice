import React,{Component} from 'react';

export default class List extends Component{
  constructor(){
    super();
    this.state={
      list: ['Pakistan','India','China','Canada'],
      result:[],
      text: ''
    }
  }
  
  search = (e) =>{
    console.log(e.target.value)
    const text = e.target.value;
    const {list}=this.state;
    const result = list.filter(item=> {
      return item.substring(0,text.length).toLowerCase()===text.toLowerCase()
    })
    this.setState({result,text})
  }
  
  render(){
    const { list,result,text } = this.state;
    const arr = text.length ? result : list
    return (
      <>
        <input placeholder='search...' onChange={this.search} />
        {arr.map((item,index)=> <p>{index+1}) {item}</p>)}
      </>
      );
    }
  }