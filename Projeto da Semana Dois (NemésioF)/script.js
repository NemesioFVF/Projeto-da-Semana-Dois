
var b1 = document.getElementById('botao');
var nd = document.getElementById ('naav2');
b1.setAttribute('onclick', 'trocaCOR()');
nd.setAttribute('onclick', 'nadaacontece()')

function nadaacontece () {
    alert('Desculpe, este item não tem funcionalidade.')
}

function trocaCOR () {

        
        var go = document.querySelector('#go1');
        var gle = document.querySelector('#gle1');
        var tela = document.getElementById('by');
    
   if (tela.className == 'bodyy') {
    
        document.getElementById('div1').classList.remove('seabox');
        document.getElementById('div1').classList.add('seabox2');

        document.getElementById('inptxt').classList.remove('txt');
        document.getElementById('inptxt').classList.add('txt2');

        document.getElementById('pesq').classList.remove('btn');
        document.getElementById('pesq').classList.add('btn2');

        document.getElementById('span').classList.remove('iconp');
        document.getElementById('span').classList.add('iconp2');

        go.src = 'img/go01.png'
        gle.src = 'img/gle01.png'
      
        document.getElementById('tp').classList.remove('topo');
        document.getElementById('tp').classList.add('topo2');
        
        document.getElementById('by').classList.remove('bodyy');
        document.getElementById('by').classList.add('body2');

        document.getElementById('naav').classList.remove('nav');
        document.getElementById('naav').classList.add('nav2');
        document.getElementById('naav1').classList.remove('nav');
        document.getElementById('naav1').classList.add('nav2');
        document.getElementById('naav2').classList.remove('nav');
        document.getElementById('naav2').classList.add('nav2');
        document.getElementById('naav3').classList.remove('nav');
        document.getElementById('naav3').classList.add('nav2');

        document.getElementById('sorte').classList.remove('btnsorte');
        document.getElementById('sorte').classList.add('btnsorte2');
    }

        else {
            document.getElementById('div1').classList.remove('seabox2');
            document.getElementById('div1').classList.add('seabox');
        
            document.getElementById('inptxt').classList.remove('txt2');
            document.getElementById('inptxt').classList.add('txt');
        
            document.getElementById('pesq').classList.remove('btn2');
            document.getElementById('pesq').classList.add('btn');
        
            document.getElementById('span').classList.remove('iconp2');
            document.getElementById('span').classList.add('iconp');

            go.src = 'img/go02.png'
            gle.src = 'img/gle02.png'
           
            document.getElementById('tp').classList.remove('topo2');
            document.getElementById('tp').classList.add('topo');
        
            document.getElementById('by').classList.remove('body2');
            document.getElementById('by').classList.add('bodyy');

            document.getElementById('naav').classList.remove('nav2');
            document.getElementById('naav').classList.add('nav');
            document.getElementById('naav1').classList.remove('nav2');
            document.getElementById('naav1').classList.add('nav');
            document.getElementById('naav2').classList.remove('nav2');
            document.getElementById('naav2').classList.add('nav');
            document.getElementById('naav3').classList.remove('nav2');
            document.getElementById('naav3').classList.add('nav');

            document.getElementById('sorte').classList.remove('btnsorte2');
            document.getElementById('sorte').classList.add('btnsorte');
        }

}