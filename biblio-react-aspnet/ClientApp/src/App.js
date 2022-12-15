import React,{ReactDOM, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Authentification from "./components/Authentification";

function App() {
  return(
    <Router>
      <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route path="/" element={ <Authentification/> } />
      </Routes>
      </Suspense>
    </Router>
  )
}
export default App;