// JavaScript Document

function inicial(){

	var eUl = document.createElement("ul");

	for( i=0; i<6; i++){
		var li = document.createElement("li");
		
		var a = document.createElement("a");
		a.innerHTML = "TEXT " + i;
		li.appendChild(a);
		eUl.appendChild(li);
	}
	document.body.appendChild(eUl);	
	
}

function exercicio(){
	$("ul").attr("id","Principal");
	$("#Principal li").addClass("item");
	$("#Principal a").each(function(){
		$(this).attr('href', '/' + $(this).text());
	});
}

$( function(){
	inicial();
	exercicio();	
} );