import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/modules/app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  console.log = () => {} // Eliminar logs en producción
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
