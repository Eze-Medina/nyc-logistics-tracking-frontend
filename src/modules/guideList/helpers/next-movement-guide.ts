export interface NextMovementData {
  routeType: string;
  nextStatus: string;
  currentSequence: number;
  city: string;
}

export const updateNextMovement = async (code: string, movement: NextMovementData): Promise<void> => {

  const response = await fetch('http://localhost:3000/api/guides/', {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
      nextMovement: {
        route_type: movement.routeType,
        next_status: movement.nextStatus,
        current_sequence: movement.currentSequence,
        city: movement.city,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error updating movement");
  }
};