import Nav from "../components/Nav";
import event from "../assets/imagenProjectoMeekup.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const [comment, setComment] = useState("");
  const { slug } = useParams();

  return <div></div>;
};

export default EventDetails;
