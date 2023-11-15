import { Breadcrumb } from 'react-bootstrap'
import PropTypes from 'prop-types';
import '../assets/css/breadcrumb.css'

const BreadcrumbList = (props) => {

    return (
        <section className="breadcrumb-section">
            <div className="ellipse"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>{props.page}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>

        </section>
    )
}

BreadcrumbList.propTypes = {
    page: PropTypes.string
}

export default BreadcrumbList
