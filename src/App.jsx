import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import HowToOrder from './components/HowToOrder'
import Testimonials from './components/Testimonials'
import OrderForm from './components/OrderForm'
import Footer from './components/Footer'
import FadeInSection from './components/FadeInSection'

const initialQuantities = {
  jollof: 0,
  suya: 0,
  friedrice: 0,
  asun: 0,
  peppersoup: 0,
  puffpuff: 0,
}

function App() {
  const [quantities, setQuantities] = useState(initialQuantities)

  const addToOrder = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })
  }

  const resetQuantities = () => setQuantities(initialQuantities)

  return (
    <>
      <Navbar />
      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection delay={100}><About /></FadeInSection>
      <Menu addToOrder={addToOrder} />
      <FadeInSection delay={100}><HowToOrder /></FadeInSection>
      <FadeInSection delay={100}><Testimonials /></FadeInSection>
      <FadeInSection delay={100}><OrderForm quantities={quantities} setQuantities={setQuantities} resetQuantities={resetQuantities} /></FadeInSection>
      <FadeInSection delay={100}><Footer /></FadeInSection>
    </>
  )
}

export default App