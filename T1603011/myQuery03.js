// Target trust

//$.noConflict();

jQuery(
function(){
	
	$("div").hide();
	
	jQuery("#botao").click( function(){
		jQuery("#area").attr("contenteditable", "true").html("EDICAO").css("background-color","#999");	

	});
	
	jQuery("#botao2").click( function(){

		$("div").toggle(1000);
	});
	
	jQuery("#botao3").click( function(){
		$("li>ul").toggle(1000);
		$("li>ul").animate({ left:5000,height:200});
		$("li>ul").animate({ left:0,height:0});
	});
	
	
	
	$("div").eq(0).hide();
	$("#Teste");	
	
	$("li>ul").css("color","#c70000").hide();
	
	$("li>ul").parent().click( function() {
		$(this).children().toggle(1000);
	});
	
});
	

