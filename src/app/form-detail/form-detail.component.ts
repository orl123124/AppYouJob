import { Component, EventEmitter, Input, OnInit, Output, ViewContainerRef } from '@angular/core';
import { ModalDialogOptions, ModalDialogService } from "nativescript-angular";
 
import { action } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";

@Component({
	selector: 'ns-form-detail',
	templateUrl: './form-detail.component.html',
	styleUrls: ['./form-detail.component.css'],
	moduleId: module.id,
	providers: [ModalDialogService],
})
export class FormDetailComponent implements OnInit {
	public showReturn: boolean = true;
	 
	public departureDate = new Date();
	public returnDate = new Date();

	private _overlayGridLayout: GridLayout;
	@Output() openSelectDate = new EventEmitter();
	@Input() isOnOpenDepartureDate;

	constructor(private _modalService: ModalDialogService,
		private _vcRef: ViewContainerRef,
		private page: Page) {
        this._overlayGridLayout = this.page.getViewById('overlayGridLayout');
        console.log('test entra en form detail------');
	}

	ngOnInit() {
        this.returnDate.setDate(this.departureDate.getDate() + 2);
        console.log('test entra en form detail------');
	}

	@Input()
	set selectedDate(selectedDate: Date) {
		if (selectedDate) {
			if (this.isOnOpenDepartureDate) {
				this.departureDate = selectedDate;
			} else {
				this.returnDate = selectedDate;
			}
		}
	}

	toggleReturn() {
		this.showReturn = !this.showReturn;
	}

	 
 

	onOpenSelectDate(isOnOpenDepartureDate: boolean): void {
		this.openSelectDate.emit(isOnOpenDepartureDate);
	}

}
