import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'

const About = lazy(() => import('./src/about'))
const Contact = lazy(() => import('./src/contact'))
const Education = lazy(() => import('./src/education'))
const Project = lazy(() => import('./src/project'))
const Signin = lazy(() => import('./src/signin'))
const Signup = lazy(() => import('./src/signup'))
const AdminDashboard = lazy(() => import('./src/admin'))

const MainRouter = () => {
 return (<div>
     <Layout/>

        <Suspense fallback={<main className="page"><p>Loading page...</p></main>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/education" element={<Education />} />
            <Route exact path="/project" element={<Project />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </Suspense>
        </div>
    )
}
export default MainRouter
