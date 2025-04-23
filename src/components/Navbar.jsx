import { useState, useRef, useEffect } from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const searchRef = useRef(null);
    
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };
    
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setSearchActive(false);
            }
        }
        
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [searchRef]);
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for:", searchQuery);
        alert(`Search query: ${searchQuery}`);
        setSearchQuery('');
        setSearchActive(false);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-center">
                <div className="w-full">
                    <nav className="bg-[#000000] p-4 flex justify-between items-center">
                        <img src="/snapdragon_logo.png" alt="Logo" className="h-12 md:h-16" />
                        
                        <button 
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-white focus:outline-none"
                        >
                            {mobileMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            )}
                        </button>
                        
                        <div className="hidden md:flex items-center w-full">
                            <ul className="flex space-x-6 ml-6">
                                <li>
                                    <a 
                                        href="#products" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('products');
                                        }}
                                        className="font-medium text-white hover:text-gray-300 cursor-pointer"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#support" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('support');
                                        }}
                                        className="font-medium text-white hover:text-gray-300 cursor-pointer"
                                    >
                                        Support
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="#company" 
                                        onClick={(e) => {
                                            e.preventDefault();
                                            scrollToSection('partners');
                                        }}
                                        className="font-medium text-white hover:text-gray-300 cursor-pointer"
                                    >
                                        Company
                                    </a>
                                </li>
                            </ul>
                            <div className="ml-auto flex items-center space-x-6">
                                <div ref={searchRef} className="relative flex items-center">
                                    {searchActive ? (
                                        <form onSubmit={handleSearch} className="flex items-center">
                                            <input
                                                type="text"
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                placeholder="Search"
                                                className="bg-gray-800 text-white pl-3 pr-10 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 w-64 transition-all duration-300"
                                                autoFocus
                                            />
                                            <button 
                                                type="submit"
                                                className="absolute right-2 text-gray-400 hover:text-white"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                </svg>
                                            </button>
                                        </form>
                                    ) : (
                                        <button 
                                            onClick={() => setSearchActive(true)} 
                                            className="text-white hover:text-red-400 transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    )}
                                </div>
                                
                                <div className="relative group">
                                    <a href="#" className="text-white flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </a>
                                    <div className="absolute z-50 right-0 mt-2 w-64 bg-white rounded-md shadow-lg p-4 
                                        opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                        transition-all duration-300 ease-in-out transform 
                                        scale-95 group-hover:scale-100">
                                        <h3 className="text-lg font-semibold mb-4 text-black">Sign in to your account</h3>
                                        <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md w-full block text-center mb-4">
                                            Sign in
                                        </a>
                                        <div className="text-sm text-gray-700">
                                            Don't have an account? <a href="/signup" className="text-blue-600 font-medium">Sign up →</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                    
                    <div className={`bg-[#0a0a0a] md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a 
                                href="#products"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    scrollToSection('products');
                                }}
                                className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded-md"
                            >
                                Products
                            </a>
                            <a 
                                href="#support"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    scrollToSection('support');
                                }}
                                className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded-md"
                            >
                                Support
                            </a>
                            <a 
                                href="#partners"
                                onClick={(e) => {
                                    e.preventDefault(); 
                                    scrollToSection('partners');
                                }}
                                className="block px-3 py-2 text-white font-medium hover:bg-gray-800 rounded-md"
                            >
                                Company
                            </a>
                            <div className="flex items-center justify-between px-3 py-2">
                                <form onSubmit={handleSearch} className="flex-1 mr-2">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search"
                                            className="bg-gray-800 text-white w-full pl-3 pr-10 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                        />
                                        <button 
                                            type="submit"
                                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                                <a href="/login" className="text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="h-1 w-full bg-red-600"></div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;