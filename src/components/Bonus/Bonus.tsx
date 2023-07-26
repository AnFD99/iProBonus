import { FC } from 'react'
import styles from './Bonus.module.css'
import { ICurrentBonus } from '../../types/bonus.interface'

const Bonus: FC<ICurrentBonus> = ({ currentQuantity }) => {
   return <div className={styles.bonus}>{currentQuantity || 0} бонусов</div>
}

export default Bonus

