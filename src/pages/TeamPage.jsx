import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'

const TeamPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Team" />
            <div>
                <h1>Team</h1>
            </div>
            <Footer />


        </>
    )
}

export default TeamPage
