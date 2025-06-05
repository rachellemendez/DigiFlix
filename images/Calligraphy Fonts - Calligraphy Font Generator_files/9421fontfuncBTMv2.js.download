function recommends()

			{  var name = $("#recom").val();
				
                         $.ajax({                  
                        type:"POST",
                         url: "/fonts/recommends.php",
                         data: {"name":name},
		          success: function(data){ $("#relatedfonts").html(data);}
		          })
			
		         }

			

function update_image()

			{       
			    var name=$('#font').val();  if ( name == '') { $('#labell').css('border', '3px dashed #e73420'); return;}
			    
			    var sstring = $('#polystring').val(); if( typeof sstring == 'undefined' ) { var sstring = 'GENERATE=LOADING';}
			
                                var stringArray = sstring.split("=");
                                
				var replace_l = '<button class="gradientgray2" onclick="reset()">' + stringArray[1] + '</button>';
				
				var replace_g = '<button class="gradientred" onclick="update_image()">' + stringArray[0] + '</button>';

				$("#updator").html(replace_l); 

                var text=$('#string').val(); if( text == '' ) { var text = 'Your Text Here';}
                                                              			
				
				
				var size=$("#size").val();

				var style_color='';
				
				var style_effect='';
				
				
					style_color = $("#jscolorr").val();

					style_col = $('#jscolorr2').val();
				
				    style_effect = $('#effect').val();   

					style_ol = $('#effect_ol').val(); 

					style_pa = $('#effect_pa').val();
				
				//if (/(^[0-9A-F]{6}$)/i.test(style_color) != true) {style_color="000000"; setCookie("clrr", style_color);}
                //if (/(^[0-9A-F]{6}$)/i.test(style_col) != true) {style_col="000000";setCookie("clrx", style_col);}

					 								    
				  gtag('event', 'at_txeffs', { 'tx_term':style_effect});
				
                                  $.ajax({
                 
                 type:"POST",
                 url: "/loadme_21.php",
                 data: {"name":name, "text":text,"size":size, "style_color":style_color,"style_effect":style_effect,"style_pa":style_pa,"style_ol":style_ol, "style_col":style_col},


				 success: function(data){  $("#text_image").attr('src',data); setCookie("upim",data);
				 
                            $("#downpic").attr('href', data);
				 
				 },
					 
			     error: function() {$("#updator").html(replace_g);}

                        });
				               
                //setTimeout(function(){  }, 1500);
                $("#text_image").on('load', function(){ $("#updator").html(replace_g); });


				$("#misc_embed").hide();
				$("#misc_edit").hide();
				$("#misc_gifts").hide();
				
				//$("#gifts_image").attr('src', 'https://fontmeme.com/loadingproduct.gif');

				//var geneurl = $("#text_image").attr('src'); 

				

			}
			

function reset()
	
	        {    
	            var sstring = $('#polystring').val(); if( typeof sstring == 'undefined' ) { var sstring = 'GENERATE=LOADINGG';}
			
                var stringArray = sstring.split("=");
				
				var replace_g = '<button class="gradientred" onclick="update_image()">' + stringArray[0] + '</button>';
				
				setTimeout(function(){ $("#updator").html(replace_g); }, 1500);				

			}
			
			

function image_code()
				
			{
                
                var imgurl = $("#text_image").attr("src");

				var pageurl = $("link[rel='canonical']").attr("href")

                $.ajax({

                 type:"POST", 
                 url: "/updateurl.php",
			     dataType: 'json',
                 data: {"imgN":imgurl, "urlP":pageurl},

                 success: function(data){
					 
					 $("#embed_xhtml").val(data.d1);
					 $("#embed_xxhtml").val(data.d2);
					 $("#embed_xxxhtml").val(data.d3);
					 }
                        });

				
			         $("#misc_embed").toggle();
			         
				     $("#misc_gifts").hide(); $("#misc_edit").hide();
				     
				     $("#gifts_image").attr('src', 'https://fontmeme.com/loadingproduct.gif');

			}

function imtool_code() {  $("#misc_edit").toggle();  $("#misc_embed").hide(); }


function reset2()
	
	        {    
	            var sstring = $('#polystring2').val(); if( typeof sstring == 'undefined' ) { var sstring = 'See Your Design on Zazzle Products=Preparing Products...';}
			
                var stringArray = sstring.split("=");
				
				var replace_g2 = '<button class="gradientgray giftbtn" onclick="make_gifts()">' + stringArray[0] + '</button>';
				
				setTimeout(function(){ $("#updator2").html(replace_g2); }, 1500);				

			}			
			

function copylink(formid) {
  /* Get the text field */
  var copyText = document.getElementById(formid);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */
  

   /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);


}

    // starting onloadfirst
function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";  
}

function getCookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}



$(document).ready(function () {
   $( "#size" ).blur(function() {
   
      var max = parseInt($(this).attr('max'));
      var min = parseInt($(this).attr('min'));
      if ($(this).val()  > max)
      {
          $(this).val(max);
      }
      else if ($(this).val()  < min)
      {
          $(this).val(min);
      } 
      else if (isNaN($(this).val())) {$(this).val('70');} 
    }); 
});



function gettextcolor(hexcolor){
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}


if (typeof jscolor != 'undefined') {

// These options apply to all color pickers on the page
jscolor.presets.default = {
	format:'hex', smartPosition:false, position:'top', paletteCols:10, width:280, previewSize:0,previewPadding:0, previewElement:'#colorstand',hash:false,
	height:100, shadow:false, paletteCols:10, paletteHeight:25,
	palette: [
'#ffcdd2', 	'#f09a99', 	'#e8372d', 	'#c20f08', 	'#870f06', 
'#e2bde9', 	'#cf90da', 	'#ac42bf', 	'#7809a4', 	'#3e0576', 
'#b1e4fc', 	'#48c2f9', 	'#0086d4', 	'#0755aa', 	'#043682', 
'#d4e34a', 	'#75cc20', 	'#3fa142', 	'#2a7e2e', 	'#175f1c', 
'#fef698', 	'#ffce00', 	'#fb6222', 	'#b23602', 	'#5c2603', 
'#ffffff', 	'#e5e5e5', 	'#b2b2b2', 	'#716e6e', 	'#000000'

	],
};
}

$(document).ready(function(){

 $('#jscolorr').each(function(){
       
    var value = getCookie('clrr');
    
    if ( $("#firstcolor" ).length ) {value = $("#firstcolor").val(); setCookie("clrr", value); } //102017
    
    if (value == null || value == "") { value = '5584AC';} var hex = '#' + value;
		
	$(this).val(value); $(this).css({"background-color":hex}); $(this).css({"color":gettextcolor(value)});
    

           }).on('input', function(){
		
    var hexchange = $("#jscolorr").attr('data-current-color'); $(this).css({"background-color":hexchange}); //

	$(this).css({"color":gettextcolor(hexchange)});

	//setCookie("clrr",$(this).val());
	setCookie("clrr",hexchange.replace("#", ""));
    
});



  $('#jscolorr2').each(function(){
                  
    var value = getCookie('clrx');
    
    if ( $("#secondcolor" ).length ) {value = $("#secondcolor").val(); setCookie("clrx", value); } //102017
    
	if (value == null || value == "") { value = '19CACA';} var hex = '#' + value;
		
	$(this).val(value); $(this).css({"background-color":hex}); $(this).css({"color":gettextcolor(value)});


}).on('input', function(){
    
		var hexchangex = $("#jscolorr2").attr('data-current-color'); $(this).css({"background-color":hexchangex}); //

		$(this).css({"color":gettextcolor(hexchangex)});

		//setCookie("clrx",$(this).val());
		setCookie("clrx",hexchangex.replace("#", ""));
    });

});



$(document).ready(function(){
           
    $('#string').each(function(){
    var value = getCookie('txxt');

	if ( $("#firsttext" ).length ) {value = $("#firsttext").val(); $(this).val(value); }  

    if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('');}
    
}).on('blur', function(){
    if($(this).val() != '' ) {
		//var text=$(this).val(); text=text.replace(/(^|[\s])'/g, "$1\u2018").replace(/'/g, "\u2019"); $(this).val(text);//
		setCookie("txxt",$(this).val());
    }
});



    $('#size').each(function(){
    var value = getCookie('szzs');

	if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('65');}
    

}).on('blur', function(){
    if($(this).val() > 300 ) {
		setCookie("szzs",'300');
    }
	else {setCookie("szzs",parseInt($(this).val()));}
});



    $('#font').each(function(){
    
        
   if ( $("#firstfont" ).length ) {value = $("#firstfont").val(); $(this).val(value); }    
   
});	


    

    $('#effect').each(function(){
        
    var value = getCookie('ffct');
        
   if ( $("#firsteffect" ).length ) {value = $("#firsteffect").val(); setCookie("ffct", value); }  
    
    
    if( value != null && value != "" ) {
        
        $(this).val(value);
    }
    else {$(this).val('None'); setCookie("ffct", 'None');}

}).on('blur', function(){
    if($(this).val() != '' ) {
		setCookie("ffct",$(this).val());
    }


});	



$('#effect_ol').each(function(){
    var value = getCookie('ffct_ol');

	if ( $("#firstol").length ) {value = $("#firstol").val(); }  

    if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('X0');}
    
}).on('blur', function(){
    if($(this).val() != '' ) {
		setCookie("ffct_ol",$(this).val());
    }
});



$('#effect_pa').each(function(){
    var value = getCookie('ffct_pa');

	if ( $("#firstpa").length ) {value = $("#firstpa").val(); }  

    if(value != null && value != "" ) {
        $(this).val(value);
    }
    else {$(this).val('Pastel01');}
    
}).on('blur', function(){
    if($(this).val() != '' ) {
		setCookie("ffct_pa",$(this).val());
    }
});



$(".typehere").each(function() {
  const $string = $(this).find("#string"),$clear = $(this).find(".clearicon");;
      $string.on("input", function(){
   $clear.toggle(!!this.value);
  });
  $clear.on("touchstart click", function(e) {
    e.preventDefault();
    $(".clearicon").toggle();
    $string.val("").trigger("#string");
    setCookie("txxt","");    
  });  
var text=$('#string').val(); if( text !== '' ) {  $('.clearicon').css('display', 'block');} 
});


$('.univers').on('click', function(e) { gtag('event', 'daxclicks');     });

});

   
	
$(document).ready(function () {
  
 if( $("#slidermain").length ) {
  
var fontslider = document.getElementById('slidermain');

var value = getCookie('szzs'); if(value == null || value == "") {value = '65';}
    
    
noUiSlider.create(fontslider, {start: value,behaviour: 'tap-drag',format: {from: function(value) {return parseInt(value);},to: function(value) {return parseInt(value);}},step: 1,range: {'min': [5],'max': [300]}});

fontslider.noUiSlider.on('set', function (values, handle) { var size = parseInt(values[handle]);  $( "#size" ).val(size);  
document.getElementById('jscolorr').jscolor.hide(); document.getElementById('jscolorr2').jscolor.hide(); setCookie("szzs",size);
                                                          
});  //endonset

$('#size').on('change', function() {fontslider.noUiSlider.set($(this).val());}); 
  
}});



    // starting onloadsecond

$(document).ready(function(){ if( $('#header-social').css('display')=='none') { $('#jscolorr,#jscolorr2').attr('readonly', 'true');}}); //91023
$( "#jscolorr,#jscolorr2" ).dblclick(function() {  $("#jscolorr,#jscolorr2").removeAttr("readonly");  $('#jscolorr,#jscolorr2').focus(); });

$(document).ready(function(){imagePreview();});

xOffset = 10;
yOffset = 30;

this.imagePreview = function(){	

	var sstring = $('#polystring2').val();

	$(".gimg").hover(function(e){

		var dim = $('#dim').val();  if( $("#dim").length && dim !="") { dim = dim + " ~ </br>"; }  else { dim ='';}
        
		if( typeof sstring != 'undefined' ) 
		{
		$("body").append("<p id='epreview'>" + dim + "<img src='" + this.src +"'/></br><span class='embedtip'>" + sstring + "</span></p>");								 
		}

		else
		{
		$("body").append("<p id='epreview'><img src='" + this.src +"'/></p>");								 
		}

		$("#epreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px")
			.fadeIn("fast");						
    },
	function(){	
		$("#epreview").remove();
    });	
	$(".gimg").mousemove(function(e){
		$("#epreview")
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});			
};



$(document).ready(function(){ $("#close_misc_embed").bind('click',function(){$("#misc_embed").hide();}); });

$(document).ready(function(){ $("#close_misc_edit").bind('click',function(){$("#misc_edit").hide();}); });

$(document).ready(function(){ $("#close_misc_gifts").bind('click',function(){$("#misc_gifts").hide();}); });

$(document).ready(function(e) { try {
$("#font").msDropdown();
} catch(e) {
//alert(e.message);
}
});


$(document).ready(function(e) { try {
$("#effect_alt").msDropdown();
} catch(e) {
//alert(e.message);
}
});

$(document).ready(function(e) { try {
$("#effect_a").msDropdown();
} catch(e) {
//alert(e.message);
}
});

$(document).ready(function(e) { try {
$("#effect_b").msDropdown();
} catch(e) {
//alert(e.message);
}
});


//sets
function loadSet(val) { 
	
var oDropdown = $("#effect").msDropdown().data("dd"); oDropdown.destroy();  // destroy #effect to load needed htmls
if (val == "GoLegacy") { valh = lega; }  else if (val == "GoPallet") { valh = palt; } else { val = 'GoDefault'; valh = feat; }
$("#effect").html(valh);setCookie("ffct_set", val); 
var val_eff = getCookie('ffct'); 
if (valh.indexOf(val_eff) < 0) {var opt1 = $("#effect option:first").val(); $("#effect").val(opt1); setCookie("ffct", opt1); loadMod(opt1); } 
else { $("#effect").val(val_eff); setCookie("ffct", val_eff); loadMod(val_eff);}
}


//mods
function showMod(modhtml,modid,moddiv,moddef,modck) {  	
var val = getCookie(modck); if (val == '' || val == null) { val = moddef;}  
var oDropdown = $(modid).msDropdown().data("dd"); oDropdown.destroy();
$(modid).html(modhtml); 
$(modid).val(val); $(modid).msDropdown(); $(moddiv).css('display', 'block'); 
}


function loadMod(val) {
if (val.match(/Texture|Outline-|_.*O1/)) { showMod(otls,'#effect_ol','.ol_opt','X1','ffct_ol'); } else { $('.ol_opt').css('display', 'none'); } //O1
if (val.match(/dient|adow|_.*C2/)) { $('.col_opt').css('display', 'block'); } else { $('.col_opt').css('display', 'none'); } // C2
if (val.match(/_.*C0/)) { $('.col_opti').css('display', 'none'); } else { $('.col_opti').css('display', 'block');} // C1
if (val.match(/_.*P1/)) { showMod(pals,'#effect_pa','.pa_opt','Pastel01','ffct_pa'); } else { $('.pa_opt').css('display', 'none'); } // P1

$("#effect").msDropdown();

}


$(document).ready(function(e) { 
	
if($('.effect_set').length ){  var st = getCookie('ffct_set'); 

   if($("#firsteffect").length ) { val = $("#firsteffect").val(); 
	 
	 if (feat.includes(val)) { st = 'GoDefault'; } else if (lega.includes(val)) { st = 'GoLegacy';} } 
	 
	
	   loadSet(st); }

var val = getCookie('ffct'); if ($("#firsteffect").length) { val = $("#firsteffect").val(); setCookie("ffct", val); } loadMod(val);  });


$('#effect').change(function(){ var oDrop = $("#effect").msDropdown().data("dd");oDrop.destroy();var val = $(this).val();

if (val.match(/GoDefault|GoLegacy|GoPallete/)) { loadSet(val); }  else { setCookie("ffct",val);loadMod(val); } update_image();

});



$('#font,#effect_ol').change(function() { update_image(); }); 
$('#colorstand,#colorstand_').change(function() { 
var v1 = $("#jscolorr").val() ; var v2 = $('#jscolorr2').val();  var v12 = v1 + v2; 
setTimeout(function() { var v1_ = $("#jscolorr").val() ; var v2_ = $('#jscolorr2').val(); var v12_ = v1_ + v2_;  if ( v12 == v12_ ) { update_image();}}, 777);
}); 


$('#effect_pa').change(function(){ var oDrop = $("#effect_pa").msDropdown().data("dd");oDrop.destroy();var val = $(this).val();
if ( val == "PastelAll"){ showMod(flag,'#effect_pa','.pa_opt','ALBANIA','ffct_pa'); var val = "ALBANIA";}
$("#effect_pa").val(val); setCookie("ffct_pa",val); $("#effect_pa").msDropdown(); update_image();
});

//start lazyload js-verlok
function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.LazyLoad=e()}(this,function(){"use strict";var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),n=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),r={elements_selector:"img",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",class_loading:"loading",class_loaded:"loaded",class_error:"error",load_delay:0,auto_unobserve:!0,callback_enter:null,callback_exit:null,callback_reveal:null,callback_loaded:null,callback_error:null,callback_finish:null},a=function(t,e){return t.getAttribute("data-"+e)},s=function(t,e,n){var o="data-"+e;null!==n?t.setAttribute(o,n):t.removeAttribute(o)},i=function(t){return"true"===a(t,"was-processed")},c=function(t,e){return s(t,"ll-timeout",e)},l=function(t){return a(t,"ll-timeout")},u=function(t,e){var n,o=new t(e);try{n=new CustomEvent("LazyLoad::Initialized",{detail:{instance:o}})}catch(t){(n=document.createEvent("CustomEvent")).initCustomEvent("LazyLoad::Initialized",!1,!1,{instance:o})}window.dispatchEvent(n)};var d=function(t,e){t&&t(e)},f=function(t,e){t._loadingCount+=e,0===t._elements.length&&0===t._loadingCount&&d(t._settings.callback_finish)},_=function(t){for(var e,n=[],o=0;e=t.children[o];o+=1)"SOURCE"===e.tagName&&n.push(e);return n},v=function(t,e,n){n&&t.setAttribute(e,n)},g=function(t,e){v(t,"sizes",a(t,e.data_sizes)),v(t,"srcset",a(t,e.data_srcset)),v(t,"src",a(t,e.data_src))},b={IMG:function(t,e){var n=t.parentNode;n&&"PICTURE"===n.tagName&&_(n).forEach(function(t){g(t,e)});g(t,e)},IFRAME:function(t,e){v(t,"src",a(t,e.data_src))},VIDEO:function(t,e){_(t).forEach(function(t){v(t,"src",a(t,e.data_src))}),v(t,"src",a(t,e.data_src)),t.load()}},m=function(t,e){var n,o,r=e._settings,s=t.tagName,i=b[s];if(i)return i(t,r),f(e,1),void(e._elements=(n=e._elements,o=t,n.filter(function(t){return t!==o})));!function(t,e){var n=a(t,e.data_src),o=a(t,e.data_bg);n&&(t.style.backgroundImage='url("'.concat(n,'")')),o&&(t.style.backgroundImage=o)}(t,r)},h=function(t,e){o?t.classList.add(e):t.className+=(t.className?" ":"")+e},p=function(t,e,n){t.addEventListener(e,n)},y=function(t,e,n){t.removeEventListener(e,n)},E=function(t,e,n){y(t,"load",e),y(t,"loadeddata",e),y(t,"error",n)},w=function(t,e,n){var r=n._settings,a=e?r.class_loaded:r.class_error,s=e?r.callback_loaded:r.callback_error,i=t.target;!function(t,e){o?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\s+)"+e+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(i,r.class_loading),h(i,a),d(s,i),f(n,-1)},k=function(t,e){var n=function n(r){w(r,!0,e),E(t,n,o)},o=function o(r){w(r,!1,e),E(t,n,o)};!function(t,e,n){p(t,"load",e),p(t,"loadeddata",e),p(t,"error",n)}(t,n,o)},I=["IMG","IFRAME","VIDEO"],L=function(t,e){var n=e._observer;z(t,e),n&&e._settings.auto_unobserve&&n.unobserve(t)},x=function(t){var e=l(t);e&&(clearTimeout(e),c(t,null))},A=function(t,e){var n=e._settings.load_delay,o=l(t);o||(o=setTimeout(function(){L(t,e),x(t)},n),c(t,o))},z=function(t,e,n){var o=e._settings;!n&&i(t)||(I.indexOf(t.tagName)>-1&&(k(t,e),h(t,o.class_loading)),m(t,e),function(t){s(t,"was-processed","true")}(t),d(o.callback_reveal,t))},O=function(t){return!!n&&(t._observer=new IntersectionObserver(function(e){e.forEach(function(e){return function(t){return t.isIntersecting||t.intersectionRatio>0}(e)?function(t,e){var n=e._settings;d(n.callback_enter,t),n.load_delay?A(t,e):L(t,e)}(e.target,t):function(t,e){var n=e._settings;d(n.callback_exit,t),n.load_delay&&x(t)}(e.target,t)})},{root:(e=t._settings).container===document?null:e.container,rootMargin:e.thresholds||e.threshold+"px"}),!0);var e},N=function(t,e){this._settings=function(t){return _extends({},r,t)}(t),this._loadingCount=0,O(this),this.update(e)};return N.prototype={update:function(t){var n=this,o=this._settings,r=t||o.container.querySelectorAll(o.elements_selector);this._elements=function(t){return t.filter(function(t){return!i(t)})}(Array.prototype.slice.call(r)),!e&&this._observer?this._elements.forEach(function(t){n._observer.observe(t)}):this.loadAll()},destroy:function(){var t=this;this._observer&&(this._elements.forEach(function(e){t._observer.unobserve(e)}),this._observer=null),this._elements=null,this._settings=null},load:function(t,e){z(t,this,e)},loadAll:function(){var t=this;this._elements.forEach(function(e){L(e,t)})}},t&&function(t,e){if(e)if(e.length)for(var n,o=0;n=e[o];o+=1)u(t,n);else u(t,e)}(N,window.lazyLoadOptions),N});

//start lazyload
document.addEventListener("DOMContentLoaded", function() {
var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazytest"
    // ... more
});
});