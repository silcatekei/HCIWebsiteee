
import React from 'react';
import type { ExperienceItem, SkillItem } from '../types';
// FIX: Imported SparklesIcon from the central icons file to resolve the "used before declaration" error.
import { BriefcaseIcon, CalendarIcon, MailIcon, SparklesIcon } from './icons';

const skillsData: SkillItem[] = [
    { name: 'Admin Support', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { name: 'Social Media', icon: <SparklesIcon className="w-5 h-5" /> },
    { name: 'Email Management', icon: <MailIcon className="w-5 h-5" /> },
    { name: 'Scheduling', icon: <CalendarIcon className="w-5 h-5" /> },
    { name: 'Content Creation', icon: <BriefcaseIcon className="w-5 h-5" /> }, // Placeholder, use better icon
    { name: 'Bookkeeping', icon: <BriefcaseIcon className="w-5 h-5" /> }, // Placeholder
];

const experienceData: ExperienceItem[] = [
    { year: 'SEP2021 - OCT2022', role: 'TECHNICAL SUPPORT', company: 'Concentrix - AT&T', description: 'Delivered excellent customer support by efficiently troubleshooting technical issues, managing multiple inquiries, and maintaining strong communication and teamwork skills.' },
    { year: 'DEC2022 - JUN2023', role: 'ADMINISTRATOR', company: 'The Gruel Group - EXP Realty', description: 'Efficiently supported real estate operations by managing clients, creating marketing content, handling listings, coordinating transactions, and overseeing daily administrative tasks.' },
    { year: 'JUL2023 - NOV2023', role: 'ADMINISTRATOR', company: 'Kereen Henry Realty - Keller Williams', description: 'Supported real estate operations by managing clients, creating marketing content, handling listings, coordinating transactions, and performing essential administrative tasks to ensure smooth business flow.' },
];

// FIX: Removed the local SparklesIcon component declaration as it's now imported.


const About: React.FC = () => {
    return (
        <section id="about" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark">A Little About Me</h2>
                    <p className="text-slate-600 mt-4 text-lg">Your partner in productivity and success.</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Left Column: Bio & Skills */}
                    <div className="lg:w-1/2">
                        <div className="bg-secondary p-8 rounded-2xl shadow-sm">
                            <h3 className="text-2xl font-bold text-dark mb-4">Who I Am</h3>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Hi! I'm Carlisle, Your Skilled & Experienced
                                Admin , Social Media Management. Podcast
                                Management, Appointemnt Setter, and
                                Executive/Virtual Assistant! 

                                With over 3 years of working experience, I've had
                                the privilege of collaborating with a diverse range
                                of professionals, including online coaches,
                                therapists, doctors, podcasters, public speakers,
                                real estate investors, fitness trainers,
                                photographers, Airbnb hosts, and other business
                                owners.

                            </p>
                            <h3 className="text-2xl font-bold text-dark mb-4">My Skills</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillsData.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-2 bg-primary/10 text-primary-dark font-semibold px-4 py-2 rounded-full text-sm">
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Experience Timeline */}
                    <div className="lg:w-1/2">
                         <h3 className="text-2xl font-bold text-dark mb-6 text-center lg:text-left">My Journey</h3>
                        <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
                            {experienceData.map((item, index) => (
                                <div key={index} className="relative">
                                    <div className="absolute -left-[3.2rem] top-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                                       <BriefcaseIcon className="w-5 h-5"/>
                                    </div>
                                    <p className="text-sm font-semibold text-primary">{item.year}</p>
                                    <h4 className="text-xl font-bold text-dark mt-1">{item.role}</h4>
                                    <p className="text-slate-500 font-medium mb-2">{item.company}</p>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;