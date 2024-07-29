// 'use client';

// import { Divider, Typography } from '@mui/material';
// import React from 'react'; // Import React if you're using a version that requires it

// function FancyTestimonialsSlider() {
//     return (
//         <section className="text-gray-600 body-font">
//             <div className="container px-5 py-24 mx-auto ">
//                 {/* <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">What Our Client Say About us</h1> */}
//                 <Typography sx={{ fontSize: "35px", fontFamily: "Poppins", fontWeight: 500, lineHeight: "50px", textAlign: "center", color: "#494949" }}>What Our <span style={{ color: "#0087C0" }}>Client</span> Say About us</Typography>
//                 <div style={{ display: 'flex', justifyContent: 'center' }}>
//                     <Divider sx={{ width: "155px", height: "6px", backgroundColor: "#0087C0", marginLeft: "2%" }} />
//                 </div>
//                 <div className="flex flex-wrap  md:w-11/12">
//                     <div className="pl-60 p-14 md:w-11/12 w-full">
//                         <div className="flex items-center justify-center h-full bg-gray-100 p-8 rounded">
//                             <img alt="testimonial" src="../assets/Ellipse 17.png" className="w-auto h-auto rounded-full flex-shrink-0 object-cover object-center mr-4" />
//                             <div>
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-14 h-14 text-black mb-4 -rotate-180" viewBox="0 0 975.036 975.036">
//                                     <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//                                 </svg>
//                                 <p className="leading-relaxed mb-6 ml-10 poppins-font">"Fincoopers Captial has transformed my financial outlook with their personalized guidance and expert strategies. Their dedication and reliability have made them my trusted partner in wealth management. Highly recommended."</p>
//                                 <a className="inline-flex items-center">
//                                     <span className="flex-grow flex flex-col pl-4">
                                    
//                                         <span className="text-gray-500 text-sm mr-0">~Ramesh Shukla </span>
//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                     {/* <div className="p-4 md:w-1/2 w-full">
//             <div className="h-full bg-gray-100 p-8 rounded">
//               <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
//                 <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
//               </svg>
//               <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
//               <a className="inline-flex items-center">
//                 <img alt="testimonial" src="https://dummyimage.com/107x107" className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
//                 <span className="flex-grow flex flex-col pl-4">
//                   <span className="title-font font-medium text-gray-900">Alper Kamu</span>
//                   <span className="text-gray-500 text-sm">DESIGNER</span>
//                 </span>
//               </a>
//             </div>
//           </div> */}
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default FancyTestimonialsSlider;



'use client';

import { Divider, Typography } from '@mui/material';
import React from 'react'; // Import React if you're using a version that requires it

function FancyTestimonialsSlider() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <Typography
                    sx={{
                        fontSize: { xs: "24px", sm: "30px", md: "35px" },
                        fontFamily: "Poppins",
                        fontWeight: 500,
                        lineHeight: { xs: "36px", sm: "44px", md: "50px" },
                        textAlign: "center",
                        color: "#494949",
                    }}
                >
                    What Our <span style={{ color: "#0087C0" }}>Client</span> Say About us
                </Typography>
                <div className="flex justify-center my-6">
                    <Divider sx={{ width: { xs: "100px", sm: "130px", md: "155px" }, height: "6px", backgroundColor: "#0087C0" }} />
                </div>
                <div className="flex flex-wrap justify-center">
                    <div className="p-4 md:w-4/5 lg:w-3/5">
                        <div className="flex flex-col items-center bg-gray-100 p-8 rounded">
                            <img alt="testimonial" src="../assets/Ellipse 17.png" className="w-24 h-24 rounded-full object-cover mb-4" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                className="block w-12 h-12 text-black mb-4 -rotate-180"
                                viewBox="0 0 975.036 975.036"
                            >
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed mb-6 text-center text-base md:text-lg poppins-font">
                                "Fincoopers Captial has transformed my financial outlook with their personalized guidance and expert strategies. Their dedication and reliability have made them my trusted partner in wealth management. Highly recommended."
                            </p>
                            <a className="inline-flex items-center">
                                <span className="flex-grow flex flex-col pl-4 text-center">
                                    <span className="text-gray-500 text-sm">~Ramesh Shukla</span>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FancyTestimonialsSlider;

