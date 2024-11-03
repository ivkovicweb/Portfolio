import './App.css'
import HeaderComponent from './components/HeaderComponent'
import HomeComponent from './components/HomeComponent'
import AboutComponent from './components/AboutComponent'
import ServicesComponent from './components/ServicesComponent'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'

function App() {
  return (
    <div>
      <div className='container mx-auto'>
        <HeaderComponent />
        <HomeComponent />
        <AboutComponent />
        <ServicesComponent />
        <ContactComponent />
      </div>
      <FooterComponent />
    </div>
  )
}

export default App
