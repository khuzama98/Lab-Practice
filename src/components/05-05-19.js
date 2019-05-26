import React,{Component} from 'react'
import Country from '../static/country'

export default class CountryList extends Component {
    constructor(){
        super();
        this.state={
            limit: 20
        }
    }

    onScroll = (e) => {
        if(e.target.scrollHeight === Math.ceil(e.target.clientHeight + e.target.scrollTop)){
            this.loadMore()
        }
    }

    loadMore = () => {
        console.log('loadMore ===>')
        this.setState(prevState=> ({
            limit: prevState.limit+15
        }))
    }

    render(){

        const temp = [...Country]
        temp.length=this.state.limit

        return(
            <>
            <ol onScroll={this.onScroll} style={{height:300,overflowY:'scroll'}} >
                {temp.map(item=>{
                    return <li>{item}</li>
                })}
            </ol>
            </>
        )
    }
}