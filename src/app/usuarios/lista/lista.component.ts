import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuarioAction from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	public usuarios:Usuario[] = [];
	public loading: boolean;
	public error: any;

  constructor(private store:Store<AppState>) { }

  ngOnInit() {

  	this.store.select('usuarios')
  		.subscribe(usuarios=>{
  			this.usuarios = usuarios.users;
  			this.loading = usuarios.loading;
  			this.error = usuarios.error;
  		});

    this.store.dispatch(new usuarioAction.CargarUsuarios());
  }

}
