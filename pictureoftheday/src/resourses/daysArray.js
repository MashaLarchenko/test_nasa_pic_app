export const daysInMonth = (year, month) => {
    const monthNum =  new Date(Date.parse(month +" 1,"+year)).getMonth()+1;
    const numberOfDay = new Date(year, monthNum, 0).getDate();
    const daysArray = [];
    for(let i = 1; i < numberOfDay; i++) {
        daysArray.push(i)
    }
    return daysArray;
}

