export default (url) => {
  return fetch(url)
    .then(resp => resp.json())
    .catch(error => console.error('ERROR :', error))
}
