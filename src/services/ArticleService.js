function getAll() {
    return fetch('localhost:8080/articles')
    .then(res => res.json)
    .catch(err => console.error(err));
}