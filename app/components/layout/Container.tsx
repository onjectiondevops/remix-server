import clsx from 'clsx';
import * as React from 'react';
import Navigation from '~/components/layout/Navigation';
import config from '~/docs.config';

import Footer from '~/components/layout/Footer';
import Header from './Header';

export default function Container({ children }) {
    return (
        <div>
            <Header />
            <div className="relative mx-auto flex max-w-8xl justify-center sm:px-2 lg:px-8 xl:px-8 bg-white dark:bg-gray-800">
                <div className="hidden lg:relative lg:block lg:flex-none">
                    <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden " />
                    <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-8 pl-0.5">
                        <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block dark:bg-slate-500" />
                        <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block dark:bg-slate-500" />
                        <Navigation navigation={config.sidebar} />
                    </div>
                </div>
                <div className="min-w-0 max-w-2xl flex-auto px-4 py-6 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
                    <div className="prose w-full min-w-full">{children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
