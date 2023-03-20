import React from 'react';
import Link from '../../Components/Link';

import Controller, { ControllerProperties } from '../../Providers/Controller';

import { LoginIcon } from '@heroicons/react/outline';

const Properties = {
    controller: 'App\\Http\\Controllers\\Authentication\\Logout',
};

export default Controller(Properties, (props: ControllerProperties): JSX.Element => {
    const { dispatching } = props;
    return (
        <div className="flex flex-col items-center justify-center relative  space-y-8">
            <div className="rounded-full border-8 border-gray-200 text-blue-500 p-8">
                <LoginIcon className="h-20 w-20" />
            </div>
            <div className="text-center max-w-sm">
                {dispatching('onMount') ? (
                    <div className="font-semibold text-blue-500">Logging out...</div>
                ) : (
                    <>
                        <div className="font-semibold text-blue-500">Logged out!</div>
                        <div className="text-gray-500 text-sm mt-2">You have been successfully logged out.</div>
                        <div className="font-semibold pt-8">
                            <Link to="/">back to login</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
});
