import { Divider, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <>
        <Divider/>
        <footer className="text-gray-600 body-font bg-custom-gray-60">
            <div className="container px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto my-24 text-center md:text-left">
                    <img src="../assets/logo.svg" alt="Logo" style={{ width: "300px" }} />
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <Typography sx={{ color: "#494949", fontWeight: 500, fontSize: "24px", fontFamily: "Poppins" }}>Quick Links</Typography>
                        <nav className="list-none mb-10 ">
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400 ">Home</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">About</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">Product</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">Our Partner</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">Teams</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">Careers</a>
                            </li>
                            <li className="my-3">
                                <a href="/home" className="text-gray-600 hover:text-blue-400">Connect</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <Typography sx={{ color: "#494949", fontWeight: 500, fontSize: "24px", fontFamily: "Poppins" }}>Important Links</Typography>
                        <nav className="list-none mb-10">
                            <li className="my-3">
                                <a className="text-gray-600 hover:text-blue-400">Terms and Conditions</a>
                            </li>
                            <li className="my-3">
                                <a className="text-gray-600 hover:text-blue-400">Privacy Policy</a>
                            </li>
                            <li className="my-3">
                                <a className="text-gray-600 hover:text-blue-400">Refund Policy</a>
                            </li>
                            <li className="my-3">
                                <a className="text-gray-600 hover:text-blue-400">RBI Sachet</a>
                            </li>
                            <li className="my-3">
                                <a className="text-gray-600 hover:text-blue-400">Grievance Policy</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:flex-grow md:w-1/2 w-full px-4 my-20">
                        <Typography sx={{ color: "#494949", fontWeight: 500, fontSize: "24px", textAlign: "center", fontFamily: "Poppins" }}>
                            Quick Social media
                        </Typography>
                        <div className="flex justify-center space-x-3 my-3">
                            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                                <FacebookIcon className="w-6 h-6" />
                            </a>
                            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                                <TwitterIcon className="w-6 h-6" />
                            </a>
                            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                                <InstagramIcon className="w-6 h-6" />
                            </a>
                            <a className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                                <LinkedInIcon className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-center">
                    <Typography>© 2024 Fincoopers Capital Pvt. Ltd.</Typography>
                </div>

            </div>
        </footer>
        </>
    );
}
