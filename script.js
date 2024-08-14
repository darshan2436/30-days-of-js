const projects = [
    {
        link :"01.drumKit.html",
        name :"Drum Kit"
    },
    {
        link :"02.dateAndTime.html",
        name :"Date And Time"
    },{
        link :"03.rockPaperSiccors.html",
        name :"Rock Paper Scissors"
    },{
        link :"04.counter.html",
        name :"Counter"
    },{
        link :"05.1.14.formvalidation.html",
        name :"Form Validation with Otp Verification"
    },{
        link :"06.arrayMethods.html",
        name :"Some Array Methods"
    },{
        link :"07.palindromeChecker.html",
        name :"Palindrome Checker"
    },{
        link :"08.calculator.html",
        name :"Calculator"
    },{
        link :"09.shoppingCart.html",
        name :"DShopping Cart"
    },{
        link :"10.fetchingAndPromises.html",
        name :"Fetching And Promise"
    },{
        link :"11.expenseTracker.html",
        name :"Expense Tracker"
    },{
        link :"12.ticTacToe.html",
        name :"Tic Tac Toe"
    },{
        link :"13.MemoryGame.html",
        name :"Memory Game"
    },{
        link :"05.1.14.formvalidation.html",
        name :"Password Show And Hide"
    },{
        link :"15.dictionary.html",
        name :"Online Dictionary"
    },{
        link :"09.shoppingCart.html",
        name :"Search Bar for Shopping Cart"
    },{
        link :"17.typingTest.html",
        name :"Typing Test"
    },{
        link :"18.bookList.html",
        name :"Book List"
    },{
        link :"19.whackaMole.html",
        name :"Whack A Mole Game"
    },{
        link :"20.currencyConverter.html",
        name :"Currency Converter"
    },{
        link :"21.RSSNewsFeedReader.html",
        name :"RSS News Feed Reader"
    },{
        link :"22.flappyBird.html",
        name :"Flappy Bird Game"
    },{
        link :"23.SnakeGame.html",
        name :"Snake Game"
    },{
        link :"24.QuizGame.html",
        name :"Quiz Game"
    },{
        link :"25.DinoGame.html",
        name :"Dino Game"
    },{
        link :"26.NumberConversion.html",
        name :"Number Conversion"
    },{
        link :"27.countDownClock.html",
        name :"Count Down Clock"
    },{
        link :"28.TextEditor.html",
        name :"Text Editor"
    },{
        link :"29.WeatherApp.html",
        name :"Weather App"
    },{
        link :"30.TextToVoiceConverter.html",
        name :"Text To Voice Converter"
    },
]

projects.forEach((project,i)=>{
    document.querySelector(".projects").innerHTML += `
    <div class="project" id="${i}" onclick="linkOriginal('${project.link}')">
    <h3>Day ${i+1}: ${project.name}</h3>
    </div>
    `
})

function linkOriginal(link){
    window.open(link,"_blank");
}
