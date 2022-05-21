import React from "react"
import Todo from './pages/todo'
import Home from './pages/home'
import  {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <React.StrictMode> 
      <BrowserRouter>
        <Routes>
          <Route path='/todo' element={<Todo/>} /> 
          <Route path='/home' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
