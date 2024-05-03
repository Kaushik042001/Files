import React from 'react'
import axios from 'axios'

export class DisplayForm extends React.Component {
    constructor() {
        super()
        this.state = { records: [] }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/display").then(res => this.setState({ records: res.data })).catch(err => console.log(err))
    }
    
    render() {
        var trs = (this.state.records.length === 0) ? (
            <tr><td colSpan="4"><h2>No data</h2></td></tr>
        ) : (
            this.state.records.map((e, index) => (
                <tr key={index}>
                    <td>{e.pname}</td>
                    <td>{e.pdetails}</td>
                    <td>{e.pcategory}</td>
                </tr>
            ))
        );
    
        return (
            <div>
                <table border="2">
                    <thead>
                        <tr>
                            <th>P Name</th>
                            <th>P Details</th>
                            <th>P Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trs}
                    </tbody>
                </table>
            </div>
        );
    }
    

}
