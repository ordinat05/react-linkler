import "./App.css";
import logo from "./images/logo192.png";
// import logo2 from "./images/logo512.png";
import Hakkimizda from "./Hakkimizda";
import Iletisim from "./Iletisim";
import Urunler from "./Urunler";
import Anasayfa from "./Anasayfa";

import { Link, Switch, Route, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Anasayfa
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/hakkimizda">
                  Hakkımızda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/urunler">
                  Ürünler
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/iletisim">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Anasayfa />
        </Route>
        <Route path="/hakkimizda">
          <Hakkimizda />
        </Route>
        <Route path="/urunler">
          <Urunler />
        </Route>
        <Route path="/iletisim">
          <Iletisim />
        </Route>
      </Switch>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="alert alert-secondary" role="alert">
              <Switch>
                <Route path="/:uzanti" children={<Child />}></Route>
              </Switch>
            </div>
          </div>
          <div className="col-md-12">
            <div className="alert alert-secondary" role="alert">
              ID : Anasayfa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Child() {
  let { uzanti } = useParams();
  return (
    <div>
      <h3>ID:{uzanti}</h3>
    </div>
  );
}
export default App;
