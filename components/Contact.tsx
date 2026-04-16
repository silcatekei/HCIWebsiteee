
import React from 'react';

const Contact: React.FC = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message! I'll get back to you shortly.");
        // In a real app, you'd handle form submission here.
    };
    
    return (
        <section id="contact" className="py-20 lg:py-28 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark">Ready to Chat?</h2>
                    <p className="text-slate-600 mt-4 text-lg">Send me a message or book a call. I'd love to hear from you!</p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">
                    {/* Left: Form */}
                    <div>
                         <h3 className="text-2xl font-bold text-dark mb-6">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                                <input type="text" id="contact-name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-2">Your Email</label>
                                <input type="email" id="contact-email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Your Message</label>
                                <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none" required></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right: Booking */}
                    <div className="bg-primary/10 p-8 rounded-2xl text-center flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-dark mb-4">Book a Free Consultation</h3>
                        <p className="text-slate-600 mb-8">
                            Let's have a 15-minute chat to see how I can help you achieve your goals. No strings attached!
                        </p>
                        <a 
                            href="#" // Replace with your Calendly link
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="bg-accent text-white font-bold px-8 py-4 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
                        >
                            Schedule a Meeting
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
