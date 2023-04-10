import { getShoppingCart } from "./utilities/fakeDb";

const appliedData = async () =>{
    const jobData = await fetch('feature-data.json')
    const jobs = await jobData.json();

    const appliedJob = getShoppingCart()
        let saveJob = []
        for(const id in appliedJob){
            const addedJob = jobs.find(job => job.id === id);
            if(addedJob){
                const quantity = appliedJob[id];
                addedJob.quantity = quantity;
                saveJob.push(addedJob)
            }
        }

    return saveJob; 
}

export default appliedData;