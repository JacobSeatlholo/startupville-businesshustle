import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://www.businesshustle.co.za/')">
        <ion-label>Resources</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://form.typeform.com/to/P9SUUwHI?typeform-source=neighbourgood.co.za/')">
        <ion-label>Join the community</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://bit.ly/business-hustle')">
        <ion-label>Showcase</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://github.com/JacobSeatlholo/startupville-businesshustle')">
        <ion-label>GitHub Repo</ion-label>
      </ion-item>
      <ion-item button (click)="support()">
        <ion-label>Support</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
