import About from "./Component/About"
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Navbar from "./Component/Navbar"
import Newsletter from "./Component/Newsletter"
import Project from "./Component/Project"
import Services from "./Component/Services"
import Testimonial from "./Component/Testimonial"
import WhyChoose from "./Component/WhyChoose"


function App() {
  

  return (
    <>
      <Navbar />
      <Header />
      <Project />
      <About />
      <Services />
      <WhyChoose />
      <Testimonial />
      <Newsletter />
      <Footer/>
    </>
  )
}

export default App
