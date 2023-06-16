export function generateDate() {
  const dateNow = new Date();
  const dateAndHour = dateNow.toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' });
  const day = dateAndHour.slice(0,2); //dateAndHour = DD/MM/YYYY, hh:mm:ss -> length = 20
  const month = dateAndHour.slice(3,5); 
  const year = dateAndHour.slice(6,10);
  const hour = dateAndHour.slice(12,14);
  return {day, month, year, hour};
}
