(function() {
	var app = angular.module('xplosion-site',['ngRoute']);

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

		$('#mainSearch').placeholder();

		 $('#mainSearch').keypress(function( event ){
	    	if ( event.which == 13 ) {
	    		console.log("Search");
	    		$('#mainSearchBtn').click();
	    	}
	    });

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
		"id": 0,
		"name": "X-Plosion is a hit in Japan",
		"author": "Freddy Marketer",
		"category": "X-Plosion Expansion",
		"published": 1288323623006,
		"featured": "assets/images/blog-feat-img.jpg",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"content": "<p>This it a sentence</p>",
		"comments": [
		{
			"name": "Fumihiro",
			"email": "name@domain.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1288323623006,
			"comment": "Welcome to Japan, X-Plosion!"
		},
		{
			"name": "Seiko",
			"email": "name@domain.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1288323623006,
			"comment": "I love X-Plosion!"
		}
		]
	},
	{
		"id": 1,
		"name": "3 new flavors added",
		"author": "Freddy Marketer",
		"category": "X-Plosion Products",
		"published": 1287260288000,
		"featured": "assets/images/blog-feat-img-2.jpg",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": []
	},
	{
		"id": 2,
		"name": "Check out out new promo video",
		"author": "Freddy Marketer",
		"category": "X-Plosion Products",
		"published": 1255637888000,
		"featured": "assets/images/blog-feat-img.jpg",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": []
	},
	{
		"id": 3,
		"name": "We say NO to artificial flavors",
		"author": "Freddy Marketer",
		"category": "X-Plosion Products",
		"published": 1403727887,
		"featured": "assets/images/blog-feat-img-2.jpg",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": []
	},
	{
		"id": 4,
		"name": "X-Plosion and your health",
		"author": "Freddy Marketer",
		"category": "X-Plosion Expansion",
		"published": 1287173888000,
		"featured": "assets/images/blog-feat-img.jpg",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": []
	},
	{
		"id": 5,
		"name": "The last post is here",
		"author": "Freddy Marketer",
		"category": "X-Plosion Expansion",
		"published": 1288323623005,
		"featured": "assets/images/blog-feat-img-2.jpg",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": []
	},
	{
		"id": 6,
		"name": "Danish Elder hooked on X-Plosion",
		"author": "Charles Granville",
		"category": "X-Plosion Expansion",
		"published": 1288323623006,
		"featured": "assets/images/blog-feat-img.jpg",
		"thumb": "assets/images/danish-businessman-thumb.png",
		"comments": []
	},
	{
		"id": 7,
		"name": "commodo ex laborum sit ipsum",
		"author": "Judith Francis",
		"category": "X-Plosion Expansion",
		"published": 1336373944,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": [
		{
			"name": "Jordan",
			"email": "margretbuck@kneedles.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1332813678,
			"comment": "qui ea sunt aliqua amet mollit adipisicing tempor cillum ex labore et eu in fugiat exercitation reprehenderit tempor cupidatat deserunt"
		},
		{
			"name": "Thompson",
			"email": "steelemccall@ultrasure.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1368147989,
			"comment": "sint laboris consequat qui enim ad mollit tempor anim qui eiusmod officia ex excepteur proident culpa eu minim quis qui"
		},
		{
			"name": "Evangelina",
			"email": "byersdavenport@nexgene.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1338187970,
			"comment": "quis velit enim irure nisi aute id ex do dolor id culpa do tempor aliqua reprehenderit sint sunt veniam velit"
		},
		{
			"name": "Carly",
			"email": "rodriquezkirkland@euron.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1363404365,
			"comment": "dolore laborum veniam velit veniam incididunt id cillum excepteur amet sint ea mollit mollit elit in adipisicing quis velit exercitation"
		},
		{
			"name": "Cleveland",
			"email": "greensantos@enquility.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1340069029,
			"comment": "adipisicing quis in sit nulla ipsum ipsum nostrud ullamco quis excepteur elit adipisicing veniam culpa tempor id Lorem magna veniam"
		}
		]
	},
	{
		"id": 8,
		"name": "eu duis cillum laborum et",
		"author": "Charles Granville",
		"category": "X-Plosion Expansion",
		"published": 1344928898,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/danish-businessman-thumb.png",
		"comments": [
		{
			"name": "Shelly",
			"email": "maritzadillard@comcubine.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1376927571,
			"comment": "adipisicing anim mollit ex exercitation mollit in esse dolore eu labore irure amet sit consequat sunt cillum aliqua magna sunt"
		},
		{
			"name": "Barry",
			"email": "sashahurst@xurban.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1371955648,
			"comment": "labore minim reprehenderit occaecat aute commodo tempor laborum exercitation consectetur laborum commodo duis labore sunt occaecat mollit in reprehenderit do"
		},
		{
			"name": "Cara",
			"email": "marjorietodd@kyaguru.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1383832154,
			"comment": "in do enim sunt id voluptate anim deserunt Lorem esse dolore veniam ut cillum Lorem labore quis non aliquip adipisicing"
		},
		{
			"name": "Reva",
			"email": "maxwellhuber@dragbot.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1333074609,
			"comment": "est adipisicing commodo incididunt velit aliquip anim minim ea tempor consequat nulla incididunt irure in ipsum consequat nulla excepteur officia"
		},
		{
			"name": "Wilson",
			"email": "rushfrank@centice.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1341922166,
			"comment": "enim do sit officia nostrud nostrud ut exercitation incididunt quis incididunt velit culpa aliquip tempor est dolore enim fugiat nulla"
		},
		{
			"name": "Dee",
			"email": "howesnider@cujo.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1354850599,
			"comment": "mollit eiusmod reprehenderit sint anim ex aute est ex aliqua sunt incididunt magna id sint non veniam velit incididunt laborum"
		},
		{
			"name": "Moore",
			"email": "leeunderwood@electonic.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1383342495,
			"comment": "nostrud dolor ex aute magna eiusmod consectetur magna eiusmod ullamco ut ex consectetur irure magna in incididunt velit ut velit"
		}
		]
	},
	{
		"id": 9,
		"name": "ipsum aliquip est veniam nostrud",
		"author": "Willian Fernan",
		"category": "X-Plosion Expansion",
		"published": 1381625905,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"comments": [
		{
			"name": "Inez",
			"email": "nashcarrillo@housedown.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1367582048,
			"comment": "sunt magna ipsum aute sint aliqua quis laboris aute cillum mollit et qui quis voluptate ut exercitation enim adipisicing non"
		},
		{
			"name": "Jane",
			"email": "margaritale@genmy.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1377253564,
			"comment": "ea ipsum est ut mollit et anim est pariatur Lorem id nulla magna quis non voluptate nulla nulla fugiat adipisicing"
		},
		{
			"name": "Hayes",
			"email": "janavazquez@eschoir.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1343574268,
			"comment": "amet anim qui ut fugiat sint ea officia enim quis ullamco ea consequat anim duis nostrud nisi aliquip laborum ullamco"
		},
		{
			"name": "Elizabeth",
			"email": "wootenmalone@marvane.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1386114976,
			"comment": "ut nostrud ipsum commodo nostrud veniam exercitation aliquip do sint labore pariatur aute cupidatat et esse eiusmod ullamco nulla exercitation"
		}
		]
	},
	{
		"id": 10,
		"name": "consectetur Lorem culpa eiusmod reprehenderit",
		"author": "Dion Argüelles",
		"category": "X-Plosion Products",
		"published": 1354711579,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"comments": [
		{
			"name": "Mcfarland",
			"email": "heathrichards@newcube.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1384066814,
			"comment": "magna do ad nisi sunt culpa cillum ullamco minim reprehenderit magna nostrud qui nostrud aute fugiat pariatur eiusmod elit adipisicing"
		},
		{
			"name": "Beulah",
			"email": "rosettamiranda@aquamate.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1338406353,
			"comment": "qui exercitation qui labore excepteur consequat exercitation mollit quis magna sint fugiat deserunt qui aute adipisicing excepteur magna ipsum deserunt"
		},
		{
			"name": "Fay",
			"email": "alvarezbowers@undertap.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1348059276,
			"comment": "nisi officia in tempor aliqua nulla quis labore velit Lorem officia commodo eu deserunt duis laborum duis nulla esse reprehenderit"
		},
		{
			"name": "Benita",
			"email": "raemosley@tropoli.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1361229592,
			"comment": "consectetur officia excepteur magna incididunt mollit quis tempor officia tempor pariatur velit esse et veniam excepteur id aute aliqua id"
		},
		{
			"name": "Nadine",
			"email": "jeannettefarrell@gazak.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1376607872,
			"comment": "in ad eiusmod non tempor sint eiusmod ipsum dolor do duis laboris esse quis irure consectetur elit excepteur qui esse"
		},
		{
			"name": "Chaney",
			"email": "mcgowanmaxwell@softmicro.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1380271517,
			"comment": "fugiat cillum ad aliqua ex nisi anim velit sit proident laborum ipsum nostrud minim aliquip do ullamco minim ullamco sunt"
		}
		]
	},
	{
		"id": 11,
		"name": "consectetur qui esse aliquip deserunt",
		"author": "Dion Argüelles",
		"category": "X-Plosion Expansion",
		"published": 1348039196,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"comments": [
		{
			"name": "Liza",
			"email": "lilianmcneil@oatfarm.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1383753765,
			"comment": "tempor dolore dolore nulla ipsum fugiat deserunt veniam culpa consequat consequat nisi proident sint qui exercitation Lorem dolore minim amet"
		},
		{
			"name": "Montgomery",
			"email": "dickersonlane@comtent.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1339241575,
			"comment": "in ullamco consectetur magna veniam ullamco enim laboris sint Lorem officia do mollit duis commodo eiusmod dolore veniam exercitation voluptate"
		},
		{
			"name": "Tabatha",
			"email": "winniehyde@cedward.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1331994790,
			"comment": "sunt labore sunt occaecat nulla magna sint culpa fugiat sint reprehenderit incididunt voluptate est nulla dolor eiusmod exercitation ea id"
		},
		{
			"name": "Pat",
			"email": "lynnettechristian@kinetica.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1344397064,
			"comment": "culpa minim labore exercitation cillum excepteur deserunt commodo exercitation sit qui quis occaecat ex deserunt labore amet reprehenderit ea excepteur"
		},
		{
			"name": "Ida",
			"email": "holmanalbert@terascape.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1326252377,
			"comment": "nostrud nostrud non incididunt enim duis occaecat ullamco laboris magna fugiat eiusmod aliquip occaecat excepteur ea id reprehenderit sint nisi"
		}
		]
	},
	{
		"id": 12,
		"name": "in minim deserunt non minim",
		"author": "Martin CHikilian",
		"category": "X-Plosion Expansion",
		"published": 1333985527,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/danish-businessman-thumb.png",
		"comments": [
		{
			"name": "Ellison",
			"email": "marcierosales@reversus.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1327312824,
			"comment": "do dolor sunt in ut labore et reprehenderit nulla ex ea pariatur voluptate quis excepteur nostrud tempor anim sint culpa"
		},
		{
			"name": "Nielsen",
			"email": "tiffanybrennan@zillatide.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1367678443,
			"comment": "ullamco nisi consequat aliquip esse excepteur dolor nisi aliqua cillum anim occaecat commodo magna aute excepteur exercitation ea tempor nostrud"
		},
		{
			"name": "Nicole",
			"email": "dunnshields@liquidoc.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1366185132,
			"comment": "qui ullamco pariatur do esse duis eu enim occaecat enim occaecat pariatur veniam sint duis in non veniam sunt deserunt"
		},
		{
			"name": "Adrian",
			"email": "jacobspalmer@entogrok.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1373795227,
			"comment": "excepteur anim excepteur non labore est excepteur magna excepteur deserunt non exercitation Lorem reprehenderit enim consectetur occaecat non fugiat labore"
		}
		]
	},
	{
		"id": 13,
		"name": "non nostrud ipsum tempor cupidatat",
		"author": "Willian Fernan",
		"category": "X-Plosion Products",
		"published": 1335326404,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"comments": [
		{
			"name": "Graham",
			"email": "roweleach@idetica.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1372624629,
			"comment": "amet consectetur sunt ipsum magna velit consequat dolore id ut ut elit id est commodo cillum deserunt cillum laboris amet"
		},
		{
			"name": "Jennings",
			"email": "stricklandnelson@daisu.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1339761471,
			"comment": "aliquip quis est pariatur pariatur et irure duis amet ullamco Lorem consequat sit exercitation eu commodo amet aute ea ipsum"
		},
		{
			"name": "Henry",
			"email": "noblenielsen@musanpoly.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1367549818,
			"comment": "nisi sit dolore tempor Lorem incididunt cillum commodo consectetur velit anim irure culpa aliquip et sunt Lorem non ipsum non"
		},
		{
			"name": "Welch",
			"email": "delorislyons@incubus.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1377200439,
			"comment": "pariatur non Lorem dolore dolore mollit enim magna et nostrud ipsum velit id elit deserunt sunt eiusmod cupidatat minim consequat"
		},
		{
			"name": "Turner",
			"email": "katyrollins@digirang.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1332375722,
			"comment": "consequat enim tempor deserunt eu irure ullamco ex adipisicing irure et ullamco aute nisi voluptate duis mollit pariatur pariatur nulla"
		},
		{
			"name": "Whitley",
			"email": "anthonysawyer@junipoor.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1347540227,
			"comment": "ipsum in dolore laboris duis duis excepteur ipsum commodo irure anim eu dolor dolore labore dolor tempor et est occaecat"
		}
		]
	},
	{
		"id": 14,
		"name": "deserunt aliqua quis irure nisi",
		"author": "Charles Granville",
		"category": "X-Plosion Expansion",
		"published": 1380097088,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/japan-bottle-thumb.png",
		"comments": [
		{
			"name": "Donaldson",
			"email": "morseburke@panzent.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1343378878,
			"comment": "labore et duis labore reprehenderit ullamco commodo pariatur velit velit sunt proident do ipsum nostrud incididunt irure reprehenderit labore fugiat"
		},
		{
			"name": "Estelle",
			"email": "bertiegoodwin@injoy.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1332387093,
			"comment": "laboris non non nulla do excepteur exercitation tempor veniam ullamco fugiat aliqua eu voluptate mollit duis cillum reprehenderit aliqua ad"
		},
		{
			"name": "Wall",
			"email": "nicholsonwolfe@emergent.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1376380390,
			"comment": "in mollit ipsum cillum qui esse aute eiusmod excepteur reprehenderit commodo pariatur cupidatat reprehenderit nostrud amet excepteur eu cillum enim"
		},
		{
			"name": "Coleman",
			"email": "amyjacobs@imageflow.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1378340199,
			"comment": "sit laborum do non do id consequat aliquip Lorem mollit cillum ipsum cillum do sint tempor incididunt ipsum ullamco ullamco"
		},
		{
			"name": "Cannon",
			"email": "aliciascott@ozean.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1333282698,
			"comment": "nisi duis duis aliquip cillum aliqua voluptate qui elit commodo ad ex cupidatat proident sunt ex elit consequat deserunt mollit"
		},
		{
			"name": "Lauren",
			"email": "tammyvillarreal@assitia.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1330887097,
			"comment": "esse sunt ea id anim cupidatat consectetur non duis Lorem irure quis qui eu nisi esse deserunt do esse proident"
		},
		{
			"name": "Karla",
			"email": "olsonmathews@pyrami.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1368128441,
			"comment": "velit voluptate magna aliquip commodo pariatur qui reprehenderit qui cupidatat voluptate laborum laboris magna fugiat aliquip pariatur occaecat magna labore"
		}
		]
	},
	{
		"id": 15,
		"name": "nisi culpa quis quis pariatur",
		"author": "Judith Francis",
		"category": "X-Plosion Products",
		"published": 1333827103,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": [
		{
			"name": "Townsend",
			"email": "ryancarpenter@keengen.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1334756233,
			"comment": "qui dolore quis sit ullamco mollit sunt magna ex amet id aliqua nisi aliqua ipsum proident cillum id duis proident"
		},
		{
			"name": "Johnson",
			"email": "goodstafford@dyno.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1331293447,
			"comment": "anim amet sint est veniam irure exercitation sit anim commodo irure eu aute Lorem aliquip do non ex consequat quis"
		},
		{
			"name": "Morton",
			"email": "burchmercado@medifax.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1344722912,
			"comment": "Lorem aliquip laboris cillum sit nulla consectetur non aliquip proident deserunt ut sunt incididunt esse sunt anim elit ullamco occaecat"
		},
		{
			"name": "Nixon",
			"email": "veronicablake@bittor.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1330574853,
			"comment": "commodo consectetur tempor est cillum in cillum ipsum consectetur aute consectetur duis minim nisi ut tempor ipsum ut ullamco veniam"
		},
		{
			"name": "Savannah",
			"email": "rosarioboyer@tetratrex.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1351901301,
			"comment": "culpa mollit deserunt nulla culpa enim enim dolore tempor officia et amet velit exercitation nisi sit nisi esse aute cillum"
		},
		{
			"name": "Michael",
			"email": "lesliebyrd@deepends.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1364188107,
			"comment": "culpa velit cillum culpa dolore consequat enim anim excepteur incididunt sit nulla consectetur fugiat ea adipisicing proident est qui quis"
		}
		]
	},
	{
		"id": 16,
		"name": "irure aute cillum qui laborum",
		"author": "Dion Argüelles",
		"category": "X-Plosion Expansion",
		"published": 1335693059,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": [
		{
			"name": "Mckee",
			"email": "brandifranco@firewax.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1384238115,
			"comment": "veniam aute et consectetur ullamco tempor velit sunt occaecat nulla ut minim pariatur occaecat laborum nulla sunt consectetur veniam sit"
		},
		{
			"name": "Doyle",
			"email": "princepaul@polarax.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1329610687,
			"comment": "dolore veniam velit dolore sit ex deserunt anim laborum labore dolor ipsum excepteur proident commodo aute in est ipsum duis"
		},
		{
			"name": "Solomon",
			"email": "bentonmooney@eclipto.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1332639215,
			"comment": "et excepteur reprehenderit nulla qui minim incididunt dolor ipsum esse magna labore qui aliqua id anim in duis officia irure"
		},
		{
			"name": "Gamble",
			"email": "doreenchan@exostream.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1387879806,
			"comment": "laboris qui aliqua nisi Lorem occaecat reprehenderit consequat fugiat aliquip sit laboris occaecat sit dolore proident voluptate reprehenderit ipsum aliquip"
		},
		{
			"name": "Adrienne",
			"email": "mayoneal@musaphics.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1365145723,
			"comment": "ad nisi ea ullamco amet culpa magna dolore fugiat occaecat et dolore adipisicing ullamco do ullamco dolore mollit consequat commodo"
		},
		{
			"name": "Bonnie",
			"email": "whiteperkins@kiosk.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1326082905,
			"comment": "laborum consectetur eu elit Lorem et esse Lorem anim exercitation eiusmod ipsum incididunt consectetur dolore magna amet elit sit esse"
		},
		{
			"name": "Helen",
			"email": "robbiepratt@handshake.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1384763796,
			"comment": "cillum nostrud duis ad sunt mollit consequat aute quis anim labore amet ut deserunt excepteur duis qui qui aute Lorem"
		}
		]
	},
	{
		"id": 17,
		"name": "esse Lorem labore proident labore",
		"author": "Dion Argüelles",
		"category": "X-Plosion Products",
		"published": 1339908690,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": [
		{
			"name": "Kitty",
			"email": "vancesoto@centregy.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1378452409,
			"comment": "consequat qui enim sit sunt in ullamco quis tempor tempor duis enim elit aliqua excepteur non voluptate reprehenderit aliqua qui"
		},
		{
			"name": "Howard",
			"email": "dianeheath@plasmos.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1362675349,
			"comment": "labore culpa ipsum et velit officia anim quis excepteur sint dolor sit labore id velit est mollit ullamco cillum in"
		},
		{
			"name": "Jillian",
			"email": "ceciliamontoya@rodeocean.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1362630350,
			"comment": "duis officia incididunt magna proident sit sunt irure aliquip est est qui duis dolore fugiat eu aute dolore laborum ad"
		},
		{
			"name": "Kinney",
			"email": "morinknox@fortean.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1331805717,
			"comment": "aliqua quis consectetur veniam est ad esse excepteur minim officia nostrud minim incididunt sint non dolore id in fugiat cillum"
		},
		{
			"name": "Shelia",
			"email": "salinasvasquez@comdom.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1343035321,
			"comment": "deserunt aliqua commodo consequat officia reprehenderit occaecat exercitation eiusmod eu in proident laborum irure adipisicing fugiat adipisicing deserunt cupidatat laborum"
		},
		{
			"name": "Christa",
			"email": "blanchemcintosh@zillacon.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1340833134,
			"comment": "commodo occaecat deserunt reprehenderit tempor in consectetur magna ea qui fugiat fugiat nostrud sint officia cillum ullamco et anim amet"
		},
		{
			"name": "Phoebe",
			"email": "malindawhitaker@vixo.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1367854988,
			"comment": "consectetur aliquip ea culpa non Lorem cupidatat eu aute est voluptate magna enim velit fugiat consectetur laboris excepteur cillum reprehenderit"
		}
		]
	},
	{
		"id": 18,
		"name": "exercitation qui minim esse commodo",
		"author": "Dion Argüelles",
		"category": "X-Plosion Products",
		"published": 1345943430,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": [
		{
			"name": "Kristy",
			"email": "herminiabutler@turnabout.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1348243318,
			"comment": "velit deserunt mollit id irure magna ullamco sit laborum tempor anim sit voluptate ex commodo aute tempor labore ullamco dolor"
		},
		{
			"name": "Sharon",
			"email": "trujillowalters@chillium.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1373621183,
			"comment": "fugiat sint ex laborum adipisicing cillum nostrud sunt minim labore proident duis minim consequat nisi do ea velit quis consequat"
		},
		{
			"name": "Darcy",
			"email": "elaineforbes@boilcat.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1346668142,
			"comment": "dolor officia quis tempor nostrud aliquip aliquip sint officia sunt laborum culpa quis sit officia dolore commodo cupidatat ad minim"
		},
		{
			"name": "Travis",
			"email": "deirdregates@extro.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1366644651,
			"comment": "sunt sint dolore eu sunt reprehenderit tempor Lorem Lorem incididunt Lorem irure eu proident nulla aute commodo et esse laboris"
		}
		]
	},
	{
		"id": 19,
		"name": "dolor Lorem eiusmod sunt nulla",
		"author": "Freddy Marketer",
		"category": "X-Plosion Expansion",
		"published": 1373527572,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": [
		{
			"name": "Jeanie",
			"email": "bonitahester@musix.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1325562714,
			"comment": "voluptate dolor amet enim ea mollit fugiat minim elit eu dolore ut tempor est nisi aliqua amet ad in in"
		},
		{
			"name": "Leach",
			"email": "gonzalesnorris@earthpure.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1373266038,
			"comment": "elit dolore minim officia amet elit consectetur incididunt minim consectetur ut non ea amet qui aliquip elit sit nisi esse"
		},
		{
			"name": "Fulton",
			"email": "maradaniels@viasia.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1355682338,
			"comment": "esse minim deserunt est ullamco dolor laborum exercitation aliquip fugiat officia ut consectetur quis occaecat quis ad et quis dolore"
		},
		{
			"name": "Farmer",
			"email": "kristiewhitley@daycore.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1354515496,
			"comment": "incididunt duis sit nulla nulla tempor qui dolor est irure esse nulla reprehenderit non culpa nostrud irure duis adipisicing sit"
		}
		]
	},
	{
		"id": 20,
		"name": "elit excepteur mollit pariatur minim",
		"author": "Willian Fernan",
		"category": "X-Plosion Expansion",
		"published": 1376555078,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/flavor-bottle-thumb.png",
		"comments": [
		{
			"name": "Paula",
			"email": "adkinsgutierrez@zenthall.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1355077970,
			"comment": "laboris consequat proident velit eiusmod commodo tempor deserunt est esse nisi labore laboris pariatur magna do magna Lorem officia non"
		},
		{
			"name": "Shaffer",
			"email": "huntshepard@insuron.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1358122952,
			"comment": "eu ullamco proident laboris aute aliquip minim eiusmod et proident nulla elit pariatur quis laborum fugiat sunt adipisicing sit aliqua"
		},
		{
			"name": "Hansen",
			"email": "georginacortez@pyramis.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1350352913,
			"comment": "excepteur ipsum cillum qui veniam dolor fugiat cupidatat amet ut reprehenderit nostrud non qui amet consequat amet in dolor ipsum"
		},
		{
			"name": "Lila",
			"email": "navarrosharp@danja.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1344825667,
			"comment": "culpa sit excepteur ex nulla tempor voluptate ea dolore eiusmod duis dolore anim nisi sint sunt ipsum id eu sint"
		}
		]
	},
	{
		"id": 21,
		"name": "nulla Lorem eiusmod id culpa",
		"author": "Judith Francis",
		"category": "X-Plosion Products",
		"published": 1336314882,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/danish-businessman-thumb.png",
		"comments": [
		{
			"name": "Edna",
			"email": "hoffmanbeard@kongene.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1334252661,
			"comment": "cillum ad ad pariatur sunt eiusmod consequat et enim sunt enim do reprehenderit non labore voluptate et consequat exercitation excepteur"
		},
		{
			"name": "Frederick",
			"email": "delacruzterrell@medcom.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1376506546,
			"comment": "deserunt cillum mollit et irure aliqua est qui enim voluptate in et excepteur fugiat sunt culpa esse ipsum ullamco culpa"
		},
		{
			"name": "Orr",
			"email": "woodsbentley@mantrix.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1350100305,
			"comment": "eiusmod tempor amet est cillum deserunt dolore est non non voluptate ipsum reprehenderit aute incididunt irure qui occaecat commodo ad"
		},
		{
			"name": "Velasquez",
			"email": "duranmorgan@martgo.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1352356883,
			"comment": "consequat enim do Lorem culpa elit et fugiat consequat minim irure id proident do ipsum ut velit enim enim culpa"
		},
		{
			"name": "Ray",
			"email": "gardnerflowers@lingoage.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1329461568,
			"comment": "aliqua deserunt pariatur id irure irure deserunt velit fugiat Lorem sunt dolore nostrud eu mollit laboris duis exercitation ipsum sint"
		},
		{
			"name": "Lara",
			"email": "mamietran@blanet.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1353843231,
			"comment": "cillum occaecat elit aliquip tempor dolore non enim laboris cillum officia magna ut reprehenderit minim veniam tempor dolore voluptate occaecat"
		},
		{
			"name": "Murray",
			"email": "brockfuller@boink.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1375288674,
			"comment": "nisi commodo aliquip aute deserunt ex occaecat non culpa voluptate fugiat commodo anim nulla aute consequat esse dolor irure aliqua"
		}
		]
	},
	{
		"id": 22,
		"name": "ullamco duis sunt consectetur in",
		"author": "Freddy Marketer",
		"category": "X-Plosion Products",
		"published": 1388243523,
		"featured": "http://lorempixel.com/597/199/people",
		"thumb": "assets/images/danish-businessman-thumb.png",
		"comments": [
		{
			"name": "Agnes",
			"email": "meganromero@endipine.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1345287792,
			"comment": "qui officia enim non minim esse in laborum exercitation et id incididunt exercitation elit ullamco sit veniam reprehenderit cillum anim"
		},
		{
			"name": "Tommie",
			"email": "larsonbecker@comtours.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1368526382,
			"comment": "anim nostrud veniam adipisicing esse aliqua anim ut eu et cillum nisi sint irure fugiat aliquip laboris deserunt sint dolore"
		},
		{
			"name": "Gillespie",
			"email": "pattineal@comtour.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1388338334,
			"comment": "deserunt ea in magna exercitation id est eu fugiat id culpa culpa incididunt exercitation enim voluptate cillum reprehenderit eu irure"
		},
		{
			"name": "Santana",
			"email": "traciehancock@quotezart.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1337703936,
			"comment": "velit non laboris officia minim quis consequat enim anim magna laboris eu non elit incididunt fugiat laborum ad mollit anim"
		}
		]
	},
	{
		"id": 23,
		"name": "ullamco voluptate ad do ex",
		"author": "Judith Francis",
		"category": "X-Plosion Products",
		"published": 1340033502,
		"featured": "http://lorempixel.com/597/199/sports",
		"thumb": "assets/images/xplosion-bottle-thumb.png",
		"comments": [
		{
			"name": "Reeves",
			"email": "daniellemoses@kyagoro.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1341785978,
			"comment": "magna consequat irure proident culpa anim ea laboris eiusmod consectetur occaecat cupidatat voluptate labore ullamco pariatur incididunt est minim voluptate"
		},
		{
			"name": "Tamara",
			"email": "hebertpena@frosnex.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1342193525,
			"comment": "minim ea minim do eu dolore sunt dolor fugiat incididunt Lorem consequat exercitation irure esse ad ad minim nulla et"
		},
		{
			"name": "Molina",
			"email": "farrelljordan@shopabout.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1328929526,
			"comment": "dolore incididunt nostrud quis officia do sint cupidatat commodo magna adipisicing est nostrud pariatur magna adipisicing pariatur nostrud qui cillum"
		},
		{
			"name": "Betty",
			"email": "gouldkemp@geekola.com",
			"thumb": "assets/images/user-seiko.jpg",
			"date": 1338051945,
			"comment": "magna adipisicing elit sit dolor consequat aute duis dolor duis sunt sit qui esse officia tempor fugiat nulla aliqua dolor"
		},
		{
			"name": "Toni",
			"email": "wellsbenson@translink.com",
			"thumb": "assets/images/user-fumihiro.jpg",
			"date": 1366359006,
			"comment": "aute adipisicing minim excepteur officia nulla esse ex in incididunt adipisicing elit amet aliqua enim deserunt laboris irure velit tempor"
		}
		]
	}
	];

})();



