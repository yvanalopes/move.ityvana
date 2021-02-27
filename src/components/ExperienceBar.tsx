import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExpierence, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentExpierence * 100) / experienceToNextLevel
    return (
        <header className={styles.experienceBar}>
            <span>0px</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}>
                    {currentExpierence} xp
                </span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
        
    )
}