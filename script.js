let inputTextArea=document.getElementById('area');
let char = document.getElementById('Character-count-result');
let word = document.getElementById('word-count-result');
let sentence=document.getElementById('Sentence-count-result');

inputTextArea.addEventListener("input",()=>{
    char.textContent=inputTextArea.value.length;
    let txt = inputTextArea.value.trim();
    word.textContent=txt.split(' ').filter(item=>item).length;

  let stop = /[.!?]/;
  sentence.textContent = txt.split(stop).filter(item=>item).length;
  
})
