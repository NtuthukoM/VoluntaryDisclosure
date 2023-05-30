import {NavLink} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Disclosure</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/" className={({isActive}) => isActive ? "active nav-link" : "nav-link"}>Create </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/list" className={({isActive}) => isActive ? "active nav-link" : "nav-link"}>List </NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>            
        </>
    )
}