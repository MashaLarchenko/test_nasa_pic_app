
export const dayFormatter = (day) => {
    if (day < 10) {
        day = `0${day}`
    }

    return day;
}