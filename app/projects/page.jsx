"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { BsArrowDownRight, BsChevronLeft, BsChevronRight, BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

// OLD IMPORTS - COMMENTED OUT (for slider layout)
// import { useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
    {
        num: "01",
        title: "Helpii",
        stack: [{ name: "Laravel" }, { name: "Sanctum APIs" }, { name: "Chatify Chat" }, { name: "NextJs" }, { name: "REST APIs" }],
        image: "/assets/work/Helpii-01.webp",
        alt: "Helpii",
        live: "https://www.helpii.se/",
    },
    {
        num: "02",
        title: "Brahmani ColdStorage",
        stack: [{ name: "Laravel" }, { name: "LiveWire" }, { name: "Flutter App" }, { name: "REST APIs" }, { name: "SMS Gateway" }, { name: "JavaScript" }, { name: "AdminPanel" }],
        image: "/assets/work/Brahmani-Coldstorage-01.webp",
        alt: "Brahmani ColdStorage",
        live: "https://brahmanicold.com/",
    },
    {
        num: "03",
        title: "ColdStorage",
        stack: [{ name: "Laravel" }, { name: "LiveWire" }, { name: "Flutter App" }, { name: "REST APIs" }, { name: "Mutitenant" }, { name: "SMS Gateway" }, { name: "JavaScript" }, { name: "AdminPanel" }],
        image: "/assets/work/Coldstorage-01.webp",
        alt: "ColdStorage",
        live: "https://coldstorage.raindropsinfotech.com/",
    },
    {
        num: "04",
        title: "CoverMagix",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Elementor" }],
        image: "/assets/work/CoverMagix-01.webp",
        alt: "CoverMagix",
        live: "https://covermagix.com/",
    },
    {
        num: "05",
        title: "WindrushAlliance",
        stack: [{ name: "Wordpress" }, { name: "Theme & Plugin customization" }, { name: "Custom Developments" }],
        image: "/assets/work/Windrush-Alliance-01.webp",
        alt: "WindrushAlliance",
        live: "http://windrushalliance.com/",
    },
    {
        num: "06",
        title: "The Best Medical Care",
        stack: [{ name: "Laravel" }, { name: "Next.js" }, { name: "Sanctum" }, { name: "AdminPanel" }, { name: "JavaScript" }],
        image: "/assets/work/THE-BEST-MEDICAL-CARE-01.webp",
        alt: "The Best Medical Care",
        live: "https://www.thebestmedicalcare.com/",
    },
    {
        num: "07",
        title: "Bolsava Tickets",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Custom Developments" }],
        image: "/assets/work/Bolsa-Tickets-01.webp",
        alt: "Bolsava Tickets",
        live: "https://bolsatickets.com",
    },
    {
        num: "08",
        title: "JasDiamonds",
        stack: [{ name: "Wordpress" }, { name: "Theme & Plugin customization" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/Screenshot-09.webp",
        alt: "jasdiamonds",
        live: "https://jasdiamonds.com",
    },
    {
        num: "09",
        title: "Malpani Ventures",
        stack: [{ name: "Laravel" }, { name: "MySql" }, { name: "Next.js" }, { name: "JavaScrript" }],
        image: "/assets/work/Malpani-Ventures-01.webp",
        alt: "Malpani Ventures",
        live: "https://www.malpaniventures.com/",
    },
    {
        num: "10",
        title: "DrMalpani",
        stack: [{ name: "Laravel" }, { name: "React Js" }, { name: "Bootstrap" }, { name: "MySQL" }],
        image: "/assets/work/Screenshot-11.webp",
        alt: "drmalpani",
        live: "https://www.drmalpani.com",
    },
    {
        num: "11",
        title: "CvHjelpen",
        stack: [{ name: "Wordpress" }, { name: "ArMember Plugin Customization" }, { name: "Custom Develpment" }, { name: "Theme & Plugin customization" }, { name: "jQuery" }],
        image: "/assets/work/CV-Hjelpen-01.webp",
        alt: "CvHjelpen",
        live: "https://cv-hjelpen.no",
    },
    {
        num: "12",
        title: "&cares",
        stack: [{ name: "Wordpress" }, { name: "Kadence Theme" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Elementor" }],
        image: "/assets/work/Screenshot-10.webp",
        alt: "&cares",
        live: "https://andcares.se",
    },
    {
        num: "13",
        title: "mhreklam.se",
        stack: [{ name: "Wordpress" }, { name: "Kadence Theme" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Elementor" }, { name: "Bootstrap" }],
        image: "/assets/work/Screenshot-15.webp",
        alt: "mhreklam",
        live: "https://mhreklam.se/student",
    },
    {
        num: "14",
        title: "Pikozo",
        stack: [{ name: "Laravel" }, { name: "Android/IOS App" }, { name: "REST APIs" }, { name: "JavaScript" }, { name: "AdminPanel" }],
        image: "/assets/work/Pikozo-01.webp",
        alt: "infronts",
        live: "https://pikozo.in/",
    },
    {
        num: "15",
        title: "infronts",
        stack: [{ name: "Wordpress" }, { name: "Kadence Theme" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization/Development" }, { name: "Elementor" }, { name: "jQuery" }],
        image: "/assets/work/Screenshot-16.webp",
        alt: "infronts",
        live: "https://infronts.se/staging/sv",
    },
    {
        num: "16",
        title: "micelabs",
        stack: [{ name: "Wordpress" }, { name: "Theme & Plugin customization" }, { name: "Custom Development" }, { name: "Elementor" }],
        image: "/assets/work/Screenshot-34.webp",
        alt: "micelabs",
        live: "https://www.micelabs.in",
    },
    {
        num: "17",
        title: "Moozi Teabar",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "Theme & Plugin customization" }, { name: "Custom Development" }, { name: "Elementor" }],
        image: "/assets/work/Mooziteabar-01.webp",
        alt: "Moozi Teabar",
        live: "https://www.mooziteabar.com/",
    },
    {
        num: "18",
        title: "Bookink",
        stack: [{ name: "Laravel" }, { name: "LiveWire" }, { name: "Android/IOS App" }, { name: "REST APIs" }, { name: "JavaScript" }, { name: "AdminPanel" }],
        image: "/assets/work/BookInk-01.webp",
        alt: "Bookink",
        live: "https://server.bookink.uk/studio-user/login",
    },
    {
        num: "19",
        title: "Roca",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Custom Development" }, { name: "Elementor" }],
        image: "/assets/work/ROCA-Industry-01.webp",
        alt: "Roca",
        live: "https://www.rocaindustry.com/",
    },
    {
        num: "20",
        title: "Sentri Institute",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Custom Development" }, { name: "Elementor" }],
        image: "/assets/work/Sentri-Institute-01.webp",
        alt: "Sentri Institute",
        live: "https://sentriinstitute.com/",
    },
    {
        num: "21",
        title: "Punjab Solars",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "WooCommerce customization" }, { name: "Theme & Plugin customization" }, { name: "Custom Development" }],
        image: "/assets/work/Punjab-Solars-01.webp",
        alt: "Punjab Solars",
        live: "https://www.punjabsolars.com/",
    },
    {
        num: "22",
        title: "FHRI",
        stack: [{ name: "Wordpress" }, { name: "Custom Development" }, { name: "Theme & Plugin customization" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/FHRI-01.webp",
        alt: "FHRI",
        live: "https://fhri.org/",
    },
    {
        num: "23",
        title: "Selectra International",
        stack: [{ name: "Wordpress" }, { name: "WooCommerce" }, { name: "Theme & Plugin customization" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/Selectra-Industries-01.webp",
        alt: "Selectra International",
        live: "https://selectrainternational.com/",
    },
    {
        num: "24",
        title: "Lorens Auto Repair",
        stack: [{ name: "Wordpress" }, { name: "Custom Development" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/Lorens-Auto-Repair-01.webp",
        alt: "Lorens Auto Repair",
        live: "https://lorensauto.com/",
    },
    {
        num: "25",
        title: "TDS Group",
        stack: [{ name: "Wordpress" }, { name: "Custom Development" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/tds-01.webp",
        alt: "TDS Group",
        live: "https://tdsgroup.org/",
    },
    {
        num: "26",
        title: "DMT Manufacturing",
        stack: [{ name: "Wordpress" }, { name: "Informative Site" }, { name: "Custom Development" }, { name: "jQuery" }, { name: "Elementor" }],
        image: "/assets/work/DMT-01.webp",
        alt: "DMT Manufacturing",
        live: "https://dmtcnc.com/",
    },
];

const Work = () => {
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const projectsPerPage = 6;

    // Track which project cards have expanded stack
    const [expandedProjects, setExpandedProjects] = useState(new Set());

    const toggleExpand = (projectNum) => {
        setExpandedProjects((prev) => {
            const next = new Set(prev);
            if (next.has(projectNum)) {
                next.delete(projectNum);
            } else {
                next.add(projectNum);
            }
            return next;
        });
    };

    // Calculate pagination
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // Scroll to top of section
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // OLD SLIDER LAYOUT - COMMENTED OUT
    // const [project, setProject] = useState(projects[0]);

    // const handleSlideChange = (swiper) => {
    //     // get current slide index
    //     const currentIndex = swiper.activeIndex;
    //     // update project state based on current slide index
    //     setProject(projects[currentIndex]);
    // };

    // Container animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1,
            },
        },
    };

    // Card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="flex flex-col justify-center py-12 xl:px-0 min-h-screen"
        >
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.6, duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        My Projects
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A collection of projects showcasing my expertise in web development
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    key={currentPage}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {currentProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-[#232329] rounded-xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 flex flex-col"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden shrink-0">
                                <Link
                                    href={project.live || "#"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full h-full"
                                >
                                    <Image
                                        src={project.image}
                                        width={600}
                                        height={400}
                                        quality={90}
                                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                                        alt={project.alt || project.title}
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Project Number Badge */}
                                    <div className="absolute top-4 left-4 bg-accent/90 backdrop-blur-sm text-primary font-bold text-sm px-3 py-1 rounded-full">
                                        {project.num}
                                    </div>
                                </Link>
                            </div>

                            {/* Project Content — flex-col, grows to fill card height */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                                    {project.title}
                                </h3>

                                {/* Technology Stack — grows to push footer down */}
                                <div className="flex flex-wrap gap-2 mb-4 flex-1 content-start">
                                    {(expandedProjects.has(project.num)
                                        ? project.stack
                                        : project.stack.slice(0, 4)
                                    ).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-md border border-accent/30 h-fit"
                                        >
                                            {tech.name}
                                        </span>
                                    ))}
                                    {project.stack.length > 4 && (
                                        <button
                                            onClick={() => toggleExpand(project.num)}
                                            className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded-md hover:bg-white/20 hover:text-white/80 transition-colors duration-200 cursor-pointer h-fit"
                                        >
                                            {expandedProjects.has(project.num)
                                                ? "Less"
                                                : `+${project.stack.length - 4} more`}
                                        </button>
                                    )}
                                </div>

                                {/* Live Link Button — always at bottom-right */}
                                <div className="flex justify-end mt-2">
                                    <Link
                                        href={project.live || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium text-sm group/link"
                                    >
                                        <span>View Project</span>
                                        <BsArrowDownRight className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                                    </Link>
                                </div>
                            </div>

                            {/* Hover Border Effect */}
                            <div className="absolute inset-0 border-2 border-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-col items-center justify-center gap-4 mt-12"
                    >
                        {/* Page Info */}
                        <p className="text-white/60 text-sm">
                            Showing {indexOfFirstProject + 1}-{Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
                        </p>

                        {/* Pagination Buttons */}
                        <div className="flex items-center gap-2">
                            {/* Previous Button */}
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-300 ${
                                    currentPage === 1
                                        ? "border-white/10 text-white/30 cursor-not-allowed"
                                        : "border-white/20 text-white hover:border-accent hover:bg-accent/10 hover:text-accent cursor-pointer"
                                }`}
                            >
                                <BsChevronLeft className="text-lg" />
                            </button>

                            {/* Page Numbers */}
                            <div className="flex items-center gap-2">
                                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                                    // Show first page, last page, current page, and pages around current
                                    const showPage =
                                        page === 1 ||
                                        page === totalPages ||
                                        (page >= currentPage - 1 && page <= currentPage + 1);

                                    if (!showPage) {
                                        // Show ellipsis
                                        if (page === currentPage - 2 || page === currentPage + 2) {
                                            return (
                                                <span key={page} className="text-white/30 px-2">
                                                    ...
                                                </span>
                                            );
                                        }
                                        return null;
                                    }

                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`w-10 h-10 rounded-lg border font-medium transition-all duration-300 ${
                                                currentPage === page
                                                    ? "bg-accent border-accent text-primary"
                                                    : "border-white/20 text-white hover:border-accent hover:bg-accent/10 hover:text-accent"
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`flex items-center justify-center w-10 h-10 rounded-lg border transition-all duration-300 ${
                                    currentPage === totalPages
                                        ? "border-white/10 text-white/30 cursor-not-allowed"
                                        : "border-white/20 text-white hover:border-accent hover:bg-accent/10 hover:text-accent cursor-pointer"
                                }`}
                            >
                                <BsChevronRight className="text-lg" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* OLD SLIDER LAYOUT - COMMENTED OUT */}
            {/* <div className="container">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[20px]">
                            <div className="text-4xl md:text-6xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[24px] md:text-[36px] font-bold leading-normal text-white group-hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                            <ul className="flex gap-4 flex-wrap">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="text-lg text-accent"
                                        >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[45px] h-[45px] rounded-full bg-white  flex justify-center items-center group hover:-rotate-45 hover:bg-accent transition-all duration-500 ">
                                                <BsArrowDownRight className="text-primary text-xl" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="mb-12 xl:mb-0"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="w-full relative group flex justify-center items-center bg-pink-50/20">
                                            <Link
                                                href={project.live || "#"}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                prefetch={false}
                                            >
                                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={project.image}
                                                        width={1920}
                                                        height={1080}
                                                        quality={100}
                                                        className="object-cover aspect-auto"
                                                        alt={project.alt || project.title}
                                                    />
                                                </div>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-[calc(50%_-_165px)] z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                        </Swiper>
                    </div>
                </div>
            </div> */}
        </motion.section>
    );
};

export default Work;