$(document).ready(function(){
	$('ul.menus li a:first').addClass('active');
	$('.secciones article').hide();
	$('.secciones article:first').show();

	$('ul.menus li a').click(function(){
	$('ul.menus li a').removeClass('active');
	$(this).addClass('active');
	$('.secciones article').hide();

	var activeTab = $(this).attr('href');
	$(activeTab).show();
	return false;
	});
});