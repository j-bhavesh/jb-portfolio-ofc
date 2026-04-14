import React from 'react'
import Link from 'next/link';
import Social from "@/components/Social";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactDetails = {
        phone: "+91 9924677037",
        email: "jethava.bhavesh6596@gmail.com",
    };

    const personalDetails = {
        name: "Bhavesh Jethava",
        dateofbirth: "06/05/1996",
    };


    const addressDetail = {
        address: "Ahmedabad, Gujarat, India",
    };

    return (
        <footer className="bg-[#27272c] pt-14">
            <div className="container">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
                    {/* Contact Details */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2">
                            Contact Details
                        </h3>
                        <p className="text-sm mb-3">{contactDetails.phone}</p>
                        <p className="text-sm"><Link href={`mailto:${contactDetails.email}`}>{contactDetails.email}</Link></p>
                    </div>

                    {/* Personal Details */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2">
                            Personal Details
                        </h3>
                        <p className="text-sm mb-3"><strong>Name:</strong> {personalDetails.name}</p>
                        <p className="text-sm"><strong>Date Of Birth:</strong> {personalDetails.dateofbirth}</p>
                    </div>

                    {/* Address Details */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2">
                            Address
                        </h3>
                        <p className="text-sm mb-3 leading-loose">{addressDetail.address}</p>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3 pb-2">
                            Get in Touch
                        </h3>
                        <Social containerStyles="flex gap-3" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="text-center text-white text-sm border-t border-white/10 py-4 mt-7 md:mt-12">
                    © {currentYear} Developed By {personalDetails.name}.
                </div>
            </div>
        </footer>
    )
}

export default Footer