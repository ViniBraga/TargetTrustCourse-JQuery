// Target trust
function legal(){
	for(i=0; i< 70 ;i++){
		document.body.innerHTML += " <p> Mais Um ..." + i +"</p>";
	}
}


$(
function(){
	
	legal();
	
	$(".varios").click(
	function(){
		$(this).hide();
	} );	
	//$("#unico").attr("style","background-color:#0F0");	
	
	$("p:even").css("background-color","#999");	
	$("p:odd").css("background-color","#333");	
	
//	$("p:even").css("background-color","#021");	

	$("p").click( function(){
		$(this).hide(100, function(){
			
		});
//		$(this).next().css("background-color","#021");	
	});
	
	
	

});
	

