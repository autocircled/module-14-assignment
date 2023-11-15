import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'

const ServicePage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Service" />
            <div>
                <h1>Service</h1>
            </div>
            <Footer />


        </>
    )
}

export default ServicePage
