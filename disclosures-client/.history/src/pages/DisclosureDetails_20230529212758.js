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
                    <input type="checkbox" value={criminalRecord} onChange={e => {
                        setCriminalRecord(!criminalRecord);
                        }}  disabled={submitting} />
                </label>
            </div>    
            <div>
                <label>
                Are you or have you ever been listed on the REDS banking database?
                    <input type="checkbox"  value={redsBankingDbListed} onChange={e => {
                        setRedsBankingDbListed(!redsBankingDbListed);
                        }}  disabled={submitting} />
                </label>
            </div>   
            <div>
                <label>
                Do you have any negative listings on your credit record (to the best of your knowledge)?
                    <input type="checkbox"  value={negativeCreditListing} onChange={e => {
                        setNegativeCreditListing(!negativeCreditListing);
                        }}  disabled={submitting} />
                </label>
            </div>   
            <div>
                <label>
                Have you ever been put through a performance management/disciplinary process?
                    <input type="checkbox"  value={performanceManagementPlaced} onChange={e => {
                        setPerformanceManagementPlaced(!performanceManagementPlaced);
                        }}  disabled={submitting} />
                </label>
            </div>   
            <div>
                <label>
                Do your beliefs/values prevent you from working in any industry (such as gambling / liquor)?
                    <input type="checkbox"  value={ethicalIndustringRestriction} onChange={e => {
                        setEthicalIndustringRestriction(!ethicalIndustringRestriction);
                        }}  disabled={submitting} />
                </label>
            </div> 
             </div>   
        }
        </>
    )
}