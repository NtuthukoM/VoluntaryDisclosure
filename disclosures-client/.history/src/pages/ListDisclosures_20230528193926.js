export function CreateDisclosures(){

    return (
        <>
            <h1>Voluntary Disclosure Form</h1>
            <p>
                Thank you for meeting with us to discuss your career goals and potential future growth at Dariel.
                As a consulting business, our people often have to work in highly regulated industries.
                As such, we need to know if there are any potential blockers to you working in certain industries or for certain businesses.
                We'd like to ask you to disclose or confirm a couple of things before we get too far into our process so we can address and hopefully overcome them early:                
            </p>
            <div>
                <label>
                    Name
                    <input type="text" />
                </label>
            </div>


            <div>
                <label>
                    Do you have a criminal record/are you engaged in a current legal proceeding?
                    <input type="checkbox" />
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
                    
                    <input type="checkbox" />
                </label>
            </div>   
            <div>
                <label>
                    
                    <input type="checkbox" />
                </label>
            </div>           
        </>
    );
}