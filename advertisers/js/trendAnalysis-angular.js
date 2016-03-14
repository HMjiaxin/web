/**
 * Created by a on 2016/1/13.
 */
var trendApp = angular.module('trendApp', []);
trendApp.controller('tabelAndCharts',function($scope,$http){
    //选择时间列表
    $scope.dateTypeList = [
        {name:'今天',value:'today'},
        {name:'昨天',value:'yesterday'},
        {name:'最近7天',value:'last7'},
        {name:'最近30天',value:'last30'}
    ];

    //选择显示方式
    $scope.dataSectionList = [
        {name:'按日',value:'day'},
        {name:'按周',value:'week'},
        {name:'按月',value:'month'}
    ];

    //一些初始化参数
    $scope.dateType='last30';
    $scope.dataSection='day';
    $scope.basicData=[{key:'liulanliang',value:0},{key:'fangkeshu',value:0},{key:'tiaochulv',value:0},{key:'pingjunshichang',value:0},{key:'pingjunyeshu',value:0}];
    $scope.thead=["","日期","浏览量占比","新访客数","新访客比率","平均访问页数","转化次数","转化率"];
    $scope.tbody=["--","--","--","--","--","--","--","--"];
    $scope.tfoot=["","当页汇总","91.57%",21,"51.22%",2.45,"--","--"];
    $scope.defaultJson=defaultJson;

    //提示列表
    $scope.alertList = {
        'today':'今日零点至当前时间内网民对您网站的访问情况。助您了解今日的访客和浏览量变化趋势。',
        'yesterday':'昨日24小时内网民对您网站的访问情况。助您了解昨日的访客和浏览量变化趋势。',
        'last7':'最近7天内网民对您网站的访问情况。助您了解最近一段时间网站的运营状态，了解近期推广活动或网站改善的效果。',
        'last30':'最近30天内网民对您网站的访问情况。助您了解最近一段时间网站的运营状态，了解近期推广活动或网站改善的效果。'
    };

    //选择时间后调用这里
    $scope.changeDateType=function(val){
        if($scope.dateType!=val){
            $scope.dateType=val;
            $scope.requestData();
            $scope.requestChartData()
        }
    }

    //选择显示方式后调用这里
    $scope.changeDataSection=function(val){
        if($scope.dataSection!=val){
            $scope.dataSection=val;
            $scope.requestChartData()
        }
    }

    //时间选择器
    $('#reservation').daterangepicker(null, function(start, end, label) {
        console.log(start.toISOString(), end.toISOString(), label);
        var val=moment(start).format("YYYY-MM-DD")+'~'+moment(end).format("YYYY-MM-DD");

        if($scope.dateType!=val){
            $scope.dateType=val+'网民对您网站的访问情况。助您了解最近一段时间网站的运营状态，了解近期推广活动或网站改善的效果。';
            $scope.requestData();
            $scope.requestChartData()
        }
    });

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
            url:'js/trendData.json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data:{
                dateType:$scope.dateType,
                measure:tempOpt,
                equipment:$('[name=shebei]:checked').val()
            }
        }).success(function(data){
            console.log(data);
            $scope.basicData=data.basic;
            $scope.thead=data.tabelData.thead;
            $scope.tbody=data.tabelData.tbody;
            $scope.tfoot=data.tabelData.tfoot;
            dataTable()
        }).error(function(){
            console.log('出错了');
        })
    }

    //请求图表数据方法
    $scope.requestChartData=function(){
        $http({
            method:'post',
            url:'js/trendChartData.json',
            headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
            data:{
                dateType:$scope.dateType,
                measure:opts
            }
        }).success(function(data){
            buildLineChart(data.categories,data.lineData);
        }).error(function(){
            console.log('出错了');
        })
    }

    //第一次加载时发起请求
    setTimeout(function(){
        $scope.$apply(function(){
            $scope.requestData();
            $scope.requestChartData();
        })
    },0)
})
