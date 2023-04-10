import { faBeerMugEmpty } from "@fortawesome/free-solid-svg-icons";

const getData = async () =>{
    const jobs = await fetch('feature-data.json');
    const jobData = await jobs.json();
    return jobData;
}

export default getData