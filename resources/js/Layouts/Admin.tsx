import React from 'react';
import Navigation from '../Components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export default function Layout(): JSX.Element {
    return (
        <div className="flex flex-1 overflow-hidden h-screen">
            <Navigation />

            <div className="flex-grow overflow-x-hidden flex flex-col rounded-r-lg">
                <div className="flex-grow overflow-x-hidden flex">
                    <div className="flex-grow flex bg-white overflow-y-auto relative">
                        <Outlet />
                    </div>
                </div>
            </div>
            {/* <livewire:welcome />
            <livewire:version-upgrade />
            <livewire:admin.users.onboard />
            <x-taskbar.bar /> */}
        </div>
    );
}
