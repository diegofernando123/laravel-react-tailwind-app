import React, { SyntheticEvent } from 'react';

import Controller, { ControllerProperties } from '../../Providers/Controller';

import Link from '../../Components/Link';
import Field from '../../Components/Form/Field';
import Button from '../../Components/Button';

const Properties = {
    controller: 'App\\Http\\Controllers\\Authentication\\Login',
};

export default Controller(Properties, (props: ControllerProperties): JSX.Element => {
    const { dispatch, dispatching } = props;
    const onSubmit = (e: SyntheticEvent): void => {
        dispatch('submit');
        e.preventDefault();
    };
    return (
        <form {...{ onSubmit }} method="post" className="flex flex-col max-w-sm w-full relative">
            <div className="text-3xl text-blue-600 mb-8">Sign in</div>
            <div className="flex flex-col space-y-4">
                <div className="flex flex-col">
                    <Field type="text" label="Email" name="email" />
                </div>
                <div className="flex flex-col">
                    <Field type="password" label="Password" name="password" />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Field type="checkbox" label="remember me" name="remember" />
                    </div>
                    <div className="text-xs">
                        <Link variant="primary" to="/forgot">
                            Forgot your password?
                        </Link>
                    </div>
                </div>
                <div className="flex items-center pt-4 space-x-4">
                    <span>
                        <Button variant="primary" type="submit" disabled={dispatching('submit')}>
                            {dispatching('submit') ? 'checking...' : 'Sign in'}
                        </Button>
                    </span>
                    <span className="text-gray-500">or</span>
                    <span className="font-semibold text-sm">
                        <Link to="/register">Sign up here</Link>
                    </span>
                </div>
            </div>
        </form>
    );
});
