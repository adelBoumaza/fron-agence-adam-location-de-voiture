import { PipeTransform, Pipe } from '@angular/core';

@Pipe ({
  name : 'myfilter' ,
  pure : false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterQuery: string): any[] {
    if (!items) return [];
    if (!filterQuery) return items;
    filterQuery = filterQuery.toLowerCase();
    return items.filter( it => {
      if (it.nom !== undefined) {
        return it.nom.toLowerCase().includes(filterQuery);
      } else if (it.nomClient !== undefined) {
        return it.nomClient.toLowerCase().includes(filterQuery);
      }
    });
   }
}