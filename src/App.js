
import Home from './pages/Home';
import Completed from './pages/Completed';
import Navbar from './components/Navbar/Navbar';

import { Routes, Route } from "react-router-dom"; 



function App() {

  return (
    <div className="App">
     <Navbar />
        <Routes>
          <Route index path = "/" element = {<Home />} />
          <Route path = "Completed" element = {<Completed />} />
        </Routes>
    </div>
  );
}

export default App;
