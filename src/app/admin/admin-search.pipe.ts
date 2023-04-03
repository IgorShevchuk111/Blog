import { Pipe, PipeTransform } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Pipe({
  name: 'adminSearch'
})
export class AdminSearchPipe implements PipeTransform {

  constructor(
    private shared:  SharedService
  ){}

  transform(array: any[], search: string , field: string = 'title'): any[] {
    if (!search.trim()) {
      return array
    } else {
      return array.filter(el => {
        return el[field as keyof typeof el].toLowerCase().includes(search.toLowerCase())
      })
    }
  }
}
