import  React from 'react'
import axios from 'axios'
import { DisplayForm } from './DisplayForm'

export class InsertForm extends React.Component{
    constructor(){
        super()
        this.state={pname:'',pdetails:'',pcategory:''}
    }

    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})

    }
    handleSubmit=()=>{
        var d=this.state
        axios.post("http://127.0.0.1:5000/insert",d).then(res=>console.log('rec inserted'))
    }
    render()
    {
        return(
            <div className='data'>
            <form onSubmit={this.handleSubmit} >
                <input type='text' name='pname' onChange={this.handleChange} placeholder='enter product  name'/>
                <input type='text' name='pdetails' onChange={this.handleChange} placeholder='enter product  details'/>
                <input type='text' name='pcategory' onChange={this.handleChange} placeholder='enter product  category'/>
<button type='submit' >Submit</button>
            </form>
            <DisplayForm />
            </div>
        )
    }
}

