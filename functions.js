function print (num=1) {
    if(num % 3==0&& num % 5==0){
        console.log("fizz Buzz")
    }
    else if(num%3==0){
        console.log("fizz")
    }
    else if(num%5==0){
        console.log("Buzz")
    }
    else{
        console.log(num)
    }
    num++
    if (num<=100){print (num)}
    else{
        return
    }
}
print()