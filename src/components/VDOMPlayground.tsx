import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { h, updateElement, VNode } from '@/lib/vdom';

export default function VDOMPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const oldVNodeRef = useRef<VNode | undefined>(undefined);
  const [lastUpdateMs, setLastUpdateMs] = useState<number>(0);

  // Generate virtual DOM and paint strictly to the real DOM
  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Generate Virtual DOM object structure
    const newVNode = h('div', { className: 'p-8 bg-white rounded-lg shadow min-h-[160px] text-center border border-zinc-200' },
      h('h2', { className: 'text-2xl font-bold mb-4 text-[#0d1f4f]' }, 'Real-time DOM Engine'),
      h('div', { className: 'flex items-center justify-center gap-6 mb-6' },
         h('p', { className: 'text-zinc-600 !m-0 line-height-none' }, 'Count: '),
         h('strong', { className: 'text-3xl text-blue-600 font-mono inline-block min-w-[30px]' }, count)
      ),
      h('button', { 
        className: 'px-6 py-2.5 bg-[#0d1f4f] text-white rounded font-medium shadow hover:bg-blue-900 transition-colors shadow-md',
        onClick: () => {
             setCount(prev => prev + 1);
        }
      }, 'Update State +1')
    );

    // 2. Measure Patch Time & Patch Real DOM
    const start = performance.now();
    updateElement(containerRef.current, newVNode, oldVNodeRef.current);
    const end = performance.now();
    
    setLastUpdateMs(Number((end - start).toFixed(2)));
    oldVNodeRef.current = newVNode;
  }, [count]);

  return (
    <section id="vdom-playground" className="py-24 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14 text-center">
          <div className="inline-flex items-center justify-center mb-4 px-3 py-1 rounded-full bg-blue-100 text-[#0d1f4f] text-sm font-bold tracking-wider uppercase shadow-sm">
            Interactive Engine
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1f4f] mb-4">Virtual DOM & Real DOM Implementation</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">
            This module showcases a custom-built VDOM engine. Interact with the UI below and watch how changes are selectively patched to the Real DOM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm">
               <h3 className="text-xl font-bold mb-2 flex items-center gap-3 text-[#0d1f4f]">
                  <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                  Real DOM Container
               </h3>
               <p className="text-sm text-zinc-500 mb-6">This standard DOM container is autonomously managed by our custom Virtual DOM diffing algorithm.</p>
               
               {/* Pure Real DOM Mount Target */}
               <div ref={containerRef} className="rounded border border-blue-100 bg-blue-50 p-2 relative">
                  {/* Flashing Overlay purely for visualization of patching phase */}
                  <AnimatePresence>
                     {count > 0 && (
                        <motion.div 
                           key={count}
                           initial={{ opacity: 0.1, backgroundColor: '#3b82f6' }}
                           animate={{ opacity: 0, backgroundColor: 'transparent' }}
                           transition={{ duration: 0.4 }}
                           className="absolute inset-0 z-10 pointer-events-none rounded"
                        />
                     )}
                  </AnimatePresence>
               </div>
               
               <div className="mt-4 flex items-center justify-between text-xs text-zinc-400 font-mono bg-zinc-50 p-3 rounded border border-zinc-100">
                  <span>Last Patch Time: {lastUpdateMs}ms</span>
                  <span>React Bypass: ACTIVE</span>
               </div>
            </div>

             <div className="bg-[#0d1f4f] p-6 rounded-xl shadow-lg border border-white/10 text-white overflow-hidden relative">
               <h3 className="text-xl font-bold mb-4 font-mono flex items-center gap-2">
                 <span className="text-blue-400">&lt;/&gt;</span> Current State
               </h3>
               <pre className="font-mono text-sm text-blue-200 bg-black/30 p-4 rounded-lg overflow-x-auto">
                 {JSON.stringify({ state: { count }, status: "Ready to diffuse" }, null, 2)}
               </pre>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm h-full">
            <h3 className="text-2xl font-bold mb-8 text-[#0d1f4f]">How the Engine Works</h3>
             <ul className="space-y-8 text-zinc-700">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">1</div>
                  <div>
                     <strong className="text-lg block mb-1 text-zinc-900">Virtual DOM Construction</strong>
                     <p className="leading-relaxed text-zinc-600">When state changes, we instantly generate an extremely lightweight JavaScript object tree mapping the target UI layout. This represents the Virtual DOM.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">2</div>
                  <div>
                     <strong className="text-lg block mb-1 text-zinc-900">Diffing Algorithm</strong>
                     <p className="leading-relaxed text-zinc-600">The engine recursively compares the new Virtual DOM tree against the previously cached Virtual DOM tree (the "Diff") to detect precise deltas.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 shadow-sm">3</div>
                  <div>
                     <strong className="text-lg block mb-1 text-zinc-900">Real DOM Patching</strong>
                     <p className="leading-relaxed text-zinc-600">Instead of destroying the whole UI, we apply surgical, hyper-targeted DOM API updates (the "Patch") exclusively to the isolated HTML elements that changed.</p>
                  </div>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
