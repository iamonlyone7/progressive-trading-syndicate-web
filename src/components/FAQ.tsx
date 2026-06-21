import { AccordionVariant } from "./AccordionVariant";

export default function FAQ() {
  return (
    <section id="faq" className="pts-section relative" style={{ background: 'var(--surface)' }}>
      <div className="section-container max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column - Sticky */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 reveal">
            <div className="section-eyebrow mb-8">
              <span className="section-eyebrow-text">Common Questions</span>
              <div className="section-eyebrow-line"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--blue-hero)] mb-6 tracking-tight leading-tight">
              Clarity in <br/><em className="italic text-[var(--blue-sky)]">Complexity.</em>
            </h2>
            <p className="text-lg text-[var(--text-mid)] max-w-md leading-relaxed font-sans mt-8">
              Clear, transparent answers to common inquiries regarding our corporate restructuring and turnaround processes.
            </p>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7 reveal reveal-delay-2">
            <AccordionVariant />
          </div>

        </div>
      </div>
    </section>
  );
}
