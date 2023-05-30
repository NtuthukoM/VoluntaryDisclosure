import { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import { discloseUrl} from '../models/models';
import { Nav} from '../components/nav';

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
   <Nav />

            <div class="card  col-md-8 offset-md-2">
  <h5 className="card-header">Disclosure Details</h5>
  <div className="card-body">
             
        {
            disclosure !== null &&
            <div>           
            <div>
                <label>
                    Name
                </label>
                {disclosure.fullName}
            </div>

            <div>
                <label>
                    Email
                </label>
                {disclosure.email}
            </div>


            <div>
                <label>
                    Do you have a criminal record/are you engaged in a current legal proceeding?
                </label>
                {disclosure.criminalRecord ? 'Yes' : 'No'}
            </div>    
            <div>
                <label>
                Are you or have you ever been listed on the REDS banking database?
                </label>
                {disclosure.redsBankingDbListed ? 'Yes' : 'No'}
            </div>   
            <div>
                <label>
                Do you have any negative listings on your credit record (to the best of your knowledge)?
                </label>
                {disclosure.negativeCreditListing ? 'Yes' : 'No'}
            </div>   
            <div>
                <label>
                Have you ever been put through a performance management/disciplinary process?
                </label>
                {disclosure.performanceManagementPlaced ? 'Yes' : 'No'}
            </div>   
            <div>
                <label>
                Do your beliefs/values prevent you from working in any industry (such as gambling / liquor)?
                </label>
                {disclosure.ethicalIndustringRestriction ? 'Yes' : 'No'}
            </div> 
             </div>   
        }
          </div>
</div>  
<p className="offset-md-">
<nav>
                <NavLink to="/list" className={({isActive}) => isActive ? "active" : ""}>back to list </NavLink>
            </nav>
</p>
        </>
    )
}