import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  //allows to add new server while filter is in place (forces update on each data change)
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArr = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArr.push(item);
      }
    }
    return resultArr;
  }
}
