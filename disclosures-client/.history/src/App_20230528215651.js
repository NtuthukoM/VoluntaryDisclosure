import logo from './logo.svg';
import {CreateDisclosures} from './pages/CreateDisclosure';
import {ListDisclosures} from './pages/ListDisclosures';
import {DisclosureSubmitted} from './pages/DisclosureSubmitted';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateDisclosures/>} />
          <Route path="/list" element={<ListDisclosures/>} />
          <Route path="/list" element={<ListDisclosures/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
