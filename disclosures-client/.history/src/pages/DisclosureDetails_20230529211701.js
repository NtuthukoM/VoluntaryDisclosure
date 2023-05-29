import { useState } from "react";
import {NavLink} from "react-router-dom"

export function DisclosureDetails(){
    const [disclose, setDisclosure] = useState(null);
    let discloseId = location.pathname.split('/')[2];
    const response = fetch(discloseUrl, ops)
    .then(() => {
        setSubmitting(false);
        console.log('redirecting');
       return redirect("/submitted");
    }).catch(exc => console.log(`error ${exc}`));    
    return (
        <>
            <nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        {
            disclose !== null &&
            <label>{disclosure.fullName}</label>
        }
        </>
    )
}