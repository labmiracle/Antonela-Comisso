import React, { useEffect, useState } from "react";
import "./App.css";

// HOC que realiza la petición a la API
const withApiData = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
          );
          const json = await response.json();
          setData(json);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

// Componente que muestra el listado de publicaciones
const PostList = ({ data }) => {
  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      {data.map((post) => (
        <div key={post.id}>
          <h3 className="h3">{post.title}</h3>
          <p className="p">{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

// Componente que muestra los detalles de una publicación
const PostDetails = ({ data, postId }) => {
  const post = data.find((post) => post.id === postId);

  if (!post) {
    return <div>Post no encontrado</div>;
  }

  return (
    <div>
      <h2>Detalle de un Post</h2>
      <h1 className="h1">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

// Envuelve el componente de lista de publicaciones con el HOC
const PostListWithApiData = withApiData(PostList);
const PostListWithApiData_1 = withApiData(PostDetails);

// Ejemplo de uso
const App = () => {
  return (
    <div>
      <PostListWithApiData />
      <PostListWithApiData_1 postId={1} />
    </div>
  );
};

export default App;
