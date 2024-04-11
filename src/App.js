import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
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
                <a class="nav-link" href="home.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="content.html">Content</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"  href="payee.html">Payee</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="addcontent.html">Add Content</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="addpayee.html">Add Payee</a>
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
    <main class>HELLO</main>

    <footer class="bg-dark text-white-50">
      <div class="container-fluid">
        <span class="text-reset">AJ Horspool</span>
        <a class="text-reset" href="https://github.com/ajhorspl/startup.git">GitHub</a>
      </div>
    </footer>
  </div>
  );
}

export default App;
