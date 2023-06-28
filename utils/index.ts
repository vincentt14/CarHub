export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "09248a1070mshd20dac8cba36261p18228djsn11e13390c2d3",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars", {
    headers: headers,
  });

  const result = await response.json();

  return result;
}
