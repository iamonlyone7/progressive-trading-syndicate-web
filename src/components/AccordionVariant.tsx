import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const categories = [
  {
    label: "Process & Timeline",
    items: [
      { value: "timeline", q: "What is the typical turnaround timeline?", a: "Every situation is unique, but a standard stabilization phase typically takes 30 to 90 days. Comprehensive restructuring — including strategic divestitures, debt renegotiation, and operational realignment — generally spans 6 to 18 months, depending on organizational complexity and market conditions." },
      { value: "first-step", q: "What happens in the first consultation?", a: "We begin with a confidential, no-obligation discussion to understand your financial position, immediate concerns, and objectives. From there, we outline a preliminary assessment path and agree on next steps — typically a deeper diagnostic review before any engagement letter is drafted." },
      { value: "assessment", q: "How do you assess a company's financial health?", a: "We conduct a comprehensive diagnostic covering balance sheet strength, cash flow dynamics, debt structure, operational efficiency, and market positioning. This gives us a complete picture of root causes — not just symptoms — before we prescribe any course of action." },
    ],
  },
  {
    label: "Confidentiality & Control",
    items: [
      { value: "confidentiality", q: "How is confidentiality maintained?", a: "We uphold the strictest confidentiality protocols. All consultations, financial disclosures, and strategic discussions are protected by comprehensive non-disclosure agreements. We manage all internal and external communications to shield your brand reputation throughout the turnaround cycle." },
      { value: "control", q: "Do we relinquish control of our company?", a: "Not necessarily. We prefer an advisory role wherein we partner intimately with existing leadership teams. In severe distress scenarios, we can provide interim C-level executives (CRO, interim CFO) to execute difficult operational cuts and restore stakeholder confidence — but this is always a choice, never a requirement." },
    ],
  },
  {
    label: "Engagement & Fees",
    items: [
      { value: "creditors", q: "Will you interface with our creditors directly?", a: "Yes. Our restructuring specialists assume the role of primary liaison with all financial stakeholders, including banks, private equity sponsors, suppliers, and unsecured creditors. We negotiate forbearance agreements and covenant waivers to buy your operations the runway needed to stabilize." },
      { value: "pricing", q: "How do you charge for your services?", a: "Our fee structure is transparent and tailored to each engagement. Most advisory work is billed on a fixed-fee or milestone basis, not hourly. We align our compensation with outcomes that matter to you — stabilization milestones, debt reduction targets, or capital raised." },
    ],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function CategoryHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-16 first:mt-0">
      <motion.span
        initial={{ width: 0 }}
        whileInView={{ width: 20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px"
        style={{ background: 'var(--blue-mid)' }}
      />
      <span
        className="text-[11px] font-bold tracking-[0.25em] uppercase"
        style={{ color: 'var(--blue-mid)' }}
      >
        {label}
      </span>
    </div>
  );
}

function AccordionItemCard({ item, index }: { item: { value: string; q: string; a: string }; index: number }) {
  return (
    <motion.div variants={child}>
      <AccordionItem
        value={item.value}
        className="group/faq border-0 mb-3 rounded-lg transition-all duration-300 hover:shadow-[0_0_0_1px_rgba(22,70,176,0.08)] data-[open]:shadow-[0_0_0_1px_rgba(22,70,176,0.15)]"
        style={{ background: 'var(--card)' }}
      >
        <AccordionTrigger
          className="text-left text-base md:text-lg py-6 px-7 font-medium rounded-lg transition-all duration-300 group-data-[open]/faq:bg-[rgba(22,70,176,0.03)]"
          style={{ color: 'var(--blue-hero)' }}
        >
          <span className="transition-transform duration-300 group-hover/faq:translate-x-1">
            {item.q}
          </span>
        </AccordionTrigger>
        <AccordionContent
          className="text-sm md:text-base leading-relaxed px-7 pb-7"
          style={{ color: 'var(--text-mid)' }}
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {item.a}
          </motion.div>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}

export function AccordionVariant() {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={rootRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
    >
      {categories.map((cat, ci) => (
        <div key={ci}>
          <motion.div variants={child}>
            <CategoryHeader label={cat.label} />
          </motion.div>
          <Accordion className="w-full">
            {cat.items.map((item, ii) => (
              <div key={item.value}><AccordionItemCard item={item} index={ii} /></div>
            ))}
          </Accordion>
        </div>
      ))}
    </motion.div>
  );
}