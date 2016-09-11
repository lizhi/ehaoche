$(function(){
			//给排序最后添加收起层
			//$('.buy_tab_desc').find('ul').append('<li class="ico_angle_up"><img src="./tpl/Wap/image/angle-up.png" class="ico_up"/></li>');

			//点击排序，添加点击样式
			var flag=1;
		    $('.list_1').on('click',function(){
		        if(flag==1){
		        	$(this).addClass('list_on');
					$(this).siblings().removeClass('list_on');
					$(this).find('span').addClass('ico_list_1_on');
		            $('.buy_tab_desc').slideDown(300);
		            $('.cover').show();
		            $('.buy_tab_brand').hide();
					$('.ico_list_2').removeClass('ico_list_2_on');
					$('.buy_tab_price').hide();
					$('.list_3').find('span').removeClass('ico_list_3_on');
		            flag=0;
		        }else{
		        	$('.list_1').removeClass('list_on');
					$('.list_1').find('span').removeClass('ico_list_1_on');
		            $('.buy_tab_desc').slideUp(100);
		            $('.cover').hide();
		            flag=1;
		        }
		    })
			
			//点击排序，下拉列表内容，添加点击样式
			$('.buy_tab_desc').find('li').not('.ico_angle_up').on('click',function(){
				$(this).addClass('active_color');
				$(this).siblings().removeClass('active_color');
				$(this).find('img').attr('src','./tpl/Wap/default/common/bangmai/image/up-on.png');
				$(this).siblings().not('.ico_angle_up').find('img').attr('src','./tpl/Wap/default/common/bangmai/image/up.png');

				$('.buy_tab_desc').slideUp(100);
				$('.list_1').removeClass('list_on');
				$('.list_1').find('span').removeClass('ico_list_1_on');
				

				//隐藏遮挡层
				$('.cover').hide();
				flag=1;
				//这里获取到点击了那个Li
				//alert($(this).text());


			})

			//点击收起图标，还原本有样式
			$('.ico_angle_up').on('click',function(){
				$(this).parent().parent().slideUp(100);
				if($(this).parent().parent().hasClass('buy_tab_desc')){
					$('.list_1').removeClass('list_on');
					$('.list_1').find('span').removeClass('ico_list_1_on');
				}

				//隐藏遮挡层
				$('.cover').hide();
				flag=1;
			})



			//点击价格，添加点击样式
			var flag2=1;
		    $('.list_3').on('click',function(){
		        if(flag2==1){
		        	$(this).addClass('list_on');
					$(this).siblings().removeClass('list_on');
					$(this).find('span').addClass('ico_list_3_on');
					$('.buy_tab_price').slideDown(300);
		            $('.cover').show();
		            $('.buy_tab_desc').hide();
					$('.ico_list_1').removeClass('ico_list_1_on');
					$('.buy_tab_brand').hide();
					$('.ico_list_2').removeClass('ico_list_2_on');
		            flag2=0;
		        }else{
		        	$('.list_3').removeClass('list_on');
					$('.list_3').find('span').removeClass('ico_list_3_on');
					$('.buy_tab_price').slideUp(100);
					$('.cover').hide();	
		            flag2=1;
		        }
		    })
			//收起价格列表
			$('.ico_angle_up2').on('click',function(){
				$('.list_3').removeClass('list_on');
				$('.list_3').find('span').removeClass('ico_list_3_on');
				$('.buy_tab_price').slideUp(100);

				//隐藏遮挡层
				$('.cover').hide();
				flag2=1;
			})
			//点击价格列表，下拉列表内容，添加点击样式
			$('.buy_tab_price_main').find('li').on('click',function(){
				$(this).addClass('active_color');	
				$(this).siblings().removeClass('active_color');
				$('.list_3').removeClass('list_on');
				$('.list_3').find('span').removeClass('ico_list_3_on');
				$('.buy_tab_price').slideUp(100);

				//隐藏遮挡层
				$('.cover').hide();
				flag2=1;
				//这里获取到点击了那个Li
				//alert($(this).text());
				//alert(location.href + $(this).text());
				//$.post(location.href, {brandid:"29"});
			})




			//点击品牌，添加点击样式
			var flag3=1;
		    $('.list_2').on('click',function(){
		        if(flag3==1){
		        	$(this).addClass('list_on');
					$(this).siblings().removeClass('list_on');
					$(this).find('span').addClass('ico_list_2_on');
					$('.buy_tab_brand').slideDown(300);
		            $('.cover').show();
		            $('.buy_tab_desc').hide();
					$('.ico_list_1').removeClass('ico_list_1_on');
					$('.buy_tab_price').hide();
					$('.list_3').find('span').removeClass('ico_list_3_on');
		            flag3=0;
		        }else{
		        	$('.list_2').removeClass('list_on');
					$('.list_2').find('span').removeClass('ico_list_2_on');
					$('.buy_tab_brand').slideUp(100);
					$('.cover').hide();	
		            flag3=1;
		        }
		    })

			//点击收起
			$('.ico_angle_up3').on('click',function(){
				$('.list_2').removeClass('list_on');
				$('.list_2').find('span').removeClass('ico_list_2_on');
				$('.buy_tab_brand').slideUp(100);


				//隐藏遮挡层
				$('.cover').hide();	
				flag3=1;
			})
			var cover_height = $('.car_list').height();


			//遮挡层的样式
			$('.cover').height(cover_height);	
			$('.cover').css('padding-bottom','100px');	

			//品牌列表索引
			$(function(){
				$('.yiyou-list').children('div').each(function(){
					if(!$(this).has('li').length){
						$(this).hide();
					}
				})
			})

			//点击品牌内容时触发
			$('.yiyou-list').find('li').on('click',function(){
					$('.list_2').removeClass('list_on');
					$('.list_2').find('span').removeClass('ico_list_2_on');
					$('.buy_tab_brand').slideUp(100);
					$('.cover').hide();	
		            flag3=1;
			})


			$('.cover').click(function(){


		            $('.buy_tab_desc').slideUp(100);
					$('.list_1').removeClass('list_on');
					$('.list_1').find('span').removeClass('ico_list_1_on');

					$('.list_2').removeClass('list_on');
					$('.list_2').find('span').removeClass('ico_list_2_on');
					$('.buy_tab_brand').slideUp(100);

					$('.list_3').removeClass('list_on');
					$('.list_3').find('span').removeClass('ico_list_3_on');
					$('.buy_tab_price').slideUp(100);

					flag=1;
					flag2=1;
					flag3=1;

				$('.cover').hide();	
			})
})
