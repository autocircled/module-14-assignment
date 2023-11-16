import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import SubscribeForm from '../components/SubscribeForm'
import Testimonials from '../components/Testimonials'

const TestimonialsPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Testimonials" />
            <Testimonials />
            <SubscribeForm />
            <Footer />


        </>
    )
}

export default TestimonialsPage
