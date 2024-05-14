import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
//import { appConfig } from './app/app.config';

/* en caso de standalone se usa esto:
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));