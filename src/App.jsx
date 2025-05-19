import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-slate-300/20'>
      {/* Blur aesthetic background */}
      {/* <div className="fixed inset-0 -z-10 min-h-screen">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600/30 via-pink-100/30 to-red-500/30 backdrop-blur-3xl min-h-screen"></div>
        <div className="fixed top-0 left-0 w-full min-h-screen bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)] opacity-70"></div>
      </div> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path='/3d_harsh/' element={<Home />} />
          <Route
            path='/3d_harsh/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
