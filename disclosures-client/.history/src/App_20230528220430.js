import logo from './logo.svg';
import {CreateDisclosures} from './pages/CreateDisclosure';
import {ListDisclosures} from './pages/ListDisclosures';
import {DisclosureDetails} from './pages/DisclosureDetails';
import {DisclosureSubmitted} from './pages/DisclosureSubmitted';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateDisclosures/>} />
          <Route path="/list" element={<ListDisclosures/>} />
          <Route path="/submitted" element={<DisclosureSubmitted/>} />
          <Route path="/details" element={<DisclosureDetails/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
