export default async function fetchAsync(url) {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw 'Error';
  } 

  return data;
}
