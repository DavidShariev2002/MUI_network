
import "./App.scss";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";


const App = () => {
  return (
    <div className="App">

      <Header />
      <Container className="content" maxWidth="lg" sx={{ height: "100vh", position: "relative"}}>
        <Sidebar />
        <Profile />
      </Container>
      
    </div>
  );
}



export default App;
