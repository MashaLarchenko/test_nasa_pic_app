export const monthFormatter = (month) => {
    const monthAray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month.length < 3) return month

    const number = monthAray.findIndex(item => {
        return item === month
    });
    let monthNumber = number + 1;
    if (number < 10) {
        monthNumber = `0${number + 1}`;
    } else {
        monthNumber = number + 1
    }
    return monthNumber;
}