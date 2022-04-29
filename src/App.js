import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import FruitDetails from './component/FruitDetails/FruitDetails';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import ManageItems from './component/ManageItems/ManageItems';

function App() {
  return (
    <div className='background'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/fruit/:id' element={<FruitDetails></FruitDetails>}></Route>
        <Route path='/manage-items' element={<ManageItems></ManageItems>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
