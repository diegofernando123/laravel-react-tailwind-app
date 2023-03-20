import Moment from 'react-moment';
import React from 'react';
import _ from 'lodash';
import moment from 'moment';

export interface CardProps {
    address?: string;
    name?: string;
    type?: string;
    date?: string;
    time?: string;
}

const Appointment = (props: CardProps): JSX.Element => {
    const { address, name, type, date, time } = props;
    return (
        <div className="h-full w-full cursor-default overflow-hidden relative group ease-in-out">
            <h3 className="text-black text-lg title-font font-medium mb-2">{name}</h3>
            <div className="flex justify-between w-full mb-3">
                <div className="flex items-center text-sm text-black/70 dark:text-white/50 space-x-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.9375 1.25H12.5V0.5C12.5 0.223875 12.2762 0 12 0C11.7238 0 11.5 0.223875 11.5 0.5V1.25H4.5V0.5C4.5 0.223875 4.27616 0 4 0C3.72384 0 3.5 0.223875 3.5 0.5V1.25H2.0625C0.925219 1.25 0 2.17522 0 3.3125V13.9375C0 15.0748 0.925219 16 2.0625 16H13.9375C15.0748 16 16 15.0748 16 13.9375V3.3125C16 2.17522 15.0748 1.25 13.9375 1.25ZM2.0625 2.25H3.5V2.75C3.5 3.02612 3.72384 3.25 4 3.25C4.27616 3.25 4.5 3.02612 4.5 2.75V2.25H11.5V2.75C11.5 3.02612 11.7238 3.25 12 3.25C12.2762 3.25 12.5 3.02612 12.5 2.75V2.25H13.9375C14.5234 2.25 15 2.72662 15 3.3125V4.5H1V3.3125C1 2.72662 1.47662 2.25 2.0625 2.25ZM13.9375 15H2.0625C1.47662 15 1 14.5234 1 13.9375V5.5H15V13.9375C15 14.5234 14.5234 15 13.9375 15Z"
                            fill="#2885C5"
                        />
                    </svg>

                    <span className="text-center text-gray-600">
                        <Moment format="dddd MMMM Do">{date}</Moment>
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
                        <Moment date={time} format="hh:mm a" />
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
    );
};

export default Appointment;