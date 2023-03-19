//1
function getFirstValue(element){
    let result = element[0]
    return result
  }
  console.log(getFirstValue([1, 2, 3]))
  console.log(getFirstValue([80, 5, 100]))
  console.log(getFirstValue([-500, 0, 50]))
   

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