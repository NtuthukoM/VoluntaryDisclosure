import {NavLink} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav>
                <NavLink to="/" className={(isActive) => isActive ? "active" : "go-to"}>Create </Link>
                <NavLink to="/list" className={(isActive) => isActive ? "active" : ""}>List </Link>
            </nav>
        </>
    )
}