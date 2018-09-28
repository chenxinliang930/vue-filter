Vue.filter('searchFor', function(value, searchString) {

	//value是循环的数据，哪里调用value就是谁
	var result = [];
	if(!searchString) {
		return value;
	}

	searchString = searchString.trim().toLowerCase();
	result = value.filter(function(item) {
		if(item.title.toLowerCase().indexOf(searchString) !== -1) {
			return item;
		}
	});


	return result;
});

var demo = new Vue({
	el: '#main',
	data: {
		searchString: '',
		articles: [{
				"title": "WWW.baidu.com",
				"url": "https://www.baidu.com/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			},
			{
				"title": "Freebie: 4 Great Looking Pricing Tables",
				"url": "http://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			},
			{
				"title": "20 Interesting JavaScript and CSS Libraries for February 2016",
				"url": "http://tutorialzine.com/2016/02/20-interesting-javascript-and-css-libraries-for-february-2016/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			},
			{
				"title": "Quick Tip: The Easiest Way To Make Responsive Headers",
				"url": "http://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			},
			{
				"title": "Learn SQL In 20 Minutes",
				"url": "http://tutorialzine.com/2016/01/learn-sql-in-20-minutes/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			},
			{
				"title": "Creating Your First Desktop App With HTML, JS and Electron",
				"url": "http://tutorialzine.com/2015/12/creating-your-first-desktop-app-with-html-js-and-electron/",
				"image": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2234670727,3301076886&fm=27&gp=0.jpg"
			}
		]
	}
});