import React, { useState } from "react";
import { Search, Target, Clock, Zap, Star, LoaderCircle } from "lucide-react";
import { useLoaderData } from "react-router-dom";
import Crunchesimg from "../assets/Excerise-img/Russiantwist.jpg";

const workoutData = [
  {
    category: "EXERCISES BY BODY PART",
    groups: {
      Abs: ["Crunches", "Planks", "Russian Twists", "Mountain Climbers"],
      Arms: ["Push-ups", "Bicep Curls", "Tricep Dips", "Pull-ups"],
      Back: ["Pull-ups", "Rows", "Lat Pulldowns", "Deadlifts"],
      "Butt/Hips": ["Squats", "Hip Thrusts", "Glute Bridges", "Lunges"],
      Chest: ["Push-ups", "Bench Press", "Chest Flyes", "Dips"],
      "Full Body/Integrated": [
        "Burpees",
        "Thrusters",
        "Clean & Press",
        "Turkish Get-ups",
      ],
      "Legs - Calves and Shins": [
        "Calf Raises",
        "Toe Raises",
        "Jump Rope",
        "Box Jumps",
      ],
      Neck: ["Neck Rolls", "Neck Stretches", "Resistance Band Pulls"],
      Shoulders: ["Shoulder Press", "Lateral Raises", "Front Raises", "Shrugs"],
      "Legs - Thighs": ["Squats", "Lunges", "Leg Press", "Wall Sits"],
    },
  },
  {
    category: "EXERCISES BY BRO SPLIT",
    groups: {
      Chest: [
        "Bench Press",
        "Incline Dumbbell Press",
        "Push-ups",
        "Chest Flyes",
      ],
      Back: ["Pull-ups", "Barbell Rows", "Deadlifts", "Lat Pulldowns"],
      Shoulders: ["Overhead Press", "Arnold Press", "Lateral Raises", "Shrugs"],
      Arms: ["Bicep Curls", "Hammer Curls", "Tricep Dips", "Skull Crushers"],
      Legs: ["Squats", "Lunges", "Leg Press", "Romanian Deadlifts"],
    },
  },
  {
    category: "EXERCISES BY PUSH PULL LEG",
    groups: {
      Push: [
        "Bench Press",
        "Overhead Press",
        "Incline Dumbbell Press",
        "Tricep Dips",
      ],
      Pull: ["Pull-ups", "Barbell Rows", "Face Pulls", "Bicep Curls"],
      Legs: ["Squats", "Romanian Deadlifts", "Leg Press", "Calf Raises"],
    },
  },
];

const Service = () => {
  const workoutDetails = useLoaderData(); // from ServiceLoader

  const [expandedSections, setExpandedSections] = useState({
    "EXERCISES BY BODY PART": false,
    "EXERCISES BY BRO SPLIT": false,
    "EXERCISES BY PUSH PULL LEG": false,
  });
  const [expandedItems, setExpandedItems] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExercise, setSelectedExercise] = useState(null);

  const toggleSection = (categoryName) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const toggleGroup = (groupName) => {
    setExpandedItems((prev) => ({ ...prev, [groupName]: !prev[groupName] }));
  };

  const handleSelectExercise = (exerciseName) => {
    const details = workoutDetails.find(
      (exercise) => exercise.name.toLowerCase() === exerciseName.toLowerCase()
    ) || { name: exerciseName };
    setSelectedExercise(details);

    const el = document.getElementById("exercise-details");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const filteredData = workoutData
    .map((category) => {
      const filteredGroups = {};
      Object.entries(category.groups).forEach(([groupName, exercises]) => {
        const matchingExercises = exercises.filter((exercise) =>
          exercise.toLowerCase().includes(searchTerm.toLowerCase())
        );
        const groupMatches = groupName
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        if (groupMatches || matchingExercises.length > 0) {
          filteredGroups[groupName] = groupMatches
            ? exercises
            : matchingExercises;
        }
      });
      return { ...category, groups: filteredGroups };
    })
    .filter((category) => Object.keys(category.groups).length > 0);

  return (
    <section className="service-page">
      <div className="exercise-library">
        <div className="service-container">
          {/* Search */}
          <div className="service-box">
            <div className="search-container1">
              <input
                type="text"
                placeholder="Search ACE Fit® Exercise Library"
                className="search-input1"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-button1">
                <Search size={18} />
              </button>
            </div>

            {/* Categories */}
            <div className="service-category">
              {filteredData.map((category) => (
                <div key={category.category} className="category-block">
                  <h2
                    onClick={() => toggleSection(category.category)}
                    style={{ cursor: "pointer" }}
                  >
                    {category.category}
                  </h2>

                  {expandedSections[category.category] && (
                    <div className="group-list">
                      {Object.entries(category.groups).map(
                        ([groupName, exercises]) => (
                          <div key={groupName} className="group-block">
                            <h3
                              onClick={() => toggleGroup(groupName)}
                              style={{ cursor: "pointer" }}
                            >
                              {groupName}
                            </h3>

                            {expandedItems[groupName] && (
                              <ul>
                                {exercises.map((exercise) => (
                                  <li key={exercise}>
                                    <a
                                      href="#exercise-details"
                                      onClick={() =>
                                        handleSelectExercise(exercise)
                                      }
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                        color: "inherit",
                                      }}
                                    >
                                      {exercise}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {filteredData.length === 0 && (
              <div className="no-results">
                <p>No exercises found matching "{searchTerm}"</p>
              </div>
            )}
          </div>

          {/* Exercise Details */}
          <div className="service-box" id="exercise-details">
            <div className="details-card">
              {selectedExercise ? (
                <div className="details-content">
                  <div className="exercise-header">
                    <h2 className="exercise-title">{selectedExercise.name}</h2>
                    <div className="exercise-badges">
                      {selectedExercise.difficultyLevel && (
                        <span
                          className={`badge ${
                            selectedExercise.difficultyLevel === "Beginner"
                              ? "badge-beginner"
                              : selectedExercise.difficultyLevel ===
                                "Intermediate"
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
                    {selectedExercise.sets && selectedExercise.reps && (
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
                    {/* Steps Section */}
                    <div className="content-section">
                      <h3 className="section-header">
                        <LoaderCircle size={20} /> How to Perform
                      </h3>
                      <div className="section-content">
                        {selectedExercise.steps ? (
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

                    {/* Tips Section */}
                    <div className="content-section">
                      <h3 className="section-header">💡 Pro Tips</h3>
                      <div className="section-content">
                        {selectedExercise.tips ? (
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
                          src={selectedExercise.imageUrl || Crunchesimg}
                          alt={selectedExercise.name}
                        />

                        {selectedExercise.videoUrl && (
                          <a
                            href={selectedExercise.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="demo-btn"
                          >
                            View Demo ↠
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="empty-state">
                  <Target size={32} />
                  <h2>Select an Exercise</h2>
                  <p>
                    Browse through the exercise categories on the left and click
                    on any exercise to see detailed instructions and tips.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

export const ServiceLoader = async () => {
  const res = await fetch("http://localhost:3002/exercises");
  if (!res.ok) {
    throw new Error(
      `Failed to fetch /exercises: ${res.status} ${res.statusText}`
    );
  }
  return res.json();
};
