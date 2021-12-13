function getAll() {
    return fetch('localhost:8080/posts')
    .then(res => res.json)
    .catch(err => console.error(err));
}