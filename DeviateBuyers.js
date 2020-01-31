const functions = {
  save: function() {
      
    let savedPurchases = this;
      
    window.localStorage.setItem('savedCharacter', JSON.stringify(savedPurchases));
      
    console.log('The records have been updated and saved. :)');
  },

  load: function() {
    
    if (localStorage.getItem('savedPurchases')) {
      
      let savedBuyers = JSON.parse(window.localStorage.getItem('savedPurchases'));
      
      console.log('The character was saved successfully.');
      
      window.localStorage.clear(); 
      
    }

  },
}
