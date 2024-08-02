import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="container">
            <Header />

            <main className="bg-red">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

export default App;
