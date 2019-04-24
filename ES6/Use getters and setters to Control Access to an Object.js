function makeClass() {
    "use strict";
    /* Alter code below this line */
    const tm = Symbol['temperature']
    class Thermostat {
        constructor(temp) {
            this[tm] = temp
        }
        get temperature() {
            return this[tm] || 24.44
        }
        set temperature(ne) {
            this[tm] = ne
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C