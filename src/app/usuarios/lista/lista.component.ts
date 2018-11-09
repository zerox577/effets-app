import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

	public usuarios:Usuario[] = [];

  constructor(public usuarioService:UsuarioService) { }

  ngOnInit() {
  	this.usuarioService.getUser()
  		.subscribe((data)=>{
  			console.log("data", data);
  			this.usuarios = data;
  	});
  }

}
