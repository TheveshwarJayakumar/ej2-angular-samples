/**
 * Sample for tooltip in the Linear Gauge
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { LinearGaugeComponent, LinearGaugeTheme } from '@syncfusion/ej2-angular-lineargauge';
import { ITooltipRenderEventArgs, IAxisLabelRenderEventArgs, ILoadedEventArgs } from '@syncfusion/ej2-lineargauge';

@Component({
    selector: 'control-content',
    templateUrl: 'tooltip.html',
    encapsulation: ViewEncapsulation.None
})

export class TooltipComponent {
    @ViewChild('gauge')
    public gauge: LinearGaugeComponent;

    public container: Object = {
        width: 140,
        border: {
            width: 2,
            color: '#a6a6a6'
        }
    };

    public tooltip: Object = {
        enable: true,
        showAtMousePosition: true,
        textStyle: { fontFamily: 'inherit' }
    };

    public axes: Object = [
        {
            minimum: 0,
            maximum: 10,
            line: {
                offset: 140
            },
            majorTicks: {
                interval: 1, height: 20, color: '#9E9E9E'
            },
            minorTicks: {
                interval: 0.2, height: 10, color: '#9E9E9E'
            },
            pointers: [{
                type: 'Bar',
                value: 5.4,
                offset: 15,
                color: '#ff66b3'
            }],
            labelStyle: { font: { fontFamily: 'inherit' } }
        },
        {
            opposedPosition: true,
            minimum: 0,
            maximum: 25,
            line: {
                offset: -140,
            },
            majorTicks: {
                interval: 1, height: 20, color: '#9E9E9E'
            },
            minorTicks: {
                interval: 0.2, height: 10, color: '#9E9E9E'
            },
            pointers: [{
                type: 'Bar',
                offset: -15,
                value: 16.5,
                color: '#4d94ff'
            }],
            labelStyle: { font: { fontFamily: 'inherit' } }
        }
    ];
    
    public annotations: Object = [
        {
            content: '<div id="first"><h1 style="font-size:15px;color:#686868;">Inches</h1></div>',
            axisIndex: 0,
            axisValue: 5.4,
            x: 35,
            y: -58,
            zIndex: '1'
        },
        {
            content: '<div id="second"><h1 style="font-size:15px;color:#686868;">Centimeters</h1></div>',
            axisIndex: 1,
            axisValue: 16.5,
            x: 50,
            y: 52,
            zIndex: '1'
        }
    ];

    public labelRender(args: IAxisLabelRenderEventArgs): void {
        if (args.axis.visibleRange.min === args.value || args.axis.visibleRange.max === args.value) {
            args.text = '';
        }
    }
    public renderTooltip(args: ITooltipRenderEventArgs): void {
        args.content = (args.axis.visibleRange.max === 25) ? Number(args.content).toFixed(1) + ' cm' : Number(args.content).toFixed(1) + ' in';
    }

    public load(args: ILoadedEventArgs): void {
        // custom code start
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.gauge.theme = <LinearGaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
            selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        if (args.gauge.theme.toLowerCase().indexOf('dark') > 1 || args.gauge.theme.toLowerCase() === 'highcontrast') {
            args.gauge.annotations[0].content = '<div id="first"><h1 style="font-size:15px; color: #DADADA">Inches</h1></div>';
            args.gauge.annotations[1].content = '<div id="second"><h1 style="font-size:15px; color: #DADADA">Centimeters</h1></div>';
        }
        // custom code end
    }

    constructor() {
        //code
    };
}
