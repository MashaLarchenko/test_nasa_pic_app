import { monthFormatter } from '../utils/monthFormatter';
import { dayFormatter } from '../utils/dayFormatter';

const images = [];
export const DaysInMonth = async (year, month) => {
    const abortController = new AbortController();

    const request =
        async (url, abortController) => {
            try {
                const response = await fetch(url, {
                    signal: abortController.signal
                })
                const data = await response.json();
                if (!response.ok) {
                    throw new Error(data.message || 'Somth went wrong')
                }
                return data;
            } catch (error) {
                abortController.abort()
                throw error
            }
        }

    const getDayInfo = async (year, month, days) => {
        try {
            const monthForm = monthFormatter(month);
            const day = dayFormatter(days)
            const date = `${year}-${monthForm}-${day}`;
            const data = await request(`https://api.nasa.gov/planetary/apod?api_key=xIeznLFPQdDuFy7gi8fMReMNEtfpybAScst0phzb&date=${date}`, abortController)
            images.push(data.url);
        } catch (error) {
            console.log(error, 'error')
        }
    }
    const monthNum = new Date(Date.parse(month + " 1," + year)).getMonth() + 1;
    const numberOfDay = new Date(year, monthNum, 0).getDate();
    const daysArray = [];
    for (let i = 1; i < numberOfDay; i++) {
        daysArray.push(i)
    }

    async function processArray(daysArray) {
        for (const i of daysArray) {
            await getDayInfo(year, month, i);
        }
    }
    await processArray(daysArray)
    const data = {
        days: daysArray,
        img: images
    }
    return data;
}

