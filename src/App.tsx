import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { RoutingMain } from "./routing/RoutingMain";

function App() {
    return (
        <Router basename="/maxoghelenesbryllup">
            <div className="flex flex-col min-h-screen bg-white">
                <Header />
                
                <main className="flex-1 w-full">
                    <RoutingMain />
                </main>

                <Footer />
            </div>
        </Router>
    );
}

export default App;