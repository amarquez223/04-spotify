import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutaddress'
})
export class CutAddressPipe implements PipeTransform {

  transform(uri: string): string {

    return uri.slice(uri.indexOf(":") + 1, uri.length);

  }

}
