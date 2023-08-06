const zeroPad = (date) => {
    return ("0" + date).slice(-2)
}

export default (date) => {
    return [date.getUTCFullYear(), zeroPad(date.getMonth() + 1), zeroPad(date.getDate())].join('-') + ' ' + [zeroPad(date.getHours()), zeroPad(date.getMinutes()), zeroPad(date.getSeconds())].join(":")
}