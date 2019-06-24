import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { EquipmentType } from 'src/app/models/EquipmentType';
import { EquipmentTypeService } from 'src/app/services/equipment-type.service';

@Component({
  selector: 'app-equipment-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: ['./equipment-type.component.css']
})
export class EquipmentTypeComponent implements OnInit {

  columnNames = ['details', 'EquipmentTypeEntityId', 'EquipmentTypeString', 'buttons'];
  dataSource: MatTableDataSource<EquipmentType>
  
  constructor(private _equipmentTypeService: EquipmentTypeService) { }

  ngOnInit() {
    this._equipmentTypeService.getEquipmentTypes().subscribe((equipmentType: EquipmentType[]) =>{
      this.dataSource = new MatTableDataSource<EquipmentType>(equipmentType);
    });
  }
}
