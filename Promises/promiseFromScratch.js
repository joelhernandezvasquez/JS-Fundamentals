
// function returns a promise
const buyCake = (typeOfCake) =>{
  
    return new Promise((resolve,reject)=>{

        if(typeOfCake === 'chocolate'){
            resolve('😋');
        }

        reject(new Error('😡'));
        
    })
}


buyCake('chocolate')
.then((result) => console.log(result))
.catch((error)=> console.log(error.message))