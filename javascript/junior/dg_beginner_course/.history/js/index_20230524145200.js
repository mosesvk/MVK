// Lexical Scope -> defines how variable names are resolved in nested functions

// Nested (child) funcitons have access to the scope of their PARENT

// This is often confused with closures. But Lexical Scope is only a PART of a closure

    // global scope 
    let x = 1

    const parentFunction = () => {
        // local scope 
        let lexVal = 2
        console.log(x)
        console.log(lexVal)

        const childFunction = () => {
            console.log('invoking childFunction()')
            console.log(x += 5)
            console.log(lexVal += 1)
        }

        childFunction()
    }


    // parentFunction()



// CLOSURES

// w3schools: a CLOSURE is a function that has access to the parent scope, even After the parent function has closed
// a CLOSURE is created when we DEFINE a function, not when it is Executed

// Closures are used often for private variables, Object Data Privacy, in event handlers, callback functions, etc. 

    // global scope 
    let y = 1

    const parentFunction2 = () => {
        // local scope 
        let lexVal = 2
        console.log(x)
        console.log(lexVal)


        const childFunction2 = () => {
            console.log(x += 5)
            console.log(lexVal += 1)
        }

        return childFunction2
    }


    // const result = parentFunction2()
    // result() 
    // console.log(result)

// Closure Example
// IIFE (Immediately Invoked Function Expression)

    const privateCounter = (() => {
        let count = 0
        console.log(`initialvalue: ${count}`)
        return () => {count += 1; console.log(count)}
    })()

    privateCounter()
    privateCounter()
    privateCounter()

    // count variable is PRIVATE. 
    // returns only one console log by adding one to counter





const credits = ((num) => {
    let credits = num
    console.log(`initial credits value: ${credits}`)
    return () => {
        credits -= 1
        if (credits > 0) console.log(`playing game, ${credits} credit(s) remaining`)
        if (credits <= 0) console.log('not enough credits')
    }
})(3)
