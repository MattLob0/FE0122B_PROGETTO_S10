import { Component, OnInit } from '@angular/core';
import { CarelloService } from 'src/app/service/carello.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

 totale : number = 0

    constructor(private carelloSrv : CarelloService) {}

    ngOnInit(): void {
        this.carelloSrv.contatore.subscribe((conta)=>{
            this.totale = conta
        })
    }

}
