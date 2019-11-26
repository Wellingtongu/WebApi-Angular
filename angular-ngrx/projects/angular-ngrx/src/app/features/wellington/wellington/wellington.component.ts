import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'anms-wellington',
  templateUrl: './wellington.component.html',
  styleUrls: ['./wellington.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WellingtonComponent implements OnInit {
  required = "Este Campo é  Obrigatório";
  angForm: FormGroup;
  public dado_usuario = new DadosUsuario;
  public dado_edit = new DadosUsuarioteste;

  constructor(private fb: FormBuilder, private Http: Http,) {

  }

  ngOnInit() {
    this.FormControl();
    // this.ngAfterViewInit();
  }



  FormControl() {
    // demo message to show
    this.angForm = this.fb.group({

      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(14)
      ]),
      ],
      cpf: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(14)
      ]),
      ],
    });
  }


   /**
   * Checking control validation
   *
   * @param controlName: string => Equals to formControlName
   * @param validationType: string => Equals to valitors name
   */



  isControlHasError(controlName: string, validationType: string): boolean {
    const control = this.angForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

  onSubmit(data) {
    // console.log(`dados=>  ${data}`);
    console.log(data);
    
  }

  // getdados(){

  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "https://localhost:44366/api/usuarios/Getusuario",
  //     "method": "GET",
  //     "headers": {
  //       "User-Agent": "PostmanRuntime/7.20.1",
  //       "Accept": "*/*",
  //       "Cache-Control": "no-cache",
  //       "Postman-Token": "c1912a48-9509-4c2e-ae65-fa8e34a1c9a1,e891e64b-3c5e-4853-86d8-a7d409b8e10d",
  //       "Host": "localhost:44366",
  //       "Accept-Encoding": "gzip, deflate",
  //       "Connection": "keep-alive",
  //       "cache-control": "no-cache"
  //     }
  //   }
  
  //   $.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });

  // }

  getdados() {

    this.Http.get("https://localhost:44366/api/usuarios/tbl_all/?id=" + 2)
      .subscribe(data => {
        const response = (data as any);
        const resposta = JSON.parse(response._body);
        // this.dado_edit = resposta
        // console.log('valor get por id => ' + this.dado_edit);
        resposta.forEach(element => {
          console.log(element);
          
        });
      });

    // var settings = {
    //   "async": true,
    //   "crossDomain": true,
    //   "url": "https://localhost:44366/api/usuarios/tbl_all/?id=2",
    //   "method": "GET",
    //   "headers": {
    //     "User-Agent": "PostmanRuntime/7.20.1",
    //     "Accept": "*/*",
    //     "Cache-Control": "no-cache",
    //     "Postman-Token": "fb024398-6290-4cfc-8cb1-0c95244d7552,13006112-2406-4331-81c2-f2f136c3cfd4",
    //     "Host": "localhost:44366",
    //     "Accept-Encoding": "gzip, deflate",
    //     "Connection": "keep-alive",
    //     "cache-control": "no-cache"
    //   }
    // }
    
    // $.ajax(settings).done(function (response) {
    //   console.log(response);
    // });

  }


  ngAfterViewInit() {
  
    this.Http.get("https://localhost:44366/api/usuarios/Getusuario")
    .subscribe(
      data => {
        const response = (data as any);
        const resposta = JSON.parse(response._body);
        this.dado_usuario = resposta;

        console.log('resposta', resposta);
      }, error => {
        console.log(error);
      }
    )
  }
  

}


export class DadosUsuario {
  name:string;
  cpf:number;
}


export class DadosUsuarioteste {
 id: number;
 nome: string;
 cpf: string;
 rg: string;
}

