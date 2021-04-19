import url,{ headers } from "./api"

const postPoints = (coins) => {
    return new Promise((resolve,reject)=> {
        fetch(url.postPoints,{
            method: "POST",
            headers : headers,
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
    debugger;
    return new Promise((resolve,reject)=> {
        fetch(url.postPoints,{
            method: "POST",
            headers : headers,
            body: JSON.stringify({
                'productId': product
              })
        })
        .then(response => {
            debugger;
            resolve(response.json())
            }
            
            )
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
