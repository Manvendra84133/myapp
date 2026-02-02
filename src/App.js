import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import Carousel from './Components/Carousel';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Registration from './Components/Registration';
import FAQ from './Components/FAQ';

import { Route,Routes } from 'react-router-dom';
import MyForm from './Components/MyForm';
import Form from './Components/Form';
import MyForm1 from './Components/MyForm1';

function App() {
  return (
    <>
      
      <Navbar />

      <Routes>

        <Route path="/" element={
            <>
            <Carousel />
            <Cards />  
            </>
          }
        />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Cards showSearch={true} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/myform" element={<MyForm />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<MyForm1 />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;