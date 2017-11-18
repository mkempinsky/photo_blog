// NgModule is the foundation for any angular application.
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// For the import below, we don't have to follow the entire file path because we have created a barrel in the 'entries' directory 
// index.ts that re-exports all of the components and services for a feature.
import { EntryListComponent, EntryComponent } from './entries';


// Decorator. When you aply a decorator to a class, function, or property you are post proccessing it.
// in the case of appModule we'll use the NgModule decoratior that we imported from the angular/core module
// the important thing to know about decorators, is that angulars compiler depends on them to map each
// components and compose the application in the most efficient way possible. 
@NgModule({
	// by including this imports array, angular now knows that the application will be used in a web browser.
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		EntryComponent,
		EntryListComponent
		],
	bootstrap: [AppComponent]
})


// create the app's module
// export the module class so that you can use it in other modules in your application.
export class AppModule {
	// add metadata. Metadata is the information used by angular to associate style scheets,
	// html templates and other settings for an individule module or component. 
}