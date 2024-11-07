import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
import { Storage } from '@ionic/storage-angular';

import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component'; // Ensure you have this import

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

bootstrapApplication(AppComponent, {
  providers: [
    Storage,
    // other providers
  ],
});
