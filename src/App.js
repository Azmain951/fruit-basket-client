import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AddNewItem from './component/AddNewItem/AddNewItem';
import Blogs from './component/Blogs/Blogs';
import Footer from './component/Footer/Footer';
import FruitDetails from './component/FruitDetails/FruitDetails';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import ManageItems from './component/ManageItems/ManageItems';
import MyItems from './component/MyItems/MyItems';
import NotFound from './component/NotFound/NotFound';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';

function App() {
  return (
    <div className='background'>
      <Toaster></Toaster>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/fruit/:id' element={
          <RequireAuth>
            <FruitDetails></FruitDetails>
          </RequireAuth>
        }></Route>
        <Route path='/manage-items' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>}></Route>
        <Route path='/add-items' element={
          <RequireAuth>
            <AddNewItem></AddNewItem>
          </RequireAuth>}></Route>
        <Route path='/my-items' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
