import React from 'react';
import data from '../../assets/data/data.json' // << not sure if there is a @ like in vue
// import { render } from 'node-sass'; // << not sure where that came from -- looking into it

// import graph
import Chart from './LineChart'

import './analytics.scss'


class Dash_details extends React.Component{
    constructor(props){
        super(props)

        this.changeCompany = this.changeCompany.bind(this)

        this.state = {
            chosenCompany: data[0].COMPANY,
            chosenKey: 0,
        }

    }
    changeCompany(){
        console.log('change fired')
        var e = document.getElementById("companies");
        var option= e.options[e.selectedIndex];
        this.setState({
            chosenCompany: document.getElementById('companies').value, // returns the name of the company - will be removed as un-needed
            chosenKey: parseInt(option.dataset.tag) // << returns the numbered index of the item to accsess it from the data Array
        })
        
    }
    render(){
        return (
            <div className="analytics">
                <h2 className="Title">Analytics</h2>
                <div className="companySelect">
                <label className="Title" htmlFor="company">Select a Compnay:</label>
                    <select className="Shadow" name="company" id="companies" onChange={this.changeCompany} value={this.state.chosenCompany}>
                        {data.map((company, index)=>{
                            return (
                                <option value={company.COMPANY} key={index} data-tag={index}>{company.COMPANY}</option>
                            )
                        })}
                    </select>
                </div>
                    <Chart data={this.state.chosenKey} key={this.state.chosenKey}/>
            </div>
        )
    }
}

export default Dash_details