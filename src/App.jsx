import { Routes, Route } from "react-router-dom";
import Header from "./component/global/hearder";
import Hero from "./component/pages/hero";
import Footer from "./component/global/footer";
import Players from "./component/pages/Player/player";
import SinglePlayer from "./component/pages/Player/singleplayer";
import PaltanWorld from "./component/pages/PaltanWorld";
import PuneriTv from "./component/pages/PuneriTv";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Hero />} />
        <Route path="/players" element={<Players />} />
        <Route path="/single-player/:id" element={<SinglePlayer />} />
        <Route path="/paltan-world" element={<PaltanWorld />} />
        <Route path="/puneri-tv" element={<PuneriTv />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
