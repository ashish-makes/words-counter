const wordsTextarea = document.querySelector(".word-counter .words");
const countBtn = document.querySelector(".word-counter .count-words");
const wordCount = document.querySelector(".word-counter .totalWords span");
const CharCount = document.querySelector(".word-counter .totalChar span");

const CountWords = () => {
    let WordTrimmed = wordsTextarea.value.replace(/\s+/g, " ").trim();
    let splitWords = WordTrimmed.split(" ");
    let numOfWords = splitWords.length;
    let numOfChar = wordsTextarea.value.split("").length;
    if (splitWords[0] == "") {
        numOfWords = '0';
      }
    wordCount.innerHTML = numOfWords;
    CharCount.innerHTML = numOfChar;
}

countBtn.addEventListener('click', CountWords);

// const countwords=()=>{
//     // let textChar=document.getElementById('words').value.length;
//     let textWords=document.getElementById('words').value.split(" ").length;
//     console.log(textWords);
//     if (textWords === undefined) {
//         document.getElementById('count').innerHTML = "enter the text first!";
//     } else {
//         document.getElementById('count').innerHTML = textWords;
//     }
// }

// const wordsTextarea = document.querySelector(".word-counter .words");
// const countBtn = document.querySelector(".word-counter .count-words");
// const wordCount = document.querySelector(".word-counter-container .word-count span");

// const countWords = () => {
//   let words = wordsTextarea.value;
//   let wordsTrimmed = words.replace(/\s+/g, " ").trim();
//   let splitWords = wordsTrimmed.split(" ");

//   console.log(splitWords);

//   let numberOfWords = splitWords.length;
//   if (splitWords[0] == "") {
//     numberOfWords = 0;
//   }

//   wordCount.innerHTML = numberOfWords;
// };

// countBtn.addEventListener("click", countWords);
