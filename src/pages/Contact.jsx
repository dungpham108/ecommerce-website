import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const fieldClass = `w-full px-4 py-2 focus:outline-none border border-gray-300`;

  return (
    <div className="bg-white">
      <section className="bg-white text-black py-16 text-center">
        <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
        <p className="max-w-2xl mx-auto">
          We are always ready to assist you to provide the best shopping
          experience.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-red-500" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">support@shop.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="text-red-500" />
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+84 123 456 789</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-red-500" />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-gray-600">Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:col-span-3 bg-gray-50 p-6 rounded-xl shadow-lg"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Full Name"
              className={fieldClass}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className={fieldClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={`${fieldClass} mt-4`}
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
          <textarea
            rows={5}
            placeholder="Message"
            className={`${fieldClass} mt-4 resize-none`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
          >
            Submit
          </button>
        </motion.form>
      </section>
    </div>
  );
}
