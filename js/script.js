let btnChar = document.querySelector('#btnChar');
let btnSearch = document.querySelector('#btnSearch');

// Implementation
// Characters button
btnChar.addEventListener('click', (e)=>{
    e.preventDefault();
    let enterSentence = document.querySelector('#enterSentence').value;
    console.log(enterSentence.length);
    let numChar = document.querySelector('.numChar').innerHTML;
    document.querySelector('.numChar').innerHTML =  numChar.replace('??', enterSentence.length);

})
//Search button
btnSearch.addEventListener('click', (e)=>{
    e.preventDefault();
    let enterSentence = document.querySelector('#enterSentence').value;
    let enterWord = document.querySelector('#enterWord').value;
    let extra = (`${enterSentence.indexOf(enterWord)}`);
    let valuePosition = document.querySelector('.valuePosition').innerHTML;
    document.querySelector('.valuePosition').innerHTML = valuePosition.replace('??', `${extra}`);
})


// btnSearch.addEventListener('click', (e)=>{
//     e.preventDefault();
//     information.push(enterSentence.value);
//     enterSentence.value = "";
//     let enterWord = document.querySelector('#enterWord');
//     information.push(enterWord.value);
//     enterWord.value = "";
// }); 

//Char Button 
// btnChar.addEventListener('click', (e)=>{
//     e.preventDefault();
//     let numChar = document.querySelector('.numChar').innerHTML;
//     let enterSentence = document.querySelector('#enterSentence');
//     let charResults = (enterSentence.length);
//     numChar.replace('/?/g',`${charResults}`);

// });


