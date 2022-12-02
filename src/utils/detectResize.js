const detectResize = () => {
  const widthScreen = window.innerWidth;

  if (widthScreen < 650) {
    return 1;
  }
  if (widthScreen > 650 && widthScreen < 850) {
    return 2;
  }
  return 3;
};

export default detectResize;
