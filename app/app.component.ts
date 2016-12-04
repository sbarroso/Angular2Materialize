import { Component, EventEmitter } from '@angular/core'
import {MaterializeAction} from 'angular2-materialize';

@Component ({
    moduleId: module.id,
	selector: "material",
    templateUrl: 'app.component.html',
	styleUrls: []
})

export class AppComponent {

	title = 'Example of Material in an Angular2 application';
    
    selectOptions = [{name: 'foo', value: 1}, {name: 'bar', value: 1}];
    
    modalActions = new EventEmitter<string|MaterializeAction>();
    openModal() {
        this.modalActions.emit({action:"modal",params:['open']});
    }
    closeModal() {
        this.modalActions.emit({action:"modal",params:['close']});
    }
}