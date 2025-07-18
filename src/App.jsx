import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Services from "./components/Services/Services"
import Footer from "./components/Footer/Footer"
import "../index.css"

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </main>
  )
}

export default App;