var b1 = document.getElementById('botao');
var nd = document.getElementById ('naav2');
b1.setAttribute('onclick', 'trocaCOR()');
nd.setAttribute('onclick', 'nadaacontece()')

function nadaacontece () {
    alert('Desculpe, este item não tem funcionalidade.')
}

function trocaCOR () {

    var Vgoogle = document.querySelector('#go');
    var tela = document.getElementById('by');

if (tela.className == 'bodyy') {

    document.getElementById('by').classList.remove('bodyy');
    document.getElementById('by').classList.add('bodyy2');

    Vgoogle.src = 'img/google02.png';
    document.getElementById('tp').classList.add('topo2');
    
    document.getElementById('idpes').classList.remove('ICpes');
    document.getElementById('idpes').classList.add('ICpes2');

    document.getElementById('naav2').classList.remove('nav');
    document.getElementById('naav2').classList.add('nav2');
    document.getElementById('naav3').classList.remove('nav');
    document.getElementById('naav3').classList.add('nav2');

    document.getElementById('PStxt').classList.remove('pesuisaBR');
    document.getElementById('PStxt').classList.add('pesuisaBR2');

    document.getElementById('fds').classList.remove('fundosobre');
    document.getElementById('fds').classList.add('fundosobre2');

    document.getElementById('pesp').classList.remove('sobreP');
    document.getElementById('pesp').classList.add('sobreP2');
 
}

    else {
        document.getElementById('by').classList.remove('bodyy2');
        document.getElementById('by').classList.add('bodyy');
        
        Vgoogle.src = 'img/google01.png';
        document.getElementById('tp').classList.remove('topo2');

        document.getElementById('idpes').classList.remove('ICpes2');
        document.getElementById('idpes').classList.add('ICpes');

        document.getElementById('naav2').classList.remove('nav2');
        document.getElementById('naav2').classList.add('nav');
        document.getElementById('naav3').classList.remove('nav2');
        document.getElementById('naav3').classList.add('nav');

        document.getElementById('PStxt').classList.remove('pesuisaBR2');
        document.getElementById('PStxt').classList.add('pesuisaBR');

        document.getElementById('fds').classList.remove('fundosobre2');
        document.getElementById('fds').classList.add('fundosobre');

        document.getElementById('pesp').classList.remove('sobreP2');
        document.getElementById('pesp').classList.add('sobreP');
    }

}