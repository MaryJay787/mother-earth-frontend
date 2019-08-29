const PROFILE = "http://localhost:3000/profile"
const HERBS = "http://localhost:3000/herbs"

export function getHerbs() {
    return fetch(HERBS).then(res => res.json())
};

// export function createSushi(formData) {
//     return fetch(API, {
//         method: 'POST',
//         headers: {

//         },
//         body: JSON.stringify(formData)
//     }).then(res => res.json())
// };

export function getUser(jwt) {
    return fetch(PROFILE, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json())
};