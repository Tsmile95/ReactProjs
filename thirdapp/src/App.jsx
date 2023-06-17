import './App.css'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer' 
import Section from './pages/Section'
import Dynamic from './pages/Dynamic'
import Click from './pages/Click'
import UseState from './pages/UseState'
import List from './pages/List'
function App() {
  let color = 'red'
  

  return (
    <>
      <Navbar/>
      <Footer newColor={color}/>
      <Section newColor={color}/>
      <Dynamic/>
      <Click/>
      <UseState/>
      <List newColor={color}/>
      
    </>
  )
}

export default App
