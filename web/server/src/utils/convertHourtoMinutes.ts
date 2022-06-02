export default function converteHourToMinutes(time: string){
           // 8 : 00  e o map transforma ou converte cada item do array de string para number
    const [hour, minutes] = time.split(':').map(Number)
   
    // converter hora pra minutos e somar com os minutos
    const timeInMinutes = (hour * 60) + minutes;
 
    return timeInMinutes;
}