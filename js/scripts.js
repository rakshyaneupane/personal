var app = document.getElementById('landType');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Rakshya Neupane')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Nursing Scholar')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('Medico')
    .pauseFor(2500)
    .start();