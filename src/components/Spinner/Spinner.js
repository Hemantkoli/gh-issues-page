import React from 'react'
import './Spinner.scss'

const Spiner=()=>{
    return(
        <React.Fragment>
            <div className="loader-wrapper">
                <div className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
                </div>
            </div>

            <div id="loader2" className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
            </div>

            <div id="loader3" className="loader">
                    <div className="roller"></div>
                    <div className="roller"></div>
            </div>
        </React.Fragment>
    )
}

export default Spiner;