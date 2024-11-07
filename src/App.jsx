import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ApplyLoan from "./Pages/ApplyLoan";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
      <div className="font-primary bg-">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/applyforloan" element={<ApplyLoan />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
