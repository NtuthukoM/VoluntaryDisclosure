import {NavLink} from "react-router-dom"

export function DisclosureDetails(){
    let disclose       ;
    return (
        <>
            <nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        </>
    )
}