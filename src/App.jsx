import { Routes,Route } from "react-router-dom"
import Header from "./component/global/hearder"
import Hero from "./component/pages/hero"

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route index element={<Hero />}/>
    </Routes>
    </>
  )
}

export default App
