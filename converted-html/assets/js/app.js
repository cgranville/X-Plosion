(function() {
	var app = angular.module('xplosion-site',[]);

	app.controller('BlogController', function(){
		this.posts = articles;
	});

	var articles = [
		{
			name: 'X-Plosion is a hit in Japan',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		},
		{
			name: '3 new flavors added',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		},
		{
			name: 'Check out out new promo video',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		},
		{
			name: 'We say NO to artificial flavors',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		},
		{
			name: 'X-Plosion and your health',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		},
		{
			name: 'The last post is here',
			author: 'Freddy Marketer',
			category: 'X-Plosion Expansion',
			
		}
		];

})();



