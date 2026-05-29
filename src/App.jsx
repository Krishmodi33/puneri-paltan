import { Routes, Route } from "react-router-dom";
import Header from "./component/global/hearder";
import Hero from "./component/pages/hero";
import Footer from "./component/global/footer";
import Players from "./component/pages/Player/player";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/players" element={<Players />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
