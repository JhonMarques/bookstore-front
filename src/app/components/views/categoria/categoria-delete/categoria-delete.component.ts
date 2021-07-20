
import { Categoria } from './../categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: "./categoria-delete.component.html",
  styleUrls: ["./categoria-delete.component.css"],
  styles: [
  ]
})
export class CategoriaDeleteComponent implements OnInit {

categoria: Categoria = { 
  id: '',
  nome: '',
  descricao: ''
}

  constructor(private service: CategoriaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }


  findById(): void {
    this.service.findById(this.categoria.id!).subscribe((resposta) => {
     this.categoria.nome = resposta.nome
     this.categoria.descricao = resposta.descricao
     console.log(resposta);
    })
  }

  delete(): void{
    this.service.delete(this.categoria.id!).subscribe((resposta) => {
      console.log(resposta);
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria excluída com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }


  
}
