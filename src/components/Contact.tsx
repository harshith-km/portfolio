import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-br-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-primary/5 rounded-tl-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">Get In Touch</h3>
            <p className="text-darkText mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center card p-4">
                <div className="p-3 rounded-full bg-secondary mr-4 border border-primary/20">
                  <FaIcons.FaPhone className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">Phone</h4>
                  <p className="text-darkText">+91 77604 41296</p>
                </div>
              </div>

              <div className="flex items-center card p-4">
                <div className="p-3 rounded-full bg-secondary mr-4 border border-primary/20">
                  <FaIcons.FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">Email</h4>
                  <p className="text-darkText">harshithkm2003@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center card p-4">
                <div className="p-3 rounded-full bg-secondary mr-4 border border-primary/20">
                  <FaIcons.FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-primary">Location</h4>
                  <p className="text-darkText">Rajarajeswari Nagar, Bangalore</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-primary hover:text-primary-light border border-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaIcons.FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary text-primary hover:text-primary-light border border-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaIcons.FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-primary mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-primary mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="subject" className="block text-primary mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-primary mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-bold py-3 rounded-md hover:from-primary-dark hover:to-accent-dark transition-all duration-300 shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 