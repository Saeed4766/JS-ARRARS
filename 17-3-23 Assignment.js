//1
function getFirstValue(element){
    let result = element[0]
    return result
  }
  console.log(getFirstValue([1, 2, 3]))
  console.log(getFirstValue([80, 5, 100]))
  console.log(getFirstValue([-500, 0, 50]))
   
//2

function makePair(a,b){
  let result = [a,b]
  return result
}
console.log(makePair(1, 2))
console.log(makePair(51, 21)) 
console.log(makePair(512124, 215))

//3

function reverse(data){
    let result = data.reverse()
     return result
   }
    console.log(reverse([1, 2, 3, 4]))
    console.log(reverse([9, 9, 2, 3, 4]))
    console.log(reverse([]))

//4
function arrIntoString(data){
    let result =  "\" " + data.join('') + "\" "
     return result 
  }
  console.log(arrIntoString(['a','b','c','d','e','f']))
  console.log(arrIntoString([1, 2, 3, 4, 5, 6]))
  console.log(arrIntoString([1, 2, 3, "a", "s", "dAAAA"]))

 //5

 function valueAt(value,index){
  return value.at(index)
}
  console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2))
  console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2))
  console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2))
 
//6

function search(value, num){
  if(value.includes(num)){
    return value.indexOf(num)
  }else{
    return -1
  }
}
console.log(search([1, 5, 3], 5))
console.log(search([9, 8, 3], 3))
console.log(search([1, 2, 3], 4))


  //7
 
 function check(arr,num){
  let result = arr.includes(num)
  return result
}
console.log(check([1, 2, 3, 4, 5], 3))
console.log(check([1, 1, 2, 1, 1], 3))
console.log(check([5, 5, 5, 6], 5))
console.log(check([], 5))

 //8
  
  function invertArray(value){
    let result = value.map(value=>value*-1)
    return result
  }
  console.log(invertArray([1, 2, 3, 4, 5]))
  console.log(invertArray([1, -2, 3, -4, 5]))
  console.log(invertArray([])) 

  //9
  function skipTooMuchSugarDrinks(data){
    let result = []
    data.forEach(function(drink,index){
      if(drink!=='cola' && drink!=='fanta'){
        result.push(drink)
      }
    })
    return result
  }
  console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))
  
  console.log(skipTooMuchSugarDrinks(["fanta", "cola"])) 
  console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))

  //13

  function stringPairs(data){
    let result = []
    
    if(data.length % 2 !==0){
      data = data + "*"
    }
    for (let i= 0; i < data.length; i +=2){
      result.push(data.substring(i, i +2))
    }
    return result
  }
  console.log(stringPairs("mubashir")) 
  console.log(stringPairs("edabit"))
  console.log(stringPairs("airforces")) 

  //14

  function addEnding(arr,text){
    arr.forEach(function(item,index){
      arr[index] = item + text
    })
    return arr
  }
  console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly") )
  console.log(addEnding(["new", "pander", "scoop"], "er"))
  console.log(addEnding(["bend", "sharpen", "mean"], "ing"))

  //15

  function spelling(text){
    let result = []
    let n = 0
    for(c in text) 
     result.push(text.slice(0,++n))
    return result
    }
  console.log(spelling("bee"))
  console.log(spelling("happy"))
  console.log(spelling("eagerly"))

  