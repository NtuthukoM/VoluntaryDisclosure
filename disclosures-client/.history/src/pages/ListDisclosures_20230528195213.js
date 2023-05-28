import { useState, useEffect } from "react";

export function ListDisclosures(){
    const [disclosures, setDisclosures] = useState([]);

    return (
        <>
            <h2>Submitted Voluntary Disclosures</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {disclosures.map(x => (<tr>
                        
                    </tr>))}
                </tbody>
            </table>
        </>
    );
}