import Image from "next/image";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import RiskMatrix from "@/components/RiskMatrix";
import RiskDetails from "@/components/RiskDetails";
import styles from "@/components/MainReport.module.css"; 

export default function Home() {
  const freqScore = 3; 
  const sevScore = 5; 

  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className={styles.container}>
          <h1 className={`${styles['text-4xl']} ${styles['font-bold']} ${styles['text-center']} ${styles['my-4']}`}>
            Risk Title
          </h1>
          <div className={`${styles.flex} ${styles['justify-center']} ${styles['space-x-2']} ${styles['my-4']}`}>
            <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>Healthcare</span>
            <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>Cybersecurity</span>
            <span className={`${styles['bg-blue-500']} ${styles['text-white']} ${styles['px-2']} ${styles['py-1']} ${styles.rounded}`}>United States</span>
          </div>
          <RiskDetails riskRanking="#1" impactFrequency={freqScore} impactSeverity={sevScore} />
          <h2 className={`${styles['text-2xl']} ${styles['font-semibold']} ${styles['mt-8']}`}>Summary</h2>
          <p className={styles['my-4']}>
            Description of Risk
          </p>
          <div className={`${styles.flex} ${styles['justify-around']} ${styles['mt-8']}`}>
            <div className={`${styles['w-1/2']} ${styles.p-4}`}>
              <h3 className={`${styles['text-xl']} ${styles['font-semibold']}`}>Affected Regions (map)</h3>
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
                Article 1
              </a>
            </li>
            <li>
              <a href="https://example.com/article2" className={`${styles['text-blue-500']} ${styles.underline}`}>
                Article 2
              </a>
            </li>
            <li>
              <a href="https://example.com/article3" className={`${styles['text-blue-500']} ${styles.underline}`}>
                Article 3
              </a>
            </li>
          </ol>
        </div>
      </main>
    </div>
  );
}
