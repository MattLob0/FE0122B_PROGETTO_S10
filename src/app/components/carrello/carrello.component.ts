import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CarelloService } from 'src/app/service/carello.service';

@Component({
    selector: 'app-carrello',
    templateUrl: './carrello.component.html',
    styleUrls: ['./carrello.component.scss'],
})
export class CarrelloComponent implements OnInit {


    listaProdotti! : Product []


    constructor(private carrelloSrv:CarelloService) {}

    ngOnInit(): void {
        this.listaProdotti= this.carrelloSrv.visualizzaCarrello()

    }

    inviaOrdine(){
        this.carrelloSrv.svuotaCarrello()
        this.listaProdotti = []
    }



}
