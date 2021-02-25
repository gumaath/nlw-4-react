import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="pp.jpg" alt="Foto de Perfil"/>
      <div>
        <strong>Julia Amorim</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Nível {level}
        </p>
      </div>
    </div>
  );
}
