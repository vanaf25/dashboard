export default (params:any) => {
  const newValue = parseFloat(params.newValue);
  return isNaN(newValue) || newValue < 0 ? null : newValue;
};
