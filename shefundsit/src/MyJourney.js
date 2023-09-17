import React from 'react';
import { Link } from 'react-router-dom';
import './MyJourney.css'; // Import your custom CSS for styling

function MyJourney() {
  // Define your lessons here
  const lessons = [
    { id: 1, title: 'Lesson 1', description: 'Introduction to Budgeting' },
    { id: 2, title: 'Lesson 2', description: 'Saving for the Future' },
    { id: 3, title: 'Lesson 3', description: 'Investing Basics' },
    // Add more lessons as needed
  ];

  return (
    <div className="my-journey-container">
      <h2>My Journey</h2>
      <div className="lesson-circles">
        {lessons.map((lesson) => (
          <Link
            to={`/my-journey/${lesson.id}`}
            key={lesson.id}
            className="lesson-circle"
          >
            <div className="circle">
              <p>{lesson.title}</p>
            </div>
            <p className="lesson-description">{lesson.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MyJourney;
