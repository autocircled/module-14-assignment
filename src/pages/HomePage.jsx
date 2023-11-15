import AppNavBar from '../components/AppNavBar'
import FeaturedProjects from '../components/FeaturedProjects'
import Hero from '../components/Hero'
import SubscribeForm from '../components/SubscribeForm'
import WorkList from '../components/WorkList'

const HomePage = () => {
    return (
        <>
            <AppNavBar />
            <Hero />
            <WorkList />
            <FeaturedProjects />
            <SubscribeForm />


        </>
    )
}

export default HomePage
