(function() {
	var app = angular.module('xplosion-site',[ ]);

	app.config(['$routeProvider', function($routeProvider, $locationProvider) {
			$routeProvider.
			when('/', {
				templateUrl: 'home.html',
				controller: 'HomePageController'
			}).
			when('/blog', {
				templateUrl: 'blog.html',
				controller: 'BlogPageController'
			}).
			when('/blog/:postId', {
				templateUrl: 'blog-single.html',
				controller: 'BlogPageController'
			}).
			otherwise({
				redirectTo: '/'
			});
		}]);

	app.controller('MainController', function($scope) {

		$scope.message = 'This is the home page';
		$scope.blog = articles;

		$('input, textarea').placeholder();

	});

	app.controller('HomePageController', function($scope) {

		$scope.message = 'This is the Home Page';
		$scope.blog = articles;

		$('.flexslider').flexslider({
			useCSS: true,
	    	//selector: ".slides > li",
	    	controlNav: "thumbnails",
	    	slideshow: false,
	    	//directionNav: true,
	    	prevText: "",
	    	nextText: "",
	    	controlsContainer: "#sliderControls"
	    });

	    //this.currentPost = 0;
		this.posts = articles;		
		this.loadPost = function(postId){
			this.currentPost = postId;
		};

	});

	app.controller('BlogPageController', function($scope, $routeParams) {
		$scope.currentPostId = $routeParams.postId;
		$scope.message = 'This is the Blog Page';
		$scope.blog = articles;
		$scope.posts = articles;		
	
	});

	app.controller('BlogController', function($scope){
		

	});

	app.controller('CommentController', function($scope){
		$scope.comment = {
			name:'',
			email:'',
			thumb:'assets/images/user-blank.jpg',
			date: '',
			comment: ''
		};

		$scope.addComment = function(comment,commentId){
			$scope.comment.date = Date.now();
			console.log("Comment sent");
			articles[commentId].comments.push($scope.comment);
			$scope.comment = {
				name:'',
				email:'',
				thumb:'assets/images/user-blank.jpg',
				date: '',
				comment: ''
			};
		};
	});

	var articles = [
	{
		id:0,
		name: 'X-Plosion is a hit in Japan',
		author: 'Freddy Marketer',
		category: 'X-Plosion Expansion',
		published: '1288323623006',
		featured: 'assets/images/blog-feat-img.jpg',
		thumb: 'assets/images/japan-bottle-thumb.png',
		comments: [
		{
			name:'Fumihiro',
			email:'name@domain.com',
			thumb:'assets/images/user-fumihiro.jpg',
			date: '1288323623006',
			comment: 'Welcome to Japan, X-Plosion!'
		},
		{
			name:'Seiko',
			email:'name@domain.com',
			thumb:'assets/images/user-seiko.jpg',
			date: '1288323623006',
			comment: 'I love X-Plosion!'
		},
		]
	},
	{
		id:1,
		name: '3 new flavors added',
		author: 'Freddy Marketer',
		category: 'X-Plosion Products',
		published: '1287260288000',
		featured: 'assets/images/blog-feat-img-2.jpg',
		thumb: 'assets/images/flavor-bottle-thumb.png',
		comments: []
	},
	{
		id:2,
		name: 'Check out out new promo video',
		author: 'Freddy Marketer',
		category: 'X-Plosion Products',
		published: '1255637888000',
		featured: 'assets/images/blog-feat-img.jpg',
		thumb: 'assets/images/xplosion-bottle-thumb.png',
		comments: []
	},
	{
		id:3,
		name: 'We say NO to artificial flavors',
		author: 'Freddy Marketer',
		category: 'X-Plosion Products',
		published: '1403727887',
		featured: 'assets/images/blog-feat-img-2.jpg',
		thumb: 'assets/images/xplosion-bottle-thumb.png',
		comments: []
	},
	{
		id:4,
		name: 'X-Plosion and your health',
		author: 'Freddy Marketer',
		category: 'X-Plosion Expansion',
		published: '1287173888000',
		featured: 'assets/images/blog-feat-img.jpg',
		thumb: 'assets/images/xplosion-bottle-thumb.png',
		comments: []
	},
	{
		id:5,
		name: 'The last post is here',
		author: 'Freddy Marketer',
		category: 'X-Plosion Expansion',
		published: '1288323623005',
		featured: 'assets/images/blog-feat-img-2.jpg',
		thumb: 'assets/images/xplosion-bottle-thumb.png',
		comments: []
	},
	{
		id:6,
		name: 'Danish Elder hooked on X-Plosion',
		author: 'Charles Granville',
		category: 'X-Plosion Expansion',
		published: '1288323623006',
		featured: 'assets/images/blog-feat-img.jpg',
		thumb: 'assets/images/danish-businessman-thumb.png',
		comments: []
	}
	];

})();



