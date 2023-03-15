import React, {useState} from 'react'
import BasicInfo from './BasicInfo';
import OtherInfo from './OtherInfo';
// import './Form.css'

function FillDetails() {

    const [page, setPage] = useState(0);

    const pageTitle = ['Basic Info', 'Other Details']

    const renderFormComponent = () => {
        if (page === 0) {
            return <BasicInfo />
        } else {
            return <OtherInfo />
        }
    }
  return (
    <div className="details-filling-page">
        <div className="progress-bar">
            <span></span>
        </div>
        <div className="form-container">
            <h3 className="form-title">
                {pageTitle[page]}
            </h3>

            <div className="form-body">
                {renderFormComponent()}
            </div>

            <div className="form-buttons">
                <button
                disabled={page === 0}
                onClick={() => {
                        setPage((currentPage) => currentPage - 1)
                    }}>Previous</button> 

                <button
                 disabled={page === 1}
                 onClick={() => {
                    setPage((currentPage) => currentPage + 1)
                }}>Next</button>
            </div>
        </div>
    </div>
  )
}

export default FillDetails
