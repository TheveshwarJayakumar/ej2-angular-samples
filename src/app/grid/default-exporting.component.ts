import { Component, OnInit, ViewChild, ValueProvider, ViewEncapsulation } from '@angular/core';
import { employeeDetails } from './data';
import {
    GridComponent, ToolbarService, ExcelExportService, PdfExportService,
    GroupService, ExcelQueryCellInfoEventArgs, PdfQueryCellInfoEventArgs, SortService
} from '@syncfusion/ej2-angular-grids';
import { ClickEventArgs } from '@syncfusion/ej2-navigations'

@Component({
    selector: 'ej2-grid-container',
    templateUrl: 'default-exporting.html',
    styleUrls: ['column-template.style.css'],
    encapsulation: ViewEncapsulation.None,
    providers: [ToolbarService, ExcelExportService, PdfExportService, GroupService, SortService]

})
export class ExportingComponent implements OnInit {
    public data: Object[];
    public toolbar: string[];
    public pageSettings: Object;
    public isInitial: Boolean = true;
    @ViewChild('grid')
    public grid: GridComponent;

    public ngOnInit(): void {
        this.data = employeeDetails;
        this.toolbar = ['ExcelExport', 'PdfExport', 'CsvExport'];
        this.pageSettings = { pageCount: 5 };
    }
    dataBound() {
        if(this.isInitial) {
            this.grid.toolbarModule.toolbar.hideItem(2, true);
            this.isInitial = false;
        }
    }
    toolbarClick(args: ClickEventArgs): void {
        switch (args.item.text) {
            case 'PDF Export':
                this.grid.pdfExport();
                break;
            case 'Excel Export':
                this.grid.excelExport();
                break;
            case 'CSV Export':
                this.grid.csvExport();
                break;
        }
    }
    exportQueryCellInfo(args: ExcelQueryCellInfoEventArgs | PdfQueryCellInfoEventArgs): void {
        if (args.column.headerText === 'Employee Image') {
            if ((args as any).name === 'excelQueryCellInfo') {
                args.image = { height: 75, base64: (args as any).data.EmployeeImage, width: 75 };
            } else {
                args.image = { base64: (args as any).data.EmployeeImage };
            }
        }
        if (args.column.headerText === 'Email ID') {
            args.hyperLink = {
                target: 'mailto:' + (args as any).data.EmailID,
                displayText: (args as any).data.EmailID
            };
        }
    }
    public checkboxChange(e: any): void {
        let fields: string[] = ['Employee Image', 'Email ID'];
        if (e.checked) {
            this.grid.showColumns(fields, 'headerText');
            this.grid.toolbarModule.toolbar.hideItem(2, true);
        } else {
            this.grid.hideColumns(fields, 'headerText');
            this.grid.toolbarModule.toolbar.hideItem(2, false);
        }
    }
}



