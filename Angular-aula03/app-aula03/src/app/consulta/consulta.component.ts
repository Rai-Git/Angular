import { Component, OnInit } from '@angular/core';
import { IContato } from '../../interface/IContato';
import { NgFor } from '@angular/common';
import { CadserviceService } from '../cadservice.service';

@Component({
  selector: 'app-consulta',
  standalone: true,
  imports: [NgFor],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css'
})
export class ConsultaComponent implements OnInit {
  contatos:IContato[] = []

  constructor(private service: CadserviceService){}
  ngOnInit(): void {
    this.service.consultar()
   .subscribe(data => {this.contatos = data })
  }
  excluir(id:any){
    this.service.excluir(id).subscribe(s => this.consultar())
   }
  consultar(){
    this.service.consultar()
    .subscribe(data => {this.contatos = data})
  }
}
