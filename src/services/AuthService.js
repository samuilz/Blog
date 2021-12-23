const BASE_URL = 'http://localhost:8080/users'

export const register = async (email, password, firstName, lastName, age) => {
    const registerUrl = BASE_URL + '/register';
    const result = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password, firstName, lastName, age })
    });

    return result.json();
};

export const login = async (email, password) => {
    const loginUrl = BASE_URL + '/login';
    const result = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    return result.json();
};