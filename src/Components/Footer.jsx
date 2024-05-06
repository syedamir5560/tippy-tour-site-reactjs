import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 px-7 md:py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 items-center md:grid-cols-4 gap-10">
                    <div className="md:col-span-3 md:flex md:justify-between md:mb-4">
                        <div className='sm-mb-5'>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Project</h3>
                            <ul className="list-none font-mono">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Our Mission</a></li>
                                <li><a href="#">Features</a></li>
                            </ul>
                        </div>
                        <div className='sm-mb-5'>
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Community</h3>
                            <ul className="list-none font-mono">
                                <li><a href="#">Forum</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className='sm-mb-5'    >
                            <h3 className="text-xl md:text-2xl font-semibold mb-2 font-serif">Help</h3>
                            <ul className="list-none font-mono">
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQs</a></li>
                                <li><a href="#">Support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl  font-bold mb-4 font-serif">Trippy</h1>
                        <h2 className="text-lg md:text-2xl mb-4 font-bold font-serif">Choose your favorite destination</h2>
                        <div className="flex justify-center md:justify-start mb-4">
                            <a href="https://www.facebook.com" className="mr-4"><i class=" fa-brands fa-facebook text-2xl"></i></a>
                            <a href="https://www.instagram.com" className="mr-4"><i class=" fa-brands fa-instagram text-2xl"></i></a>
                            <a href="https://www.twitter.com" className="mr-4"><i class=" fa-brands fa-twitter text-2xl"></i></a>

                        </div>
                        <p className='font-mono'>© {new Date().getFullYear()} Trippy. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
