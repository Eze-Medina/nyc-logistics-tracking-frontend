import type { GuideDto } from "../../../interfaces";

export const mapFormToDataGuide = (formState: GuideDto): GuideDto => {
  return {
    ...formState,

    sender: {
      ...formState.sender,
      id: Number(formState.sender.id),
    },

    receiver: {
      ...formState.receiver,
      id: Number(formState.receiver.id),
    },

    items: formState.items.map(item => ({
      ...item,
      quantity: Number(item.quantity),
      paid: Number(item.paid),
      remainingAmount: Number(item.remainingAmount),
    })),

    sure: {
      ...formState.sure,
      sureValue: formState.sure.secure
        ? formState.sure.declaredValue * 0.05
        : 0,
    },
  };
};