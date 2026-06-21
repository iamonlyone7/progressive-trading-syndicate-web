import { useEffect, useState, FormEvent } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const errs: Record<string, string> = {};

    const firstName = data.get("firstName") as string;
    const lastName = data.get("lastName") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!firstName?.trim()) errs.firstName = "First name is required";
    if (!lastName?.trim()) errs.lastName = "Last name is required";
    if (!email?.trim()) {
      errs.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Enter a valid email address";
    }
    if (!message?.trim()) errs.message = "Please describe your situation";

    return errs;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(e.currentTarget);
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <>
        <Nav />
        <div id="main-content" className="pt-24 min-h-screen bg-white flex items-center justify-center">
          <div className="text-center max-w-lg mx-auto px-6">
            <div className="w-16 h-16 border-2 border-[var(--blue-mid)] flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl text-[var(--blue-mid)]">✓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-[var(--blue-hero)]">Inquiry received</h1>
            <p className="text-lg text-[var(--text-mid)] leading-relaxed">
              A senior partner will review your submission and reach out within 24 hours. All information remains strictly confidential.
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Nav />
      <div id="main-content" className="pt-24 min-h-screen bg-white">
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
                <form className="flex flex-col gap-6" noValidate onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="firstName" className="text-sm font-medium text-[#0d1f4f]">First Name</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Rajesh"
                      />
                      {errors.firstName && <span className="text-xs text-red-500 mt-1">{errors.firstName}</span>}
                    </div>
                    <div className="flex flex-col gap-2 flex-1">
                      <label htmlFor="lastName" className="text-sm font-medium text-[#0d1f4f]">Last Name</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        placeholder="Patel"
                      />
                      {errors.lastName && <span className="text-xs text-red-500 mt-1">{errors.lastName}</span>}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[#0d1f4f]">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="rajesh@exportshouse.in"
                    />
                    {errors.email && <span className="text-xs text-red-500 mt-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-[#0d1f4f]">Company Name</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                      placeholder="Konkan Exports Pvt Ltd"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-[#0d1f4f]">How can we help you?</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      className="border border-zinc-300 rounded px-4 py-3 text-[#0d1f4f] focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-y"
                      placeholder="Describe your situation — we treat every submission in confidence..."
                    ></textarea>
                    {errors.message && <span className="text-xs text-red-500 mt-1">{errors.message}</span>}
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
                      +91 22 6847 1934
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
