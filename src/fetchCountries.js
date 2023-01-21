export function fetchCountries(name) {
    return fetch(
      `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
    ).then(response => {
      if (!response.ok) {
        throw new Error('Something is going wrong. Try again.');
      }
      return response.json();
    });
  }