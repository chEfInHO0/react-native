import {useState, useEffect} from "react"

type timeLeft = {
    days:number;
    hours:number;
    minutes:number;
    seconds:number
}
const [hora,min,segundo] = [0,0,0]
export const [anoF,mesF,diaF] = [2028,10,30]
export const [anoD,mesD,diaD] = [2024,5,29]

function _getTimeDiff(ano:number,mes:number,dia:number,hora:number,min:number,sec:number): number {
    let goal = new Date(ano, mes, dia, hora, min, sec);
    let hoje = new Date();
    return goal.getTime() - hoje.getTime();
  }

  function daysLeft(data:number) {
    return Math.floor(data / (24 * 60 * 60 * 1000));
  }

  function hoursLeft(data:number) {
    return Math.floor(data / (60 * 60 * 1000) % 24);
  }

  function minLeft(data:number) {
    return Math.floor(data / (60 * 1000) % 60);
  }

  function secsLeft(data:number) {
    return Math.floor(data / 1000) % 60;
  }

  export function countDown() : timeLeft {
    return {
        days:daysLeft(_getTimeDiff(anoF,mesF,diaF,hora,min,segundo)),
        hours : hoursLeft(_getTimeDiff(anoF,mesF,diaF,hora,min,segundo)) ,
        minutes : minLeft(_getTimeDiff(anoF,mesF,diaF,hora,min,segundo)) ,
        seconds : secsLeft(_getTimeDiff(anoF,mesF,diaF,hora,min,segundo))
  }
  }

  export function countDownV() : timeLeft {
    return {
        days:daysLeft(_getTimeDiff(anoD,mesD,diaD,hora,min,segundo)),
        hours : hoursLeft(_getTimeDiff(anoD,mesD,diaD,hora,min,segundo)) ,
        minutes : minLeft(_getTimeDiff(anoD,mesD,diaD,hora,min,segundo)) ,
        seconds : secsLeft(_getTimeDiff(anoD,mesD,diaD,hora,min,segundo))
  }
}