import Nav from "../components/Nav";
import event from "../assets/imagenProjectoMeekup.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [comment, setComment] = useState("");
  const { slug } = useParams();

  const addComment = (evento) => {
    evento.preventDefault();
    console.log(comment, slug);
  };

  return (
    <div>
      <Nav />
      <header className="detail_header">
        <h2 style={{ marginBottom: "15px" }}>Title</h2>
        <p style={{ opacity: 0.6 }}>
          Hosted by: <span style={{ fontWeight: "bold" }}>Hosts</span>
        </p>
      </header>
      <main className="detail_main">
        <div className="detail_content"></div>
      </main>
    </div>
  );
};

export default EventDetails;
