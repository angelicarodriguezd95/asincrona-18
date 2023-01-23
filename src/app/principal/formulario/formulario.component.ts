import { Component } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private userService: UserservicesService){}

  datos : Users= {id: '', name:'', email:''}

  onSubmit(){
    this.userService.postUser(this.datos).subscribe(
      (usuario:Users)=>console.log(usuario)
    )
  }
}
