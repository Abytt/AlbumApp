import React from 'react'
import Nav from './Nav'

const Add = () => {
    return (
        <div>
<Nav/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="label form-label">User ID</label>
                                <input type="text" className="input form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="label form-label"> Id</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                <label htmlFor="" className="label form-label">Title</label>
                                <input type="text" className="input form-control" />
                            </div>
                            <br></br>
                            <div className="row g-3">
                                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xx-6">
                                    <button className="btn btn-warning">ADD</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add