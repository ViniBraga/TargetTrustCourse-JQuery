// JavaScript Document

$( function(){
	$('body').append('<div id="conteudo"></div><button id="carregar" >carregar</button><div id="conteudo"></div>');	
	
	$('#carregar').click(function(){
		$('#conteudo').load('ajax.txt p', function(a,b,c){
			//alert(a);
			//alert(b);
			var d = "<code>";
			$('body').append('<div class="code">');
			for( i in c){
//				$('body').append(c[i] + "<br/>");
				d += c[i];
				d += "<br/>"
			}
			
			d += '<div/>';
			
			$('body').append(d);
			
		});		
	});
	

}
);