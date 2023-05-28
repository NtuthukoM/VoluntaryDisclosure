import {Link} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav>
                <Link to="/" className={(isActive) => isActive ? "active" : "go-"}>Create </Link>
                <Link to="/list" className={(isActive) => isActive ? "active" : ""}>List </Link>
            </nav>
        </>
    )
}