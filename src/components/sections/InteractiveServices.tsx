"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";

interface Service {
  id: string;
  title: string;
  lead: string;
  paragraphTwo: string;
  paragraphThree: string;
  image: string;
}

interface InteractiveServicesProps {
  services: Service[];
}

export default function InteractiveServices({ services }: InteractiveServicesProps) {
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService = services.find((s) => s.id === activeId) || services[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12">
        {/* Left: Service List (Tabs) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="mb-8">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-2">Our Solutions</h2>
            <p className="text-slate-500 text-sm">Select a service to explore our AI-powered real estate tools.</p>
          </div>
          {services.map((service) => {
            const isActive = activeId === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveId(service.id)}
                className={`group relative w-full text-left p-6 rounded-3xl transition-all duration-300 border ${
                  isActive
                    ? "bg-white border-primary/20 shadow-[0_20px_50px_-20px_rgba(63,55,184,0.12)] scale-[1.02]"
                    : "bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 rounded-3xl border-2 border-primary/10 bg-gradient-to-br from-primary/[0.02] to-transparent pointer-events-none"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className={`font-display text-lg font-semibold tracking-tight transition-colors ${
                      isActive ? "text-primary" : "text-slate-900"
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-xs line-clamp-1">
                      {service.lead.split(".")[0]}.
                    </p>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform duration-300 ${
                    isActive ? "text-primary translate-x-1" : "text-slate-300 group-hover:text-slate-400"
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Service Details */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-white/60 p-8 lg:p-12 shadow-[0_45px_100px_-30px_rgba(15,23,42,0.1)] backdrop-blur-2xl h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent -z-10" />
              
              <div className="flex flex-col h-full">
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-primary/60">Module Details</span>
                </div>

                <div className="grid gap-10 lg:grid-cols-2 flex-grow">
                  <div className="space-y-6">
                    <h2 className="font-display text-4xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-5xl">
                      {activeService.title}
                    </h2>
                    
                    <div className="space-y-4 text-lg leading-relaxed text-slate-600">
                      <p className="font-medium text-slate-900">{activeService.lead}</p>
                      <p>{activeService.paragraphTwo}</p>
                      <p>{activeService.paragraphThree}</p>
                    </div>

                    <div className="pt-4">
                      <Link
                        href={`/services/${activeService.id}`}
                        className="group inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30"
                      >
                        Explore {activeService.title}
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className="relative aspect-square overflow-hidden rounded-3xl border border-border shadow-2xl">
                    <Image
                      src={activeService.image}
                      alt={activeService.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white">Active System</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile Layout (Stacked Accordion style) */}
      <div className="lg:hidden space-y-6 pt-8">
        {services.map((service) => {
          const isActive = activeId === service.id;
          return (
            <div
              key={service.id}
              className={`overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                isActive ? "border-primary/20 bg-white shadow-xl" : "border-slate-100 bg-transparent"
              }`}
            >
              <button
                onClick={() => setActiveId(isActive ? "" : service.id)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <div className="space-y-1">
                  <h3 className={`font-display text-xl font-semibold tracking-tight ${
                    isActive ? "text-primary" : "text-slate-900"
                  }`}>
                    {service.title}
                  </h3>
                  {!isActive && (
                    <p className="text-slate-500 text-xs line-clamp-1">
                      {service.lead.split(".")[0]}.
                    </p>
                  )}
                </div>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive ? "bg-primary text-white rotate-90" : "bg-slate-50 text-slate-400"
                }`}>
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-8 space-y-6">
                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-100">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="space-y-4 text-[0.95rem] leading-relaxed text-slate-600">
                        <p className="font-medium text-slate-900">{service.lead}</p>
                        <p>{service.paragraphTwo}</p>
                        <p>{service.paragraphThree}</p>
                      </div>

                      <Link
                        href={`/services/${service.id}`}
                        className="flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/20 w-full"
                      >
                        Explore Module
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
