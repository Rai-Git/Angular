import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadserviceService } from '../cadservice.service';
import { IContato } from '../../interface/IContato';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  contatoForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit(){
    console.log(this.contatoForm.value)
    let obj: IContato = {
      firstName: this.contatoForm.value.firstName!,
      lastName: this.contatoForm.value.lastName!,
      email: this.contatoForm.value.email!,
    }
    this.service.gravar(obj).subscribe()
  }

  constructor(private service:CadserviceService){}
  
}

