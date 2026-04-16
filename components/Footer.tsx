
import React from 'react';
import { SparklesIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-dark text-slate-300">
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
                    <div>
                        <a href="#home" className="flex items-center justify-center md:justify-start gap-2 text-xl font-bold text-white">
                            <SparklesIcon className="w-6 h-6 text-primary" />
                            <span>Carlisle Virtual Assistant</span>
                        </a>
                        <p className="mt-2 text-sm text-slate-400">© {new Date().getFullYear()} Carlisle VA. All Rights Reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="https://www.linkedin.com/in/elijah-carlisle-danika-bernales/" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="https://www.instagram.com/jajadesu__" className="hover:text-primary transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
