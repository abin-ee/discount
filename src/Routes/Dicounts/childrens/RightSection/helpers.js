export const getDiscountData = (discounts) => {
  let data = { discount: {}, discountApplied: false };
  discounts.forEach((element) => {
    if (element.isActive) {
      data.discount = element;
      data.discountApplied = true;
    }
  });
  return data;
};

export const getDiscountLabel = (discount) => {
  let string = `-€ ${discount.discountData}`;
  if (discount.discountType === "percentage") {
    string = `-% ${discount.discountData}`;
  }
  return string;
};

export const getCalculatedTotalAmount = (discount) => {
  let value = discount.discountData ? discount.discountData : 0;
  let updatedValue = 1000000 - value;
  if (discount.discountType === "percentage") {
    let discountAmount = 1000000 * (value / 100);
    updatedValue = 1000000 - discountAmount;
  }
  let string = `€ ${updatedValue}`;
  return string;
};
