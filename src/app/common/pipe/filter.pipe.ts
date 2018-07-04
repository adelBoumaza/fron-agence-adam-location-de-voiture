import { PipeTransform, Pipe } from "@angular/core";

@Pipe ({ 
  name : 'myfilter' ,
  pure : false
})
export class FilterPipe implements PipeTransform{
    

  transform(items: any[], filterQuery: string): any[] {
    if(!items) return [];
    if(!filterQuery) return items;
    filterQuery = filterQuery.toLowerCase();
    return items.filter( it => {
      return it.nom.toLowerCase().includes(filterQuery);
    });
   }
}