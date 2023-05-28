import {NavLink} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav>
                <Link to="/" className={(isActive) => isActive ? "active" : "go-to"}>Create </Link>
                <Link to="/list" className={(isActive) => isActive ? "active" : ""}>List </Link>
            </nav>
        </>
    )
}