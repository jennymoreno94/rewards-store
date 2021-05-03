import url, { headers,get } from "./api"

const method = get;
const getUser = () => {
    return new Promise((resolve,reject)=> {
        fetch(url.getUser,{
            method,
            headers
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
            method,
            headers,
        })
            .then(response => resolve(response.json()))
            .catch(error => {
                console.log(`Error petición ${url.getProducts}:` + error.message)
                reject(error)
            })
    })
}

const getHistory = () => {
    return  new Promise((resolve, reject) => {
        fetch(url.getHistory, {
            method,
            headers,
        })
        .then(response => {
            var a = response.json();
            return a;
        }).then(function (myJson) {
            resolve(myJson);
            return myJson;
        })
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
