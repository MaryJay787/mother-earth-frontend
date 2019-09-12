const PROFILE = "http://localhost:3000/profile"
const HERBS = "http://localhost:3000/herbs"
const PLANTS = "http://localhost:3000/plants"
const REMS = "http://localhost:3000/remedies"
// const add_herb = `http://localhost:3000/add_herb/:user_id/:herb_id`
// const remove_herb = `http://localhost:3000/remove_herb/:user_id/:herb_id`
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

export function getUserHerbs(id, jwt){
    return fetch(`http://localhost:3000/user_herbs/${id}`, { 
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
        }).then(res => res.json())
}

export function getUserRems(id, jwt){
    return fetch(`http://localhost:3000/user_remedies/${id}`,{
            method: 'GET',
            headers: {
            'Authorization': `Bearer ${jwt}`
            }
    }).then(res => res.json())
}

export function getUserNotes(id, jwt){
    return fetch(`http://localhost:3000/users/${id}/notes`,{
        method: 'GET',
        headers: {
        'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json())
}

export function deleteNote(id, jwt, note_id){
    return fetch(`http://localhost:3000/users/${id}/notes/${note_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json())
}

export function getUser(jwt) {
    return fetch(PROFILE, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.json())
};

export function deleteRemedy(id, jwt, rc_id){
    return fetch(`http://localhost:3000/remove_remedy/${id}/${rc_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.text())
}

export function deleteHerb(id, jwt, hc_id){
    return fetch(`http://localhost:3000/remove_herb/${id}/${hc_id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    }).then(res => res.text())
}

export function newHerb(herb_values){
    return  fetch(`http://localhost:3000/herbs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(herb_values)
      })
      .then(res => res.json())
}

export function newRemedy(remedy_values){
    return  fetch(`http://localhost:3000/remedies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(remedy_values)
      })
      .then(res => res.json())
}

export function addRemedyToCollection(user_id, rem_id, jwt){
    return  fetch(`http://localhost:3000/add_remedy/${user_id}/${rem_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({user_id: user_id, remedy_id: rem_id})
    })
    .then(res => res.json())
}

export function addHerbToCollection(user_id, herb_id, jwt){
    fetch(`http://localhost:3000/add_herb/${user_id}/${herb_id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Authorization': `Bearer ${jwt}`
        },
        body: JSON.stringify({user_id: user_id, herb_id: herb_id})
    })
    .then(res => res.json())
}

