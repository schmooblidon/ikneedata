//Adds a script to be run later to the html document
function addScript(src){
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');        
        script.onload = resolve;
        script.onerror = reject;
        script.async = false;
        script.src = src;
        document.head.appendChild(script);
      });
};


//Fetch the json file first
//After chars has been set, run the other scripts that depend on it being populated
fetch('./hitboxDB.JSON')
    .then((response) => response.json())
    .then((json) => chars = json).then(test => {          
        addScript('hitboxStruct.js');
		addScript('charAttributes.js');
		addScript('throwData.js');
		addScript('calculatorresize.js');
		addScript('calculatormaths.js');
		addScript('calculator.js');
        addScript('script.js'); //Unclear why this comes late now compared to the old method, but old order didn't work        				
    });