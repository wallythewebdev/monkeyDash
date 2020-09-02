import React from 'react';
import data from '../../assets/data/data.json'  // static path which is not a good ideal - but using to prototype
import './overview.scss'

/* comp map
    title i.e. comapies total or eanring
    valaue - the output
    messurement - what the value is i.e. comapines / millions
*/ 

class Companies extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        let companieNumbers = this.props.values.companies
        return (
            <div className="companies_container">
                <div className="companies_title">
                    <h3>Companies <span className="grey_info">{`${companieNumbers} total`}</span></h3>
                </div>
                <div className="companies_details Shadow">
                {data.map((company, index)=>{
                    return (
                        <div className="details" key={index}>
                        <div className="company_name">
                            <div className="avatar"></div>
                            <div className="name">
                                <p className="company">{company.COMPANY}</p>
                                <p className="location">{company.HEADQUARTERS}</p>
                            </div>
                        </div>
                        
                        <div className="company_value">
                            <p>{company.TOTAL.toFixed(3)}</p>
                        </div>
                    </div>
                    )
                    
                })}
                </div>
            </div>
        )
    }
}

export default Companies