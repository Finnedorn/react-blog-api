import CardComponent from "../Card/CardComponent";
import { useState, useEffect } from "react";

const MainComponent = ({posts}) => {

  const [changingBg, setChangingBg] = useState("grey");


  // changing background color //
  useEffect(() => {
    const changingEffect = setInterval(() => {
      setChangingBg(changingBg === "grey" ? "black" : "grey");
    }, 5000);
    return () => clearInterval(changingEffect);
  },[]); //passo un array vuoto così da attivare useEffect solo una volta al mounting della page
  useEffect(() => {
    const changingEffect = setInterval(() => {
      setChangingBg(changingBg === "grey" ? "black" : "grey");
    }, 5000);
    return () => clearInterval(changingEffect);
  },[changingBg]); //al cambiamento di changingBg (del primo useEffect) attivo il secondo useEffect 

  return (
    <main
      className="container-fluid main"
      style={{
        backgroundColor: changingBg,
        padding: "20px",
        transition: "background-color 2s ease-in-out",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0px",
          fontSize: "2.5rem",
          color: "white",
        }}
      >
        Il mio Blog
      </h1>
      {/* cards */}
      <div className="container d-flex flex-wrap justify-content-center align-items-center">
        { posts !== null ?
          posts.map((post) => (
            <CardComponent
            key={post.id}
            title={post.title}
            image={post.image}
            content={post.content}
            category={post.category}
            tags={post.tags}
            published={post.published}
            />
          ))
          :
          <p className="p-5 fs-4 text-center text-light">
            Non ci sono post
          </p>
        }
      </div>
    </main>
  );
};

export default MainComponent;


