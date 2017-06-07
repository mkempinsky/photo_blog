// Import global stylesheet
import './styles/main.css';
// browserDynamic is for development, change to platform-browser when deploying
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// import the newly created AppModule
import { AppModule } from './app/app.module';

// bootstrap our platform and attach it to our webpage
platformBrowserDynamic().bootstrapModule(AppModule);