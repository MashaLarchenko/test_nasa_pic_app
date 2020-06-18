export const getYearArray = () => {
    const start = 1995;
    const stop = new Date().getFullYear();
    const yearsAray = [];
    for (let i = start; i <= stop; i++) {
      yearsAray.push(i)
    }
      return yearsAray;
  }