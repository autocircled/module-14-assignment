import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'

const RegisterPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Register" />
            <div>
                <h1>Register</h1>
            </div>
            <Footer />


        </>

    )
}

export default RegisterPage
