// import "./App.css";
// import React from "react";

// function App() {
//   // Fetch API
//   // Get API in Fetch
//   fetch("https://jsonplaceholder.typicode.com/todos/1")
//     // .then((response) => response.json())
//     .then((data) => console.log(data));

//   return (
//     <div className='App'>
//       <h3>Fetch Api</h3>
//       <button>Get Fetch</button>
//     </div>
//   );
// }
// export default App();

import React from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  // Fetch API
  // Get API in Fetch
  let getFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  // Post API in Fetch
  let postFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "chuc mung nam moi", body: "Hello world" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Put API in Fetch
  let putFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: "chuc mung nam moi", body: "Hello world" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // delete API in Fetch
  let deleteFetch = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Axios
  // Get Axios
  let getAxios = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));
  };

  // Post API in Axios
  let postAxios = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: "chuc mung nam cu",
        body: "Hello world",
      })
      .then((data) => {
        console.log("Success:", data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Put API in Axios
  let putAxios = () => {
    axios
      .put("https://jsonplaceholder.typicode.com/posts/1", {
        title: "chuc mung nam cu",
        body: "Hello world",
      })
      .then((data) => {
        console.log("Success:", data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // delete API in Axios
  let deleteAxios = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/1")
      .then((data) => {
        console.log("Success:", data.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className='App'>
        <h3>Fetch Api</h3>
        <button onClick={getFetch}>Get Fetch</button>
        <button onClick={postFetch}>Post Fetch</button>
        <button onClick={putFetch}>Put Fetch</button>
        <button onClick={deleteFetch}>Delete Fetch</button>
        <h3>Axios</h3>
        <button onClick={getAxios}>Get Axios</button>
        <button onClick={postAxios}>Post Axios</button>
        <button onClick={putAxios}>Put Axios</button>
        <button onClick={deleteAxios}>Delte Axios</button>
      </div>
    </>
  );
}
