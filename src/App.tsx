import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NemRoom";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
