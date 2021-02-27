import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)
    return (
       <div className={styles.profileContainer}>
           <img src="https://avatars.githubusercontent.com/u/38334563?s=460&u=8ff29c9776e7124b894d45e94a141b55032c0879&v=4" alt="Yvana Lopes" />
           <div>
               <strong>Yvana Lopes</strong>
               <p>
                   <img src="icons/level.svg" alt="level"/>
                   Level {level}
               </p>
           </div>
       </div> 
        
    )

}