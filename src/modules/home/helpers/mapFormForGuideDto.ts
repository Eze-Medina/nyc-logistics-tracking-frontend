import type { GuideDto } from "../../../interfaces";

export const mapFormToGuideDto = (formState: GuideDto): GuideDto => {
  return {
    ...formState,

    sender: {
      ...formState.sender,
    },

    receiver: {
      ...formState.receiver,
    },

    items: formState.items.map(item => ({
      ...item,
      quantity: Number(item.quantity),
      paid: Number(item.paid),
      remainingAmount: Number(item.remainingAmount),
    })),

    insurance: {
      ...formState.insurance,
      insuranceCost: formState.insurance.contracted
        ? formState.insurance.declaredValue * 0.05
        : 0,
    },
  };
};