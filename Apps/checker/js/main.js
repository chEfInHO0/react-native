let formatura = new Date("30/11/2028")
let hoje = new Date()

let remain = formatura.getTime() - hoje.getTime()

let days = remain / (24*60*60*1000)
let hours
let min
let secs