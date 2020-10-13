const addTrailingZero = (num) => {
  const numStr = num.toString();
  return numStr.length === 2 ? numStr : `0${numStr}`;
};

const formatDate = (date) => {
  const day = addTrailingZero(date.getDate());
  const month = addTrailingZero(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = addTrailingZero(date.getHours());
  const minutes = addTrailingZero(date.getMinutes());
  return `${day}/${month}/${year} - ${hours}:${minutes}`;
};

export default formatDate;
