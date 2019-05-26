import React,{Component} from 'react'
import {searchData} from '../config/02-05-19/api'


export default class apiCalling extends Component {
    constructor(){
        super();
        this.state={
            loading: false,
            value:'',
            result:[]
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({value})
    }

     fetchData = async (val) => {
        this.setState({loading:true})
        try{
            const result = await searchData(val);
            this.setState({result})
        }
        catch(e){
            console.log(e.message)
        }
        finally{
            this.setState({loading:false})
        }
    }

    render(){
        return(
            <>
            <input type='text' value={this.state.value} onChange={(e)=> this.handleChange(e)} />
            <button onClick={()=> this.fetchData(this.state.value)} >Search</button>
            {this.state.loading && 'Loading...'}
            {!this.state.loading && this.state.result.map(item=>{
                return <div>{item.created_at}-{item.author}</div>
            })}
            </>
        )
    }
}