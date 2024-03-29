//  Nooooooo  //
//  改変や複製を一切禁止します。  //
//  https://github.com/Nooooooo-0328/Clock-site  //

var languageIndex = 0; 
var languages = ["NanbuCamera 配信放送 | ", "NanbuCamera Broadcasting | ", "NanbuCamera 방송 | "]; // 各言語のテキスト
var textContainer = document.getElementById('dayOfWeek');

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var month = now.getMonth() + 1; 
    var date = now.getDate(); 
    var dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][now.getDay()];

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').textContent = timeString;

    if (languageIndex === 0) {
        textContainer.textContent = languages[0] + month + '/' + date + ' (' + dayOfWeek + ')';
    }

    if (now.getSeconds() % 10 === 0) {
        languageIndex = (languageIndex + 1) % languages.length;
        textContainer.classList.remove('fade-in');
        textContainer.classList.add('fade-out');
        setTimeout(function() {
            textContainer.textContent = languages[languageIndex] + month + '/' + date + ' (' + dayOfWeek + ')';
            textContainer.classList.remove('fade-out');
            textContainer.classList.add('fade-in');
        }, 1000); 
    }
}

updateClock();
setInterval(updateClock, 1000);
