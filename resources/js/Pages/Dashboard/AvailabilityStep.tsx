import { Button, Field, Modal } from '../../Components';
import Controller, { ControllerProperties } from '../../Providers/Controller';
import React, { SyntheticEvent } from 'react';

import { OfficeBuildingIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/solid';
import Link from '../../Components/Link';
import { useNavigate } from 'react-router-dom';

const Properties = {
    controller: 'App\\Http\\Controllers\\Users\\ModalSteps',
};

const AvailabilityStep = Controller(Properties, ({ dispatch, dispatching }: ControllerProperties): JSX.Element => {
    const navigate = useNavigate();
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('save');
        e.preventDefault();
    };

    return (
        <Modal.Window>
            <form {...{ onSubmit }} className="w-auto bg-black bg-opacity-25">
                <div className="p-2 flex flex-col md:flex-row bg-white mb-4 rounded">
                    <div className="w-1/4 flex flex-row items-center gap-2 py-4 px-6 pr-2">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#E6EEFD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.3739 17.6264C32.7644 18.0169 32.7644 18.6501 32.3739 19.0406L21.7072 29.7073C21.3167 30.0978 20.6835 30.0978 20.293 29.7073L14.9596 24.3739C14.5691 23.9834 14.5691 23.3502 14.9596 22.9597C15.3502 22.5692 15.9833 22.5692 16.3739 22.9597L21.0001 27.5859L30.9596 17.6264C31.3502 17.2359 31.9833 17.2359 32.3739 17.6264Z" fill="#4B84EE" />
                        </svg>

                        <div>
                            <p className="text-xs text-black text-left">Personal Info</p>
                            <p className="text-xs text-gray-400 text-left">Set up your info</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-row items-center gap-2 py-4 px-6 pr-2">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#E6EEFD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.3739 17.6264C32.7644 18.0169 32.7644 18.6501 32.3739 19.0406L21.7072 29.7073C21.3167 30.0978 20.6835 30.0978 20.293 29.7073L14.9596 24.3739C14.5691 23.9834 14.5691 23.3502 14.9596 22.9597C15.3502 22.5692 15.9833 22.5692 16.3739 22.9597L21.0001 27.5859L30.9596 17.6264C31.3502 17.2359 31.9833 17.2359 32.3739 17.6264Z" fill="#4B84EE" />
                        </svg>

                        <div>
                            <p className="text-xs text-black text-left">Qualification documents</p>
                            <p className="text-xs text-grey text-left">Upload documents</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-row items-center gap-2 py-4 px-6 pr-2">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#E6EEFD" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.3739 17.6264C32.7644 18.0169 32.7644 18.6501 32.3739 19.0406L21.7072 29.7073C21.3167 30.0978 20.6835 30.0978 20.293 29.7073L14.9596 24.3739C14.5691 23.9834 14.5691 23.3502 14.9596 22.9597C15.3502 22.5692 15.9833 22.5692 16.3739 22.9597L21.0001 27.5859L30.9596 17.6264C31.3502 17.2359 31.9833 17.2359 32.3739 17.6264Z" fill="#4B84EE" />
                        </svg>
                        <div>
                            <p className="text-xs text-black text-left">Billing</p>
                            <p className="text-xs text-grey text-left">Set your billing data</p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-row items-center gap-2 py-4 px-6 pr-2">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="24" fill="#4B84EE" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0216 16.5841C21.0216 15.9683 20.5225 15.4692 19.9068 15.4692C19.2911 15.4692 18.7919 15.9683 18.7919 16.5841V17.9117H17.8225C16.5911 17.9117 15.5928 18.91 15.5928 20.1414V30.9683C15.5928 32.1998 16.5911 33.198 17.8225 33.198H31.0274C32.2587 33.198 33.2571 32.1998 33.2571 30.9683V20.1414C33.2571 18.91 32.2587 17.9117 31.0274 17.9117H29.9088V16.5841C29.9088 15.9683 29.4096 15.4692 28.7939 15.4692C28.1783 15.4692 27.6791 15.9683 27.6791 16.5841V17.9117H21.0216V16.5841ZM20.0532 20.9761C19.4392 20.9761 18.9411 21.4739 18.9411 22.0882C18.9411 22.7024 19.4392 23.2003 20.0532 23.2003H28.7972C29.4112 23.2003 29.9088 22.7024 29.9088 22.0882C29.9088 21.4739 29.4112 20.9761 28.7972 20.9761H20.0532Z" fill="white" />
                        </svg>
                        <div>
                            <p className="text-xs text-black text-left">Availability</p>
                            <p className="text-xs text-grey text-left">Set your work time</p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-row px-6 py-2 border-b bg-white rounded-t">
                    <div className="font-medium text-gray-600 text-2xl">Availability</div>
                    <button
                        type="button"
                        className="absolute top-3 right-3 text-gray-500   z-30 rounded-full bg-gray-200 p-1 hover:bg-gray-300 focus:bg-gray-800 focus:text-white focus:outline-none"
                    >
                        <XIcon className="h-4 w-4" />
                    </button>
                </div>
                <div className="flex flex-row bg-white">
                    <div className="w-full flex flex-col">
                        <div className="font-medium text-gray-600 text-lg py-2 px-6 pr-4 border-b">Pick your work days</div>
                    </div>
                </div>

                <div className="flex justify-between font-medium uppercase text-xs py-2 pb-2 px-6 bg-white border-b">
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 border-blue-500 text-blue-500 cursor-pointer">
                        Monday
                    </span>
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 border-blue-500 text-blue-500 cursor-pointer">
                        Tuesday
                    </span>
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 border-blue-500 text-blue-500 cursor-pointer">
                        Wednesday
                    </span>
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 border-blue-500 text-blue-500 cursor-pointer">
                        Thursday
                    </span>
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 border-blue-500 text-blue-500 cursor-pointer">
                        Friday
                    </span>
                    <span className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 text-blue-500 cursor-pointer">
                        Saturday
                    </span>
                    <div className="px-3 border rounded w-24 h-8 flex items-center justify-center bg-blue-100 text-blue-500 cursor-pointer">
                        Sunday
                    </div>
                </div>

                <div className="flex flex-col md:flex-row bg-white border-b">
                    <div className="w-full md:w-1/2 flex flex-col border-r pb-6">
                        <div className="font-medium text-gray-600 text-lg py-2 px-6 pr-2 border-b">Workdays</div>
                        <div className='px-6 pr-4'>
                            <ul className="bg-white left-0 right-0 h-80 overflow-auto">
                                <li className="grid grid-cols-10 justify-center items-center cursor-pointer px-4 py-2 border-b hover:bg-gray-50">
                                    <div className="justify-center items-center">
                                        <h3 className="text-blue-500 text-sm">Monday</h3>
                                        <p className="text-gray-600 text-xs">00:00</p>
                                    </div>
                                    <div className="col-start-3 col-end-12 pl-8">
                                        <div className="flex space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="start_day" label="Start work day" />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="end_day" label="End work day" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="grid grid-cols-10 justify-center items-center cursor-pointer px-4 py-2 border-b hover:bg-gray-50">
                                    <div className="justify-center items-center">
                                        <h3 className="text-blue-500 text-sm">Tuesday</h3>
                                        <p className="text-gray-600 text-xs">00:00</p>
                                    </div>
                                    <div className="col-start-3 col-end-12 pl-8">
                                        <div className="flex space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="start_day" label="Start work day" />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="end_day" label="End work day" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="grid grid-cols-10 justify-center items-center cursor-pointer px-4 py-2 border-b hover:bg-gray-50">
                                    <div className="justify-center items-center">
                                        <h3 className="text-blue-500 text-sm">Wednesday</h3>
                                        <p className="text-gray-600 text-xs">00:00</p>
                                    </div>
                                    <div className="col-start-3 col-end-12 pl-8">
                                        <div className="flex space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="start_day" label="Start work day" />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="end_day" label="End work day" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="grid grid-cols-10 justify-center items-center cursor-pointer px-4 py-2 border-b hover:bg-gray-50">
                                    <div className="justify-center items-center">
                                        <h3 className="text-blue-500 text-sm">Thursday</h3>
                                        <p className="text-gray-600 text-xs">00:00</p>
                                    </div>
                                    <div className="col-start-3 col-end-12 pl-8">
                                        <div className="flex space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="start_day" label="Start work day" />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="end_day" label="End work day" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="grid grid-cols-10 justify-center items-center cursor-pointer px-4 py-2 border-b hover:bg-gray-50">
                                    <div className="justify-center items-center">
                                        <h3 className="text-blue-500 text-sm">Friday</h3>
                                        <p className="text-gray-600 text-xs">00:00</p>
                                    </div>
                                    <div className="col-start-3 col-end-12 pl-8">
                                        <div className="flex space-x-4">
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="start_day" label="Start work day" />
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <Field type="duration" name="end_day" label="End work day" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <div className="font-medium text-gray-600 text-lg py-2 px-6 pr-2 border-b">Weekends</div>
                        <div className='px-6 pr-4'>
                            <div className="flex justify-center font-base gap-4 text-xs py-4 pb-4 px-6 rounded bg-gray-100 mt-2">
                                <span className="flex items-center justify-center text-xs text-gray-600">
                                    Saturday
                                </span>
                                <div className="flex items-center justify-center text-xs text-gray-600">
                                    Sunday
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row-reverse p-4 items-end gap-6 bg-white rounded-b">
                    <button className="bg-blue-500 py-2 w-32 text-white rounded">
                        <Link variant="standard" to="/done-step">Finish</Link>
                    </button>
                </div>
            </form>
        </Modal.Window>
    );
});

export default AvailabilityStep;