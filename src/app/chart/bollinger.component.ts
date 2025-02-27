import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme, TechnicalIndicatorModel } from '@syncfusion/ej2-angular-charts';
import { chartData } from './financial-data';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample fro Bollinger Band Indicator
 */
@Component({
    selector: 'control-content',
    templateUrl: 'bollinger.html',
    styleUrls: ['chart.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class BollingerIndicatorComponent {
    public upperLine: Object = {
        color: 'orange'
    };
    public lowerLine: Object = {
        color: 'yellow'
    };
    // indicators
    public indicators: TechnicalIndicatorModel[] = [
        {
            type: 'BollingerBands',
            xName: 'x',
            field: 'Close',
            fill: 'blue',
            period: 3,
            seriesName: 'Apple Inc',
            upperLine: this.upperLine,
            lowerLine: this.lowerLine
        }
    ];
    public data1: Object[] = chartData;
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        majorGridLines: { width: 0 },
        zoomFactor: 0.6, zoomPosition: 0.6,
        crosshairTooltip: { enable: true }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Price',
        labelFormat: '${value}M',
        minimum: 50, maximum: 170, interval: 30,
        majorGridLines: { width: 1 },
        lineStyle: { width: 0 }
    };

    public zoomSettings: Object = {

        enableSelectionZooming: true,
        mode: 'X',
        enablePan : true
    };
    //Initializing Chart Title
    public title: string = 'AAPL 2012-2017';
    public tooltip: Object = {
        enable: true,
        shared: true
    };
    //Initializing Crosshair
    public crosshair: Object = {
        enable: true, lineType: 'Vertical'
    };
    public legendSettings: Object = {
        visible: false
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };

    public animation: Object = {
        enable: false
    };
    public period: number = 14;
    public width: string = Browser.isDevice ? '100%' : '75%';
      // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
      // custom code end
    constructor() {
        //code
    };

}