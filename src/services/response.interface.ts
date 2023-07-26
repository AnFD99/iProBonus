interface IResult {
   codeResult: number
   duration: number
   idLog: string
   message: string
   messageDev: null
   status: number
}

export interface IAccessResponse {
   accessToken: string
   result: IResult
}

export interface IBonusResponse {
   data: {
      currentQuantity: number
      dateBurning: string
      forBurningQuantity: number
      typeBonusName: string
   }
   result: IResult
}

