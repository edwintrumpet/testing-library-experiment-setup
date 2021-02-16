const URL = 'https://rickandmortyapi.com/api/character/2';

export const rickFetch = async () => {
  let response = await fetch(URL)

  if(response.status !== 200){
    throw new Error()
  }
  return response.json()
}