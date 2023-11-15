import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'

const LoginPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Login" />
            <div>
                <h1>Login</h1>
            </div>
            <Footer />


        </>
    )
}

export default LoginPage
