import { FC } from 'react'
import styles from './Burning.module.css'
import { formateDate } from '../../utils/formatDate'
import { IBurning } from '../../types/bonus.interface'
import fire from '../../assets/fire.svg'

const Burning: FC<IBurning> = ({ dateBurning, forBurningQuantity }) => {
   return (
      <div className={styles.burning}>
         <div className={styles.date}>
            {formateDate(dateBurning || '00-00')} сгорит
         </div>
         <div className={styles.count}>
            <img src={fire} alt='fire icon' className={styles.fire} />
            {forBurningQuantity || 0} бонусов
         </div>
      </div>
   )
}

export default Burning

