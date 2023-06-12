import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor( private alertCtr: AlertController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertCtr.create({
      header: 'Alert',
      subHeader: 'Botones con alertas',
      message: 'Crack, metele que te va bien',
      buttons: ['RE SI', 'MANDALE', 'YESSS!'],
    });

    await alert.present();
  }

}
