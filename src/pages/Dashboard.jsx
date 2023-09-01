import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Nav />
      <div className="dashboard_main">
        <section className="header_events">
          <h1 style={{ fontSize: "30px" }}>Your Events</h1>
          <Link to="/create/event" className="link">
            Create new event
          </Link>
        </section>
        <div>{/**user´s events */}</div>
      </div>
    </div>
  );
};

export default Dashboard;
