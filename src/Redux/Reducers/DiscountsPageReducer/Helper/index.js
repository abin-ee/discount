export const onChnageActiveStatus = (state, payload) => {
  let data = getSwitchDiscount(state, payload);
  return {
    ...state,
    discountData: {
      data,
    },
  };
};

const getSwitchDiscount = (state, payload) => {
  let dataCopy = [...state.discountData.data];
  dataCopy.forEach((element, index) => {
    element.isActive =
      element.id === payload.data.id && payload.on === "on"
        ? !payload.data.isActive
        : false;
  });
  return dataCopy;
};

export const onAddData = (state, payload) => {
  let data = getUpdatedData(state, payload);
  return {
    ...state,
    discountData: {
      data,
    },
  };
};

const getUpdatedData = (state, payload) => {
  let dataCopy = [...state.discountData.data];
  if (payload.add) {
    dataCopy.push(payload.data);
  } else if (payload.delete) {
    dataCopy.splice(dataCopy.length - 1, 1);
  } else {
    let index = dataCopy.findIndex((element) => element.id === payload.data.id);
    dataCopy.splice(index, 1, payload.data);
  }
  return dataCopy;
};

export const onChangeLabel = (state, payload) => {
  let data = getUpdatedLabelData(state, payload);
  return {
    ...state,
    discountData: {
      data,
    },
  };
};

const getUpdatedLabelData = (state, payload) => {
  let dataCopy = [...state.discountData.data];
  dataCopy.forEach((item) => {
    if (item.id === payload.data.id) {
      item.label = payload.value;
    }
  });
  return dataCopy;
};
