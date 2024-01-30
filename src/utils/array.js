export const flattenArray = (array) => {
  return Object.values(array).flat();
};

export const randomizeArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

export const unflattenArray = (array) => {
  let unflattenedArray = [];

  for (let i = 0; i < array.length; i = i + 3) {
    const arraySlice = array.slice(i, i + 3);
    unflattenedArray.push(arraySlice);
  }
  return unflattenedArray;
};
