import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function App() {
  return (
    <div style={styles.container}>
      <h2>Patient Information Form</h2>
      
      <div style={styles.section}>
        <div style={styles.row}>
          <label>Hospital No: </label>
          <input type="text" />
          <label>Visit No: </label>
          <input type="text" />
        </div>

        <div style={styles.row}>
          <label>Patient ID: </label>
          <input type="text" />
          <label>Age/Sex: </label>
          <input type="text" />
        </div>

        <div style={styles.row}>
          <label>Doctor ID: </label>
          <input type="text" />
          <label>Speciality: </label>
          <input type="text" />
        </div>

        <div style={styles.row}>
          <label>Date: </label>
          <input type="date" />
        </div>
      </div>

      <div style={styles.section}>
        <h3>Vital Signs</h3>
        <div style={styles.row}>
          <label>BP Systolic: </label>
          <input type="text" />
          <label>BP Diastolic: </label>
          <input type="text" />
        </div>

        <div style={styles.row}>
          <label>Pulse Rate: </label>
          <input type="text" />
          <label>Mean Arterial Pressure (MAP): </label>
          <input type="text" />
        </div>

        <div style={styles.row}>
          <label>Saturation(O2): </label>
          <input type="text" />
          <label>Weight: </label>
          <input type="text" />
        </div>
      </div>

      <div style={styles.section}>
        <h3>Symptoms & History</h3>
        <div style={styles.row}>
          <label>Symptoms: </label>
          <textarea />
        </div>

        <div style={styles.row}>
          <label>Patient Medical History (PMH): </label>
          <textarea />
        </div>
      </div>

      <div style={styles.section}>
        <h3>Medications</h3>
        <div style={styles.row}>
          <label>Medications: </label>
          <textarea />
        </div>

        <div style={styles.row}>
          <label>Test Lab: </label>
          <textarea />
        </div>

        <div style={styles.row}>
          <label>Treatment Plan: </label>
          <textarea />
        </div>
      </div>

      <div style={styles.section}>
        <h3>Followup Details</h3>
        <div style={styles.row}>
          <label>Followup Detail: </label>
          <textarea />
        </div>

        <div style={styles.row}>
          <label>Additional Note: </label>
          <textarea />
        </div>
      </div>

      <div style={styles.section}>
        <div style={styles.row}>
          <label>Signature of Doctor: </label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    margin: '0 auto',
    fontFamily: 'Arial, sans-serif',
  },
  section: {
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  input: {
    width: 'calc(50% - 10px)',
    padding: '5px',
  },
  textarea: {
    width: '100%',
    height: '60px',
    padding: '5px',
  }
};

export default App;
