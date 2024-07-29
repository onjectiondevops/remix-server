import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import MobileNavigation from './MobileNavigation';
import { Link, NavLink } from '@remix-run/react';
import config from '~/docs.config';
import { SearchPalette } from '../Search';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Theme, Themed, useTheme } from '~/utils/theme-provider';
import logo from '../../../public/images/logo.svg';

interface Props {}

function Header(props: Props) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isSearching, setIsSearching] = useState(false);

    const [, setTheme] = useTheme();

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    };

    useEffect(() => {
        function onScroll() {
            setIsScrolled(window.scrollY > 0);
        }
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <header
            className={clsx(
                'sticky top-0 z-50 flex flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8',
                isScrolled
                    ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
                    : 'dark:bg-transparent',
            )}
        >
            <div className="mr-6 flex lg:hidden">
                <MobileNavigation />
            </div>
            <div className='mr-2'>
                <img src={logo} alt="CDEBase" />
            </div>
            <div className="relative flex flex-grow basis-0 items-center allign-center space-x-3 hidden md:block">
                <NavLink
                    to="/"
                    prefetch="intent"
                    aria-label="Home"
                    className={({ isActive }) =>
                        clsx(
                            isActive
                                ? 'font-semibold text-sky-500 before:bg-sky-500'
                                : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600  dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                        )
                    }
                >
                    CDEBase
                </NavLink>
                {config.nav &&
                    config.nav.map((nav) => (
                        <NavLink
                            key={nav.link}
                            to={nav.link}
                            prefetch="intent"
                            aria-label={nav.link}
                            className={({ isActive }) =>
                                clsx(
                                    isActive
                                        ? 'font-semibold text-sky-500 before:bg-sky-500'
                                        : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600  dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300',
                                )
                            }
                        >
                            {nav.text}
                        </NavLink>
                    ))}
            </div>
            <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
                <Link
                    to="/"
                    prefetch="intent"
                    className="dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
                >
                    {config.title}
                </Link>
            </div>
            <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow">
                {config.search.enabled && (
                    <>
                        <button onClick={() => setIsSearching(!isSearching)}>
                            <MagnifyingGlassIcon className="w-8 h-8 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
                        </button>
                        {isSearching && <SearchPalette open={isSearching} setOpen={setIsSearching} />}
                    </>
                )}
                <button
                    onClick={toggleTheme}
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-8 h-8 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-gray-200"
                    >
                        <Themed
                            dark={
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            }
                            light={
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            }
                        />
                    </svg>
                </button>
            </div>
        </header>
    );
}

export default Header;
