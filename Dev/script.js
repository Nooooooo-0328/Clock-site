function updateClocks() {
    var localTime = new Date();
    var londonTime = new Date(localTime);
    londonTime.setHours(localTime.getUTCHours() + 0);
    var newYorkTime = new Date(localTime);
    newYorkTime.setHours(localTime.getUTCHours() - 5);
    var tokyoTime = new Date(localTime);
    tokyoTime.setHours(localTime.getUTCHours() + 9); 
    var parisTime = new Date(localTime);
    parisTime.setHours(localTime.getUTCHours() + 1); 
    var sydneyTime = new Date(localTime);
    sydneyTime.setHours(localTime.getUTCHours() + 10); 
    var dubaiTime = new Date(localTime);
    dubaiTime.setHours(localTime.getUTCHours() + 4); 
    var italyTime = new Date(localTime);
    italyTime.setHours(localTime.getUTCHours() + 1);
    var hongKongTime = new Date(localTime);
    hongKongTime.setHours(localTime.getUTCHours() + 8);
    var brazilTime = new Date(localTime);
    brazilTime.setHours(localTime.getUTCHours() - 3);
    var canadaTime = new Date(localTime);
    canadaTime.setHours(localTime.getUTCHours() - 4);
    var mexicoCityTime = new Date(localTime);
    mexicoCityTime.setHours(localTime.getUTCHours() - 5);
    var moscowTime = new Date(localTime);
    moscowTime.setHours(localTime.getUTCHours() + 3);
    
    function getFormattedDate(date, language) {
        var options = { month: 'numeric', day: 'numeric', weekday: 'short' };
        return date.toLocaleDateString(language, options);
    }
    
    document.getElementById('localTime').innerHTML = '<h2>Your Time</h2><p>' + localTime.toLocaleString() + '<br>' + getFormattedDate(localTime, 'en-US') + '</p>';
    document.getElementById('londonTime').innerHTML = '<h2>London, UK</h2><p>' + londonTime.toLocaleString() + '<br>' + getFormattedDate(londonTime, 'en-GB') + '</p>';
    document.getElementById('newYorkTime').innerHTML = '<h2>New York, USA</h2><p>' + newYorkTime.toLocaleString() + '<br>' + getFormattedDate(newYorkTime, 'en-US') + '</p>';
    document.getElementById('tokyoTime').innerHTML = '<h2>Tokyo, Japan</h2><p>' + tokyoTime.toLocaleString() + '<br>' + getFormattedDate(tokyoTime, 'ja-JP') + '</p>';
    document.getElementById('parisTime').innerHTML = '<h2>Paris, France</h2><p>' + parisTime.toLocaleString() + '<br>' + getFormattedDate(parisTime, 'fr-FR') + '</p>';
    document.getElementById('sydneyTime').innerHTML = '<h2>Sydney, Australia</h2><p>' + sydneyTime.toLocaleString() + '<br>' + getFormattedDate(sydneyTime, 'en-US') + '</p>';
    document.getElementById('dubaiTime').innerHTML = '<h2>Dubai, UAE</h2><p>' + dubaiTime.toLocaleString() + '<br>' + getFormattedDate(dubaiTime, 'ar-SA') + '</p>';
    document.getElementById('italyTime').innerHTML = '<h2>Rome, Italy</h2><p>' + italyTime.toLocaleString() + '<br>' + getFormattedDate(italyTime, 'it-IT') + '</p>';
    document.getElementById('hongKongTime').innerHTML = '<h2>Hong Kong, China</h2><p>' + hongKongTime.toLocaleString() + '<br>' + getFormattedDate(hongKongTime, 'zh-HK') + '</p>';
    document.getElementById('brazilTime').innerHTML = '<h2>Brasília, Brazil</h2><p>' + brazilTime.toLocaleString() + '<br>' + getFormattedDate(brazilTime, 'pt-BR') + '</p>';
    document.getElementById('canadaTime').innerHTML = '<h2>Toronto, Canada</h2><p>' + canadaTime.toLocaleString() + '<br>' + getFormattedDate(canadaTime, 'en-CA') + '</p>';
    document.getElementById('mexicoCityTime').innerHTML = '<h2>Mexico City, Mexico</h2><p>' + mexicoCityTime.toLocaleString() + '<br>' + getFormattedDate(mexicoCityTime, 'es-MX') + '</p>';
    document.getElementById('moscowTime').innerHTML = '<h2>Moscow, Russia</h2><p>' + moscowTime.toLocaleString() + '<br>' + getFormattedDate(moscowTime, 'ru-RU') + '</p>';
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setInterval(() => {
    const clocks = document.querySelectorAll('.clock');
    clocks.forEach(clock => {
        clock.style.backgroundColor = getRandomColor();
    });
}, 1000);

setInterval(updateClocks, 1000);

updateClocks();