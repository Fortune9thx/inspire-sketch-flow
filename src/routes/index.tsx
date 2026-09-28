import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import landscape from "@/assets/non-landscape.jpg";
import muse from "@/assets/non-muse-left.png";
import philosopher from "@/assets/non-philosopher-right.png";
import processImage from "@/assets/non-process.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Non — Adjudication at the speed of evidence" },
      { name: "description", content: "Bonded constitutional adjudication on GenLayer. Independent validators fetch HTTPS evidence and decide proposals against a pinned constitution." },
      { property: "og:title", content: "Non — Adjudication at the speed of evidence" },
      { property: "og:description", content: "Bonded constitutional adjudication on GenLayer. Evidence, judgment, and a constitution that stays pinned." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return <main className="non-page"><Hero /><Impact /><Process /><FAQ /><FinalCall /><Footer /></main>;
}

function Hero() {
  return <section className="non-hero" aria-labelledby="hero-title">
    <div className="non-container non-hero-top">
      <span className="non-kicker">Adjudication at the speed of evidence</span>
      <a className="non-mark" href="/" aria-label="Non home"><span className="non-mark-symbol" aria-hidden="true">n</span>Non</a>
    </div>
    <div className="non-hero-art">
      <img className="non-landscape" src={landscape} alt="Classical landscape with cypress trees and a distant temple" width={1536} height={1024} />
      <img className="non-statue non-statue-left" src={muse} alt="" aria-hidden="true" width={1024} height={1280} />
      <img className="non-statue non-statue-right" src={philosopher} alt="" aria-hidden="true" width={1024} height={1280} />
      <h1 id="hero-title" className="non-display non-wordmark">Non</h1>
    </div>
    <div className="non-container non-hero-bottom">
      <p>Evidence is gathered independently.<br />Judgment follows the constitution.</p>
      <div className="non-hero-actions">
        <Button asChild variant="paper" size="pill"><a href="/app">Open the board <ArrowUpRight aria-hidden="true" /></a></Button>
        <Button asChild variant="nightOutline" size="pill"><a href="#constitution">Read the constitution <ArrowUpRight aria-hidden="true" /></a></Button>
      </div>
    </div>
  </section>;
}

const facts = [
  { number: "2", label: "GEN minimum review bond", copy: "A review starts with a bond, not an anonymous opinion." },
  { number: "4", label: "Constitutional outcomes", copy: "Approve, reject, revise, or inconclusive. Each decision has a defined place." },
  { number: "6h", label: "Appeal window", copy: "A bounded period to challenge the result before it is settled." },
];
function Impact() {
  return <section className="non-impact" aria-labelledby="impact-title"><div className="non-container">
    <p className="non-kicker non-section-label">The protocol, in brief</p>
    <h2 id="impact-title" className="non-display non-section-title">A decision with structure.</h2>
    <p className="non-impact-intro">Every case is measured against a pinned constitution and evidence fetched by independent validators.</p>
    <div className="non-facts">{facts.map(fact => <article className="non-fact" key={fact.label}><p className="non-fact-number">{fact.number}</p><h3 className="non-fact-label">{fact.label}</h3><p className="non-fact-copy">{fact.copy}</p></article>)}</div>
  </div></section>;
}

const steps = [
  ["Register scope", "Define what can be adjudicated."],
  ["Pin constitution", "Set the rules before a case begins."],
  ["Open case with bond", "Commit GEN to bring a proposal forward."],
  ["Evaluate", "Validators fetch HTTPS evidence independently."],
  ["Appeal", "Challenge a decision within the appeal window."],
  ["Claim", "Resolve the outcome and its bond."],
];
function Process() {
  return <section id="constitution" className="non-process" aria-labelledby="process-title"><div className="non-container">
    <div className="non-process-heading"><div><p className="non-kicker">The process</p><h2 id="process-title" className="non-display non-section-title">From proposition<br />to resolution.</h2></div><span className="non-process-index">SIX STAGES / ONE PINNED CONSTITUTION</span></div>
    <div className="non-process-grid"><div className="non-steps">{steps.map(([title, copy], index) => <div className="non-step" key={title}><span className="non-step-num">{String(index + 1).padStart(2, "0")}</span><div><h3 className="non-step-title">{title}</h3><p className="non-step-copy">{copy}</p></div></div>)}</div>
      <figure className="non-process-image-wrap"><img className="non-process-image" src={processImage} alt="A marble figure holds a scroll above a sunlit classical landscape" loading="lazy" width={1536} height={1024} /><figcaption>Evidence first. The constitution remains fixed.</figcaption></figure>
    </div>
    <div className="non-note"><span>GenLayer · Chain Studio Next</span><span>Network 61997 · State may reset</span></div>
  </div></section>;
}

const questions = [
  ["What does Non decide?", "Non decides whether a proposal satisfies a pinned constitution, using HTTPS evidence independently fetched by validators."],
  ["What happens if evidence is missing?", "A decision should not pretend missing evidence exists. The case can be revised or returned inconclusive when the evidence does not support a definite outcome."],
  ["What is INCONCLUSIVE?", "It is a defined outcome when the available evidence does not establish approval or rejection. It is not an approval by default."],
  ["What network is this on?", "Non is on GenLayer Chain Studio Next, network 61997. This environment may reset."],
  ["How do bonds work?", "Cases and reviews use GEN bonds. A review requires a minimum 2 GEN bond; settlement follows the protocol outcome."],
];
function FAQ() {
  return <section className="non-faq" aria-labelledby="faq-title"><div className="non-container">
    <p className="non-kicker non-section-label">Questions & answers</p><h2 id="faq-title" className="non-display non-section-title">The essentials.</h2>
    <div className="non-faq-list">{questions.map(([question, answer]) => <details className="non-faq-item" key={question}><summary>{question}<span className="non-faq-icon" aria-hidden="true">+</span></summary><p className="non-faq-answer">{answer}</p></details>)}</div>
  </div></section>;
}
function FinalCall() {
  return <section className="non-final" aria-labelledby="final-title"><div className="non-container"><p className="non-kicker non-section-label">A record worth standing behind</p><h2 id="final-title" className="non-display non-section-title">Make the case.<br />Let evidence speak.</h2><p className="non-final-copy">Open the board to follow proposals, or begin with the rules that govern every decision.</p><div className="non-final-actions"><Button asChild variant="ink" size="pill"><a href="/app">Open the board <ArrowUpRight aria-hidden="true" /></a></Button><Button asChild variant="paperOutline" size="pill"><a href="#constitution">Read the constitution <ArrowUpRight aria-hidden="true" /></a></Button></div></div></section>;
}
function Footer() {
  return <footer className="non-footer"><div className="non-container"><div className="non-footer-main"><span className="non-footer-brand">Non</span><div className="non-footer-meta"><span>Bonded constitutional adjudication<br />on GenLayer</span><span>Studio Next<br />Chain 61997</span><span>State may reset<br />Contract: 0x…</span></div></div><div className="non-footer-bottom"><span>© Non</span><span>Evidence before judgment.</span></div></div></footer>;
}
