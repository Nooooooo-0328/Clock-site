const canvas = document.getElementById('clockCanvas');
const digitalClock = document.getElementById('digitalClock');
const settingsModal = document.getElementById('settingsModal');
const ctx = canvas.getContext('2d');
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 120;
let isDigital = false;
let showDate = false;

function drawAnalogClock() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#61dafb';
  ctx.lineWidth = 4;
  ctx.stroke();

  for (let i = 1; i <= 12; i++) {
    const angle = ((i - 3) * 2 * Math.PI) / 12;
    const numX = centerX + Math.cos(angle) * (radius - 30);
    const numY = centerY + Math.sin(angle) * (radius - 30);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#61dafb';
    ctx.textAlign = 'center';
    ctx.fillText(i, numX, numY);
  }

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourAngle = ((hours % 12 + minutes / 60) / 12) * 2 * Math.PI - Math.PI / 2;
  const hourX = centerX + Math.cos(hourAngle) * (radius - 40);
  const hourY = centerY + Math.sin(hourAngle) * (radius - 40);
  drawClockHand(centerX, centerY, hourX, hourY, '#61dafb', 6);

  const minuteAngle = (minutes / 60) * 2 * Math.PI - Math.PI / 2;
  const minuteX = centerX + Math.cos(minuteAngle) * (radius - 20);
  const minuteY = centerY + Math.sin(minuteAngle) * (radius - 20);
  drawClockHand(centerX, centerY, minuteX, minuteY, '#61dafb', 4);

  const secondAngle = (seconds / 60) * 2 * Math.PI - Math.PI / 2;
  const secondX = centerX + Math.cos(secondAngle) * (radius - 20);
  const secondY = centerY + Math.sin(secondAngle) * (radius - 20);
  drawClockHand(centerX, centerY, secondX, secondY, '#61dafb', 2);

  if (showDate) {
    const dateString = getDateString(now);
    drawText(centerX, centerY + 60, dateString, '14px Arial', '#61dafb', 'center');
  }
}

function drawClockHand(startX, startY, endX, endY, color, lineWidth) {
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.stroke();
}

function drawText(x, y, text, font, color, textAlign) {
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = textAlign;
  ctx.fillText(text, x, y);
}

function drawDigitalClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleClocks() {
  isDigital = !isDigital;
  if (isDigital) {
    hideCanvas();
    showDigitalClock();
  } else {
    showCanvas();
    hideDigitalClock();
  }
}

function hideCanvas() {
  canvas.style.display = 'none';
}

function showCanvas() {
  canvas.style.display = 'block';
}

function hideDigitalClock() {
  digitalClock.style.display = 'none';
}

function showDigitalClock() {
  digitalClock.style.display = 'block';
}

function toggleDateDisplay() {
  showDate = !showDate;
}

function getDateString(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ja-JP', options);
}

function toggleSettings() {
  settingsModal.style.display = 'block';
}

function closeSettings() {
  settingsModal.style.display = 'none';
}

function changeBackgroundColor() {
  const bgColor = document.getElementById('bgColor').value;
  document.body.style.backgroundColor = bgColor;
}

function toggleDigitalClock() {
  toggleClocks();
}

function animateClock() {
  if (isDigital) {
    drawDigitalClock();
  } else {
    drawAnalogClock();
  }
  requestAnimationFrame(animateClock);
}

animateClock();
