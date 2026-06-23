import { useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Nav />
      <div className="pt-24 min-h-screen bg-white">
        <section className="pts-section text-[#0d1f4f]">
          <div className="section-container max-w-6xl mx-auto px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-medium mb-6 tracking-tight text-[#0d1f4f]">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-16 leading-relaxed max-w-2xl">
              Let's discuss how we can assist with your financial turnaround and corporate restructuring needs. 
              Our team is ready to provide a confidential assessment.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Form Side */}
              <div className="flex flex-col">
                <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="firstName" className="text-sm font-medium text-[#0d1f4f]">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="John" 
                      />
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="lastName" className="text-sm font-medium text-[#0d1f4f]">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Doe" 
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#0d1f4f]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="john@company.com" 
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-[#0d1f4f]">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Acme Corp" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#0d1f4f]">How can we help you?</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                      placeholder="Please describe your situation briefly..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 btn-primary self-start"
                  >
                    <span>Submit Inquiry</span><span>→</span>
                  </button>
                  <p className="text-xs text-zinc-500 mt-2">
                    By submitting this form, you agree to our privacy policy. Your information will be kept strictly confidential.
                  </p>
                </form>
              </div>

              {/* Info Side */}
              <div className="flex flex-col border-t border-zinc-200 lg:border-t-0 pt-12 lg:pt-0">
                <h3 className="text-2xl font-serif text-[#0d1f4f] mb-8">Direct Contact</h3>
                
                <div className="flex flex-col gap-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0d1f4f]/50 font-bold mb-2">Email</h4>
                    <a href="mailto:info@progressivetradesyndicate.com" className="text-lg font-medium text-[#0d1f4f] hover:text-[#1a367d] transition-colors">
                      info@progressivetradesyndicate.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0d1f4f]/50 font-bold mb-2">Phone</h4>
                    <a href="tel:+919999999999" className="text-lg font-medium text-[#0d1f4f] hover:text-[#1a367d] transition-colors">
                      +91 999 999 9999
                    </a>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase tracking-widest text-[#0d1f4f]/50 font-bold mb-2">Location</h4>
                    <p className="text-lg text-[#0d1f4f] leading-relaxed">
                      Progressive Trade Syndicate<br />
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="mt-16 p-8 bg-zinc-50 border border-zinc-200 rounded">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-[#0d1f4f] mb-3">Response Protocol</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Due to the sensitive nature of our work, all initial inquiries are screened by our lead partners. 
                    We guarantee a response to qualified inquiries within 24 hours. Emergency restructuring requests 
                    can be flagged by calling our direct line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
