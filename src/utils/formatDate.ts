export const formateDate = (date: string): string => {
   const dateParts = date.split('T')

   const datePart = dateParts[0]
   const [year, month, day] = datePart.split('-')
   const formattedDate = `${day}.${month}`

   return formattedDate
}

