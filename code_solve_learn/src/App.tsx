import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="tw-flex tw-h-screen tw-justify-center">
      <div className="tw-flex tw-flex-col tw-justify-between">
        <Header />

        <Footer />
      </div>
    </div>
  );
}

export default App;
