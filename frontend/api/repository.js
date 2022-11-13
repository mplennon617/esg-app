import axios from 'axios';

export class Repository {

    // TODO: Replace with new registered domain
    url = false ? 'http://localhost:5000' : 'http://localhost:5000';

    config = {
        headers: {
            Authorization: '*'
        }
    }

    // Profile GET request
    async getCompanyData(company){
        console.log("Calling get request with company",company);
        const res = await axios.get(`${this.url}/profiles/${company}`);
        return res.data;
    }

    // //logging in 
    // login(state){
    //     return new Promise((resolve, reject) => {
    //         console.log(state)
    //         axios.post(`${this.url}/login`, state, this.config).then(resp => {
    //             console.log(resp);
    //             resolve(resp);
    //         })
    //         .catch(e => {
    //             console.log("error");
    //             console.log(e);
    //         });
    //     })
    // }
} //end repository