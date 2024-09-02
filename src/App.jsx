import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Rutas from "./routes/Rutas"
import Footer from "./components/Footer"

const App = () => {
    return (
      <BrowserRouter>
  
       <Header />
  
       <Rutas />
  
       <Footer />
  
      </BrowserRouter>
    )
  }
  
  export default App