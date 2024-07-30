// デバイスの動作温度範囲外を示すエラー

class OperatingTemperatureError extends Error {
  constructor(currentTemperature, minTemperature, maxTemperature) {
    super(
      `Current temperature (${currentTemperature}°C) is outside the operating range of ${minTemperature}°C to ${maxTemperature}°C`
    );
    this.name = "OperatingTemperatureError";
    this.currentTemperature = currentTemperature;
    this.minTemperature = minTemperature;
    this.maxTemperature = maxTemperature;
  }
}

let error = new OperatingTemperatureError(40, 5, 35);
console.log(error.message); // -> Current temperature (40°C) is outside the operating range of 5°C to 35°C
console.log(error.name); // -> OperatingTemperatureError
