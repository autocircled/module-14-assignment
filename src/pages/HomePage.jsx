import AppNavBar from '../components/AppNavBar'
import Counter from '../components/Counter'
import FeaturedProjects from '../components/FeaturedProjects'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import SubscribeForm from '../components/SubscribeForm'
import WorkList from '../components/WorkList'

const HomePage = () => {
    return (
        <>
            <AppNavBar />
            <Hero />
            <WorkList />
            <Counter />
            <FeaturedProjects />
            <SubscribeForm />
            <Footer />


        </>
    )
}

export default HomePage
