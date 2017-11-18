import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css']
})

export class AppComponent {
	// Because Typscript can infer type definitons when a property is assigned a value, 
	// we don't need to specify that the emoji is an array of strings.
	emoji = ['🎉', '😍', '😜', '👍'];
	// Because Typescript is a superset of Javascript, type definitions are inferred when they are declared.
	// Since we are not setting an initial value for the activeEmoji, we need to declare the type a string.
	// If we did not decare the type, TypeScript would assume that any value type can be assigned to activeEmoji. By declaring 
	// activeEmoji as a String type, we can prevent any invalid assignment.
	activeEmoji: string;
	changeEmoji(){
		this.activeEmoji = this.emoji[Math.floor(Math.random() * this.emoji.length)];
	}
}