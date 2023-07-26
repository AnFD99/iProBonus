export interface IBonus {
   currentQuantity: number
   dateBurning: string
   forBurningQuantity: number
   typeBonusName: string
}

export interface IBurning
   extends Pick<IBonus, 'dateBurning' | 'forBurningQuantity'> {}

export interface ICurrentBonus extends Pick<IBonus, 'currentQuantity'> {}
