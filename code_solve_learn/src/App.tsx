import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import ArticlesGrid from "./components/ArticlesGrid";
import { Article } from "./types/article";

const articles: Article[] = [
  { id: 1, title: "First Article", description: "This is the first article" },
  { id: 2, title: "Second Article", description: "This is the second article" },
  { id: 3, title: "Third Article", description: "This is the third article" },
];

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
            <Route
              path="/articles"
              element={<ArticlesGrid articles={articles} />}
            />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
