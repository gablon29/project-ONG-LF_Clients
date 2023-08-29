import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Events from "./pages/Events";
import EventCategories from "./pages/EventCategories";
import CreateEvent from "./pages/CreateEvent";
import EventDetails from "./pages/EventDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="events/all" element={<Events />} />
        <Route path="/events/:category" element={<EventCategories />} />
        <Route path="/create/event" element={<CreateEvent />} />
        <Route path="/event/:slug" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
