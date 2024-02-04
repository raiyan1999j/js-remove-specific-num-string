function playstore(){
    var a=document.getElementById('demo').value;
var b=parseInt(document.getElementById('memo').value);
var part1	=a.substring(0,b-1);
var part2   =a.substring(b,a.length);
var c =(part1 + part2);

    document.getElementById('shadow').innerHTML=c;
    
}