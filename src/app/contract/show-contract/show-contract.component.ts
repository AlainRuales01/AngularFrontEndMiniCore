import { Component,OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import { ContractApiService } from 'src/app/contract-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-contract',
  templateUrl: './show-contract.component.html',
  styleUrls: ['./show-contract.component.css']
})
export class ShowContractComponent implements OnInit {

  public dateForm = new FormGroup({
    fechaInicio:new FormControl(''),
    fechaFin:new FormControl(''),
  }); // variable is created of type FormGroup is created

  contractList!:Observable<any[]>;
  constructor(private service: ContractApiService) {}

  ngOnInit(): void {
    this.contractList = this.service.getContracts();
  }

  getContractByDate(){
    let fechaInicio = this.dateForm.value.fechaInicio
    let fechaFin = this.dateForm.value.fechaFin
    
    if(fechaInicio && fechaFin){
      this.contractList = this.service.getContractsByDate(fechaInicio,fechaFin);
    }

    
  }

}
