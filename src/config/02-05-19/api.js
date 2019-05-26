function searchData(val){
    return new Promise((resolve,reject)=>{
        fetch(`https://hn.algolia.com/api/v1/search?query=${val}`)
        .then((res)=>res.json())
        .then((res)=>{
            resolve(res.hits)
        })
        .catch(e=>{
            reject({message: 'Something went wrong...'})
        })
    })
}

export {
    searchData
}

// Promise is used for returning asynchrous(request/response)
//response from a function