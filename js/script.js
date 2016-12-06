$(document).ready(function(){
"use strict";
	var val,val2,val3;				
	$("#select1 li").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectA").remove();
			val="";
		} else {
			var copyThisA = $(this).clone();
			if ($("#selectA").length > 0) {
				$("#selectA a").html($(this).text());
				val=$(this).text();
			} else {
				$(".select-result dl").append(copyThisA.attr("id", "selectA"));
			}
		}
	});
	
	$("#select2 li").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectB").remove();
			val2="";
		} else {
			var copyThisB = $(this).clone();
			if ($("#selectB").length > 0) {
				$("#selectB a").html($(this).text());
				val2=$(this).text();
			} else {
				$(".select-result dl").append(copyThisB.attr("id", "selectB"));
			}
		}
	});
	
	$("#select3 li").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		if ($(this).hasClass("select-all")) {
			$("#selectC").remove();
			val3="";
		} else {
			var copyThisC = $(this).clone();
			if ($("#selectC").length > 0) {
				$("#selectC a").html($(this).text());
				val3=$(this).text();
			} else {
				$(".select-result dl").append(copyThisC.attr("id", "selectC"));
			}
		}
	});
	
	$("#selectA").live("click", function () {
		$(this).remove();
		$("#select1 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectB").live("click", function () {
		$(this).remove();
		$("#select2 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$("#selectC").live("click", function () {
		$(this).remove();
		$("#select3 .select-all").addClass("selected").siblings().removeClass("selected");
	});
	
	$(".select dd").live("click", function () {
		if ($(".select-result dd").length > 1) {
			$(".select-no").hide();
		} else {
			$(".select-no").show();
		}
	});
	window.href="Search?leixing="+val+"&dengji="+val2+"&weizhi="+val3;

	
});