import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Animal } from 'src/app/shared/interfaces/animal.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() dataSource: any;
  @Input() title!: string;
  @Input() icon!: string;

  userData:Animal[] = [];
  //se establecen las columnas
  displayedColumns: string[] = ['id', 'type', 'name', 'description', 'details'];
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private router: Router,){}

  ngOnInit(): void {
    //Servicio para obtener la lista de usuarios
    this.dataSource.paginator = this.paginator;
  }

  //Boton para ver los detalles
  moreDetails(userId: number){
    this.router.navigate(['/user-details', userId]);
  }

  //Funcion para buscar un usuario por cualquier dato
  search(event: Event) {
    const valueSearch = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valueSearch.trim().toLowerCase();
    this.userData = this.dataSource.filteredData;
    
  }

  

}
