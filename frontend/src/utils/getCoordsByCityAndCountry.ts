export async function getCoordsByCityAndCountry(city: string, country: string) {
  const url = `https://nominatim.openstreetmap.org/search?q=${city},${country}&format=json&limit=1`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data || data.length === 0) {
    throw new Error('No coordinates found for this city and country');
  }
  const { lat, lon } = data[0];
  return { lat: Number(lat), lon: Number(lon) };
}
