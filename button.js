var buttons = document.getElementsByTagName('button');

Array.prototype.forEach.call(buttons, function (b) {
    b.addEventListener('click', createRipple);
});

function createRipple (e) {
    var circle = document.createElement('div');
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);

    circle.style.width = circle.style.height = d + 'px';

var rect = this.getBoundingClientRect();
circle.style.left = e.clientX - rect.left -d/2 + 'px';
circle.style.top = e.clientY - rect.top - d/2 + 'px';

    console.log(this);

    circle.classList.add('ripple');
}


function send() {
  /**
   * VAMOS PARAR DE FUÇAR NO CODIGO DOS AMIGUINHOS?
   * OBRIGADO
   */
  var container = document.createElement('div');
  container.align = 'center';
  var result = document.getElementById('result');
  var audio = document.createElement('audio');
  // audio.autoplay = true;
  audio.play();
  var source = document.createElement('source');
  source.type = 'audio/mpeg';
  source.src = 'gemidao.mp3';
  audio.appendChild(source);
  container.appendChild(audio);
  container.appendChild(message);
  result.appendChild(container);
}

function alerta() {
	alert('Toma, para voce aprender a parar de zuar os amigos!');
}