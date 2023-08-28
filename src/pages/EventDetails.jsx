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
        <div className="detail_content">
          <img src={event} alt="Event" className="detail_image" />
          <div style={{ marginBottom: "30px" }}>Description</div>
          <div style={{ marginBottom: "30px 0" }}>
            <h2 style={{ color: "#1d5d9b" }}>Comment</h2>
            <form onSubmit={addComment} className="comment_form">
              <textarea
                rows={4}
                className="commentInput"
                value={comment}
                onChange={(evento) => setComment(evento.target.value)}
                required
              />
              <button className="buttons commentBtn">Comment</button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
