import Nav from "./Nav";
import { useState, useEffect } from "react";
function App() {
  
  const [name, setName] = useState('Gin');

  console.log (name)
  return (
    <>
    <Nav />
    </>  
  );
}

export default App;

