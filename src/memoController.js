const { nanoid } = require('nanoid');



function create(memobilia, itemName, color, price) {
    const instrument = { name: itemName, id: nanoid(4), colour: color, priceInCents: price  };
   
    return instrument;
  }
  function index(memobilia) {
    return memobilia.map((item) => item.id + ' ' + item.name).join('\n');
  }
  
  function show(memobilia, instrumentId) {
    console.log("check", instrumentId)
    const instrument = memobilia.find((instrument) => instrument.id === instrumentId);
    //console.log(instrument)
    return instrument.id + ' ' + instrument.name + ' ' + instrument.colour + ' instrument.price';
  }

  const inform = console.log;

function destroy(memobilia, instrumentId) {
  const index = memobilia.findIndex((instrument) => instrument.id === instrumentId);
  if (index > -1) {
    memobilia.splice(index, 1);
    inform('Instrument successfully removed from collection');
    return memobilia;
  } else {
    inform('Instrument not found. No action taken');
    return memobilia;
  }
}

function edit(memobilia, instrumentId, updatedPrice) {
  const index = memobilia.findIndex((instrument) => instrument.id === instrumentId);
  if (index > -1) {
    memobilia[index].priceInCents = updatedPrice
    // instrument[index].id = instrumentId;
    // memobilia[index].name = updatedInstrument;
   // memobilia[index].points = instrumentPoints[updated] || 10;
    inform('Instrument successfully updated');
    return memobilia;
  } else {
    inform('Instrument not found. No action taken');
    return memobilia;
  }

  function cart(memobilia) {
    return memobilia.reduce((acc, current) => acc + current.priceInCents, 0);
  }

}

  module.exports = {
    create,
    index, 
    show, 
    destroy, 
    edit,      
    score,
  };