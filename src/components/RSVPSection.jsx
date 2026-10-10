import React, { useState } from "react";
import { BotanicalDivider } from "./BotanicalCorners";

const RSVP_ENDPOINT = "https://script.google.com/macros/s/AKfycbx7RZ8kDyVmsL-NIZDT5ewT45-nqs8j2-GQR2fHCxn-B1g_m_FByjQF_ig0gOqBdwd2zg/exec";

export const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attending: "yes",
    guests: "1",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || isSubmitting) return;

    setIsSubmitting(true);
    setSubmitError("");

    try {
      await fetch(RSVP_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitError("We couldn’t send your RSVP. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="px-6 py-10">
      <div className="text-center mb-6">
        <p className="font-hindi text-sm text-[#9B6874] font-medium">आप आएंगे?</p>
        <h2 className="text-2xl font-serif text-[#5E2938] uppercase tracking-wider font-semibold">
          Will You Join Us?
        </h2>
        <BotanicalDivider />
      </div>

      <div className="max-w-sm mx-auto bg-white/90 rounded-2xl p-6 border border-[#E8CDD3] shadow-sm">
        {submitted ? (
          <div className="text-center py-6 animate-fade-in-up">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#F5E4E7] flex items-center justify-center text-[#8A485A] mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h4 className="font-serif text-xl text-[#5E2938] font-bold">
              धन्यवाद! Thank You!
            </h4>
            <p className="text-xs text-[#6F4750] mt-2 font-sans-ui leading-relaxed">
              Your response has been joyfully recorded. We look forward to celebrating with you!
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-5 text-xs text-[#8A485A] underline font-sans-ui hover:text-[#5E2938]"
            >
              Update your response
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-sans-ui text-left">
            <div>
              <label className="block text-xs font-semibold text-[#5E2938] uppercase tracking-wider mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#E0B8C2] bg-[#FFFBF8] focus:outline-none focus:ring-2 focus:ring-[#C98F9B]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#5E2938] uppercase tracking-wider mb-1">
                Will you be attending?
              </label>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "yes" })}
                  className={`py-2 px-3 text-xs rounded-lg border transition-all text-center ${
                    formData.attending === "yes"
                      ? "bg-[#8A485A] text-white border-[#8A485A] shadow-sm"
                      : "bg-[#FFFBF8] text-[#5E2938] border-[#E0B8C2]"
                  }`}
                >
                  Joyfully, Yes!
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: "no" })}
                  className={`py-2 px-3 text-xs rounded-lg border transition-all text-center ${
                    formData.attending === "no"
                      ? "bg-[#8A485A] text-white border-[#8A485A] shadow-sm"
                      : "bg-[#FFFBF8] text-[#5E2938] border-[#E0B8C2]"
                  }`}
                >
                  Regretfully, No
                </button>
              </div>
            </div>

            {formData.attending === "yes" && (
              <div>
                <label className="block text-xs font-semibold text-[#5E2938] uppercase tracking-wider mb-1">
                  Number of Guests
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#E0B8C2] bg-[#FFFBF8] focus:outline-none focus:ring-2 focus:ring-[#C98F9B]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3 Persons</option>
                  <option value="4">4+ Guests</option>
                </select>
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold text-[#5E2938] uppercase tracking-wider mb-1">
                Wishes & Warm Message
              </label>
              <textarea
                rows="2"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Send your blessings to Kajal & Divyesh..."
                className="w-full text-xs px-3 py-2 rounded-lg border border-[#E0B8C2] bg-[#FFFBF8] focus:outline-none focus:ring-2 focus:ring-[#C98F9B]"
              ></textarea>
            </div>

            {submitError && (
              <p role="alert" className="text-xs text-[#8A2638] font-sans-ui">
                {submitError}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3 px-4 rounded-full bg-gradient-to-r from-[#8A485A] to-[#6E2E3E] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all disabled:cursor-wait disabled:opacity-70"
            >
              {isSubmitting ? "Sending RSVP…" : "Confirm RSVP"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
