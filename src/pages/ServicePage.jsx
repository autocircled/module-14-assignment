import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Services from '../components/Services'
import SubscribeForm from '../components/SubscribeForm'

const ServicePage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Service" />
            <Services />
            <SubscribeForm />
            <Footer />


        </>
    )
}

export default ServicePage
