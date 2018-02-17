
function inicio(){
	$("body").append("<div id='quatrado' ></div>");
	
	$("#quatrado").css("border","#00C 1px solid").append("<b>TESTE QUADRADO</b>");
	
	$("#quatrado").draggable({
		scrollSensitivity: 100,
		scroll : true,
		start : function (){
			$(this).css("background","#333");
		},
		stop:function (){
			$(this).css("background","#FFF");
		}
		
	});
	$("#quatrado").resizable({
		animate: true,
		ghost: true
	});
	
	$('#menuDoHead').menu({
		position: {
			my: "left top", 
			at: "right-5 top+5" 
		}
	});
}

function selecao(){
    $( "#UIpai2, #UIpai" ).disableSelection();
	$("#UIpai").selectable( {
		stop: function() {
        var result = "";
        $( ".ui-selected", this ).each(function() {
          var index = $( "#UIpai li" ).index( this );
          result += ( " #" + ( index + 1 ) );
        });
		
		alert( "" + result);
      }	
	});
	
	$("#UIpai2>li").addClass("ui-state-default");
    $( "#UIpai2" ).sortable();
	
	$('#dialog').dialog({
		autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
	});
	
	$( "#opener" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });

}

function son(){
	
	$.getJSON( "http://gdata.youtube.com/feeds/api/standardfeeds/most_popular?v=2&alt=json", function( data ) {
		var items = [];
		$.each( data, function( key, val ) {
			items.push( "<li id='" + key + "'>" + val + "</li>" );
		});
		$("#UIpai2").html(items);
	} );
	
}

$( function(){
	//$("head").append( "<link href=\"http://code.jquery.com/ui/1.10.4/themes/smoothness/jquery-ui.css\" rel=\"stylesheet\"></link>" );
	$("head").append( "<link href=\"http://code.jquery.com/ui/1.10.4/themes/vader/jquery-ui.css\" rel=\"stylesheet\"></link>" );
	inicio();
	selecao();
} );