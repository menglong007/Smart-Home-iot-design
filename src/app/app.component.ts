import {Component, OnInit} from '@angular/core';
import {DeviceItem} from "./device-item/device-item.model";
import {Room} from "./room/room.model";
import {Firestore, collection, updateDoc, doc} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MatDialog} from "@angular/material/dialog";
import {AddDeviceComponent} from "./add-device/add-device.component";
import {AllItems} from "./app.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  devices: DeviceItem[] = [
    {
      name: 'Refrigerator',
      icon: 'kitchen',
      value: false
    },
    {
      name: 'air conditioner',
      icon: 'heat_pump',
      value: false
    },
    {
      name: 'light',
      icon: 'light_mode',
      value: false
    },
    {
      name: 'Temperature',
      icon: 'device_thermostat',
      value: false
    }
  ];
  rooms: Room[] = [
    {
      icon: 'home',
      value: false
    },
    {

      icon: 'meeting_room',
      value: false
    },
    {

      icon: 'dining',
      value: false
    }
    ,
    {
      icon: 'bed',
      value: false
    }
  ]
  air: any;

  constructor(private firestore: Firestore,
              public afr: AngularFirestore,
              private dialog : MatDialog) {
    console.log(this.devices)
  }

  ngOnInit() {
    this.afr.collection<DeviceItem>('devices').valueChanges().subscribe(
      {
        next: (res) => {
          console.log(res)
          this.devices = res;
        }
      }
    );
    this.afr.collection('air').valueChanges().subscribe(
      {
        next: (res) => {
          console.log(res)
          this.air = res;
        }
      }
    )
  }

  onChange(ev: boolean) {
    const collectionInstance = collection(this.firestore, 'devices');
    const documentRef = doc(collectionInstance, 'devices');
    const data = {value: this.devices};
    updateDoc(documentRef, data)
      .then(() => {
        console.log(ev);
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }

  onValueChange(event: Event) {
    const collectionReference = collection(this.firestore, 'air');
    const documentRef = doc(collectionReference, 'air');
    const data = {value: this.air};
    updateDoc(documentRef, data)
      .then(() => {
        console.log(event);
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }
  openDialog(_data : AllItems | null = null) {
    const dialogRef = this.dialog.open(AddDeviceComponent,{
      width : '450px',
      maxHeight: '220px',
      panelClass: 'bg-red-900',
      data : _data
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
