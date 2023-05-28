import { useState, useEffect } from "react";

export function ListDisclosures(){
    const [disclosures, setDisclosures] = useState([]);
    useEffect(() => {}, [])
    return (
        <>
            <h2>Submitted Voluntary Disclosures</h2>
            {disclosures.length == 0 && 
                <p>No forms have been submitted.</p>
            }
            {disclosures.length > 0 && (

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {disclosures.map(x => (
                        <tr>
                            <td>x.fullName</td>
                            <td>x.email</td>
                        </tr>))}
                    </tbody>
                </table>
            )}
        </>
    );
}