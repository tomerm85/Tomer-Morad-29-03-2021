export const removeCityFromFavoritesArray = (arrayToRemoveFrom = [], cityToRemove) => {
  const indexToRemove = arrayToRemoveFrom.findIndex((item) => cityToRemove.cityCode === item.cityCode);
  if (indexToRemove > -1) {
    arrayToRemoveFrom.splice(indexToRemove, 1);
    const arrayToReturn = [...arrayToRemoveFrom];
    return arrayToReturn;
  }
  return arrayToRemoveFrom;
};