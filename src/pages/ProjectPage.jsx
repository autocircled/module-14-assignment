import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'
import Projects from '../components/Projects'
import SubscribeForm from '../components/SubscribeForm'

const ProjectPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Project" />
            <Projects />
            <SubscribeForm />
            <Footer />
        </>
    )
}

export default ProjectPage
