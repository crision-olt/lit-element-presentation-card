export const login = (username: string, password: string) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username !== '1234' || password !== '1234') return reject('Invalid username or password');
            resolve({username, password, name: 'Cristian Ionut Olteanu'});
        }, 2000);
    });
}