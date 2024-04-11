import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login'
import { Home } from './home/home'
import { Contents } from './contents/contents'
import { Payees } from './payees/payees'
import { AddContent } from './addcontent/addcontent'
import { AddPayee } from './addpayee/addpayee'

function App() {
  return (
    <BrowserRouter>
    <div class = 'top'>

    <header class="sticky-top">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <h1>The Film Festival Almanac</h1>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink class="nav-link" to='home'>Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to='contents'>Content</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link"  to='payees'>Payee</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to='addcontent'>Add Content</NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to='addpayee'>Add Payee</NavLink>
              </li>
              <li class = "nav-item">
                <button class="nav-link">Generate CSV</button>
              </li>
            </ul>
          </div>
          <div>
            <h5 class="username"></h5>
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
        <Route path = '/' element = {<Login/>} exact/>
        <Route path = '/home' element = {<Home/>} exact/>
        <Route path = '/contents' element = {<Contents/>} exact/>
        <Route path = '/payees' element = {<Payees/>} exact/>
        <Route path = '/addcontent' element = {<AddContent/>} exact/>
        <Route path = '/addpayee' element = {<AddPayee/>} exact/>
        <Route path='*' element={<NotFound />} />
    </Routes>

    <footer class="bg-dark text-white-50">
      <div class="container-fluid">
        <span class="text-reset">AJ Horspool</span>
        <a class="text-reset" href="https://github.com/ajhorspl/startup.git">GitHub</a>
      </div>
    </footer>
  </div>
  </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
