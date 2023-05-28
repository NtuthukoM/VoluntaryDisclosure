import { useState } from "react";
import { discloseUrl} from '../models/models';

export function CreateDisclosures(){
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [criminalRecord, setCriminalRecord] = useState(false);
    const [redsBankingDbListed, setRedsBankingDbListed] = useState(false);
    const [negativeCreditListing, setNegativeCreditListing] = useState(false);
    const [performanceManagementPlaced, setPerformanceManagementPlaced] = useState(false);
    const [ethicalIndustringRestriction, setEthicalIndustringRestriction] = useState(false);


    function onFormSubmit(e){
        e.preventDefault();
        let model = {
            fullName: fullName,
            email: email,
            criminalRecord: criminalRecord,
            redsBankingDbListed: redsBankingDbListed,
            negativeCreditListing: negativeCreditListing,
            performanceManagementPlaced: performanceManagementPlaced,
            ethicalIndustringRestriction: ethicalIndustringRestriction
        }
        const ops = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              redirect: "follow", // manual, *follow, error
              referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
              body: JSON.stringify(model), // body data type must match "Content-Type" header            
        };
        const response = fetch(discloseUrl, ops)
        .then(() => {
            alert('')
        });
    }
    return (
        <>
            <h2>Voluntary Disclosure Form</h2>
            <p>
                Thank you for meeting with us to discuss your career goals and potential future growth at Dariel.
                As a consulting business, our people often have to work in highly regulated industries.
                As such, we need to know if there are any potential blockers to you working in certain industries or for certain businesses.
                We'd like to ask you to disclose or confirm a couple of things before we get too far into our process so we can address and hopefully overcome them early:                
            </p>
            <form onSubmit={onFormSubmit}>

           
            <div>
                <label>
                    Name
                    <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value) } />
                </label>
            </div>

            <div>
                <label>
                    Email
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </label>
            </div>


            <div>
                <label>
                    Do you have a criminal record/are you engaged in a current legal proceeding?
                    <input type="checkbox" value={criminalRecord} onChange={e => {
                        setCriminalRecord(!criminalRecord);
                        }} />
                </label>
            </div>    
            <div>
                <label>
                Are you or have you ever been listed on the REDS banking database?
                    <input type="checkbox"  value={redsBankingDbListed} onChange={e => {
                        setRedsBankingDbListed(!redsBankingDbListed);
                        }} />
                </label>
            </div>   
            <div>
                <label>
                Do you have any negative listings on your credit record (to the best of your knowledge)?
                    <input type="checkbox"  value={negativeCreditListing} onChange={e => {
                        setNegativeCreditListing(!negativeCreditListing);
                        }} />
                </label>
            </div>   
            <div>
                <label>
                Have you ever been put through a performance management/disciplinary process?
                    <input type="checkbox"  value={performanceManagementPlaced} onChange={e => {
                        setPerformanceManagementPlaced(!performanceManagementPlaced);
                        }} />
                </label>
            </div>   
            <div>
                <label>
                Do your beliefs/values prevent you from working in any industry (such as gambling / liquor)?
                    <input type="checkbox"  value={ethicalIndustringRestriction} onChange={e => {
                        setEthicalIndustringRestriction(!ethicalIndustringRestriction);
                        }} />
                </label>
            </div> 
            <div>
                <button>Send</button>
            </div>
             </form>          
        </>
    );
}