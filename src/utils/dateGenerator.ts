export function generateDate() {
  const dateNow = new Date();
  const createdAt = dateNow.toLocaleString('pt-BR', { timeZone: 'America/Fortaleza' });
  return createdAt;
}
