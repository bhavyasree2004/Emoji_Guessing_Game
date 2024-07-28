const emojiDetails=[
    {description:"Smiling face with sunglasses",emoji:'😎'},
    {description:"Thumbs up",emoji:'👍'},
    {description:"Heart eyes",emoji:'😍'},
    {description:"Crying face",emoji:'🥲'},
    {description:"Party popper",emoji:'🎉'}
];
let currentEmojiIndex=0;
let score=0;
const answerElement=document.getElementById("guess-input");
const statusElement=document.getElementById("status");
const scoreElement=document.getElementById("score");
function displayEmoji(){
    const emojiId=document.getElementById('emoji');
    emojiId.textContent=emojiDetails[currentEmojiIndex].emoji;
    emojiId.classList.add('emoji-dec');
}
function checkGuess(){
    const guess=answerElement.value.trim().toLowerCase();
    const correctAnswer=emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
    if(guess==correctAnswer){
            statusElement.textContent='Correct!';
        score++;
    }
    else{
            statusElement.textContent='Wrong!';
    }
    scoreElement.textContent=`Score: ${score}`;
    answerElement.value='';
    answerElement.focus();
    nextEmoji();
}
function nextEmoji(){
    currentEmojiIndex++;
    setTimeout(()=>{
        statusElement.textContent="";
    },1000);
    if(currentEmojiIndex==emojiDetails.length){
        currentEmojiIndex=0;
    }
    displayEmoji();
}
answerElement.addEventListener('keydown',(event)=>{
    if(event.key=='Enter'){
        checkGuess();
    }
});
displayEmoji();

const timeintervalElement=document.getElementById('timer');
let seconds=30;
const intervalId=setInterval(()=>{
    timeintervalElement.textContent=`Time: ${seconds}s`;
    seconds--;
    if(seconds==-1){
            clearInterval(intervalId);
            answerElement.disabled=true;
            timeintervalElement.textContent="";
    }
},1000);