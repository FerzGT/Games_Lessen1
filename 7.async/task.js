class AlarmClock {
    constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }
    if (this.alarmCollection.find(clock => clock.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
         }
         return this.alarmCollection.push ({
            callback,
            time,
            canCall: true,
         });
                
    }
removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter((timeElement) => timeElement.time !== time);
}
getCurrentFormattedTime () {
    return new Date().toLocaleTimeString().slice(0,-3);
}
start () {
    if (this.intervalId) {
        return;
    }
    this.intervalId = setInterval (this.alarmCollection.forEach((timeElement) => {
        if (this.getCurrentFormattedTime() === timeElement.time) {
            timeElement.canCall = false;
            timeElement.callback();
        }
     }) ,1000); 
    }
    stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}
    resetAllCalls() {
		this.alarmCollection.forEach((timeElement) => timeElement.canCall = true);
	}
    clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}