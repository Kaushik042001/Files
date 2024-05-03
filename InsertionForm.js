import  React from 'react'
import axios from 'axios'
import { DisplayForm } from './DisplayForm'

export class InsertForm extends React.Component{
    constructor(){
        super()
        this.state={dtitle:'',ddesc:'',dstream:''}
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
                <input type='text' name='dtitle' onChange={this.handleChange} placeholder='enter title'/>
                <input type='text' name='ddesc' onChange={this.handleChange} placeholder='enter description'/>
                <input type='text' name='dstream' onChange={this.handleChange} placeholder='enter stream'/>
<button type='submit' >Submit</button>
            </form>
            <DisplayForm />
            </div>
        )
    }
}

