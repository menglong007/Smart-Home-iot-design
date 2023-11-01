import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSliderModule} from "@angular/material/slider";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatSidenavModule} from "@angular/material/sidenav";
import {DeviceItemComponent} from "./device-item/device-item.component";
import {RoomComponent} from "./room/room.component";
import {NgxGaugeModule} from "ngx-gauge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {environment} from '../environments/environment';
import {provideAuth, getAuth} from '@angular/fire/auth';
import {provideFirestore, getFirestore} from '@angular/fire/firestore';
import {AirConditionerComponent} from "./air-conditioner/air-conditioner.component";
import {MatDialogModule} from '@angular/material/dialog';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {AngularFireModule} from "@angular/fire/compat";
import {AddDeviceComponent} from "./add-device/add-device.component";
import {MatSelectModule} from "@angular/material/select";
import {MatOption, MatOptionModule} from "@angular/material/core";

@NgModule({
  declarations: [
    AppComponent,
    DeviceItemComponent,
    RoomComponent,
    AirConditionerComponent,
    AddDeviceComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    FormsModule,
    MatGridListModule,
    MatSliderModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    NgxGaugeModule,
    MatProgressSpinnerModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
