/**
 * osm sample
 */
// custom code start
//tslint:disable
// custom code end
import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MapsTheme, MapsTooltip, DataLabel, Maps, Marker, Annotations, ILoadEventArgs, NavigationLine } from '@syncfusion/ej2-angular-maps';
import { MapAjax } from '@syncfusion/ej2-maps';
Maps.Inject(Marker, MapsTooltip, DataLabel, NavigationLine, Annotations);
declare var require: any;
import africa from './africa.json';
@Component({
    selector: 'control-content',
    templateUrl: 'osm-with-sublayers.html',
    encapsulation: ViewEncapsulation.None
})
export class MapsOsmWithSublayerComponent {
    public load = (args: ILoadEventArgs) => {
        // custom code start
        let theme: string = location.hash.split('/')[1];
        theme = theme ? theme : 'Material';
        args.maps.theme = <MapsTheme>(theme.charAt(0).toUpperCase() +
            theme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
        // custom code end
    }
    public zoomSettings: object = {
        enable: true
    }
    public titleSettings: object = {
        text: 'Location of Africa continent in the World map',
        textStyle: {
            size: '16px'
        }
    };
    public layers: object[] = [{
        layerType: 'OSM',
    },
    {
        type: 'SubLayer',
        animationDuration: 0,
        shapeData: africa,
        shapeSettings: {
            fill: '#5100a3',
            opacity: 0.4
        }
    }
    ];
    // custom code start
    constructor(@Inject('sourceFiles') private sourceFiles: any) {
        sourceFiles.files = ['africa.json'];
    };
    // custom code end
}