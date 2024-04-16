import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
//Soporte para mobile 
import 'hammerjs';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
