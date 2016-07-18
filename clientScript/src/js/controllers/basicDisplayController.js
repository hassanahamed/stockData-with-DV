angular.module('StockGraph')
    .controller('basicDisplayController', ['NetworkService', '$scope', function(NetworkService, $scope) {
        console.log("basicDisplayController");
        var controller = this;
        controller.year = "";
        controller.month = "";
        controller.array = [];
        var getStock = function(array) {
            controller.array = array;
            var strval = "val_1";
            var data1 = []
            var data2 = []
            var data3 = []
            var data4 = []
            var data5 = []
            var data6 = []
            var data7 = []
            var data8 = []
            var data9 = []
            var data10 = []
            for (i = 0; i < array.length; i++) {
                if (array[i].stock == 1) {
                    data1.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })
                } else if (array[i].stock == 2) {
                    data2.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 3) {
                    data3.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 4) {
                    data4.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 5) {
                    data5.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 6) {
                    data6.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 7) {
                    data7.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 8) {
                    data8.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 9) {
                    data9.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                } else if (array[i].stock == 10) {
                    data10.push({
                        x: parseInt(array[i].currentDate.split('-')[2]),
                        val_0: parseFloat(array[i].open_st),
                        val_1: parseFloat(array[i].high),
                        val_2: parseFloat(array[i].low),
                        val_3: parseInt(array[i].volume),
                        val_4: parseInt(array[i].adjClose)
                    })

                }
            }
            console.log(array.length);
            //console.log(JSON.stringify(data4));
            if (controller.yAxis == 'open') {
                yVaule = "val_0";
            } else if (controller.yAxis == 'high') {
                yVaule = "val_1";
            } else if (controller.yAxis == 'low') {
                yVaule = "val_2";
            } else if (controller.yAxis == 'volume') {
                yVaule = "val_3";
            } else if (controller.yAxis == 'adjClose') {
                yVaule = "val_4";
            }

            $scope.data = {
                dataset0: data1,
                dataset1: data2,
                dataset2: data3,
                dataset3: data4,
                dataset4: data5,
                dataset5: data6,
                dataset6: data7,
                dataset7: data8,
                dataset8: data9,
                dataset9: data10

            };

            $scope.options = {
                series: [{
                    axis: "y",
                    dataset: "dataset0",
                    key: yVaule,
                    label: "stock1",
                    color: "#000000",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset1",
                    key: yVaule,
                    label: "stock2",
                    color: "#0000FF",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset2",
                    key: yVaule,
                    label: "stock3",
                    color: "#A52A2A",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset3",
                    key: yVaule,
                    label: "stock4",
                    color: "#7FFF00",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset4",
                    key: yVaule,
                    label: "stock5",
                    color: "#6495ED",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset5",
                    key: yVaule,
                    label: "stock6",
                    color: "#DC143C",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset6",
                    key: yVaule,
                    label: "stock7",
                    color: "#008B8B",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset7",
                    key: yVaule,
                    label: "stock8",
                    color: "#006400",
                    type: ['line', 'dot'],
                    //id: 'myseries1'
                }, {
                    axis: "y",
                    dataset: "dataset8",
                    key: yVaule,
                    label: "stock9",
                    color: "#556B2F",
                    type: ['line', 'dot'],

                }, {
                    axis: "y",
                    dataset: "dataset9",
                    key: yVaule,
                    label: "stock10",
                    color: "#FFD700",
                    type: ['line', 'dot'],

                }],
                axes: {
                    x: {
                        key: "x"
                    }
                }
            };




        };
        var displayError = function(data) {
            console.log("basicDisplayController: Error fetching stock data");
        };
        controller.getStocks = function() {
            NetworkService.getStockData(controller.year, controller.month, controller.yAxis, getStock, displayError);
        };




    }]);
