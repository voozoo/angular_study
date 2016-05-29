/**
 * 
 */

(function() {
	var app = angular.module("gem.store", []);

	app.controller("StoreController", function() {
		this.products = gems;
	});

	app.controller("PanelController", function() {
		this.tab = 1;

		this.selectTab = function(t) {
			this.tab = t;
		};

		this.isSelected = function(t) {
			return this.tab === t;
		}
	});

	var gems = [ {
		id : "001",
		name : "翡翠手镯",
		price : 1799,
		description : "55#天然A货翡翠手镯 淡油绿色翡翠手镯 带证书",
		images : [ "001-01.png", "001-02.png", "001-03.jpg", "001-04.png", "001-05.jpg", "001-06.png" ],
		payWays : [ "快捷支付", "信用卡支付", "余额宝支付", "蚂蚁花呗" ],
		reviews : [ {
			star : 5,
			author : "voozoo@163.com",
			content : "这个手镯很不错"
		}, {
			star : 3,
			author : "another@hotmail.com",
			content : "这个手镯很一般"
		} ],
		canPurchase : true,
		soldOut : false
	}, {
		id : "002",
		name : "三彩翡翠项链",
		price : 598,
		description : "A货冰糯种水润老坑翡翠玉项链天然福禄寿玉珠女款",
		images : [ "002-01.jpg", "002-02.jpg", "002-03.jpg", "002-04.jpg", "002-05.jpg", "002-06.jpg" ],
		payWays : [ "快捷支付", "信用卡支付", "余额宝支付", "集分宝" ],
		reviews : [],
		canPurchase : true,
		soldOut : false
	}, {
		id : "003",
		name : "和田玉挂件",
		price : 1500,
		description : "天然新疆和田玉挂件如意/羊脂白玉吊坠 玉牌男女款吊坠 附证书",
		images : [ "003-01.jpg", "003-02.jpg", "003-03.jpg", "003-04.jpg", "003-05.jpg", "003-06.jpg" ],
		payWays : [ "快捷支付", "余额宝支付", "集分宝" ],
		reviews : [],
		canPurchase : true,
		soldOut : false
	} ];
})();
