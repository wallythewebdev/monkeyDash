import React from 'react';
import data from '../../assets/data/data.json'  // static path which is not a good ideal - but using to prototype

/* comp map
    title i.e. comapies total or eanring
    valaue - the output
    messurement - what the value is i.e. comapines / millions
*/ 

class Totals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        const {title, value, messurement} = this.props.values
        return (
            <div className="totals_comp Shadow">
                <p className="SmallTitle">{title}</p>
                <h3><span className="DataDisplay">{value}</span>{messurement}</h3>
            </div>
        )
    }
}

export default Totals