import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TabCategories = () => {
    const [allJobs, setAllJobs] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
            setAllJobs(data)
        }
        getData()
    }, [])
    return (
        <div className='py-11 ' >
            <h1 className='text-4xl text-center' >Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
            <h1 className='text-center px-8 mx-auto mb-9 ' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit sapiente ea asperiores magni illum distinctio nemo laboriosam! Voluptas placeat eveniet velit animi hic dolorum et blanditiis est distinctio, saepe consequuntur nesciunt totam, aut deserunt inventore repellat. Id sequi laudantium neque.</h1>
            <Tabs>
                <div className='flex items-center justify-center' >
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4' >
                        {
                            allJobs
                                .filter(j => j.category === "Webdevelopment")
                                .map(job => <JobCard key={job._id} job={job} ></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4' >
                        {
                            allJobs
                                .filter(j => j.category === "Graphics design")
                                .map(job => <JobCard key={job._id} job={job} ></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4' >
                        {
                            allJobs
                                .filter(j => j.category === "Digital marketing")
                                .map(job => <JobCard key={job._id} job={job} ></JobCard>)
                        }
                    </div>
                </TabPanel>


            </Tabs>
        </div>
    );
};

export default TabCategories;

