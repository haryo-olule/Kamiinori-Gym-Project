// Pages/WorkEmpty.jsx
import React from "react";
import { Target } from "lucide-react";

const WorkEmpty = () => (
  <div className="empty-state">
    <Target size={32} />
    <h2>Select an Exercise</h2>
    <p>
      Browse through the exercise categories on the left and click on any
      exercise to see detailed instructions and tips.
    </p>
  </div>
);

export default WorkEmpty;
