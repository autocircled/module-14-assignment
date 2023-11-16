import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Login" />
            <LoginForm />
            <Footer />


        </>
    )
}

export default LoginPage
