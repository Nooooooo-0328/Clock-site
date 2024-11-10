//  Nooooooo  //
//  改変や複製を一切禁止します。  //
//  https://github.com/Nooooooo-0328/Clock-site  //

var languageIndex = 0;
var languages = [
    "Noooooooの配信へようこそ！",
    "必ず概要欄/配信メモをご覧ください。",
    "【配信案内】",
    "主は基本聞き専です。",
    "主はあまりコメントを見ないため、反応が送れる場合があります。",
    "X (Twitter): @Nooooooo_0328"
];
var textContainer = document.getElementById('dayOfWeek');

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').textContent = timeString;

    var timezone = '';

    textContainer.textContent = languages[languageIndex] + timezone;

    if (now.getSeconds() % 10 === 0) {
        textContainer.classList.remove('fade-in');
        textContainer.classList.add('fade-out');

        textContainer.addEventListener('animationend', function() {
            languageIndex = (languageIndex + 1) % languages.length;

            var newHours = now.getHours(); 
            var newMinutes = now.getMinutes(); 
            var newSeconds = now.getSeconds(); 
            newHours = newHours < 10 ? '0' + newHours : newHours;
            newMinutes = newMinutes < 10 ? '0' + newMinutes : newMinutes;
            newSeconds = newSeconds < 10 ? '0' + newSeconds : newSeconds;
            var newTimeString = newHours + ':' + newMinutes + ':' + newSeconds;

            var newTimezone = '';

            textContainer.textContent = languages[languageIndex] + newTimezone;

            textContainer.classList.remove('fade-out');
            textContainer.classList.add('fade-in');
        }, { once: true });
    }
}

updateClock();
setInterval(updateClock, 1000);
