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
        alert(`
            full name: ${fullName}\n
            email
        `)
        const ops = {};
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
                        console.log(e.target.value);
                        //setCriminalRecord(e.target.value);
                        }} />
                </label>
            </div>    
            <div>
                <label>
                Are you or have you ever been listed on the REDS banking database?
                    <input type="checkbox" />
                </label>
            </div>   
            <div>
                <label>
                Do you have any negative listings on your credit record (to the best of your knowledge)?
                    <input type="checkbox" />
                </label>
            </div>   
            <div>
                <label>
                Have you ever been put through a performance management/disciplinary process?
                    <input type="checkbox" />
                </label>
            </div>   
            <div>
                <label>
                Do your beliefs/values prevent you from working in any industry (such as gambling / liquor)?
                    <input type="checkbox" />
                </label>
            </div> 
            <div>
                <button>Send</button>
            </div>
             </form>          
        </>
    );
}