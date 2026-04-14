"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaBootstrap, FaSass, FaWordpress, FaGithub, FaGitlab, FaBitbucket } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiElementor, SiReactbootstrap, SiPhp, SiLaravel, SiNextdotjs, SiGithub, SiGitlab, SiBitbucket, SiMysql, SiPhpmyadmin, SiGit, SiPostman, SiClaude, SiCpanel } from "react-icons/si";

// about data
const about = {
    title: "About Me",
    info: [
        {
            fieldName: "Name",
            fieldvalue: "Bhavesh Jethava",
        },
        {
            fieldName: "Phone",
            fieldvalue: "(+91) 9924677037",
        },
        {
            fieldName: "Experience",
            fieldvalue: "5 Years",
        },
        {
            fieldName: "Email",
            fieldvalue: "jethava.bhavesh6596@gmail.com",
        },
        {
            fieldName: "Date Of Birth",
            fieldvalue: "06/05/1996",
        },
        {
            fieldName: "Languages",
            fieldvalue: "English, Gujarati, Hindi",
        },
    ],
    points: [
        "Results-driven Full Stack PHP Developer with 5 years of experience building scalable and high-performance web applications.",
        "Specialized in Laravel development, creating robust backend systems and RESTful APIs for seamless integrations.",
        "Proficient in modern frontend technologies including Next.js and React.js for dynamic and responsive user interfaces.",
        "Extensive experience in WordPress and WooCommerce customization, developing custom themes, plugins, and e-commerce solutions.",
        "Strong expertise in payment gateway integrations (Stripe, Razorpay, PayPal) with secure and optimized transaction handling.",
        "Proven ability to improve application performance, streamline workflows, and deliver business-focused solutions.",
        "Experienced in working with cross-functional teams to deliver production-ready, scalable applications.",
    ],
    strengths: {
        title: "Key Strengths",
        list: [
            "Strong expertise in backend architecture using Laravel, Core PHP, and MVC design patterns.",
            "Advanced experience in RESTful API development and third-party service integrations.",
            "Full Stack development capability with seamless frontend-backend integration (Next.js, React.js).",
            "Expert in WordPress and WooCommerce customization, including custom plugin and theme development.",
            "Specialized in secure payment gateway integrations (Stripe, Razorpay, PayPal) with high reliability.",
            "Ability to build scalable, maintainable, and performance-optimized web applications.",
            "Strong problem-solving mindset with focus on debugging, optimization, and clean code practices.",
            "Adaptable and fast learner, leveraging modern tools and AI-assisted development to improve productivity.",
        ],
    },
};

// experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: "My Experience",
    description: "Results-driven Full Stack PHP Developer with 5 years of experience building scalable web applications using Laravel, WordPress, and RESTful APIs. Skilled in developing high-performance backend systems, integrating secure payment gateways, and delivering modern frontend solutions with Next.js and React.js. Focused on writing clean, maintainable code and creating business-driven solutions that improve performance and user experience.",
    items: [
        {
            company: "Raindrops Infotech",
            position: "PHP Developer",
            duration: "June 2022 - Present",
        },
        {
            company: "QuanticEdge Software Solution",
            position: "Jr. PHP Developer",
            duration: "Feb 2020 - May 2022",
        },
        {
            company: "Octopod Edu Llp",
            position: "Entry Level PHP Developer",
            duration: "Dec 2018 - Jan 2020",
        },
    ],
};

// education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: "My Education",
    items: [
        {
            institution: "Saurashtra University",
            degree: "B.Sc.IT",
            duration: "Year Of Passing 2016",
        },
        {
            institution: "HSC",
            degree: "12th Commerce",
            duration: "Year Of Passing 2013",
        },
        // {
        //     institution: "G.S.E.B",
        //     degree: "S.S.C",
        //     duration: "Year Of Passing 2008",
        // },
    ],
};

// skills data
const skills = {
    title: "My Skills",
    description: "Full Stack PHP Developer with 5 years of experience specializing in Laravel, WordPress, and RESTful API development. Strong expertise in building scalable backend systems, WooCommerce solutions, and secure payment gateway integrations (Stripe, Razorpay, PayPal). Proficient in modern frontend technologies like Next.js and React.js, delivering high-performance and user-focused web applications.",
    skillList: [
        {
            icon: <SiPhp />,
            name: "PHP",
        },
        {
            icon: <SiLaravel />,
            name: "Laravel",
        },
        {
            icon: <FaWordpress />,
            name: "WordPress",
        },
        { 
            icon: <SiMysql />, 
            name: "MySQL" 
        },
        { 
            icon: <SiPhpmyadmin />, 
            name: "PhpMyAdmin" 
        },
        {
            icon: <FaJs />,
            name: "Javascript",
        },
        {
            icon: <SiJquery />,
            name: "JQuery",
        },
        {
            icon: <FaReact />,
            name: "React Js",
        },
        {
            icon: <SiReactbootstrap />,
            name: "React Bootstrap",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiPostman />,
            name: "Postman",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
        {
            icon: <FaGithub />,
            name: "Github",
        },
        {
            icon: <FaGitlab />,
            name: "Gitlab",
        },
        {
            icon: <FaBitbucket />,
            name: "Bitbucket",
        },
        { 
            icon: <SiClaude />,
            name: "AI Tools (ChatGPT, Claude, Cursor)", 
        },
        
        { 
            icon: <SiCpanel />,
            name: "Cpanel", 
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="min-h-[80vh] flex items-center justify-center py-12"
        >
            <div className="container">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 xl:sticky xl:top-24 xl:self-start">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[268px] min-h-[40px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li
                                                    key={index}
                                                    className="bg-[#232329] h-[184px] py-6 px-8 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[268px] min-h-[40px] text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.institution}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[750px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-5xl group-hover:text-accent transition-all w-[90px] h-[90px] rounded-full bg-zinc-50/10 duration-300 flex justify-center items-center">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-left">
                            <div className="flex flex-col gap-[30px] mb-8 xl:mb-6">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                            </div>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[750px] mx-auto lg:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li
                                            key={index}
                                            className="flex items-center xl:justify-start gap-3"
                                        >
                                            <span className="text-accent text-base min-w-[125px] text-left">{item.fieldName}</span>
                                            <span>:</span>
                                            <span className="text-sm">{item.fieldvalue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            {/* dynamic about points */}
                            <div className="mt-8">
                                <ul className="list-disc list-inside text-white/70 space-y-4">
                                    {about.points.map((point, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-white/70"
                                        >
                                            {/* custom accent bullet */}
                                            <span className="w-[6px] h-[6px] mt-2 bg-accent rounded-full flex-shrink-0"></span>
                                            <span className=" text-white/70 leading-relaxed text-[15px]">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* key strengths */}
                            <div className="mt-10">
                                <h3 className="text-2xl font-bold mb-4">{about.strengths.title}:</h3>
                                <ul className="space-y-3">
                                    {about.strengths.list.map((strength, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 text-white/70"
                                        >
                                            {/* accent bullet */}
                                            <span className="w-2 h-2 mt-2 bg-accent rounded-full flex-shrink-0"></span>
                                            <span className="text-white/70 leading-relaxed text-[15px]">{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default Resume;