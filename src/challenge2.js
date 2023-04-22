module.exports = function countHours(year, holidays) {
    let extraHours = 0;
    const weekDays = [1, 2, 3, 4, 5];    
    holidays.forEach(mmdd => {
        let [month, day] = mmdd.split("/");
        let monthIndex = parseInt(month) - 1;
        let holiday = new Date(year, monthIndex, day);
        let weekDay = holiday.getDay();
        if (weekDays.includes(weekDay)) extraHours += 2;
    });

    return extraHours;
}
