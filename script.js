const rappers = ["Drake", "Jay-Z", "Kanye West", "Dr. Dre", "Eminem"];

const drake = {
    quotes: ["Last name Ever, first name Greatest.", "My excuse is that I’m young.", "Count your blessings, not your problems.", "I always want the truth, but it’s dangerous.", "I’m on a roll like Cottonelle."],
    songs: ["Forever", "I'm On One", "Blessings", "Jaded", "All Me"]
}

const jayZ = {
    quotes: ["They talk. We live. Who cares what they say?", "What's better than one billionaire? Two.", "A loss ain't a loss, it's a lesson", "I be skippin' leg day, I still run the world", "You can pay for school but you can’t buy class."],
    songs: ["What We Talkin' Bout", "Family Feud", "Smile", "Bam", "Swagga Like Us"]
}

const kanyeWest = {
    quotes: ["And I’ll just blame everything on you, at least you know that’s what I’m good at", "Let’s go on a living free, they say the best things in life are free", "I know I act a fool but I promise you I’m going back to school", "Reach for the stars so if you fall you land on a cloud", "Why you so paranoid? Don’t be so paranoid."],
    songs: ["Runaway", "Good Life", "Hey Mama", "Homecoming", "Paranoid"]
}

const drDre = {
    quotes: ["Even when I was close to defeat I rose to my feet", "Never let me slip cuz if I slip then I'm slippin'.", "Those who are quiet will always cause riots.", "Don't be worried about the next man - make sure your business tight.", "King of the beats—you ride to 'em in your Fleet"],
    songs: ["Still D.R.E.", "Nuthin' but a G Thang", "Stranded on Death Row", "Get Your Money Right", "The Next Episode"]
}

const eminem = {
    quotes: ["You don’t get another chance, life is no Nintendo game.", "When I say I’ma do something I do it", "You only get one shot, do not miss your chance to blow", "No wonder I had to unlearn everything my brain was taught", "The passion in the flame is ignited, you can’t put it out once we light it"],
    songs: ["Love the Way you Lie", "Not Afraid", "Lose Yourself", "Guts Over Fear", "Forever"]
}

let newQuote = document.getElementById('start');

const selectRapper = () => {
    const randomIndex = Math.floor(Math.random() * rappers.length);
    return rappers[randomIndex];
}

const renderDrake = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const selectedQuote = drake.quotes[randomNumber];
    const selectedSong = drake.songs[randomNumber];
    document.getElementById('portrait').src = "./images/drake.jpg";
    document.getElementById('artist').innerHTML = "Drake";
    document.getElementById('quote').innerHTML = "Quote: " + selectedQuote;
    document.getElementById('song').innerHTML = "Song title: " + selectedSong;
}

const renderJayZ = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const selectedQuote = jayZ.quotes[randomNumber];
    const selectedSong = jayZ.songs[randomNumber];
    document.getElementById('portrait').src = "./images/jay-z.jpg";
    document.getElementById('artist').innerHTML = "Jay-Z";
    document.getElementById('quote').innerHTML = "Quote: " + selectedQuote;
    document.getElementById('song').innerHTML = "Song title: " + selectedSong;
}

const renderKanyeWest = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const selectedQuote = kanyeWest.quotes[randomNumber];
    const selectedSong = kanyeWest.songs[randomNumber];
    document.getElementById('portrait').src = "./images/kanye-west.jpg";
    document.getElementById('artist').innerHTML = "Kanye West";
    document.getElementById('quote').innerHTML = "Quote: " + selectedQuote;
    document.getElementById('song').innerHTML = "Song title: " + selectedSong;
}

const renderDrDre = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const selectedQuote = drDre.quotes[randomNumber];
    const selectedSong = drDre.songs[randomNumber];
    document.getElementById('portrait').src = "./images/dr-dre.jpg";
    document.getElementById('artist').innerHTML = "Dr. Dre";
    document.getElementById('quote').innerHTML = "Quote: " + selectedQuote;
    document.getElementById('song').innerHTML = "Song title: " + selectedSong;
}

const renderEminem = () => {
    const randomNumber = Math.floor(Math.random() * 5);
    const selectedQuote = eminem.quotes[randomNumber];
    const selectedSong = eminem.songs[randomNumber];
    document.getElementById('portrait').src = "./images/eminem.jpg";
    document.getElementById('artist').innerHTML = "Eminem"
    document.getElementById('quote').innerHTML = "Quote: " + selectedQuote;
    document.getElementById('song').innerHTML = "Song title: " + selectedSong;
}

const updateScreen = () => {
    const selectedRapper = selectRapper();
    switch (selectedRapper) {
        case "Drake":
            renderDrake();
            break;
        case "Jay-Z":
            renderJayZ();
            break;
        case "Kanye West":
            renderKanyeWest();
            break;
        case "Dr. Dre":
            renderDrDre();
            break;
        case "Eminem":
            renderEminem();
            break;
        default:
            console.log("Select a rapper");
            break;
    }
}

newQuote.addEventListener('click', updateScreen);


