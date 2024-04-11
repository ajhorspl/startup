import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login'
import { AuthState } from './login/authState';
import { Home } from './home/home'
import { Contents } from './contents/contents'
import { Payees } from './payees/payees'
import { AddContent } from './addcontent/addcontent'
import { AddPayee } from './addpayee/addpayee'

function App() {

  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
    <div className = 'top'>

    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <h1>The Film Festival Almanac</h1>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className='nav-item'>
                <NavLink className='nav-link' to=''>
                  Login
                </NavLink>
              </li>
              {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to='home'>Home</NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to='contents'>Content</NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link"  to='payees'>Payee</NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to='addcontent'>Add Content</NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className="nav-item">
                <NavLink className="nav-link" to='addpayee'>Add Payee</NavLink>
              </li>
              )}
              {authState === AuthState.Authenticated && (
              <li className = "nav-item">
                <button className="nav-link">Generate CSV</button>
              </li>
              )}
            </ul>
          </div>
          <div>
            <h5 className="username"></h5>
          </div>
          <div>
            <form method="get" action="index.html">
              <button type="submit">Logout</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
    
    
    <Routes>
        <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
        <Route path = '/home' element = {<Home/>} exact/>
        <Route path = '/contents' element = {<Contents/>} exact/>
        <Route path = '/payees' element = {<Payees/>} exact/>
        <Route path = '/addcontent' element = {<AddContent/>} exact/>
        <Route path = '/addpayee' element = {<AddPayee/>} exact/>
        <Route path='*' element={<NotFound />} />
    </Routes>

    <footer className="bg-dark text-white-50">
      <div className="container-fluid">
        <span className="text-reset">AJ Horspool</span>
        <a className="text-reset" href="https://github.com/ajhorspl/startup.git">GitHub</a>
      </div>
    </footer>
  </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
