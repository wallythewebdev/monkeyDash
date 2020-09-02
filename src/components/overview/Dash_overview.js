import React from 'react';
// data
import data from '../../assets/data/data.json'  // static path which is not a good ideal - but using to prototype
// components
import Totals from './Totals'
import Companies from './Companies'

// import styles for components

import './overview.scss'
import '../../assets/styles/defaultStyles.scss'

class Dash_overview extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            companies: {
                title: 'companies on record',
                value: data.length,
                messurement: 'Companies'
            },
            earning: {
                title: 'total earning',
                value: getValue(),
                messurement: 'Billion'
            }
        };

        function getValue(){
            // returns new array of each companies value to 3 decimals
            // get all values to new array - map
            let totals = data.map((e)=>{
                return e.TOTAL
            })
            // add all totals together - reduce
            let totalValue = totals.reduce((total, amount) => total + amount);
            totalValue = totalValue.toFixed(3)
            return totalValue
        }
    }
    render(){
        return (
            <div className="overview-container">
                <div className="welcome Shadow">
                    <h3 className="Title">Welcome</h3>
                    <p className="Text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in massa ut arcu iaculis auctor eu a mauris. Phasellus scelerisque, velit ut auctor consequat, purus urna porttitor elit, sed efficitur dolor massa sit amet erat.
                    </p>
                </div>
                <div className="totals">
                    <Totals values={this.state.companies}/>
                    <Totals values={this.state.earning}/>
                </div>
                <div className="overview">
                    <Companies values={{companies: this.state.companies.value, earning: this.state.earning.value}}/>
                </div>
            </div>
        )
    }
}


export default Dash_overview