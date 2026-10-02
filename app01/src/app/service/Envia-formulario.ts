import { Service } from '@angular/core';

@Service()
export class EnviaFormulario {
    Constructor() {
    }
    enviaIformacao(info: any) {
    console.log(info);
  }
  logar(event: string) {
    console.log(event);
  }
}
