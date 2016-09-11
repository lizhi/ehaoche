$(function(){
	var status = false;  //收藏状态，默认为fasle,没有收藏

	$('.btn-cs').on('click',function(){
		if(status){
			 $(this).find('.ico-cs').removeClass('ico-cs-on');
			 status = false;
		}else{
			$(this).find('.ico-cs').addClass('ico-cs-on');
			status = true;
		}
	});

	/*砍价*/
	$('#bargain').on('click',function(){
		$('.bargain').show();
		document.ontouchmove = function(e){
		    e.preventDefault();
		}
	});
	$('#bargain-off').on('click',function(){
		$('.bargain').hide();
		document.ontouchmove = function(e){
		    e.stopPropagation();
		}
	});

	/*搜索框*/
	$('.find-input').find('p').on('click',function(){
		$('#find-input').focus();
	});
	$('#find-input').on('focus',function(){
		$(this).next('p').hide();
		$('.find-btn').show();
	});
	$('#find-input').blur(function(){
		if(!$(this).val()){
			$(this).next('p').show();
			$('.find-btn').hide();
		}
	});

	/*买车导航*/
	$('.buy-nav').find('li').on('click',function(){
		/*窗口移动*/
		var off_top = $('.buy-nav').offset().top;
    	$(window).scrollTop(off_top);

		$('.buy-nav').find('img').removeClass('ico-ani');
		$(this).css('border-bottom','1px solid #EA5125')
		.siblings('li').css('border-bottom','')
		$(this).find('img').addClass('ico-ani');

		/*显示内容*/
		var _index = $(this).index()+1;
		console.log(_index);
		for(var i=1;i<5;i++){
			$('.all-cover').show();
			$('.nav-list'+i).hide();
			$('.brand').hide();
			$('.nav-list'+_index).show();
		}
		if(_index == '2' || _index == '4'){
			$('.brand').show();
			resizeLine();
			resizeLine2();
		}
	});

	/*收起导航内容*/
	$('.ico-up').on('click',function(){
		resetClass();
		var this_class = $(this).attr('data-num');
		$('.all-cover').hide();
		$('.'+this_class).hide();
	})
	$('.brand-back').on('click',function(){
		resetClass();
		$('.brand').hide();
		$('.all-cover').hide();
	})

	/*品牌*/
	$('.index-list').each(function(){
		var ele = $(this).children('div').eq(0);
		var for_ele = $(this).children('div').eq(1);
		var li_hei = ele.height()+'px';
		ele.css('line-height',li_hei);

		var li_num = for_ele.find('li').length;
		var line_num = Math.ceil(li_num/3);
		var add_num = line_num*3 - li_num;

		for(var i=0;i<add_num;i++){
			for_ele.append('<li>&nbsp;</li>')
		}

	})
	function resizeLine(){
		$('.index-list').each(function(){
			var ele = $(this).children('div').eq(0);
			var li_hei = ele.height()+'px';
			ele.css('line-height',li_hei);
		})
	}
	function resizeLine2(){
		$('.index-list-cs').each(function(){
			var ele = $(this).children('div').eq(0);
			var li_hei = ele.height()+'px';
			ele.css('line-height',li_hei);
		})
	}

	/*车商*/
	$('.index-list-cs').each(function(){
		var ele = $(this).children('div').eq(0);
		var for_ele = $(this).children('div').eq(1);
		var li_hei = ele.height()+'px';
		ele.css('line-height',li_hei);

		var li_num = for_ele.find('li').length;
		var line_num = Math.ceil(li_num/2);
		var add_num = line_num*2 - li_num;

		for(var i=0;i<add_num;i++){
			for_ele.append('<li>&nbsp;</li>')
		}

	})

	

	/*跳转*/
	$('.brand-list1').find('.co-re').on('click',function(){
		var data_aim = $(this).attr('data-aim');
		var silde_top = $('#aim_'+data_aim).offset().top;
		$('.brand-right').scrollTop(silde_top);
	})

	/*重置导航样式*/
	function resetClass(){
		$('.ico-down').find('img').removeClass('ico-ani');
		$('.buy-nav').find('li').css('border-bottom','0')
	}

	/*防止页面变大*/
	window.onload = function(){ 
		setTimeout(function(){
			$('.fontsize-cover').hide();
		},1500);
	}; 
	/*洗车地区选择*/
	var ele = $('.wash-nav').find('li').eq(0);
	ele.on('click',function(){
		if(!$(this).attr('data-off')){
			$(this).parents('.wash-nav').find('.add-choose').show();
			$(this).attr('data-off','true');
			$('.cover-window').show();
			$('body').css('overflow','hidden');
			document.body.ontouchmove=function(e){
			    e.preventDefault();
			}
		}else{
			$('.add-choose').hide();
			$(this).attr('data-off','');
			$('.cover-window').hide();
			$('body').css('overflow','auto');
			document.body.ontouchmove=function(e){
			    e.stopPropagation();
			};
		}

		$('.add-choose').find('a li').on('click',function(){
			$(this).parent().hide();
			$(this).attr('data-off','');
			$('.cover-window').hide();
			$('body').css('overflow','auto');
			document.body.ontouchmove=function(e){
			    e.stopPropagation();
			};
		});

		$('.cover-window').on('click',function(){
			$('.add-choose').hide();
			ele.attr('data-off','');
			$(this).hide();
			$('body').css('overflow','auto');
			document.body.ontouchmove=function(e){
			    e.stopPropagation();
			};
		});

	});

	/*洗车服务选择*/
	$('.wash-choose').find('li').on('click',function(){
		var price = $(this).find('.new-price').text().replace(/[^\d.]/g,'');
		$('#price').val(price);
		$('.submit-btn').find('.price').html('￥'+price);

		/*图标变换*/
		var ico = $(this).find('.price').find('i');
		ico.addClass('get').removeClass('no-get');
		$(this).siblings().find('.price').find('i').removeClass('get').addClass('no-get');
	});

	/*支付页面*/
	$('.pay-choose').find('li').on('click',function(){
		$(this).find('em').addClass('get');
		$(this).siblings().find('em').removeClass('get');
	});

	/*默认选择*/
	function defult(){
		var de_price = $('#price');
		var bt_price = $('.submit-btn').find('.price');
		var li_price = $('.wash-choose').find('li').eq(0).find('.new-price').text().replace(/[^\d.]/g,'');
		de_price.val(li_price);
		bt_price.html('￥'+li_price);
		$('.wash-choose').find('li').each(function(){
			if($(this).index() == 0){
				$(this).find('.price').find('i').addClass('get');
			}
		});

		/*支付默认*/
		$('.pay-choose').find('li').eq(0).find('em').addClass('get');
	}
	defult();
})

