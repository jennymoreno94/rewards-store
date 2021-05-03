import url,{ headers } from "./api"

const method = "POST";

const postPoints = (coins) => {
    return new Promise((resolve,reject)=> {
        fetch(url.postPoints,{
            method,
            headers,
            body: JSON.stringify({
                'amount': coins
              })
        })
        .then(response => resolve(response.json()))
        .catch(error => {
            console.log(`Error petición ${url.postPoints}:` + error.message);
            reject(error)
        })
    })
}

const postRedeem = (product) => {
    return new Promise((resolve,reject)=> {
        fetch(url.postRedeem,{
            method,
            headers,
            body: JSON.stringify({
                'productId': product
              })
        })
        .then(response => {
            resolve(response.json())
            })
        .catch(error => {
            console.log(`Error petición ${url.postPoints}:` + error.message);
            reject(error)
        })
    })
}

const postData = {
    postPoints,
    postRedeem
}

export default  postData
