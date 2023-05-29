import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import { discloseUrl} from '../models/models';

export function DisclosureDetails(){
    const [disclosure, setDisclosure] = useState(null);
    let discloseId = window.location.pathname.split('/')[2];
    useEffect(() => {
        console.log(`discloseId:${discloseId}`);
        fetch(`${discloseUrl}/${discloseId}`).then(x => x.json())
        .then(setDisclosure)
        .catch(exc => console.log(`${exc));
    }, []);    
    return (
        <>
            <nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        {
            disclosure !== null &&
            <label>{disclosure.fullName}</label>
        }
        </>
    )
}