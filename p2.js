let counter = 0;
let functionHasRun = false;
let music = document.getElementById('myAudio');
let music1 = document.getElementById('myAudio1');
let score = 0;

function getRandomBgcolor() {

    // Generate random values for red, green, and blue in the range 0-255
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    // Create a CSS color string in the format "rgb(r, g, b)"
    const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

    return randomColor;
}

function display_time() {
    counter++;
    if (counter == 50) {
        clearInterval(interval);//using interval id, it clears setInterval
        document.getElementById('right').style.display = 'none';
        music.pause();
        music.currentTime = 0;
    }
    let random_color = getRandomBgcolor();
    document.getElementById('right').style.backgroundColor = random_color;
}

function pg_changed(){
    functionHasRun = false;
    counter=0;
}

function right() {
    if (!functionHasRun){
        score++;
        document.getElementById('right').style.display = 'block';
        music.play();
        interval = setInterval(display_time, 100);
    }
    functionHasRun = true;
}

function nxt_pg3(){
    document.getElementById('PG2').style.display = 'none';
    document.getElementById('nxt2').style.display = 'none';
    document.getElementById('PG3').style.display = 'block';
    document.getElementById('end').style.display = 'block';
    pg_changed();
}

function end(){
    document.getElementById('end').style.display = 'none';
    document.getElementById('PG3').style.display = 'none';
    document.getElementById('score').style.display = 'block';
    document.getElementById('score1').innerHTML= `YOUR SCORE: ${score}`;
}

function getRandomBgcolor1() {

    // Generate random values for red alone in the range 0-255
    const randomRed = Math.floor(Math.random() * 256);

    // Create a CSS color string in the format "rgb(r, g, b)"
    const randomColor = `rgb(${randomRed},0,0)`;

    return randomColor;
}

function display_time1(){
    counter++;
    if (counter == 42) {
        clearInterval(interval1);
        document.getElementById('wrong').style.display = 'none';
        music1.pause();
        music1.currentTime = 0;
    }
    let random_color = getRandomBgcolor1();
    document.getElementById('wrong').style.backgroundColor = random_color;
}

function wrong(){
    if (!functionHasRun){
        document.getElementById('wrong').style.display = 'block';
        music1.play();
        interval1 = setInterval(display_time1, 100);
    }
    functionHasRun = true;
}