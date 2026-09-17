import type { GuideForm } from "../../../interfaces/guide/guideForm";

export const mapFormToGuideDto = (formState: GuideForm): GuideForm => {

  const hasPendingPayment = formState.items.some(
    item =>
      item.current_account === true ||
      Number(item.remaining_amount || 0) !== 0
  );

  return {
    ...formState,

    sender: {
      ...formState.sender,
    },

    receiver: {
      ...formState.receiver,
    },

    paid: hasPendingPayment ? false : formState.paid,

    items: formState.items.map(item => ({
      ...item,
      quantity: Number(item.quantity),
      paid: Number(item.paid),
      remainingAmount: Number(item.remaining_amount),
    })),

    insurance: {
      ...formState.insurance,
      declared_value: Number(formState.insurance.declared_value),
      insurance_cost: formState.insurance.contracted
        ? formState.insurance.declared_value * 0.05
        : 0,
    },
  };
};