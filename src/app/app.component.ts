import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  title = 'my-app';

  defaultColDef = {
      sortable: true,
      filter: true
  };

  columnDefs = [
      { field: 'make', rowGroup: true },
      { field: 'price' }
  ];

  autoGroupColumnDef = {
      headerName: 'Model',
      field: 'model',
      cellRenderer: 'agGroupCellRenderer',
      cellRendererParams: {
          checkbox: true
      }
  };

  rowData: any;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json');
  }

  getSelectedRows() {
      const selectedNodes = this.agGrid.api.getSelectedNodes();
      const selectedData = selectedNodes.map(node => {
        if (node.groupData) {
          return { make: node.key, model: 'Group' };
        }
        return node.data;
      });
      const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');

      alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}