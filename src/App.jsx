import { Route, Routes } from "react-router-dom";
import { Main } from "./pages/Main";
import { AboutUs } from "./pages/AboutUs";
import { Branches } from "./pages/Branches";
import { Contacts } from "./pages/Contacts";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="branches" element={<Branches />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
