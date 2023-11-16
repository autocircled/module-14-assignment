import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import RegistrationForm from '../components/RegistrationForm'

const RegisterPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Register" />
            <RegistrationForm />
            <Footer />


        </>

    )
}

export default RegisterPage
