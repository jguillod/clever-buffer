const defaults = (obj, defaultProps) => {
  return Object.assign({}, defaultProps, obj);

  // const newObj = obj;
  // Object.keys(props).forEach((p) => {
  //   if (newObj[p] == null) { newObj[p] = props[p]; }
  // });
  // return newObj;
};

module.exports = defaults;
