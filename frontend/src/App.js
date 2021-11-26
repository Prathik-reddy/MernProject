import React,{createContext,useReducer} from 'react';
import {Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import {initialState,reducer} from './Reducer/UseReducer'

export const UserContext = createContext();
const App = ()=> {

  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <>
    <UserContext.Provider value={{state,dispatch}}>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signout" element={<SignOut/>}/>
    </Routes>
    </UserContext.Provider>
    </>
  );
}
export default App;

