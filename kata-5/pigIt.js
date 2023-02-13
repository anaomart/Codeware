function pigIt(str){
    let regex = /[.,\/#!$%\^&\*;:{}=\-_`~?()]/
    let words = str.split(" ");
    let answer = words.map(ele=>{
        if(ele.match(regex)) return ele;
      let letters = ele.split("")
      let word = letters.shift() +'ay'
    return  letters.join('') +word
    })
    
    console.log() 
    return answer.join(' ')
  }


console.log(pigIt('Pig latin is cool !'))
