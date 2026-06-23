import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { Plus } from 'lucide-react';

export function AccordionVariant() {
  return (
    <Accordion
      className='flex w-full flex-col gap-0'
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      variants={{
        expanded: {
          opacity: 1,
          scale: 1,
        },
        collapsed: {
          opacity: 0,
          scale: 0.95,
        },
      }}
    >
      <AccordionItem value='confidentiality' className='py-6 border-b border-[var(--border-soft)] group first:border-t relative overflow-hidden transition-colors duration-500 hover:bg-white/50'>
        <AccordionTrigger className='w-full text-left py-4 relative z-10'>
          <div className='flex items-center justify-between w-full'>
            <div className='font-serif text-3xl md:text-4xl text-[var(--blue-hero)] font-light tracking-tight pr-8 transition-transform duration-500 group-hover:translate-x-4'>
              How is confidentiality maintained?
            </div>
            <div className='w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-[var(--blue-hero)] group-hover:bg-[var(--blue-hero)]'>
              <Plus className='h-6 w-6 text-[var(--blue-mid)] transition-transform duration-500 group-data-expanded:rotate-45 group-hover:text-white group-data-expanded:text-white' strokeWidth={1} />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-top'>
          <p className='pr-12 pt-4 pb-8 text-lg md:text-xl text-[var(--text-mid)] leading-relaxed font-sans max-w-3xl transition-transform duration-500 group-hover:translate-x-4'>
            We uphold the strictest confidentiality protocols. All consultations, financial disclosures, and strategic discussions are protected by comprehensive non-disclosure agreements. We manage all internal and external communications to shield your brand reputation throughout the turnaround cycle.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='timeline' className='py-6 border-b border-[var(--border-soft)] group relative overflow-hidden transition-colors duration-500 hover:bg-white/50'>
        <AccordionTrigger className='w-full text-left py-4 relative z-10'>
          <div className='flex items-center justify-between w-full'>
            <div className='font-serif text-3xl md:text-4xl text-[var(--blue-hero)] font-light tracking-tight pr-8 transition-transform duration-500 group-hover:translate-x-4'>
              What is the turnaround timeline?
            </div>
            <div className='w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-[var(--blue-hero)] group-hover:bg-[var(--blue-hero)]'>
              <Plus className='h-6 w-6 text-[var(--blue-mid)] transition-transform duration-500 group-data-expanded:rotate-45 group-hover:text-white group-data-expanded:text-white' strokeWidth={1} />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-top'>
          <p className='pr-12 pt-4 pb-8 text-lg md:text-xl text-[var(--text-mid)] leading-relaxed font-sans max-w-3xl transition-transform duration-500 group-hover:translate-x-4'>
            While every situation is unique, a standard stabilization phase typically takes 30 to 90 days. Comprehensive restructuring—including strategic divestitures, debt renegotiation, and operational realignment—generally spans 6 to 18 months, depending on organizational complexity and market conditions.
          </p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value='creditors' className='py-6 border-b border-[var(--border-soft)] group relative overflow-hidden transition-colors duration-500 hover:bg-white/50'>
        <AccordionTrigger className='w-full text-left py-4 relative z-10'>
          <div className='flex items-center justify-between w-full'>
            <div className='font-serif text-3xl md:text-4xl text-[var(--blue-hero)] font-light tracking-tight pr-8 transition-transform duration-500 group-hover:translate-x-4'>
              Will you interface with creditors?
            </div>
            <div className='w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-[var(--blue-hero)] group-hover:bg-[var(--blue-hero)]'>
              <Plus className='h-6 w-6 text-[var(--blue-mid)] transition-transform duration-500 group-data-expanded:rotate-45 group-hover:text-white group-data-expanded:text-white' strokeWidth={1} />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-top'>
          <p className='pr-12 pt-4 pb-8 text-lg md:text-xl text-[var(--text-mid)] leading-relaxed font-sans max-w-3xl transition-transform duration-500 group-hover:translate-x-4'>
            Yes. Our restructuring specialists assume the role of primary liaison with all financial stakeholders, including banks, private equity sponsors, suppliers, and unsecured creditors. We negotiate forbearance agreements and covenant waivers to buy your operations the runway needed to stabilize.
          </p>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value='management' className='py-6 border-b border-[var(--border-soft)] group relative overflow-hidden transition-colors duration-500 hover:bg-white/50'>
        <AccordionTrigger className='w-full text-left py-4 relative z-10'>
          <div className='flex items-center justify-between w-full'>
            <div className='font-serif text-3xl md:text-4xl text-[var(--blue-hero)] font-light tracking-tight pr-8 transition-transform duration-500 group-hover:translate-x-4'>
              Do we relinquish control?
            </div>
            <div className='w-12 h-12 rounded-full border border-[var(--border-soft)] flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:border-[var(--blue-hero)] group-hover:bg-[var(--blue-hero)]'>
              <Plus className='h-6 w-6 text-[var(--blue-mid)] transition-transform duration-500 group-data-expanded:rotate-45 group-hover:text-white group-data-expanded:text-white' strokeWidth={1} />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className='origin-top'>
          <p className='pr-12 pt-4 pb-8 text-lg md:text-xl text-[var(--text-mid)] leading-relaxed font-sans max-w-3xl transition-transform duration-500 group-hover:translate-x-4'>
            Not necessarily. We prefer an advisory role wherein we partner intimately with existing leadership teams. In severe distress scenarios, we can provide interim C-level executives (CRO, interim CFO) to execute difficult operational cuts and restore stakeholder confidence.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

