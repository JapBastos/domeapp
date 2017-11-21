import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NodesProvider } from '../../providers/nodes/nodes';



@IonicPage()
@Component({
  selector: 'page-climate',
  templateUrl: 'climate.html',
  providers: [ NodesProvider ]
})
export class ClimatePage {

  public lista_nodes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private nodeProvider: NodesProvider
  ) {}

  ionViewDidLoad() {
    this.nodeProvider.getNodes().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_nodes = objeto_retorno.results;
        console.log(objeto_retorno);},
      error => {console.log(error);}
    )
  }
}
