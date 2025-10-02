import AboutPage from '../components/AboutPage'
import AnimatedPage from '../components/AnimatedPage'

const page = () => {
    return (
        <AnimatedPage>
            <AboutPage />
            <div className="w-full flex items-center justify-center"></div>
        </AnimatedPage>
    )
}

export default page