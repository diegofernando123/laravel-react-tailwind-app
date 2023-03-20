import Controller from '../../Providers/Controller';
import { Outlet } from 'react-router-dom';
import { Button, Field } from '../../Components';
import React, { useState } from 'react';
import ProgressBar from 'react-customizable-progressbar';
import Moment from 'react-moment';

import Appointment from '../../Components/Card/Appointment';
import Link from '../../Components/Link';
import Spacer from '../../Components/Sidebar/Spacer';
import Item from '../../Components/Sidebar/Item';


const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Users',
};
export default Controller(Properties, (): JSX.Element => {

    const [volume, setVolume] = useState(0)

    const handleChange = (value: any) => {
        setVolume(value)
    }

    return (
        <>
            <div className="px-12 py-10 w-full bg-gray-100">
                <h1 className="text-black text-4xl title-font font-medium">Apppointments</h1>
                <div className="flex flex-wrap -mx-3 mt-4">
                    <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 py-2 sm:py-3 p-3 overflow-y-auto">
                        <div className="rounded-xl border p-6 flex flex-col bg-white">
                            <h2 className="text-black text-xl title-font font-medium">
                                <Moment format="dddd MMMM Do"></Moment>
                            </h2>
                            
                            <div className="w-full">
                                <div className="inline-block w-full p-3">
                                    <Item to={`/appointments`}>
                                        <Appointment
                                            name={`Guy Hawikins`}
                                            address={`Attend Appointment`}
                                            type={'video-call'}
                                            date={'2021-04-13T18:30:00.000Z'}
                                            time={'2021-04-14T18:30:00.000Z'}
                                        />
                                    </Item>
                                    <Spacer />
                                    <Item to={`/`}>
                                        <div className="h-full w-full cursor-default overflow-hidden relative group ease-in-out">
                                            <h3 className="text-black text-lg title-font font-medium mb-2">Victor Jackson</h3>
                                            <div className="flex justify-between w-full mb-3">
                                                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M13.9375 1.25H12.5V0.5C12.5 0.223875 12.2762 0 12 0C11.7238 0 11.5 0.223875 11.5 0.5V1.25H4.5V0.5C4.5 0.223875 4.27616 0 4 0C3.72384 0 3.5 0.223875 3.5 0.5V1.25H2.0625C0.925219 1.25 0 2.17522 0 3.3125V13.9375C0 15.0748 0.925219 16 2.0625 16H13.9375C15.0748 16 16 15.0748 16 13.9375V3.3125C16 2.17522 15.0748 1.25 13.9375 1.25ZM2.0625 2.25H3.5V2.75C3.5 3.02612 3.72384 3.25 4 3.25C4.27616 3.25 4.5 3.02612 4.5 2.75V2.25H11.5V2.75C11.5 3.02612 11.7238 3.25 12 3.25C12.2762 3.25 12.5 3.02612 12.5 2.75V2.25H13.9375C14.5234 2.25 15 2.72662 15 3.3125V4.5H1V3.3125C1 2.72662 1.47662 2.25 2.0625 2.25ZM13.9375 15H2.0625C1.47662 15 1 14.5234 1 13.9375V5.5H15V13.9375C15 14.5234 14.5234 15 13.9375 15Z"
                                                            fill="#2885C5"
                                                        />
                                                    </svg>

                                                    <span className="text-center text-gray-600">
                                                        <Moment format="dddd MMMM Do"></Moment>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between w-full mb-3">
                                                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M8 0C3.58888 0 0 3.58888 0 8C0 12.4111 3.58888 16 8 16C12.4111 16 16 12.4111 16 8C16 3.58888 12.4111 0 8 0ZM8 15C4.14013 15 1 11.8599 1 8C1 4.14013 4.14013 1 8 1C11.8599 1 15 4.14013 15 8C15 11.8599 11.8599 15 8 15V15Z"
                                                            fill="#2885C5"
                                                        />
                                                        <path d="M8.5 3H7.5V8.20702L10.6465 11.3535L11.3535 10.6465L8.5 7.79296V3Z" fill="#2885C5" />
                                                    </svg>

                                                    <span className="text-center text-gray-600">
                                                        <Moment format="hh:mm a" />
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="flex justify-between w-full mb-3">
                                                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                                                    <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.08559 16.7782C6.17796 16.9168 6.33349 17 6.5 17C6.66651 17 6.82204 16.9168 6.91441 16.7782C8.09309 15.0102 9.82918 12.8268 11.039 10.6061C12.0063 8.83054 12.4766 7.31618 12.4766 5.97656C12.4766 2.68109 9.79548 0 6.5 0C3.20452 0 0.523438 2.68109 0.523438 5.97656C0.523438 7.31618 0.993693 8.83054 1.96103 10.6061C3.16993 12.8251 4.90934 15.0139 6.08559 16.7782ZM6.5 0.996094C9.24623 0.996094 11.4805 3.23033 11.4805 5.97656C11.4805 7.14545 11.0499 8.50392 10.1643 10.1296C9.12145 12.0437 7.63336 13.9854 6.5 15.6177C5.36681 13.9856 3.87861 12.0438 2.83574 10.1296C1.95008 8.50392 1.51953 7.14545 1.51953 5.97656C1.51953 3.23033 3.75377 0.996094 6.5 0.996094Z"
                                                            fill="#2885C5"
                                                        />
                                                        <path
                                                            d="M6.5 8.96484C8.14774 8.96484 9.48828 7.6243 9.48828 5.97656C9.48828 4.32882 8.14774 2.98828 6.5 2.98828C4.85226 2.98828 3.51172 4.32882 3.51172 5.97656C3.51172 7.6243 4.85226 8.96484 6.5 8.96484ZM6.5 3.98438C7.59849 3.98438 8.49219 4.87807 8.49219 5.97656C8.49219 7.07505 7.59849 7.96875 6.5 7.96875C5.40151 7.96875 4.50781 7.07505 4.50781 5.97656C4.50781 4.87807 5.40151 3.98438 6.5 3.98438Z"
                                                            fill="#2885C5"
                                                        />
                                                    </svg>
                                                    <span className="text-center text-gray-600">Attend Appointment</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Item>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 xl:w-3/4 py-2 sm:py-3 p-3 overflow-y-auto">
                        <div className="rounded-xl border flex flex-col bg-white overflow-x-auto">
                            <div className="w-full">
                                <div className="flex items-center justify-between p-4">
                                    <div className="flex flex-row items-end gap-6 bg-white rounded-b">
                                        <button className="bg-blue-500 py-1 w-28 text-white rounded">
                                            Upcoming
                                        </button>
                                        <button className="text-blue-500 bg-blue-100 py-1 w-20 rounded">
                                            Past
                                        </button>
                                    </div>
                                    <div>
                                        <div className="py-1 px-2 flex items-center text-sm font-medium leading-none border text-gray-600 bg-white cursor-pointer rounded">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 7H19" stroke="#464E57" stroke-width="2" stroke-linecap="round" />
                                                <path d="M5 12H15" stroke="#464E57" stroke-width="2" stroke-linecap="round" />
                                                <path d="M5 17H11" stroke="#464E57" stroke-width="2" stroke-linecap="round" />
                                            </svg>
                                            <p>Sort By:</p>
                                            <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1 w-10">
                                                <option className="text-sm">All</option>
                                                <option className="text-sm">Video</option>
                                                <option className="text-sm">In person</option>
                                                <option className="text-sm">Telephone</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row bg-white border">
                                    <div className="w-full md:w-1/3 flex flex-col border-r min-w-[280px]">
                                        <div className="font-medium text-black text-lg py-2 px-6 pr-4 border-b">
                                            <Moment format="d MMMM"></Moment>
                                            <p className="text-sm text-gray-400"><Moment format="dddd"></Moment></p>
                                        </div>
                                        <div className='px-4 pr-4'>
                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Victor Jacson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Darlene Robertson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-col border-r min-w-[280px]">
                                        <div className="font-medium text-black text-lg py-2 px-6 pr-4 border-b">
                                            <Moment format="d MMMM"></Moment>
                                            <p className="text-sm text-gray-400"><Moment format="dddd"></Moment></p>
                                        </div>
                                        <div className='px-4 pr-4'>
                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Victor Jacson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Darlene Robertson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-col border-r min-w-[280px]">
                                        <div className="font-medium text-black text-lg py-2 px-6 pr-4 border-b">
                                            <Moment format="d MMMM"></Moment>
                                            <p className="text-sm text-gray-400"><Moment format="dddd"></Moment></p>
                                        </div>
                                        <div className='px-4 pr-4'>
                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Victor Jacson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Darlene Robertson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-col border-r min-w-[280px]">
                                        <div className="font-medium text-black text-lg py-2 px-6 pr-4 border-b">
                                            <Moment format="d MMMM"></Moment>
                                            <p className="text-sm text-gray-400"><Moment format="dddd"></Moment></p>
                                        </div>
                                        <div className='px-4 pr-4'>
                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Victor Jacson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Darlene Robertson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 flex flex-col border-r min-w-[280px]">
                                        <div className="font-medium text-black text-lg py-2 px-6 pr-4 border-b">
                                            <Moment format="d MMMM"></Moment>
                                            <p className="text-sm text-gray-400"><Moment format="dddd"></Moment></p>
                                        </div>
                                        <div className='px-4 pr-4'>
                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Victor Jacson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Darlene Robertson`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>

                                            <div className="rounded-md border border-t-8 border-t-blue-200 border-gray-300 p-3 flex flex-col mt-4">
                                                <Appointment
                                                    name={`Theresa Webb`}
                                                    address={`Attend Appointment`}
                                                    type={'video-call'}
                                                    date={'2021-04-13T18:30:00.000Z'}
                                                    time={'2021-04-14T18:30:00.000Z'}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});