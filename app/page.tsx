"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Code2, Smartphone, Globe, Database, Palette
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Student Information Management System",
    description:
      "A modern full-stack application focused on performance, clean UX, and scalable architecture.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    image: "/SIMS.png",
    link: "student-information-management-syst-ten.vercel.app",
  },
  {
    number: "02",
    title: "Fashion Zone",
    description:
      "A responsive web application with a polished interface and smooth user experience.",
    tags: ["React", "Tailwind", "API"],
    image: "/Fashion.png",
    link: "fashion-zone-vonx.vercel.app",
  },
];

const skills = [
  { name: "Frontend Development", icon: Globe },
  { name: "React / Next.js", icon: Code2 },
  { name: "Backend Development · Python / Django / Node.js", icon: Database },
  { name: "Responsive Design", icon: Smartphone },
  { name: "UI/UX Designer Intern", icon: Palette, description: "Codeplus Pvt. Ltd." },
];

export default function Home() {
  return (
    <main className="digital-shell min-h-screen text-white">
      <nav className="digital-panel digital-rule fixed top-0 z-50 w-full border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-xl font-bold tracking-tight">NT<span className="signal-text">.</span></a>
          <div className="hidden gap-8 text-sm text-white/60 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
          <a href="#contact" className="rounded-full border border-cyan-200/30 px-5 py-2 text-sm transition hover:bg-cyan-200 hover:text-[#071017]">Let&apos;s Talk</a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[0.08] blur-3xl" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-24 lg:px-8">
          <div className="grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_300px]">
            <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white/50">
              <span className="h-px w-8 bg-cyan-200/70" /> <span className="signal-text">Developer &amp; Creative Technologist</span>
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[clamp(4rem,11vw,9rem)] font-semibold leading-[0.85] tracking-[-0.07em]">
              Nitesh<br /><span className="text-white/30">Thakur.</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <p className="max-w-xl text-lg leading-8 text-white/60">I build modern digital experiences that combine thoughtful design, clean code, and powerful technology.</p>
              <a href="#projects" className="group flex w-fit items-center gap-3 rounded-full bg-cyan-200 px-6 py-3 font-medium text-[#071017] transition hover:scale-105 hover:bg-white">
                View my work <ArrowUpRight size={18} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25 }} className="relative mx-auto w-full max-w-[260px]">
              <div className="absolute -inset-3 rounded-[2rem] border border-cyan-200/20" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-cyan-200/30 bg-cyan-200/10 shadow-2xl shadow-cyan-950/40">
                <img src="/Nitesh.png" alt="Nitesh Thakur" className="h-full w-full object-cover object-center" />
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-white/35">Nitesh Thakur / Developer</p>
            </motion.div>
          </div>
          <div className="absolute bottom-10 right-8 hidden text-right lg:block">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/30">Based in</p>
            <p className="flex items-center gap-2 text-sm text-white/60"><MapPin size={15} /> Nepal</p>
          </div>
        </div>
      </section>

      <section id="about" className="digital-rule border-t py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">01 / About</p>
              <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">Turning ideas into <span className="text-white/30">digital experiences.</span></h2>
            </div>
            <div className="max-w-xl text-lg leading-8 text-white/50">
              <p>I&apos;m Nitesh Thakur, a developer passionate about creating beautiful and functional products for the web.</p>
              <p className="mt-6">I enjoy solving complex problems, learning new technologies, and building experiences that are simple, fast, and enjoyable to use.</p>
              <a href="/Nitesh-Thakur-CV.pdf" download="Nitesh-Thakur-CV.pdf" className="mt-8 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-white transition hover:border-white"><Download size={17} /> Download CV</a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="digital-rule border-t py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">02 / Expertise</p>
          <h2 className="mb-16 text-4xl font-medium tracking-tight md:text-6xl">What I do.</h2>
          <div className="grid border-l border-t border-white/10 md:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group border-b border-r border-white/10 p-8 transition hover:bg-white/[0.03] md:p-12">
                  <Icon size={28} strokeWidth={1.5} className="mb-16 text-white/40 transition group-hover:text-white" />
                  <h3 className="text-2xl font-medium">{skill.name}</h3>
                  <p className="mt-3 text-white/40">{skill.description ?? "Building reliable and modern digital products."}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="digital-rule border-t py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">03 / Selected Work</p>
              <h2 className="text-4xl font-medium tracking-tight md:text-6xl">Projects.</h2>
            </div>
            <span className="hidden text-sm text-white/30 md:block">2024 — 2026</span>
          </div>
          <div className="space-y-px bg-white/10">
            {projects.map((project, index) => (
              <motion.a href={project.link} key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="digital-panel group block p-7 transition hover:bg-cyan-200/[0.06] md:p-10">
                {index === 0 && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-cyan-100/10 bg-[#f5f8fc] text-left shadow-2xl shadow-cyan-950/20">
                    <img src={project.image} alt={`${project.title} preview`} className="block h-auto max-h-[460px] w-full object-cover object-top" />
                  </div>
                )}
                {index === 0 && false && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-cyan-100/10 bg-[#f5f8fc] text-left shadow-2xl shadow-cyan-950/20">
                    <div className="flex min-h-56">
                      <div className="hidden w-28 shrink-0 bg-[#050919] p-3 text-[7px] text-white/70 sm:block">
                        <div className="mb-7 flex items-center gap-1 font-bold text-white"><span className="grid h-5 w-5 place-items-center rounded-md bg-indigo-500 text-[8px]">ED</span><span>Student<br />System</span></div>
                        <p className="mb-2 uppercase tracking-widest text-white/30">Workspace</p>
                        <div className="rounded bg-white px-2 py-1 font-semibold text-[#101525]">Dashboard</div>
                        <div className="mt-2 px-2">Students</div>
                        <div className="mt-2 px-2">Departments</div>
                      </div>
                      <div className="min-w-0 flex-1 bg-[#f5f8fc] p-4 sm:p-5">
                        <div className="mb-4 flex items-start justify-between"><div><p className="text-sm font-bold text-[#101525] sm:text-base">Dashboard</p><p className="text-[9px] text-slate-400 sm:text-[10px]">Overview of your institution</p></div><div className="h-5 w-20 rounded border border-slate-200 bg-white" /></div>
                        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4"><div className="rounded-lg border border-slate-200 bg-white p-2"><p className="text-[8px] text-slate-400">Total students</p><strong className="text-lg text-[#101525]">4</strong></div><div className="rounded-lg border border-slate-200 bg-white p-2"><p className="text-[8px] text-slate-400">Active students</p><strong className="text-lg text-[#101525]">2</strong></div><div className="rounded-lg border border-slate-200 bg-white p-2"><p className="text-[8px] text-slate-400">Average GPA</p><strong className="text-lg text-[#101525]">3.48</strong></div><div className="rounded-lg border border-slate-200 bg-white p-2"><p className="text-[8px] text-slate-400">Departments</p><strong className="text-lg text-[#101525]">3</strong></div></div>
                        <div className="mt-3 grid gap-2 sm:grid-cols-[1.4fr_1fr]"><div className="rounded-lg border border-slate-200 bg-white p-3"><p className="mb-3 text-[9px] font-bold text-[#101525]">Recently added students</p><div className="space-y-2"><div className="h-2 w-4/5 rounded bg-slate-100" /><div className="h-2 w-3/5 rounded bg-slate-100" /><div className="h-2 w-2/3 rounded bg-slate-100" /></div></div><div className="rounded-lg border border-slate-200 bg-white p-3"><p className="mb-3 text-[9px] font-bold text-[#101525]">Academic snapshot</p><div className="mb-2 h-1.5 rounded bg-indigo-500" /><div className="h-1.5 w-2/3 rounded bg-indigo-300" /></div></div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#09090b] text-left shadow-2xl shadow-black/30">
                    <img src={project.image} alt={`${project.title} preview`} className="block h-auto max-h-[460px] w-full object-cover object-top" />
                  </div>
                )}
                {index === 1 && false && (
                  <div className="mb-8 overflow-hidden rounded-xl border border-white/10 bg-[#09090b] text-left shadow-2xl shadow-black/30">
                    <div className="border-b border-black/10 bg-white px-4 py-3 text-[#17171a] sm:px-6">
                      <div className="flex items-center justify-between"><p className="text-sm font-black tracking-tight sm:text-base">FASHION <span className="text-rose-600">ZONE</span></p><div className="hidden gap-5 text-[9px] font-semibold sm:flex"><span>Home</span><span>Shop</span><span>Wishlist</span></div><div className="flex gap-2 text-xs"><span>⌕</span><span>♡</span><span>▢</span></div></div>
                    </div>
                    <div className="grid min-h-56 items-center gap-5 px-5 py-7 sm:grid-cols-[0.85fr_1fr] sm:px-8 sm:py-9">
                      <div><p className="mb-3 text-[8px] font-bold uppercase tracking-[0.3em] text-rose-500 sm:text-[9px]">New collection 2026</p><h3 className="max-w-[220px] text-3xl font-black leading-[0.9] tracking-[-0.06em] text-white sm:text-4xl">Dress with confidence.</h3><p className="mt-4 max-w-[260px] text-[9px] leading-4 text-white/55 sm:text-[10px]">Discover modern clothing curated for every moment, from everyday essentials to statement looks.</p><span className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-[9px] font-bold text-black">Shop Collection <span className="ml-2">-&gt;</span></span></div>
                      <div className="relative mx-auto h-44 w-full max-w-[250px] overflow-hidden rounded-2xl bg-[radial-gradient(circle_at_50%_25%,#f8ead8_0_12%,transparent_13%),linear-gradient(135deg,#d9d8c8,#9a9c93)]"><div className="absolute left-1/2 top-8 h-20 w-14 -translate-x-1/2 rounded-[45%] bg-[#b9967d]" /><div className="absolute bottom-[-25px] left-1/2 h-40 w-32 -translate-x-1/2 rounded-t-[45%] bg-gradient-to-r from-[#551624] via-[#9d2632] to-[#48121d]" /><div className="absolute bottom-5 left-3 h-16 w-10 rotate-[-25deg] rounded-sm bg-white/90 shadow-lg" /><div className="absolute bottom-4 right-3 h-20 w-11 rotate-[25deg] rounded-sm bg-[#252329] shadow-lg" /></div>
                    </div>
                  </div>
                )}
                <div className="grid gap-8 md:grid-cols-[80px_1fr_auto] md:items-center">
                  <span className="text-sm text-white/30">{project.number}</span>
                  <div>
                    <h3 className="text-2xl font-medium md:text-4xl">{project.title}</h3>
                    <p className="mt-4 max-w-xl leading-7 text-white/40">{project.description}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">{tag}</span>)}
                    </div>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition group-hover:bg-white group-hover:text-black"><ArrowUpRight size={20} /></div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="digital-rule border-t py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-white/40">04 / Contact</p>
          <div className="grid gap-12 lg:grid-cols-2">
            <div><h2 className="text-5xl font-medium leading-tight tracking-tight md:text-7xl">Have an idea?<br /><span className="text-white/30">Let&apos;s build it.</span></h2></div>
            <div className="flex flex-col justify-end">
              <a href="mailto:nitesh703thakur@gmail.com" className="group flex items-center justify-between border-b border-white/10 py-6 text-xl transition hover:border-white/40">
                <span className="flex items-center gap-4"><Mail size={20} /> nitesh703thakur@gmail.com</span>
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
              <div className="mt-10 flex gap-4">
                <a href="https://github.com/Nitesh703Thakur" aria-label="GitHub" className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/nitesh-thakur-17b9942b5" aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 transition hover:bg-white hover:text-black"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-sm text-white/30 md:flex-row lg:px-8">
          <p>© 2026 Nitesh Thakur</p><p>Designed &amp; built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
