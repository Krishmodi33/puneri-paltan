import { Routes,Route } from "react-router-dom"
import Header from "./component/global/hearder"
import Hero from "./component/pages/hero"
import Footer from "./component/global/footer"

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Hero />}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
