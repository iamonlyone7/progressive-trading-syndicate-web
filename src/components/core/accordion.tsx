import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence, Variants, Transition } from 'framer-motion';
import { cn } from '@/lib/utils';

type AccordionContextType = {
  expandedValue: string | null;
  toggleItem: (value: string) => void;
  variants?: Variants;
  transition?: Transition;
};

const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export function Accordion({
  children,
  className,
  transition,
  variants,
}: {
  children: React.ReactNode;
  className?: string;
  transition?: Transition;
  variants?: Variants;
}) {
  const [expandedValue, setExpandedValue] = useState<string | null>(null);

  const toggleItem = (value: string) => {
    setExpandedValue((prev) => (prev === value ? null : value));
  };

  return (
    <AccordionContext.Provider value={{ expandedValue, toggleItem, variants, transition }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

type AccordionItemContextType = {
  value: string;
  isExpanded: boolean;
};

const AccordionItemContext = createContext<AccordionItemContextType | undefined>(undefined);

export function AccordionItem({
  value,
  children,
  className,
  style,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const context = useContext(AccordionContext);
  if (!context) throw new Error('AccordionItem must be used within Accordion');
  const isExpanded = context.expandedValue === value;

  return (
    <AccordionItemContext.Provider value={{ value, isExpanded }}>
      <div
        className={cn("group", className)}
        data-expanded={isExpanded ? '' : undefined}
        style={style}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error('AccordionTrigger must be used within AccordionItem');
  }

  return (
    <button
      className={cn("w-full appearance-none bg-transparent m-0 p-0 text-left border-none cursor-pointer focus:outline-none", className)}
      onClick={() => context.toggleItem(itemContext.value)}
      type="button"
    >
      {children}
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  if (!context || !itemContext) {
    throw new Error('AccordionContent must be used within AccordionItem');
  }

  const isExpanded = itemContext.isExpanded;
  const variants = context.variants || {
    expanded: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  const combinedVariants = {
    expanded: { height: 'auto', ...variants.expanded },
    collapsed: { height: 0, ...variants.collapsed },
  };

  return (
    <AnimatePresence initial={false}>
      {isExpanded && (
        <motion.div
          initial="collapsed"
          animate="expanded"
          exit="collapsed"
          variants={combinedVariants}
          transition={context.transition}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
