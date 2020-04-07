import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
   equipmentItems: object[] = [
       {name: 'Duct Tape', mass: 0.5},
       {name: 'Space Camera', mass: 20},
       {name: 'Food', mass: 150},
       {name: 'Oxygen Tanks', mass: 400},
       {name: 'AE-35 Unit', mass: 5},
       {name: 'ISS Supplies', mass: 800},
       {name: 'Water', mass: 250},
       {name: 'Satellite', mass: 1200},
       {name: 'R2 Unit', mass: 32}
   ];
   cargoHold: object[] = [];
   cargoMass: number = 0;
   maximumAllowedMass: number = 2000;
   maxItems: number = 10;
   isCargo: boolean = true;
   remainingMass: number = (this.maximumAllowedMass - this.cargoMass);

   constructor() { }

   ngOnInit() { }

   // Code your addItem function here:
   addItem (newItem: object) {
      this.cargoHold.push(newItem); 
      this.cargoMass += newItem.mass;
     if(this.cargoMass <= (this.maximumAllowedMass - 200)) {
      this.isCargo = true;
      
     } else {
       this.isCargo = false;
     }
   }

   emptyHold () {
     this.cargoHold = [];
     this.cargoMass = 0;
     this.isCargo = true;
   }
}
