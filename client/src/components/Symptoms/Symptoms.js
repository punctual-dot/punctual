import React, { Component } from "react";

function Symptom({ symptoms }) {
  return (
    <span>
      <strong>{symptoms.symptoms}</strong>
    </span>
  );
}

const AllSymptoms = props => {
  const MySymptoms = [{}];
  return (
    <div>
      <Symptom symptoms={MySymptoms} components={{ symptoms: Symptom }} />
    </div>
  );
};

export default AllSymptoms;
