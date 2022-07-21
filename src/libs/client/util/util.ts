export const formatDateDiff = (date: string) => {
  const dateDiff = new Date(date);

  const dateDiffYear = dateDiff.getFullYear();
  const dateDiffMonth = dateDiff.getMonth() + 1;
  const dateDiffDate = dateDiff.getDate();

  return `${dateDiffYear}.${dateDiffMonth}.${dateDiffDate}`;
};
