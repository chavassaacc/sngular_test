
function CapturaDatos(){        
    
    var num,result;
    
    usuarios = [];
    
    num = $('#numero').val();
    
    mensaje = $('#mensaje');
    
    if(numero === '' || parseInt(numero)<=0){
        mensaje.empty();
        mensaje.append('<p class="red-text">Debe colocar un numero valido (mayor o igual a 1)</p>');
    }else{
        
        result = serie(num);
        RegresarDatos(result);
    }

};

function RegresarDatos(info){

	var component = 'pagina_final.html';
	var  tabla, html,titulo,informacion;
	informacion=info;
    tabla = $('#table_serie');
    titulo = $('#result');
              
     tabla.empty();
     html = '<tr>';
     html += '<td class="row">';
     html += '<div class="col s12">'+ info +'</div>';
     html += '</td>';
     html += '</tr>';
     
     tabla.append(html);

     $.ajax({
     	mimeType: 'text/html; charset=utf-8',
        url: component,
        type: 'GET',
        dataType: "html",
        async: true,
        success: function(data) {
            $('#contenedor').html(data);
            document.getElementById("contenedor").innerHTML="Resultado: "+informacion;
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });     
     
     console.log(info);
     window.onload = function() {

    $('#result').innerHTML=informacion;
	}
     $('#result').innerText = informacion;

    
};

var num= null;

function triangular(num){
	//n=(n(n+1))/2
	res=(num*(num+1))/2;
	return res;

};

function fibonacci(num){
	var res=null;
	var num1=0,num2=1;
	for(var i=1;i<num;i++){
		res=num1+num2;
		num1=num2;
		num2=res;
	}
	return res;
};

function primo(num){
	//no puede factorizarse
	var val=true;
	for (var i = 2; i < (num / 2); i++) {
		if (num % i == 0){
			val=false;
			i=num;
		}
	}
	if(val==true){
		return num;
	}
	else{
		return 0;
	}
};

function serie(num){
	var fibo,prim,trang,res=null;
	//5*fibonacci(n+2)*2*primo(n-2)/7*triangular(n)
	numero = parseInt(num);
	fibo = fibonacci(numero+2);
	prim=primo(numero-2);
	triang=triangular(numero);

	if(prim==0){
		return "El numero no es primo";
	}else{
		resultado = (5*fibo*2*prim)/(7*triang);

		return resultado;
	}
};