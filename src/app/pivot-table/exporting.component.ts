import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { IDataOptions, PivotView, FieldListService, IDataSet } from '@syncfusion/ej2-angular-pivotview';
import { DropDownList } from '@syncfusion/ej2-angular-dropdowns';
import { Button  } from '@syncfusion/ej2-buttons';
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(false);

/**
 * Pivot Table Exporting Sample.
 */
/* tslint:disable */
declare var require: any;
let Pivot_Data: IDataSet[] = require('./Pivot_Data.json');
@Component({
    selector: 'ej2-pivotview-container',
    templateUrl: 'exporting.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['exporting.css'],
    providers: [FieldListService]
})

export class ExportingComponent implements OnInit {
    public dataSourceSettings: IDataOptions;
    public expandDropDown: DropDownList;
    public exportType: DropDownList;
    public exportBtn: Button;
    public gridSettings: GridSettings;

    @ViewChild('pivotview')
    public pivotObj: PivotView;

    ngOnInit(): void {
        this.gridSettings = {
            columnWidth: 140
        } as GridSettings;

        this.exportType = new DropDownList({
            index: 0,
            width: 160
        });
        this.exportType.appendTo('#exporttype');

        this.exportBtn = new Button({
            isPrimary: true
        });
        this.exportBtn.appendTo('#export');

        document.getElementById('export').onclick = () => {
            if (this.exportType.value === 'excel') {
                this.pivotObj.excelExport();
            } else if (this.exportType.value === 'csv') {
                this.pivotObj.csvExport();
            } else {
                this.pivotObj.pdfExport();
            }
        };

        this.dataSourceSettings = {
            values: [{ name: 'In_Stock', caption: 'In Stock' }, { name: 'Sold', caption: 'Units Sold' },
            { name: 'Amount', caption: 'Sold Amount' }],
            filters: [{ name: 'Product_Categories', caption: 'Product Categories' }],
            enableSorting: true,
            rows: [{ name: 'Country' }, { name: 'Products' }],
            formatSettings: [{ name: 'Amount', format: 'C0' }],
            columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
            dataSource: Pivot_Data,
            expandAll: false
        };
    }
}