import { FC, useEffect, useState } from 'react'
import styles from './App.module.css'
import { bonusAPI } from './services/api'

import { IBonus } from './types/bonus.interface'
import Burning from './components/Burning/Burning'
import Bonus from './components/Bonus/Bonus'

const App: FC = () => {
   const [bonusData, setBonusData] = useState<IBonus | undefined>({
      currentQuantity: 0,
      dateBurning: '',
      forBurningQuantity: 0,
      typeBonusName: '',
   })
   const [isLoading, setIsLoading] = useState(false)

   useEffect(() => {
      try {
         setIsLoading(true)
         bonusAPI.getAccessToken()
         bonusAPI.getBonusCount().then((result) => {
            setBonusData(result)
            setIsLoading(false)
         })
      } catch (error) {
         console.log(error)
      }
   }, [])

   return (
      <div className={styles.fixed}>
         <div className={styles.container}>
            {isLoading ? (
               <div className={styles.loading}>Идет загрузка</div>
            ) : (
               <>
                  <header className={styles.header}>
                     <h2>Logo</h2>
                  </header>
                  <div className={styles.bonus__container}>
                     <div className={styles.left}>
                        <Bonus currentQuantity={bonusData?.currentQuantity || 0} />

                        <Burning
                           forBurningQuantity={bonusData?.forBurningQuantity || 0}
                           dateBurning={bonusData?.dateBurning || ''}
                        />
                     </div>
                     <div className={styles.right}>
                        <a href='/' className={styles.button}>
                           <span className={styles.angle}></span>
                        </a>
                     </div>
                  </div>
                  <footer className={styles.footer}></footer>
               </>
            )}
         </div>
      </div>
   )
}

export default App

