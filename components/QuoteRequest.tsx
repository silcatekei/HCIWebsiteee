
import React, { useState } from 'react';
import { CheckCircleIcon } from './icons';

interface FormData {
    name: string;
    email: string;
    services: string[];
    details: string;
}

const servicesOptions = [
    'Admin Support', 'Social Media Management', 'Content Creation', 'Email Marketing', 'Bookkeeping', 'Scheduling'
];

const QuoteRequest: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', services: [], details: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleServiceChange = (service: string) => {
        setFormData(prev => {
            const newServices = prev.services.includes(service)
                ? prev.services.filter(s => s !== service)
                : [...prev.services, service];
            return { ...prev, services: newServices };
        });
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a backend or service like EmailJS
        console.log('Form Submitted:', formData);
        if (formData.name && formData.email && formData.services.length > 0) {
            setIsSubmitted(true);
        } else {
            alert('Please fill out all required fields.');
        }
    };

    if (isSubmitted) {
        return (
            <section id="quote" className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-6 max-w-2xl text-center">
                    <div className="bg-secondary p-8 md:p-12 rounded-2xl shadow-lg">
                        <CheckCircleIcon className="w-16 h-16 text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-dark">Thank you, {formData.name}!</h2>
                        <p className="text-slate-600 mt-4 text-lg leading-relaxed">
                            Your quote request is on its way to my inbox! I'm crunching the numbers and will get back to you at <strong>{formData.email}</strong> within 24 hours with a personalized quote and next steps.
                        </p>
                        <button 
                            onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', services: [], details: '' }); }}
                            className="mt-8 bg-primary text-white font-bold px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
                        >
                            Request Another Quote
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="quote" className="py-20 lg:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-dark">Get a Custom Quote</h2>
                    <p className="text-slate-600 mt-4 text-lg">Tell me about your needs, and I'll create a tailored plan for you.</p>
                </div>
                <div className="max-w-3xl mx-auto bg-secondary p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-3">Which services do you need?</label>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {servicesOptions.map(service => (
                                    <label key={service} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-slate-300 has-[:checked]:bg-primary/10 has-[:checked]:border-primary transition-all cursor-pointer">
                                        <input type="checkbox" className="h-5 w-5 rounded text-primary focus:ring-primary" checked={formData.services.includes(service)} onChange={() => handleServiceChange(service)} />
                                        <span className="text-sm font-medium text-slate-700">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label htmlFor="details" className="block text-sm font-semibold text-slate-700 mb-2">Tell me more about your project</label>
                            <textarea id="details" name="details" value={formData.details} onChange={handleInputChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none"></textarea>
                        </div>
                        <div className="text-center pt-4">
                             <button type="submit" className="bg-primary text-white font-bold px-10 py-4 rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg w-full md:w-auto">
                                Get My Free Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default QuoteRequest;
