
var nombre;
var edad;

for(i = 0; i < 8; i++){

nombre=prompt('Ingrese su nombre:');
edad=prompt('Ingrese su edad:');

document.write(`<br>Hola ${nombre} asi que tienes ${edad} años:`)

if (edad > 18){
    document.write(' Entonces puedes pasar, que lo disfrutes!!!')
    document.write('<br>')
} else{
    document.write(' No puedes pasar, lo siento =(')
    document.write('<br>')
}

}