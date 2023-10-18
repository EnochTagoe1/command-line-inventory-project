const { readJSONFile, writeJSONFile } = require('./src/helpers');

const { create, index, show, destroy, edit, score, } = require('./src/memoController');
// create an alias called inform to store the console.log function
// When providing employee feedback in the terminal use `inform`
// When developing/debugging use `console.log`
const inform = console.log;



const memobilia = readJSONFile('./data', 'memobilia.json');
//console.log("check", memobilia)

function run() {
  const action = process.argv[2];
  //const memobilia = process.argv[3];
  
  let writeToFile = false;
  let updatedMemobilia = [];

  const itemName = process.argv[3]
      const colour = process.argv[4]
      const price = process.argv[5]


  switch (action) {
    case 'index':
      const memobiliaView = index(memobilia);
      inform(memobiliaView);
      break;
    case 'create':
      

      updatedMemobilia = [...memobilia,create(memobilia, itemName, colour, price)];
  writeToFile = true;
      break;
    case 'show':
      const completeMemobiliaView = show(memobilia, itemName);
      inform(completeMemobiliaView);
      break;
    case 'update':
      updatedMemobilia = edit(memobilia, process.argv[3], process.argv[4]);
   writeToFile = true;
      break;
    case 'destroy':
      updatedMemobilia = destroy(memobilia, itemName);
   writeToFile = true;
      break;
    case 'score':
      inform(`Current points sum of all memobilia you've added to your database`, score(memobilia));
      break;
    default:
      inform('There was an error.');
  }
  if (writeToFile) {
    writeJSONFile('./data', 'memobilia.json', updatedMemobilia);
  }

}

run();