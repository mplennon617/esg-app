import { React, useState } from 'react';
import { Repository } from '../api/repository';

const Search = props => {

    const repo = new Repository();
    const [company, setCompany] = useState(0);

    const handleSearch = e => {
        console.log("Clicked search with company",company);
        repo.getCompanyData(company);
    }

    return (
        <>
            <div className="mb-3">
                <label htmlFor="companysearch" className="form-label">Company</label>
                <input  id="companysearch" className="form-control" 
                        onChange={e => setCompany(e.target.value)} placeholder="Enter Company Code..."></input>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleSearch}>Search</button>
        </>
    );
} 

export default Search;