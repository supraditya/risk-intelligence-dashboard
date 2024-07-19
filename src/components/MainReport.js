"use client";
import React from 'react';
import RiskMatrix from './RiskMatrix';
import RiskDetails from './RiskDetails';
import styles from './MainReport.module.css'; // Import the CSS module

const MainReport = () => {
  const freqScore = 3; // Example score, replace with actual data
  const sevScore = 5; // Example score, replace with actual data

  return (
    <div className={styles.container}>
      <h1 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-center']} ${styles['my-4']}`}>
        National healthcare databases are compromised
      </h1>
      <div className={`${styles.flex} ${styles['justify-center']} ${styles['space-x-2']} ${styles['my-4']}`}>
        <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>Healthcare</span>
        <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>Cybersecurity</span>
        <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>United States</span>
      </div>
      <RiskDetails riskRanking="#1" impactFrequency={freqScore} impactSeverity={sevScore} />
      <h2 className={`${styles['text-2xl']} ${styles['font-semibold']} ${styles['mt-8']}`}>Summary</h2>
      <p className={styles['my-4']}>
        Unauthorized access to national healthcare databases could lead to significant
        breaches of patient confidentiality, data corruption, and potential misuse of
        sensitive health information. This could result in legal ramifications, financial
        loss, and damage to public trust in the healthcare system.
      </p>
      <div className={`${styles.flex} ${styles['justify-around']} ${styles['mt-8']}`}>
        <div className={`${styles['w-1/2']} ${styles.p-4}`}>
          <h3 className={`${styles['text-xl']} ${styles['font-semibold']}`}>Affected Regions</h3>
          <img src="/path/to/affected-regions.png" alt="Affected Regions" />
        </div>
        <div className={`${styles['w-1/2']} ${styles.p-4}`}>
          <h3 className={`${styles['text-xl']} ${styles['font-semibold']} ${styles['text-center']}`}>Risk Heatmap</h3>
          <RiskMatrix freqScore={freqScore} sevScore={sevScore} />
        </div>
      </div>
      <h2 className={`${styles['text-2xl']} ${styles['font-semibold']} ${styles['mt-8']}`}>Articles Referenced</h2>
      <ol className={`${styles['list-decimal']} ${styles['list-inside']} ${styles['my-4']}`}>
        <li>
          <a href="https://example.com/article1" className={`${styles['text-blue-500']} ${styles.underline}`}>
            Healthcare Data Security Breaches: Impacts and Prevention Strategies, Journal of Cybersecurity, Vol. 8, No. 2, 2023.
          </a>
        </li>
        <li>
          <a href="https://example.com/article2" className={`${styles['text-blue-500']} ${styles.underline}`}>
            National Database Vulnerabilities and Protection Measures, Health IT Security, May 2024.
          </a>
        </li>
        <li>
          <a href="https://example.com/article3" className={`${styles['text-blue-500']} ${styles.underline}`}>
            Implications of Healthcare Data Compromise on Public Trust, International Journal of Medical Informatics, Vol. 95, 2023.
          </a>
        </li>
      </ol>
    </div>
  );
};

export default MainReport;
