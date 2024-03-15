import { StringContext } from "./components/string_update/String_context";
import './App.css';
import StringUpdate from './components/string_update/StringUpdate';
import { useState } from "react";


function App() {
  const [Name,setName] = useState('');
  return (
    <div className="App">
      <StringContext.Provider value={{Name,setName}}>
        <StringUpdate/>
        
      </StringContext.Provider>
      
    </div>
  );
}

export default App;
