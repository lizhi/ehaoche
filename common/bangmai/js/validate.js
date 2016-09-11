
$(function(){
	$.validate.init();
})

//表单验证弹框
$.validate={
	init: function(){
		var w = $(window).width();
		var h = $(window).height();	
		$('.dialog-hd').width(w).height(h);
		
		$('#sub_btn').click(function(e) {
	
			var _etip=$('.dialog-bd .hd');

			var userEle=$('#user');
			var userVal=$.trim(userEle.val());
			var useReg = /^([\u4e00-\u9fa5]+|([a-z]+\s?)+)$/;
			
			var mobileEle=$('#mobile');
			var mobileVal=$.trim(mobileEle.val());
			var mobileReg= /^0{0,1}(13[0-9]|15[0-9]|18[0-9])[0-9]{8}$/;

			if(userVal==0){
				$('.dialog-box').fadeIn(100);
				_etip.text('请输入姓名！');
				return false;	
			}
			
			if(useReg.test(userVal)==false){
				$('.dialog-box').fadeIn(100);	
				_etip.text('请输入真实姓名！');
				return false;	
			}
			
			if(mobileVal==0){
				$('.dialog-box').fadeIn(100);
				_etip.text('请输入手机号码！');
				return false;	
			}
			
			if(mobileReg.test(mobileVal)==false){
				$('.dialog-box').fadeIn(100);	
				_etip.text('请输入正确的手机号码！');
				return false;	
			}

		});
		
		$('.dialog-bd .bd').click(function(){
			$(this).parents('.dialog-box').hide();	
		});
	}	
}