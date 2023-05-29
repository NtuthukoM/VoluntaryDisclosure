import { useState } from "react";
import {NavLink} from "react-router-dom";


export function DisclosureDetails(){
    const [disclose, setDisclosure] = useState(null);
    let discloseId = location.pathname.split('/')[2];
    useEffect(() => {
        fetch(`${discloseUrl}/${discloseId}`).then(x => x.json())
        .then(setDisclosure)
        .catch(exc => console.log(exc));
    }, []);    
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