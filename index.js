const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArr = [];
  tutorials.map(sent => {          // gives me access to each sentence 
    let words = sent.split(" ")   // gives me access to each word and save it to 'words' array (.split takes argument) argument needs (" ")
    //console.log(words)
    let newWords = [];
    words.map(word => { // words is array of words from the split function and .mapping gives me acess to each word
      let newWord = word.charAt(0).toUpperCase() + word.slice(1) // charAt 
      newWords.push(newWord)
      
    })
    // console.log(newWords)

    newArr.push(newWords.join(" "))
    console.log(newArr)

  })
  return newArr;
  }
