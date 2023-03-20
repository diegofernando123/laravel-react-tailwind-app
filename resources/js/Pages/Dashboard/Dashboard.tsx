import Controller from '../../Providers/Controller';
import { Outlet } from 'react-router-dom';
import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import AppointmentCard from '../../Components/Card/AppointmentCard';
import Link from '../../Components/Link';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\Users',
};
export default Controller(Properties, (): JSX.Element => {
    const currentSkill = {
        'title': 'HTML',
        'percent': '95',
    };
    return (
        <>
            <div className="px-12 py-10 mx-auto bg-gray-100">
                <div className="flex items-center mb-3 justify-between">
                    <h1 className="text-black text-4xl title-font font-medium">Welcome, Brad!</h1>
                    <div>
                        <div className="grid grid-cols-6 gap-3 bg-blue-600 p-5 rounded-lg">
                            <div className="col-span-1">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.23" d="M24 46C26.8891 46 29.7499 45.431 32.419 44.3253C35.0882 43.2197 37.5135 41.5992 39.5564 39.5563C41.5992 37.5135 43.2197 35.0882 44.3254 32.419C45.431 29.7499 46 26.8891 46 24C46 21.1109 45.431 18.2501 44.3253 15.581C43.2197 12.9118 41.5992 10.4865 39.5563 8.44365C37.5135 6.40076 35.0882 4.78025 32.419 3.67465C29.7499 2.56905 26.8891 2 24 2C21.1109 2 18.2501 2.56905 15.581 3.67465C12.9118 4.78026 10.4865 6.40076 8.44365 8.44365C6.40076 10.4865 4.78025 12.9118 3.67465 15.581C2.56905 18.2501 2 21.1109 2 24C2 26.8891 2.56905 29.7499 3.67465 32.419C4.78026 35.0882 6.40077 37.5135 8.44366 39.5564C10.4865 41.5992 12.9118 43.2197 15.581 44.3254C18.2501 45.431 21.1109 46 24 46L24 46Z" stroke="white" stroke-width="4" />
                                    <path d="M11.0146 6.24108C7.2689 8.97995 4.48512 12.833 3.06129 17.2494C1.63746 21.6658 1.64651 26.4193 3.08713 30.8302C4.52775 35.2411 7.32618 39.0836 11.0823 41.8082C14.8384 44.5328 19.3598 46 24 46" stroke="white" stroke-width="4" stroke-linecap="round" />
                                    <path d="M13.418 24.4473H14.6553C16.0635 24.4473 16.9385 25.165 16.9385 26.3271C16.9385 27.3594 16.002 28.0977 14.6963 28.0977C13.3701 28.0977 12.5293 27.4004 12.4199 26.3887H11.2373C11.3262 28.0225 12.6455 29.1641 14.71 29.1641C16.6445 29.1641 18.1895 27.9814 18.1895 26.2861C18.1895 24.8984 17.2324 23.9756 15.7422 23.8867V23.8594C16.9727 23.6406 17.7656 22.752 17.7656 21.5146C17.7656 20.0312 16.4326 18.9717 14.6689 18.9717C12.8164 18.9717 11.5723 20.0449 11.4355 21.7197H12.6182C12.7275 20.6875 13.4795 20.0381 14.6143 20.0381C15.8652 20.0381 16.5283 20.7012 16.5283 21.6787C16.5283 22.6768 15.7354 23.4082 14.6006 23.4082H13.418V24.4473ZM23.084 29.1641C25.1416 29.1641 26.5977 27.7764 26.5977 25.7939C26.5977 23.8799 25.2305 22.4922 23.3369 22.4922C22.3936 22.4922 21.5732 22.8477 21.1289 23.4424H21.1016L21.4023 20.2295H26.0371V19.1357H20.3906L19.8506 24.6592H21.0059C21.4092 23.9688 22.1953 23.5518 23.1182 23.5518C24.4307 23.5518 25.3672 24.502 25.3672 25.8281C25.3672 27.1543 24.4375 28.084 23.0977 28.084C21.915 28.084 21.0195 27.3594 20.9102 26.3066H19.7002C19.8027 27.9883 21.1973 29.1641 23.084 29.1641ZM29.209 29L36.4141 19.1357H35.2383L28.0195 29H29.209ZM37.0498 26.6484C37.0498 25.165 36.2363 24.1943 34.9854 24.1943C33.7344 24.1943 32.9141 25.165 32.9141 26.6484C32.9141 28.1387 33.7344 29.1094 34.9854 29.1094C36.2363 29.1094 37.0498 28.1387 37.0498 26.6484ZM34.9854 28.2754C34.3838 28.2754 34.0078 27.6465 34.0078 26.6484C34.0078 25.6572 34.3838 25.0352 34.9854 25.0352C35.6006 25.0352 35.9561 25.6367 35.9561 26.6484C35.9561 27.6533 35.5869 28.2754 34.9854 28.2754ZM31.5605 21.4668C31.5605 19.9834 30.7471 19.0127 29.4961 19.0127C28.2451 19.0127 27.4248 19.9834 27.4248 21.4668C27.4248 22.957 28.2451 23.9277 29.4961 23.9277C30.7471 23.9277 31.5605 22.957 31.5605 21.4668ZM29.4961 23.0938C28.8945 23.0938 28.5186 22.4648 28.5186 21.4668C28.5186 20.4756 28.8945 19.8535 29.4961 19.8535C30.1113 19.8535 30.4668 20.4551 30.4668 21.4668C30.4668 22.4717 30.0977 23.0938 29.4961 23.0938Z" fill="white" />
                                </svg>
                            </div>
                            <div className="col-span-5">
                                <p className="text-white font-bold">Complete your profile</p>
                                <p className="text-white mt-1">Setup to begin counselling today</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 border-b">
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-lg title-font font-medium">Profile info</h2>
                                <div>
                                    <Link variant="standard" to="/modal-step">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 12L16.5303 11.4697L17.0607 12L16.5303 12.5303L16 12ZM8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25V12.75ZM12.5303 7.46967L16.5303 11.4697L15.4697 12.5303L11.4697 8.53033L12.5303 7.46967ZM16.5303 12.5303L12.5303 16.5303L11.4697 15.4697L15.4697 11.4697L16.5303 12.5303ZM16 12.75H8V11.25H16V12.75Z" fill="#4B84EE" />
                                            <circle cx="12" cy="12" r="8.25" stroke="#4B84EE" stroke-width="1.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-grow mb-5">
                                <p className="leading-relaxed text-sm text-gray-400">Сomplete your profile to allow clients to learn about you</p>

                            </div>
                            <div className="flex items-center justify-between">
                                <span className="px-2 text-xs rounded w-20 h-6 flex items-center justify-center bg-yellow-100 text-gray-500 cursor-pointer">
                                    In Progress
                                </span>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8.25" stroke="#C1C5CB" stroke-width="1.5" />
                                        <path d="M11.1011 16.5V10.568H12.8989V16.5H11.1011ZM12.704 9.23605C12.5114 9.43061 12.2756 9.52789 11.9964 9.52789C11.7172 9.52789 11.4813 9.43061 11.2888 9.23605C11.0963 9.03651 11 8.79705 11 8.51769C11 8.23333 11.0963 7.99388 11.2888 7.79932C11.4813 7.59977 11.7172 7.5 11.9964 7.5C12.2756 7.5 12.5114 7.59977 12.704 7.79932C12.9013 7.99388 13 8.23333 13 8.51769C13 8.79705 12.9013 9.03651 12.704 9.23605Z" fill="#C1C5CB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-lg title-font font-medium">Documents</h2>
                                <div>
                                    <Link variant="standard" to="/document-step">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 12L16.5303 11.4697L17.0607 12L16.5303 12.5303L16 12ZM8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25V12.75ZM12.5303 7.46967L16.5303 11.4697L15.4697 12.5303L11.4697 8.53033L12.5303 7.46967ZM16.5303 12.5303L12.5303 16.5303L11.4697 15.4697L15.4697 11.4697L16.5303 12.5303ZM16 12.75H8V11.25H16V12.75Z" fill="#4B84EE" />
                                            <circle cx="12" cy="12" r="8.25" stroke="#4B84EE" stroke-width="1.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-grow mb-5">
                                <p className="leading-relaxed text-sm text-gray-400">Upload your insurance and qualifiactions to verify yourself</p>

                            </div>
                            <div className="flex items-center justify-between">
                                <span className="px-2 text-xs rounded w-20 h-6 flex items-center justify-center bg-blue-100 text-blue-600 cursor-pointer">
                                    Checking
                                </span>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8.25" stroke="#C1C5CB" stroke-width="1.5" />
                                        <path d="M11.1011 16.5V10.568H12.8989V16.5H11.1011ZM12.704 9.23605C12.5114 9.43061 12.2756 9.52789 11.9964 9.52789C11.7172 9.52789 11.4813 9.43061 11.2888 9.23605C11.0963 9.03651 11 8.79705 11 8.51769C11 8.23333 11.0963 7.99388 11.2888 7.79932C11.4813 7.59977 11.7172 7.5 11.9964 7.5C12.2756 7.5 12.5114 7.59977 12.704 7.79932C12.9013 7.99388 13 8.23333 13 8.51769C13 8.79705 12.9013 9.03651 12.704 9.23605Z" fill="#C1C5CB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-lg title-font font-medium">Billing Info</h2>
                                <div>
                                    <Link variant="standard" to="/billing-step">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 12L16.5303 11.4697L17.0607 12L16.5303 12.5303L16 12ZM8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25V12.75ZM12.5303 7.46967L16.5303 11.4697L15.4697 12.5303L11.4697 8.53033L12.5303 7.46967ZM16.5303 12.5303L12.5303 16.5303L11.4697 15.4697L15.4697 11.4697L16.5303 12.5303ZM16 12.75H8V11.25H16V12.75Z" fill="#4B84EE" />
                                            <circle cx="12" cy="12" r="8.25" stroke="#4B84EE" stroke-width="1.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-grow mb-5">
                                <p className="leading-relaxed text-sm text-gray-400">Connect your bank account to receive payments from clients</p>

                            </div>
                            <div className="flex items-center justify-between">
                                <span className="px-2 text-xs rounded w-20 h-6 flex items-center justify-center bg-green-100 text-green-600 cursor-pointer">
                                    Approved
                                </span>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8.25" stroke="#C1C5CB" stroke-width="1.5" />
                                        <path d="M11.1011 16.5V10.568H12.8989V16.5H11.1011ZM12.704 9.23605C12.5114 9.43061 12.2756 9.52789 11.9964 9.52789C11.7172 9.52789 11.4813 9.43061 11.2888 9.23605C11.0963 9.03651 11 8.79705 11 8.51769C11 8.23333 11.0963 7.99388 11.2888 7.79932C11.4813 7.59977 11.7172 7.5 11.9964 7.5C12.2756 7.5 12.5114 7.59977 12.704 7.79932C12.9013 7.99388 13 8.23333 13 8.51769C13 8.79705 12.9013 9.03651 12.704 9.23605Z" fill="#C1C5CB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-lg title-font font-medium">Availability</h2>
                                <div>
                                    <Link variant="standard" to="/availability-step">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 12L16.5303 11.4697L17.0607 12L16.5303 12.5303L16 12ZM8 12.75C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25V12.75ZM12.5303 7.46967L16.5303 11.4697L15.4697 12.5303L11.4697 8.53033L12.5303 7.46967ZM16.5303 12.5303L12.5303 16.5303L11.4697 15.4697L15.4697 11.4697L16.5303 12.5303ZM16 12.75H8V11.25H16V12.75Z" fill="#4B84EE" />
                                            <circle cx="12" cy="12" r="8.25" stroke="#4B84EE" stroke-width="1.5" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-grow mb-5">
                                <p className="leading-relaxed text-sm text-gray-400">Set your availability to make yourself visible to clients</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="px-2 text-xs rounded w-20 h-6 flex items-center justify-center bg-green-100 text-green-600 cursor-pointer">
                                    Approved
                                </span>
                                <div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="8.25" stroke="#C1C5CB" stroke-width="1.5" />
                                        <path d="M11.1011 16.5V10.568H12.8989V16.5H11.1011ZM12.704 9.23605C12.5114 9.43061 12.2756 9.52789 11.9964 9.52789C11.7172 9.52789 11.4813 9.43061 11.2888 9.23605C11.0963 9.03651 11 8.79705 11 8.51769C11 8.23333 11.0963 7.99388 11.2888 7.79932C11.4813 7.59977 11.7172 7.5 11.9964 7.5C12.2756 7.5 12.5114 7.59977 12.704 7.79932C12.9013 7.99388 13 8.23333 13 8.51769C13 8.79705 12.9013 9.03651 12.704 9.23605Z" fill="#C1C5CB" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -m-4 border-b mt-4">
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-base title-font font-medium">Appointments</h2>
                            </div>
                            <div className="flex-grow mb-8">
                                <p className="leading-relaxed text-sm text-gray-400">Last 30 days</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-black text-2xl title-font font-medium">5</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-base title-font font-medium">Appointments</h2>
                            </div>
                            <div className="flex-grow mb-8">
                                <p className="leading-relaxed text-sm text-gray-400">Next 30 days</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-black text-2xl title-font font-medium">0</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-base title-font font-medium">Payments</h2>
                            </div>
                            <div className="flex-grow mb-8">
                                <p className="leading-relaxed text-sm text-gray-400">Last 30 days</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-black text-2xl title-font font-medium">$0.00</h1>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/4 w-1/2">
                        <div className="flex rounded-lg bg-white p-6 flex-col">
                            <div className="flex items-center mb-3 justify-between">
                                <h2 className="text-black text-lg title-font font-medium">Availability</h2>
                            </div>
                            <div className="flex-grow mb-8">
                                <p className="leading-relaxed text-sm text-gray-400">Next 30 days</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <h1 className="text-black text-2xl title-font font-medium">0</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mt-4">
                    <div className="w-full md:w-1/2 lg:w-2/5 xl:w-1/4 py-2 sm:py-3 p-3">
                        <h2 className="text-black text-lg title-font font-medium mb-4">Next Appointment</h2>
                        <div className="rounded-xl border p-2 flex flex-col bg-white">
                            <div className="w-full">
                                <div className="inline-block w-full p-3">
                                    <AppointmentCard
                                        name={`Mia`}
                                        address={`Attend Appointment`}
                                        type={'video-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                        next_appointment="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-3/5 xl:w-3/4 py-2 sm:py-3 p-3">
                        <h2 className="text-black text-lg title-font font-medium mb-4">Upcoming appointments</h2>
                        <div className="rounded-xl border p-2 flex flex-col bg-white">
                            <div className="w-full overflow-x-auto flex">
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'telephone-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'video-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'telephone-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'telephone-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'video-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                                <div
                                    className="inline-block w-full lg:w-1/2 2xl:w-1/3 p-3 min-w-[350px]"
                                >
                                    <AppointmentCard
                                        name={`Lisa`}
                                        address={`Attend Appointment`}
                                        type={'telephone-call'}
                                        image={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'}
                                        date={'2021-04-13T18:30:00.000Z'}
                                        time={'2021-04-14T18:30:00.000Z'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});
