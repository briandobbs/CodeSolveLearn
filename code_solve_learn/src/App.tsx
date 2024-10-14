import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="tw-flex tw-flex-col tw-min-h-screen">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main className="tw-flex-grow tw-bg-gray-100 tw-text-gray-800 tw-py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
