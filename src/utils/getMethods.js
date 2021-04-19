import url, { headers } from "./api"


const getUser = () => {
    return new Promise((resolve,reject)=> {
        fetch(url.getUser,{
            method: "GET",
            headers : headers
        })
        .then(response => resolve(response.json()))
        .catch(error => {
            console.log(`Error petición ${url.getUser}:` + error.message);
            reject(error)
        })
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        fetch(url.getProducts, {
            method: "GET",
            headers: headers,
        })
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getProducts}:` + error.message)
                reject(error)
            })
    })
}

const getHistory = () => {
    return new Promise((resolve, reject) => {
        fetch(url.getHistory, {
            method: "GET",
            headers: headers,
        })
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getHistory}:` + error.message)
                reject(error)
            })
    })
}

const getData = {
    getUser,
    getProducts,
    getHistory
}

export default getData
