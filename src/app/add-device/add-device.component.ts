import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AllItems} from "../app.model";
import {addDoc, collection, doc, Firestore, updateDoc} from "@angular/fire/firestore";
import {DeviceItem} from "../device-item/device-item.model";
import {AngularFirestore} from "@angular/fire/compat/firestore";


@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html'
})
export class AddDeviceComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required]),
    icon: new FormControl<string | null>({
      value: null, disabled: false
    }, [Validators.required])
  })

  constructor(private dialogRef: MatDialogRef<AddDeviceComponent>,
              @Inject(MAT_DIALOG_DATA) private _data: AllItems,
              private firestore: Firestore,
              private afr: AngularFirestore) {
  }

  ngOnInit() {
    if (this._data != null) {
      this.form.patchValue({
        name: this._data.name,
        icon: this._data.icon
      })
    }
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      console.log(this._data)
    }
    if (this._data == null) {
      this.insert();
    }
  }

  insert() {
    // // Get a reference to the 'form' collection
    // const collectionRef = this.afr.collection('devices');
    //
    // // Add the document to the collection
    // // collectionRef.add(this.form.getRawValue())
    // //   .then((docRef: any) => {
    // //     console.log('Document added with ID: ', docRef.id);
    // //   })
    // //   .catch((error: any) => {
    // //     console.error('Error adding document: ', error);
    // //   });
    const collectionReference = collection(this.firestore, 'devices');
    addDoc(collectionReference, this.form.getRawValue())
      .then(() => {
        console.log(this.form.getRawValue())
        this.dialogRef.close();
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }

  onChangeIcon(){
  }


  items: string[] = [
    'kitchen',
    'tv',
    'heat_pump',
    'light_mode',
    'device_thermostat'

  ]

  onClose() {
    this.dialogRef.close(false);
  }

  protected readonly onsubmit = onsubmit;
}
