import Accordion from "./components/Accordion";
import "./index.css";

const questions = [
  {
    id: 1,
    title: "What is JSX?",
    text: "JSX is a syntax extension of JavaScript. It is used with React to describe the user interface's appearance. Using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },
  {
    id: 2,
    title: "What are React Hooks?",
    text: "React Hooks allow you to use state and lifecycle features in functional components. Hooks like useState, useEffect, and useContext make it easier to manage component logic without using classes, improving readability and reusability.",
  },
  {
    id: 3,
    title: "What is useState, and how does it work?",
    text: "useState is a hook that allows you to add state to functional components. It takes an initial state value and returns an array with two elements: the current state and a function to update it.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={questions} />
    </div>
  );
}
