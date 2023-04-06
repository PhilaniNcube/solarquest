const formatter = (price:number) => {

 const formattedPrice =  new Intl.NumberFormat('en-ZA', {
  style: 'currency',
  currency: 'ZAR',
  minimumFractionDigits: 0
})

return formattedPrice.format(price)
}


export default formatter
