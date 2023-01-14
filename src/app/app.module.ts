import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContractComponent } from './contract/contract.component';
import { ShowContractComponent } from './contract/show-contract/show-contract.component';
import { ContractApiService } from './contract-api.service';
 
@NgModule({
  declarations: [
    AppComponent,
    ContractComponent,
    ShowContractComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContractApiService],
  bootstrap: [AppComponent]
})


export class AppModule { }
