"use trick";
$(document).ready(function(){
	$('.nav-main-button').on("click", function(){
		$('.nav-main').toggle();
	});
	$('#click_show').on("click", function(){
		$('#account_show').toggle();
	});
	$(document).mouseup(function (e)
						{
		var container = $("#account_show");

		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
			container.hide();
		}
	});
	$("#click_show_cate").click(function(){
		$("#show_cate").toggle("300");
	});


	/* For menu index and menu collection desktop */

	$('ul#show_cate').each(function(){

		var LiN = $(this).find('li').length;

		if( LiN > 4){    
			$('li', this).eq(6).nextAll().hide().addClass('toggleable');
			$(this).append('<li class="more icon"><a>XEM THÊM</a></li>');    
		}

	});


	$('ul#show_cate').on('click','.more', function(){

		if( $(this).hasClass('less') ){    
			$(this).html('<li><a>XEM THÊM</a></li>').removeClass('less');    
		}else{
			$(this).html('<a>THU GỌN</>').addClass('less'); 
		}

		$(this).siblings('li.toggleable').slideToggle();

	}); 





	$(".owl-slider").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$(".owl-best-sell").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$(".owl-sale").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$(".owl-related").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$(".owl-promotion").owlCarousel({
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true
	});
	$(".owl-news").owlCarousel({
		autoPlay: 3000,
		items : 3,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [979,3],
		itemsTablet : [768,1]
	});
	$("#owl-news-blog").owlCarousel({
		autoPlay: 5000,
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,2],
		itemsTablet : [768,2]
	});
	$(".view-list").on("click", function(){
		viewList();
	});
	$(".view-grid").on("click", function(){
		viewGrid();
	});
	$("#owl-product").owlCarousel({
		autoPlay: 2000,
		navigation: true,
		navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right '></i>"],
		items : 5,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
		itemsTablet: [768,5],
		itemsMobile: [480,4]
	});
});
function quantityChange(change) {
	var quantity = parseInt($('.product-quantity').val());
	if(change == 'down') {
		quantity = quantity - 1;
	} else {
		quantity = quantity + 1;
	}
	if(quantity < 1) quantity = 1;
	$('.product-quantity').val(quantity);
}

$(".category-grid").show();
$(".category-list").hide();
function viewList() {
	localStorage.setItem('category', 'list');
	$(".view-grid").removeClass("active");
	$(".view-list").addClass("active");
	$(".category-list").show();
	$(".category-grid").hide();
}
function viewGrid() {
	localStorage.setItem('category', 'grid');
	$(".view-list").removeClass("active");
	$(".view-grid").addClass("active");
	$(".category-grid").show();
	$(".category-list").hide();
}