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
        .catch(exc => console.log(`error: ${exc}`));
    }, []);    
    return (
        <>
            <nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
        <h2>Disclosure Details</h2>
        {
            disclosure !== null &&
            <div>

           
            <div>
                <strong>
                    Name
                </strong>
                {disclosure.fullName}
            </div>

            <div>
                <strong>
                    Email
                </strong>
                {disclosure.email}
            </div>


            <div>
                <strong>
                    Do you have a criminal record/are you engaged in a current legal proceeding?
                </strong>
                {disclosure.criminalRecord ? 'Yes' : 'No'}
            </div>    
            <div>
                <strong>
                Are you or have you ever been listed on the REDS banking database?
                </strong>
                {disclosure.redsBankingDbListed ? 'Yes' : 'No'}
            </div>   
            <div>
                <strong>
                Do you have any negative listings on your credit record (to the best of your knowledge)?
                </strong>
                {disclosure.negativeCreditListing ? 'Yes' : 'No'}
            </div>   
            <div>
                <strong>
                Have you ever been put through a performance management/disciplinary process?
                </strong>
                {disclosure.performanceManagementPlaced ? 'Yes' : 'No'}
            </div>   
            <div>
                <strong>
                Do your beliefs/values prevent you from working in any industry (such as gambling / liquor)?
                </strong>
                {disclosure.ethicalIndustringRestriction ? 'Yes' : 'No'}
            </div> 
             </div>   
        }
        </>
    )
}