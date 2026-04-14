"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 9924677037",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "jethava.bhavesh6596@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "Ahmedabad, Gujarat, India",
    },
];

const initialForm = { firstname: "", lastname: "", email: "", phone: "", message: "" };

const validate = (fields) => {
    const errors = {};
    if (!fields.firstname.trim()) errors.firstname = "First name is required.";
    if (!fields.lastname.trim()) errors.lastname = "Last name is required.";
    if (!fields.email.trim()) {
        errors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
        errors.email = "Enter a valid email address.";
    }
    if (!fields.phone.trim()) {
        errors.phone = "Phone number is required.";
    } else if (!/^[+\d\s\-()]{7,15}$/.test(fields.phone)) {
        errors.phone = "Enter a valid phone number.";
    }
    if (!fields.message.trim()) errors.message = "Message is required.";
    return errors;
};

const Contact = () => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Clear error for this field on change
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate(form);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) throw new Error("Failed");
            setStatus("success");
            setForm(initialForm);
            setErrors({});
        } catch {
            setStatus("error");
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-12"
        >
            <div className="container">
                <div className="flex flex-col xl:flex-row gap-[30px] xl:gap-[50px]">
                    {/* form */}
                    <div className="xl:w-[50%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
                            suppressHydrationWarning
                        >
                            <h3 className="text-4xl text-accent">Get In Touch</h3>

                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* First Name */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        name="firstname"
                                        type="text"
                                        placeholder="Firstname"
                                        value={form.firstname}
                                        onChange={handleChange}
                                        className={errors.firstname ? "border-red-500 focus:border-red-500" : ""}
                                        suppressHydrationWarning
                                    />
                                    {errors.firstname && (
                                        <p className="text-red-400 text-xs pl-1">{errors.firstname}</p>
                                    )}
                                </div>

                                {/* Last Name */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        name="lastname"
                                        type="text"
                                        placeholder="Lastname"
                                        value={form.lastname}
                                        onChange={handleChange}
                                        className={errors.lastname ? "border-red-500 focus:border-red-500" : ""}
                                        suppressHydrationWarning
                                    />
                                    {errors.lastname && (
                                        <p className="text-red-400 text-xs pl-1">{errors.lastname}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        name="email"
                                        type="email"
                                        placeholder="Email Address"
                                        value={form.email}
                                        onChange={handleChange}
                                        className={errors.email ? "border-red-500 focus:border-red-500" : ""}
                                        suppressHydrationWarning
                                    />
                                    {errors.email && (
                                        <p className="text-red-400 text-xs pl-1">{errors.email}</p>
                                    )}
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        name="phone"
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={form.phone}
                                        onChange={handleChange}
                                        className={errors.phone ? "border-red-500 focus:border-red-500" : ""}
                                        suppressHydrationWarning
                                    />
                                    {errors.phone && (
                                        <p className="text-red-400 text-xs pl-1">{errors.phone}</p>
                                    )}
                                </div>
                            </div>

                            {/* textarea */}
                            <div className="flex flex-col gap-1">
                                <Textarea
                                    name="message"
                                    className={`h-[150px] ${errors.message ? "border-red-500 focus:border-red-500" : ""}`}
                                    placeholder="Type Your Message Here..."
                                    value={form.message}
                                    onChange={handleChange}
                                    suppressHydrationWarning
                                />
                                {errors.message && (
                                    <p className="text-red-400 text-xs pl-1">{errors.message}</p>
                                )}
                            </div>

                            {/* Success / Error feedback */}
                            {status === "success" && (
                                <p className="text-green-400 text-sm font-medium">
                                    Message sent successfully! I&apos;ll get back to you soon.
                                </p>
                            )}
                            {status === "error" && (
                                <p className="text-red-400 text-sm font-medium">
                                    Something went wrong. Please try again later.
                                </p>
                            )}

                            {/* button */}
                            <Button
                                size="md"
                                className="max-w-40"
                                type="submit"
                                disabled={status === "loading"}
                                suppressHydrationWarning
                            >
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex xl:w-[50%] items-center xl:justify-end order-1 xl:order-none mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-md">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
