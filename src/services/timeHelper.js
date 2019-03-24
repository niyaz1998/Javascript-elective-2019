
export const HH_MMtoMinutes = (string) => {
    let a = string.split(':');
    let hours = parseInt(a[0], 10);
    let minutes = parseInt(a[1], 10);
    return hours * 60 + minutes;
};

export const MinutesToHH_MM = (minutes) => {
    let hours = Math.floor(minutes/60);
    if (hours < 10) hours = '0' + hours;
    let mins = minutes % 60;
    if (mins < 10) mins = '0' + mins;
    return hours + ':' + mins;
};