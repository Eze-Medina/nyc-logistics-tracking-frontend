import type { GuideDto, Movement } from "../../../interfaces";

export const getGuide = async (code: string): Promise<GuideDto> => {

  const resp = await fetch('http://localhost:3000/api/guides/find', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  const data = await resp.json();

  const movements = data.data.movements.map((movement: Movement) => ({
    ...movement,
    date: new Intl.DateTimeFormat('es-AR', {
      timeZone: 'America/Argentina/Buenos_Aires',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    })
      .format(new Date(movement.date))
      .replace(', ', ' - '),
  }));

  return {
    code: data.code,
    ...data.data,
    movements,
  };
};