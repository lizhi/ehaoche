$(function(){
	$('#years').find('li').not('.choose_li_wid').on('click',function(){
		$(this).find('.choose_pad').addClass('active');
		$(this).find('.jiantou').show();
		$(this).siblings().find('.choose_pad').removeClass('active');
		$(this).siblings().find('.jiantou').hide();

		var text = $(this).find('.choose_pad').text();
        $('#age').val($.trim(text));
	})
	$('#mileage').find('li').not('.choose_li_wid').on('click',function(){
		$(this).find('.choose_pad').addClass('active');
		$(this).find('.jiantou').show();
		$(this).siblings().find('.choose_pad').removeClass('active');
		$(this).siblings().find('.jiantou').hide();

        var text = $(this).find('.choose_pad').text();
        $('#route').val($.trim(text));
	})
	$('#price').find('li').not('.choose_li_wid').on('click',function(){
		$(this).find('.choose_pad').addClass('active');
		$(this).find('.jiantou').show();
		$(this).siblings().find('.choose_pad').removeClass('active');
		$(this).siblings().find('.jiantou').hide();

        var text = $(this).find('.choose_pad').text();
        $('#carprice').val($.trim(text));
	})
})