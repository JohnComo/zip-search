import React from 'react'

const Result = ({locationText, state, estimatedPop, lat, long, totalWages}) => { 
    return (
        <div>
            <div>
                <h1>{locationText}</h1>
            </div>
            <div>
                <ul>
                    <p> State: {state}</p>
                    <p> Location: ({lat}, {long})</p>
                    <p> Estimated Population: {estimatedPop}</p>
                    <p> Total Wages: {totalWages} </p>

                </ul>
            </div>
        </div>
    )
}

export default Result



