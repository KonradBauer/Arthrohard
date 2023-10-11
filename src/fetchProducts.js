export const fetchProducts = () =>
  fetch("https://brandstestowy.smallhost.pl/api/random").then((response) => response.json());
