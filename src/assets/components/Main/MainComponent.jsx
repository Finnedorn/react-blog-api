import CardComponent from "../Card/CardComponent";
import { useState, useEffect } from "react";

const MainComponent = ({posts}) => {

  const bgstart = "url('../../img/blog-bg.jpg')";

  const bgend = "url('../../img/create-bg-post.jpg')";

  const [changingBg, setChangingBg] = useState(bgstart);


  // changing background color //
  useEffect(() => {
    const changingEffect = setInterval(() => {
      setChangingBg(changingBg => changingBg === bgstart ? bgend : bgstart);
    }, 5000);
    return () => clearInterval(changingEffect);
  },[]); //passo un array vuoto così da attivare useEffect solo una volta al mounting della page
   

  return (
    <main
      className="container-fluid main"
      style={{
        backgroundImage: changingBg,
        backgroundSize: "cover",
        padding: "20px",
        transition: "background-image 2s ease-in-out",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0px",
          fontSize: "2.5rem",
          color: "#0a794e",
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


