import { PipeTransform, Pipe } from "@angular/core";

@Pipe ({ 
  name : 'myfilterVehicule' ,
  pure : false
})
export class FilterPipeVehicule implements PipeTransform{
    

  transform(items: any[], filterQuery: string): any[] {
    if(!items) return [];
    if(!filterQuery) return items;
    filterQuery = filterQuery.toLowerCase();
    return items.filter( it => {
      console.log(it);
      return it.modele.toLowerCase().includes(filterQuery);
    });
   }
}