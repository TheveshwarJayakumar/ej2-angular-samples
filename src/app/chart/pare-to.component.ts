import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-angular-charts';
import { Browser } from '@syncfusion/ej2-base';
/**
 * Sample for Pareto Series
 */
@Component({
    selector: 'control-content',
    templateUrl: 'pare-to.html',
    styleUrls: ['chart.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class ParetoSeriesChartComponent {
    //Initializing ChartArea
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public width: string = Browser.isDevice ? '100%' : '75%';

    public data: Object[] = [
        { x: 'Button Defect', y: 56 }, { x: 'Pocket Defect', y: 44.8 },
        { x: 'Coller Defect', y: 27.2 }, { x: 'Cuff Defect', y: 19.6 },
        { x: 'Sleeve Defect', y: 6.6 }
    ];
    
    public marker: Object = {
        visible: true,
        width: 10,
        height: 10
    }
   
    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        interval: 1,
        valueType: 'Category',
        majorGridLines: { width: 0 }, minorGridLines: { width: 0 },
        majorTickLines: { width: 0 }, minorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelIntersectAction: 'Rotate45',
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Frequency of Occurence',
        minimum: 0,
        maximum: 150,
        interval: 30,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }, majorGridLines: { width: 1 },
        minorGridLines: { width: 1 }, minorTickLines: { width: 0 }
    };
    public legend: Object = {
        visible: false
    };  
    public title: string = 'Pareto chart - Defects in Shirts';
    // custom code start
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)).replace(/-dark/i, "Dark");
    };
    // custom code end
    public tooltip: Object = {
        enable: true,
        shared: true
    };
    constructor() {
        //code
     };

}