import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'trim'
})

export class TrimPipe implements PipeTransform {
    transform(value: string) {
        return value.length > 20 ? value.substring(0, 17) + '...' : value;
    }
}