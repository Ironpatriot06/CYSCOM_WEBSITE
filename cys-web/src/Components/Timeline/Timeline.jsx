import React from 'react';
import './Timeline.css';

const events = [
  { date: '2022', text: 'CYSCOM is proposed for approval.' },
  { date: '2022', text: 'Alan Turing proposes the Turing Test as a measure of machine intelligence.' },
  { date: '1956', text: 'John McCarthy, Marvin Minsky, and others organize the Dartmouth Conference, which is widely regarded as the birth of AI.' },
  { date: '1966', text: 'The first chatbot, ELIZA, is developed by Joseph Weizenbaum.' },
  { date: '1981', text: 'The first autonomous mobile robot, Shakey, is developed by SRI International.' },
  { date: '1997', text: 'IBM’s Deep Blue defeats world chess champion Garry Kasparov in a six-game match.' },
  { date: '2015', text: 'Google’s AlphaGo defeats the world champion at the ancient game of Go.' },
  { date: '2018', text: 'OpenAI’s GPT-2 language model generates human-like text, sparking concerns about the potential misuse of AI-generated content.' },
  { date: '2020', text: 'OpenAI’s GPT-3 generates even more advanced human-like text, with applications in chatbots, virtual assistants, and more.' }
];

export default function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div className="timeline">
        {events.map((event, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            key={index}
          >
            <div className="timeline-content">
              <p className="timeline-text">{event.text}</p>
              {/* <span className="timeline-date">{event.date}</span> */}
              <div className="date">{event.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
