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

  async presentAlert() {
    const alert = await this.alertCtr.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentMultipleButtonsAlert() {
    const alert = await this.alertCtr.create({
      header: 'Alert',
      subHeader: 'Botones con alertas',
      message: 'Crack, metele que te va bien',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          cssClass:'rojo',
        },
        {
          text: 'Yesssss',
          cssClass:'green',
        },
        {
          text: 'MANDALEE',
          cssClass:'cyan',
          handler: () => {
            console.log('click en MANDALEE')
          }
        }
      ],
    });

    await alert.present();
  }

  async presenPromptAlert(){
    const alert = await this.alertCtr.create({
      cssClass:'my-custom-class',
      header: 'PromptAlert ! ',
      inputs: [
        {
          placeholder:'Nombre',
          name: 'name',
          id:'22'
        },
        {
          placeholder:'Apodo',
          name: 'nickname',
          id: '33',
          attributes: {
            maxlength: 8,
          }
        },
        {
          type: 'number',
          placeholder: 'Edad',
          name: 'age',
          id: '11',
          min:1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'Un poco sobre vos...',
          name: 'info',
          id: '44',
        }
      ],
      buttons: [
        {
          text: 'Mandar formulario',
          cssClass:'cyan',
          handler: ( data: any) => {
            console.log(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
