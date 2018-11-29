import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()

export class UsuarioEffects {
	constructor(private actions$:Actions,public usuariosService:UsuarioService){

	}
	@Effect()
	cargaUsuario$ = this.actions$.ofType(usuarioActions.CARGAR_USUARIO)
		.pipe(
			switchMap((action) => {
				return this.usuariosService.getUserById(action['id'])
					.pipe(
						map(user => new usuarioActions.CargarUsuarioSuccess(user)),
						catchError(error => of (new usuarioActions.CargarUsuarioFail(error)))
					);
			})
		);
}