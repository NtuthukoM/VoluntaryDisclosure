import {Link} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav>
                <Link to="/" className={(isActive) => isActive ?}>Create </Link>
                <Link to="/list">List </Link>
            </nav>
        </>
    )
}