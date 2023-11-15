import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import SubscribeForm from '../components/SubscribeForm'
import { Team } from '../components/Team'

const TeamPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Team" />
            <Team />
            <SubscribeForm />
            <Footer />


        </>
    )
}

export default TeamPage
