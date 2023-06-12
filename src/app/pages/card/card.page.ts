import { Component, OnInit } from '@angular/core';

interface Dispositivo {
  description: string;
  address: string;
  type: string;
  ID: number;
  img?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
})
export class CardPage implements OnInit {

  dispositivos: Dispositivo[]= [
    {
      description: 'Obelisco',
      type: 'Monumento',
      address: 'Melincue 3669',
      ID: 22,
      img: 'star'
    },
    {
      description: '[TPD]',
      type: 'Panel',
      address: 'Olavarria 3255 ',
      ID: 68,
      img: 'expand'
    },
    {
      description: 'Lima 234',
      type: 'Concentrador',
      address: 'Av.Monroe 6888',
      ID: 5
    },
    {
      description: 'Bella Vista 234',
      type: 'Luminaria',
      address: 'Cuenca 1235',
      ID: 22,
      img: 'bulb'
    },
  ]



  constructor() { }

  ngOnInit() {
  }

}
