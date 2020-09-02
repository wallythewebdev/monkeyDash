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
            chosenCompany: null,
            chosenKey: null
        }

    }
    changeCompany(){
        var e = document.getElementById("companies");
        var option= e.options[e.selectedIndex];
        this.setState({
            chosenCompany: document.getElementById('companies').value,
            chosenKey: parseInt(option.dataset.tag)
        })
    }
    render(){
        return (
            <div className="analytics">
                <h2 className="Title">Analytics</h2>
                <div className="companySelect">
                <label className="Title" htmlFor="company">Select a Compnay:</label>
                    <select className="Shadow" name="company" id="companies" onChange={this.changeCompany}>
                        {data.map((company, index)=>{
                            return (
                                <option value={company.COMPANY} key={index} data-tag={index}>{company.COMPANY}</option>
                            )
                        })}
                    </select>
                </div>
                    <Chart data={this.state.chosenKey}/>
            </div>
        )
    }
}

export default Dash_details