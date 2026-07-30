import { DataGuide } from "../../../shared/helpers/DataGuide";
import type { GuideDto } from "../../../interfaces";

export const mapFormToDataGuide = (formState: GuideDto): DataGuide => {

  return new DataGuide({
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
      sureValue: formState.sure.declaredValue * 0.05,
    },
  });
};