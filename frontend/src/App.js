import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./komponen/UserList";
import AddUser from "./komponen/AddUser";
import EditUser from "./komponen/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="/add" element={<AddUser/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
