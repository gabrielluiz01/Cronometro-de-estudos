export function convertTime (time: string){
  const [hours = '0', min = '0', sec = '0'] = time.split(':');

  const hoursPerSec = Number(hours) * 3600;

  const minPerSec = Number(min) * 60;

  return hoursPerSec + minPerSec + Number(sec);
}