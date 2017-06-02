import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TimeSheetPage } from '../pages/timesheet/timesheet';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';
// import { AngularFireModule } from "angularfire2";

// export const firebaseConfig = {
// apiKey: ' AIzaSyD2pUMVLPOqnCuqaO6Imi3aKCzVyDOVjuI',
// authDomain: "wellsapp-9ef37.firebaseapp.com",
// databaseURL: '',
// storageBucket: '',
// messagingSenderId: ''
// };

@NgModule({
  declarations: [
    MyApp,
    TimeSheetPage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TimeSheetPage,
    LoginPage,
    HomePage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
