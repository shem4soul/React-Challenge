import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="shem.jpeg" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>SHITTU EMMANUEL</h1>
      <p>
        A Full Stack Developer with strong experience building fintech and
        payment-driven systems using Node.js, TypeScript, and modern backend
        frameworks. Proven track record designing scalable APIs, processing
        transactions, and integrating payment gateways (Paystack, PayPal,
        Monnify) with secure webhook architectures.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="HTML-CSS" emoji="💪" color="orangered" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="😊" color="orange" />
      <Skill />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
