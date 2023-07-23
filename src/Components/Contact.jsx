import React from 'react'

const Contact = () => {
    return (
        <div className=''>
            <form className="row g-3" action="https://public.herotofu.com/v1/5f86f7e0-28b0-11ee-be54-bf7a0558bd70" method="post" accept-charset="UTF-8">
                <div className="col-12 col-md-6 col-md-6">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='Name' />
                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <label for="companyname" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyname" placeholder="" name='CompanyName' />
                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name='Email' />
                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <label for="location" className="form-label">Job Location</label>
                    <input type="text" className="form-control" id="location" placeholder="" name='Location' />
                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <label for="role" className="form-label">My Role</label>
                    <input type="text" className="form-control" id="role" name='Role' />
                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <label for="number" className="form-label">Phone</label>
                    <input type="number" className="form-control" id="number" name='Phone' />

                </div>
                <div className="col-12 col-md-6 col-md-6">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Contact