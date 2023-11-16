import '../assets/css/form.css'

const SubscribeForm = () => {
    return (
        <section className="subscribe-form bg-white py-5 mb-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 text-center">
                        <div className="form-header">
                            <h3 className="title d-block fw-bold text-uppercase">SUBSCRIBE</h3>
                            <p className="description text-capitalize fw-bold">Subscribe to get the latest news about us</p>
                            <p className='info small text-capitalize'>Please drop your email below to get daily update about what we do</p>
                        </div>
                        <div className="form-body">
                            <div className="input-group-manual">
                                <input type="text" className="form-control" placeholder="Enter your email" />
                                <button className="btn btn-warning text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SubscribeForm
