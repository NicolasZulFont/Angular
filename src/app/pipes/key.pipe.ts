import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: "keys"})
export class KeyPipe implements PipeTransform{
    transform(value: any, ...args: any[]) {
        let keys = [];
        for(let key in value){
            keys.push(key)
        }
        return keys;
    }
}