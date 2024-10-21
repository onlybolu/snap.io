var Feature = document.getElementById('u');
var Down = document.getElementById('hover1');
var don = document.getElementById('don')
var up = document.getElementById('up');
var company = document.getElementById('c');
var hover2 = document.getElementById('hover2')
var hop = document.getElementById('hop')
var bun = document.getElementById('bun')
var sharp = document.getElementById('menu')
var noe = document.getElementById('sidebar')
var flose = document.getElementById('close')


flose.onclick = function(){
    noe.style.display ='none';
}



Feature.onclick = function(){
    if(Down.style.display=='none'){
        Down.style.display = 'flex'
        up.style.display = 'flex'
        up.style.filter= 'contrast(200)'
        don.style.display= 'none'
        Feature.style.color= 'black'
    }
    else {
        Down.style.display= 'none'
        up.style.display = 'none'
        don.style.display= 'flex'
        // don.style.filter = 'contrast(200)'
        Feature.style.color= 'rgba(0, 0, 0, 0.552)'
    }
}



company.onclick = function(){
    if(hover2.style.display=='none'){
        hover2.style.display = 'flex'
        hop.style.display = 'flex'
        hop.style.filter= 'contrast(200)'
        bun.style.display= 'none'
        company.style.color= 'black'
    }
    else {
        hover2.style.display= 'none'
        hop.style.display = 'none'
        bun.style.display= 'flex'
        // don.style.filter = 'contrast(200)'
        company.style.color= 'rgba(0, 0, 0, 0.552)'
    }

}

sharp.onclick = function(){
    noe.style.display ='flex';
    

}