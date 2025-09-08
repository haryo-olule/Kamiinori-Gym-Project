// Pages/WorkDetails.jsx
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Target, Clock, Zap, Star, LoaderCircle } from "lucide-react";

const WorkDetails = () => {

  const selectedExercise = useLoaderData();

  return (
    <div className="details-content">
      <div className="exercise-header">
        <h2 className="exercise-title">{selectedExercise.name}</h2>
        <div className="exercise-badges">
          {selectedExercise.difficultyLevel && (
            <span
              className={`badge ${
                selectedExercise.difficultyLevel === "Beginner"
                  ? "badge-beginner"
                  : selectedExercise.difficultyLevel === "Intermediate"
                  ? "badge-intermediate"
                  : "badge-advanced"
              }`}
            >
              {selectedExercise.difficultyLevel}
            </span>
          )}
          {selectedExercise.bodyPart && (
            <span className="badge badge-bodypart">
              <Target size={16} /> {selectedExercise.bodyPart}
            </span>
          )}
        </div>
      </div>

      <div className="stats-grid">
        {selectedExercise.sets && (
          <div className="stat-card stat-card-blue">
            <Clock className="stat-icon" size={20} />
            <div className="stat-info">
              <p className="stat-label">Sets & Reps</p>
              <p className="stat-value">
                {selectedExercise.sets} × {selectedExercise.reps}
              </p>
            </div>
          </div>
        )}

        <div className="stat-card stat-card-purple">
          <Zap className="stat-icon" size={20} />
          <div className="stat-info">
            <p className="stat-label">Training to Failure</p>
            <p className="stat-value">
              {selectedExercise.trainingToFailure ? "Yes" : "No"}
            </p>
          </div>
        </div>

        <div className="stat-card stat-card-green">
          <Star className="stat-icon" size={20} />
          <div className="stat-info">
            <p className="stat-label">Difficulty</p>
            <p className="stat-value">
              {selectedExercise.difficultyLevel || "N/A"}
            </p>
          </div>
        </div>
      </div>

      <div className="content-grid">
        {/* Steps */}
        <div className="content-section">
          <h3 className="section-header">
            <LoaderCircle size={20} /> How to Perform
          </h3>
          <div className="section-content">
            {selectedExercise.steps?.length ? (
              <ol className="steps-list">
                {selectedExercise.steps.map((step, i) => (
                  <li key={i} className="step-item">
                    <span className="step-number">{i + 1}</span>
                    <span className="step-text">{step}</span>
                  </li>
                ))}
              </ol>
            ) : (
              <p>No steps available</p>
            )}
          </div>
        </div>

        {/* Tips */}
        <div className="content-section">
          <h3 className="section-header">💡 Pro Tips</h3>
          <div className="section-content">
            {selectedExercise.tips?.length ? (
              <ul className="tips-list">
                {selectedExercise.tips.map((tip, i) => (
                  <li key={i} className="tip-item">
                    <span className="tip-text">{tip}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No tips available</p>
            )}

            <img
              src={selectedExercise.image || selectedExercise.imageUrl}
              alt={selectedExercise.name}
              style={{ width: "100%", borderRadius: "8px", marginTop: "16px" }}
            />

            {/* Keep existing button class; no new features */}
            <button className="demo-btn">View Demo</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;

// Loader for child route: /service/work/:id
export const WorkDetailsLoader = async ({ params }) => {
  const res = await fetch(`http://localhost:3002/exercises/${params.id}`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /exercises/${params.id}: ${res.status} ${res.statusText}`
    );
  }
  return res.json();
};
