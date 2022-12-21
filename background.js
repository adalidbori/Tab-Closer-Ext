
chrome.tabs.onCreated.addListener(function(tab) {
    chrome.tabs.query({}, function(tabs) {
        //validar que el check este en verde
        let fs = "";
        chrome.storage.local.get('fs', function (result) {
            fs = result.fs;
            if(fs){//el check esta en verde
                let cantidadTabs = 0;
                chrome.storage.local.get('tabsallow', function (result) {
                    cantidadTabs = result.tabsallow;
                    //validar que la cantidad de tabs posibles sea mayor o igual a dos
                    if(cantidadTabs >= 2){
                        if(tabs.length > cantidadTabs){
                            for(let i = 0; i < tabs.length-cantidadTabs; i++){
                                chrome.tabs.remove(tabs[i].id, function(){});
                            }
                        }                     
                    }
                });
            }
        });
        /* if(tabs.length > 10){
            for(let i = 0; i < tabs.length-10; i++){
                chrome.tabs.remove(tabs[i].id, function(){});
            }
        } */
    });
});


/* function luzVerde(){
    let fs = "";
    chrome.storage.local.get('fs', function (result) {
        fs = result.fs;
        console.log(fs);
    });
}

function cantidadTabs(){
    chrome.storage.local.get('tabsallow', function (result) {
        console.log(result.tabsallow);
    });
}

cantidadTabs() */
