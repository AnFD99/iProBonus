import axios from 'axios'
import { IAccessResponse, IBonusResponse } from './response.interface'

const ACCESS_URL = 'http://84.201.188.117:5021/api/v3/clients/accesstoken'
const BONUS_URL = 'http://84.201.188.117:5003/api/v3/ibonus/generalinfo/'

const instanceAPI = axios.create({
   headers: {
      AccessKey: process.env.REACT_APP_ACCESS_KEY,
   },
})

export const bonusAPI = {
   async getAccessToken() {
      try {
         const response = await instanceAPI.post<IAccessResponse>(ACCESS_URL, {
            idClient: process.env.REACT_APP_CLIENT_ID,
            accessToken: '',
            paramName: 'device',
            paramValue: process.env.REACT_APP_DEVICE_ID,
            latitude: 0,
            longitude: 0,
            sourceQuery: 0,
         })
         const { accessToken } = response.data

         localStorage.setItem('accessToken', accessToken)
      } catch (error) {
         console.log(error)
      }
   },
   async getBonusCount() {
      try {
         const response = await instanceAPI.get<IBonusResponse>(
            BONUS_URL + localStorage.getItem('accessToken'),
         )
         return response.data.data
      } catch (error) {
         console.log(error)
      }
   },
}

export { instanceAPI }

