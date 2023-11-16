import AppNavBar from '../components/AppNavBar'
import BreadcrumbList from '../components/Breadcrumb'
import Footer from '../components/Footer'

const ProjectPage = () => {
    return (
        <>
            <AppNavBar />
            <BreadcrumbList page="Project" />
            <div>
                <h1>Project</h1>
            </div>
            <Footer />
        </>
    )
}

export default ProjectPage
