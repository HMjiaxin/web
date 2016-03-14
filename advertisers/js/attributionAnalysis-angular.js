var sourceApp = angular.module('sourceApp', []);

sourceApp.controller('tabelAndCharts',function($scope,$http){
	//选择时间列表
	$scope.dateTypeList = [
		{name:'今天',value:'today'},
		{name:'昨天',value:'yesterday'},
		{name:'最近7天',value:'last7'},
		{name:'最近30天',value:'last30'}
	];
	
	//来源列表
	$scope.sourceTypeList = [
		{name:'全部来源',value:'all'},
		{name:'直接访问',value:'direct'},
		{name:'流量联盟',value:'union'},
		{name:'搜索引擎',value:'search'},
		{name:'视频',value:'video'},
		{name:'社交',value:'social'},
		{name:'移动',value:'mobile'}
	];
	
	//提示列表
	$scope.alertList = {
		'all':'您网站上达成目标（Goal）的来源分布情况。助您了解各个来源促使目标达成的情况，从而合理预算收益。',
		'direct':'您网站上通过直接访问达成目标（Goal）的情况。',
		'search':'各类搜索引擎促使您网站达成目标（Goal）的情况。助您了解各个搜索引擎的目标达成情况，为合理预算收益提供数据支持。',
		'union':'各流量联盟促使您网站达成目标（Goal）的情况。助您了解各流量联盟的目标达成情况，为合理预算收益提供数据支持。',
		'video':'各视频网站促使您网站达成目标（Goal）的情况。助您了解各视频网站的目标达成情况，为合理预算收益提供数据支持。',
		'social':'各种社交平台促使您网站达成目标（Goal）的情况。助您了解各种社交平台的目标达成情况，为合理预算收益提供数据支持。',
		'mobile':'您网站上通过移动端促使您网站达成目标（Goal）的情况。'
	};
	
	//一些初始化参数
	$scope.dateType='last30';
	$scope.sourceType='all';
	$scope.basicData=[{key:'liulanliang',value:0},{key:'fangkeshu',value:0},{key:'tiaochulv',value:0},{key:'pingjunshichang',value:0},{key:'pingjunyeshu',value:0}];
	$scope.thead=["来源类型","浏览量（PV）","访客数（UV）","IP数","跳出率","平均访问时长"];
	$scope.tbody=[["--","--","--","--","--","--"]];
	$scope.tfoot=["页面汇总",133,29,28,"28.9%","00:14:13"];
	$scope.defaultJson=defaultJson;
	
	
	//选择时间后调用这里
	$scope.changeDateType=function(val){
		if($scope.dateType!=val){
			$scope.dateType=val;
			$scope.requestData();
			$scope.requestChartData()
		}
	}
	
	//时间选择器
	$('#reservation').daterangepicker(null, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
		var val=start+'~'+end;
		if($scope.dateType!=val){
			$scope.dateType=val;
			$scope.requestData();
			$scope.requestChartData()
		}
    });
	
	//选择来源后调用这里
	$scope.changesourceType=function(val){
		if($scope.sourceType!=val){
			$scope.sourceType=val;
			$scope.requestData();
			$scope.requestChartData()		
		}
	}
	
	//更多选项改变时调用这里
	$scope.submitOpt=function(){
		$scope.requestData()
	}
	
	//指标弹出框改变后调用这里
	$scope.submitOpt2=function(){
		$scope.requestChartData()
	}
	
	//请求数据方法
	$scope.requestData=function(){
		$http({
			method:'post',
			url:'js/data.json',
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
			data:{
				dateType:$scope.dateType,
				sourceType:$scope.sourceType,
				measure:tempOpt,
				equipment:$('[name=shebei]:checked').val()
			}
		}).success(function(data){
			console.log(data);
			$scope.basicData=data.basic;
			$scope.thead=data.tabelData.thead;
			$scope.tbody=data.tabelData.tbody;
			$scope.tfoot=data.tabelData.tfoot
		}).error(function(){
			console.log('出错了');
		})
	}
	
	//请求图表数据方法
	$scope.requestChartData=function(){
		$http({
			method:'post',
			url:'js/chartData.json',
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
			data:{
				dateType:$scope.dateType,
				sourceType:$scope.sourceType,
				measure:opts
			}
		}).success(function(data){
			buildLineChart(data.categories,data.lineData);
			buildPieChart(data.pieData)
		}).error(function(){
			console.log('出错了');
		})
	}
	
	//第一次加载时发起请求
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.requestData();
			$scope.requestChartData()	
		})
	},0)
})





















