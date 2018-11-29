import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()

export class UsuariosEffects {
	constructor(private actions$:Actions,public usuariosService:UsuarioService){

	}
	@Effect()
	cargaUsuarios$ = this.actions$.ofType(usuarioActions.CARGAR_USUARIOS)
		.pipe(
			switchMap(() => {
				return this.usuariosService.getUser()
					.pipe(
						map(users => new usuarioActions.CargarUsuariosSuccess(users)),
						catchError(error => of (new usuarioActions.CargarUsuariosFail(error)))
					);
			})
		);
}