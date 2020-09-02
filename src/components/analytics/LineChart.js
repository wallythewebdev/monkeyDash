import React, { useState, useEffect } from 'react'

import companyData from '../../assets/data/data.json'

import {Line} from 'react-chartjs-2'

    const LineGraph = (props) => {
            // Get the values for the graphy: 

            let labelValues = (props) => {
                // This is dummy data - Currently trying to pass in props to get the correct data
                console.log(companyData)
                return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }

            let [chartData, setChartData] = useState({})
            const chart = () =>{
                setChartData({
                    // dummie data - but needs to be pulled from data... 
                    labels: labelValues(),
                    datasets: [
                        {
                            label: 'Companies Values',
                            data: [100,230,340,232,100,230,340,232,100,230,340,232],
                            backgroundColor: [
                                'rgba(75,192,192,0.6)'
                            ],
                            borderWidth: 2
                        }
                    ]
                })
            }
            useEffect(()=>{
                chart()
            }, [])
            return(
                <div style={{height: 'auto', width: '80%'}}>
                    <Line data={chartData} options={{
                        Response: true
                    }} />
                    <h1>{}</h1>
                </div>
            )
        }


export default LineGraph