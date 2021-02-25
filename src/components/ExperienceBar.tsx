import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar () {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        {/* deixa o estilo inline porque ele vai mudar com o tempo, no css apenas deixa os fixos */}
        <div style={{ width: `${percentToNextLevel}%`}}/>

        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp</span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
