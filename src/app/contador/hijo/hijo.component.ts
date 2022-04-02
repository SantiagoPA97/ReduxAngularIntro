import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
})
export class HijoComponent implements OnInit {

  contador!: number;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    this.store.dispatch(multiplicar({ numero: 3 }));
  }

  dividir() {
    this.store.dispatch(dividir( { numero: 2 }));
  }
}
