// 3. Calculate area
const phi = 3.14;
const calculateArea = ({ radius, power }) => {
  return phi * Math.pow(radius, power);
};

export default calculateArea;
