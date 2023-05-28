import {Link} from "react-router-dom"

export function Nav(){
    return (
        <>
            <nav>
                <Link to="/">Create </Link>
                <Link to="/">List </Link>
            </nav>
        </>
    )
}