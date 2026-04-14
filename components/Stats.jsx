"use client";
import { animate, motion } from "framer-motion";
// import CountUp from "react-countup";

// const stats = [
//     {
//         num: 5,
//         text: "Years Of Experience",
//     },
//     {
//         num: 26,
//         text: "Projects Completed",
//     },
//     {
//         num: 8,
//         text: "Technologies Mastered",
//     },
//     {
//         num: 500,
//         text: "Code Commits",
//     },
// ];

const profileData = {
    profileSummary: {
        title: "Profile Summary",
        description:
            "Results-driven Full Stack PHP Developer with 5 years of experience building secure, scalable, and high-performance web applications. Specialized in Laravel, WordPress, and RESTful API development with strong expertise in WooCommerce customization and payment gateway integrations (Stripe, Razorpay, PayPal). Proficient in modern frontend technologies including Next.js and React.js, delivering seamless user experiences. Known for writing clean, maintainable code and developing business-focused solutions that improve performance, automate workflows, and enhance user engagement.",
    },

    keyResponsibilities: {
        title: "Key Responsibilities I Handle",
        list: [
            "Develop, maintain, and optimize scalable web applications using Core PHP and Laravel.",
            "Design and implement secure, high-performance RESTful APIs for seamless system integration.",
            "Build dynamic and responsive frontend applications using Next.js and React.js.",
            "Develop and customize WordPress themes, plugins, and WooCommerce solutions.",
            "Integrate and optimize payment gateways (Stripe, Razorpay, PayPal) with secure transaction handling.",
            "Architect backend systems ensuring scalability, performance, and maintainability.",
            "Collaborate with cross-functional teams to deliver efficient, business-oriented solutions.",
            "Optimize database queries, application performance, and overall system security.",
            "Troubleshoot complex issues, debug applications, and ensure smooth production deployments.",
        ],
    },

    technicalExpertise: {
        title: "My Technical Expertise Includes",
        list: [
            "Backend: Core PHP, Laravel, RESTful APIs, Sanctum Authentication, MVC Architecture",
            "Frontend: Next.js, React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap",
            "CMS & E-commerce: WordPress, Customize Theme & Plugin, Develop Custom Plugins, WooCommerce Customization",
            "Payment Integrations: Stripe, Razorpay, PayPal (Secure & Scalable Implementations)",
            "Databases: MySQL, Query Optimization, Indexing, Performance Tuning",
            "AI & Productivity Tools: ChatGPT, Claude, Cursor",
            "Tools & Platforms: Git, GitHub, Postman, Jira, cPanel, Linux, VS Code",
            "Other Skills: Full Stack Development, API Integration, Third-Party Services, Performance Optimization, Clean Code Practices",
        ],
    },
};


const Stats = () => {
    return (
        <>
            {/* <section className="pt-4 pb-14">
                <div className="container">
                    <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                        {stats.map((item, index) => {
                            return (
                                <div
                                    className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                                    key={index}>
                                    <CountUp
                                        end={item.num}
                                        duration={5}
                                        delay={2}
                                        className="text-4xl xl:text-6xl font-extrabold"
                                    />
                                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                        } leading-snug text-white/80`}>{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section> */}

            <section className="pt-4 pb-14">
                <div className="container">
                    {/* Profile Summary */}
                    <div className="flex flex-col gap-2 p-6 md:p-8 border border-accent rounded-xl mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            {profileData.profileSummary.title}
                        </h3>
                        <p className="text-white/80 leading-loose">
                            {profileData.profileSummary.description}
                        </p>
                    </div>

                    {/* Key Responsibilities */}
                    <div className="flex flex-col gap-2 p-6 md:p-8 border border-accent rounded-xl mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-loose">
                            {profileData.keyResponsibilities.title}
                        </h3>
                        <ul className="space-y-3">
                            {profileData.keyResponsibilities.list.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-3 text-white/70"
                                >
                                    <span className="w-2 h-2 mt-3 bg-accent rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Technical Expertise */}
                    <div className="flex flex-col gap-2 p-6 md:p-8 border border-accent rounded-xl">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-loose">
                            {profileData.technicalExpertise.title}
                        </h3>
                        <ul className="space-y-3">
                            {profileData.technicalExpertise.list.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-white/70"
                                >
                                    <span className="w-2 h-2 mt-3 bg-accent rounded-full flex-shrink-0"></span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Stats;