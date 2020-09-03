import React, { useState, useEffect } from 'react'

import companyData from '../../assets/data/data.json'

import {Line} from 'react-chartjs-2'

    const LineGraph = (props) => {
            let NumValue = props.data // passing selected array number via props i.e. 8
            // Get the values for the graphy: 

            const notInclude = ['COMPANY', 'HEADQUARTERS', 'TOTAL'];
            let labelValues = () => {
                // Filter the JSON data to remove not wanted 
                // This is explicit so will need to be written to be dynamic
                // Data also is apearing out of context
                return Object.keys(companyData[NumValue]).filter((val) => !notInclude.includes(val));
            }
            const data = labelValues()
            let labelData = data.map((val) => companyData[NumValue][val]);

            let [chartData, setChartData] = useState({})
            const chart = () =>{
                setChartData({
                    // dummie data - but needs to be pulled from data... 
                    labels: data,
                    datasets: [
                        {
                            label: 'Companies Values',
                            data: labelData,
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
                <div style={{height: 'auto', width: '100%'}}>
                    <Line data={chartData} options={{
                        Response: true
                    }} />
                    <h1>{}</h1>
                </div>
            )
        }


export default LineGraph