import React,{Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Authentification from "./components/Authentification";
import Accueil from "./components/Accueil";

function App() {
  return(
    <Router>
      <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={ <Authentification/> } />
        <Route path="/Accueil" element={<Accueil/>} />
      </Routes>
      </Suspense>
    </Router>
  )
}
export default App;