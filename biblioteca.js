var insert = new Array();
var libros=0;
function agregar () {

	insert[libros] = new Array(4);
    insert[libros][0] = document.getElementById('Dato1').value;
    insert[libros][1] = document.getElementById('Dato2').value;
    insert[libros][2] = document.getElementById('Dato3').value;
    insert[libros][3] = document.getElementById('Dato4').value;
    libros++;
}

function mostrarlibro(){
	var tabla = document.getElementById('contenido1');
    //crea tabla para mostrar datos 
    var html = '<table class="table table-bordered">';
        html += '<thead><tr><th>Nombre</th>';
        html += '<th>Tipo</th>';
        html += '<th>Editorial</th>';
        html += '<th>Autor</th></tr>';
        html +='</thead>';
        for(i=0;i<insert.length;i++){
                html += '<tr name="fila"><td>';
                 html +=insert[i][0];
                 html += '</td>'
                 html += '<td>';
                 html +=insert[i][1];
                 html += '</td>'
                 html += '<td>';
                 html +=insert[i][2];
                 html += '</td>'
                 html += '<td>';
                 html +=insert[i][3];
                 html += '</td>'
                html += '</tr>';  
            }
             html += '</table>';
            tabla.innerHTML = html;
}

function iniciar(){
	document.getElementById("btnagregar").onclick = function () {
        agregar();
        alert('ingresado correctamente');
    document.getElementById('Dato1').value = '';
    document.getElementById('Dato2').value = '';
    document.getElementById('Dato3').value = '';
    document.getElementById('Dato4').value = '';
    }

    document.getElementById("btnmostrar").onclick = function () {
        mostrarlibro();
    }
}

window.onload = iniciar;

