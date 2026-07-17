import { BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { RoutingMain } from "./routing/RoutingMain";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-[#f8f4ef] text-[#2f2621]">
        <Header />

        <main className="flex-1 w-full">
          <RoutingMain />
        </main>
      </div>
    </Router>
  );
}

export default App;
