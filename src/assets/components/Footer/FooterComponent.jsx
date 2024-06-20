import { useState, useEffect } from "react";

const FooterComponent = () => {

  const [changingBg, setChangingBg] = useState("black");

  // changing background color //
  useEffect(() => {
    const changingEffect = setInterval(() => {
      setChangingBg(changingBg => changingBg === "#75bee7" ? "#0a794e" : "#75bee7");
    }, 5000);
    return () => clearInterval(changingEffect);
  },[]); //passo un array vuoto così da attivare useEffect solo una volta al mounting della page

  return (
    <footer style={{
      backgroundColor: changingBg,
      padding: "20px",
      transition: "background-color 2s ease-in-out",
      }}>
      <p style={{
        color: "white",
        textAlign: "center"
        }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis.
      </p>
    </footer>
  );
};

export default FooterComponent;