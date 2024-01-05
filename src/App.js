import './App.css';
import Main from './components/Main';
import LoginTemplate from './components/LoginTemplate'
import { useState, useEffect } from "react";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: lightgrey;
  }
`
function App() {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem('id')
    console.log(user)
    if (user) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  },[])
  return (
    <div className="App">
      <GlobalStyle></GlobalStyle>
      {isLogin ? <Main setIsLogin={setIsLogin} /> : <LoginTemplate setIsLogin={setIsLogin}/>}
    </div> 
  );
}

export default App;