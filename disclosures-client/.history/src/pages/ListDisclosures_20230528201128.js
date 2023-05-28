import { useState, useEffect } from "react";
import { discloseUrl} from '../models/models';

export function ListDisclosures(){
    
    const [disclosures, setDisclosures] = useState([]);
    useEffect(() => {
        fetch(discloseUrl).then
    }, []);
    return (
        <>
            <h2>Submitted Voluntary Disclosures</h2>
            {disclosures.length == 0 && 
                <p>No forms have been submitted.</p>
            }
            {disclosures.length > 0 && (
                <>
                <input type="text" placeholder="Search" />
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
                </>
            )}
        </>
    );
}