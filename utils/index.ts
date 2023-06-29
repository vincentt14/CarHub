export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "09248a1070mshd20dac8cba36261p18228djsn11e13390c2d3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=q3", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerPay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // calculate additional rate base on milage and age
  const milageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // calculate rental rate per day
  const rentalRatePerDay = basePricePerPay + milageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};