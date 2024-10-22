import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let prijzen = [4.23 , 2.45 , 4.78 , 4.67 , 3.21]

for(let i = 0 ;  i < prijzen.length ; i++){
    let korting = (prijzen[i] / 100)*15
  console.log(" het prijs is" + prijzen[i] + " met een korting van " + korting)  
}

process.exit()