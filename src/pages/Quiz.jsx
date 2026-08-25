import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/ui/Modal";

const questions = [
  { question: "Which technology is primarily used to create reusable UI components in SkillTrack?", options: ["React", "SQL", "Git", "Figma"], answer: "React" },
  { question: "Which React hook is commonly used for local component state?", options: ["useState", "useRoute", "useData", "usePage"], answer: "useState" },
  { question: "What does responsive design help an interface do?", options: ["Work across screen sizes", "Remove all images", "Avoid CSS", "Replace JavaScript"], answer: "Work across screen sizes" },
  { question: "Which HTML element provides a label for a form control?", options: ["label", "section", "span", "article"], answer: "label" },
  { question: "What is a good accessibility practice?", options: ["Use meaningful labels", "Hide all focus states", "Use tiny text", "Remove keyboard access"], answer: "Use meaningful labels" }
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = questions.reduce((sum, q, index) => sum + (answers[index] === q.answer ? 1 : 0), 0);
  const complete = Object.keys(answers).length === questions.length;

  const submit = (event) => {
    event.preventDefault();
    if (complete) setSubmitted(true);
  };

  return (
    <section className="section container narrow">
      <div className="page-heading">
        <span className="eyebrow">KNOWLEDGE CHECK</span>
        <h1>Frontend foundations quiz.</h1>
        <p>Test what you've learned. Select one answer for each question.</p>
      </div>

      <form className="quiz-form" onSubmit={submit}>
        {questions.map((question, index) => (
          <fieldset className="quiz-question" key={question.question}>
            <legend>{index + 1}. {question.question}</legend>
            <div className="quiz-options">
              {question.options.map((option) => (
                <label className={answers[index] === option ? "selected" : ""} key={option}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => setAnswers({ ...answers, [index]: option })}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
        <button className="button button-primary" type="submit" disabled={!complete}>Submit quiz</button>
        {!complete && <p className="quiz-hint">Answer all five questions to submit.</p>}
      </form>

      {submitted && (
        <Modal title={score >= 4 ? "Excellent work! 🎉" : "Good attempt!"} onClose={() => setSubmitted(false)}>
          <div className="quiz-result">
            <strong>{score}/5</strong>
            <span>{score >= 4 ? "You have a strong understanding of the fundamentals." : "Review your course lessons and try again."}</span>
          </div>
          <div className="modal-actions">
            <button className="button button-secondary" onClick={() => { setAnswers({}); setSubmitted(false); }}>Try again</button>
            <Link className="button button-primary" to="/dashboard">Back to dashboard</Link>
          </div>
        </Modal>
      )}
    </section>
  );
}