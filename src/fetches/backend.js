const PROFILE = "http://localhost:3000/profile"
const HERBS = "http://localhost:3000/herbs"
const PLANTS = "http://localhost:3000/plants"
const REMS = "http://localhost:3000/remedies"
const user_herbs = `http://localhost:3000/user_herbs/${id}`
// const add_herb = `http://localhost:3000/add_herb/:user_id/:herb_id`
// const remove_herb = `http://localhost:3000/remove_herb/:user_id/:herb_id`
const user_remedies = `http://localhost:3000/user_remedies/${id}`
// const add_remedy = `http://localhost:3000/add_remedy/:user_id/:remedy_id`
// const remove_remedy = `http://localhost:3000/remove_remedy/:user_id/:remedy_id`

export function getHerbs() {
    return fetch(HERBS).then(res => res.json())
};

export function getPlants() {
    return fetch(PLANTS).then(res => res.json())
}

export function getRemedies() {
    return fetch(REMS).then(res => res.json())
}

export function getUserHerbs(id){
    return fetch(user_herbs).then(res => res.json())
}

export function getUserRems(id){
    return fetch(user_remedies).then(res => res.json())
}

// export function getUserHerbNotes(id){

// }

// export function getUserRemNotes(id){

// }
// export function getUserHerbs(id, jwt){
//     fetch(`http://localhost:3000/user_herbs/${id}`, {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${jwt}`
//             }
//         })
//         .then(res => res.json())
//         .then(console.log)
// }

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