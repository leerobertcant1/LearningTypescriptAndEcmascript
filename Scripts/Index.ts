import {IIndex} from './Interfaces/IIndex';

document.addEventListener("DOMContentLoaded", function(event) {
    let text = "TS Page Loaded";

    new Index().writeToConsole(text);
});

class Index implements IIndex{
    writeToConsole(data: string):void{
        console.log(data);
    }
}