import { useState, useEffect } from "react";

export function ListDisclosures(){
    const discloseUrl = '';
    const [disclosures, setDisclosures] = useState([]);
    useEffect(() => {
        //fetch()
    }, []);
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
                            <th>Date submitted</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {disclosures.map(x => (
                        <tr>
                            <td>x.fullName</td>
                            <td>x.email</td>
                            <td>x.createDate</td>
                            <td>
                                <a href="#">details</a>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            )}
        </>
    );
}