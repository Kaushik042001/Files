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
            <tr><td colSpan="3"><h2>No data</h2></td></tr>
        ) : (
            this.state.records.map((e, index) => (
                <tr key={index}>
                    <td>{e.dtitle}</td>
                    <td>{e.ddesc}</td>
                    <td>{e.dstream}</td>
                </tr>
            ))
        );
    
        return (
            <div>
                <table border="2">
                    <thead>
                        <tr>
                            <th>D Title</th>
                            <th>D Desc</th>
                            <th>D Stream</th>
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
