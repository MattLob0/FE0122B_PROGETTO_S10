import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/service/products.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    listaProdotti: Product[] | undefined;

    sub!: Subscription;

    constructor(private prodottiSrv: ProductsService) {}

    ngOnInit(): void {
        this.sub = this.prodottiSrv.caricaProdotti().subscribe((lista) => {
            this.listaProdotti = lista;
        });
    }
}
