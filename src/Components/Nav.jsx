import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <main className='relative'>
            <nav className="bg-gray-800 rounded top-5 mx-[2%] left-0 w-[95%] fixed ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <NavLink to='/'> <h2 className="text-white text-2xl font-bold">Trippy</h2></NavLink>
                        </div>
                        <div className="flex items-center">

                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4 font-bold">
                                    <NavLink to="/" exact activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm ">Home</NavLink>
                                    <NavLink to="/about" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</NavLink>
                                    <NavLink to="/services" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</NavLink>
                                    <NavLink to="/contact" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</NavLink>
                                    <NavLink to='/login'><button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Login</button></NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button onClick={toggleNavbar} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <i class="fa-solid fa-caret-down"></i>
                                ) : (
                                    <i class="fa-solid fa-xmark"></i>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu" >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">

                        <NavLink to="/" exact activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</NavLink>
                        <NavLink to="/about" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</NavLink>
                        <NavLink to="/service" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</NavLink>
                        <NavLink to="/contact" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</NavLink>
                        <NavLink to="/login" activeClassName="text-white" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</NavLink>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default Nav;
