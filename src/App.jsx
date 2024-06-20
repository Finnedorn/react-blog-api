import FooterComponent from "./assets/components/Footer/FooterComponent";
import MainComponent from "./assets/components/Main/MainComponent";
import { useState, useEffect } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;




function App() {
  
  // creo una variabile con useState che accolga i dati della chiamata axios
  const [posts, getPosts] = useState(null);
  
  // effettuo la chiamata axios
  const fetchPosts = async () => {
    try {
      const response = await axios.get(apiUrl + "/posts");
      getPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // effettuo la chiamata axios una sola volta al mounting della pagina
  useEffect(() => {
    fetchPosts();
  }, []);


  return (
    <div className="App">
      {/* passo il contenuto della variabile alla componente Main */}
      <MainComponent posts={posts} />
      <FooterComponent />
    </div>
  );
}

export default App;
