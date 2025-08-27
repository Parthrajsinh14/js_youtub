//Primitive
    // 7 types : String, Number, Boolean, null, undefine, symbol, BigInt


    const score = 100
    const scoreValue = 100.3
    const isLoggedIn = false
    const outsideTemp = null

    let userEmail;
    const id = Symbol('123')
    const anotherId = Symbol('123')
    
    console.log(id === anotherId)
//Reference (Non primitive)  all non primitive datatypes are object types
    //Array, Object, Function

    //Array
    const heros = ["Shaktiman","Naagraj","Doga"];

    //Obj
    let myObj = {
        name : "Parth",
        age : 22,
    }

    const myFunction = function() {
        console.log("Hello ")
    }
