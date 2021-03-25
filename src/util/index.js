export function formatDate(date){
    const dateFormated = new Date(date)
    const day = dateFormated.getDate()
    const month = dateFormated.getMonth() + 1
    const year = dateFormated.getFullYear()
    return `${day}/${month}/${year}`
}

export function formatDateMachine(date){
    const day = date.substring(0, date.indexOf('/'))
    const month = date.substring(date.indexOf('/'), date.lastIndexOf('/')).replace('/','')
    const year = date.substring(date.lastIndexOf('/'), date.length).replace('/','')
    const dateFormated = new Date(`${month}-${day}-${year}`)
    return dateFormated
}