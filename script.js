

const checkbox = document.getElementById('fs')
const button = document.getElementById('button')

function save()
{
  const tabsallow = document.getElementById('tabsallow').value;
  if(tabsallow >= 2){
    chrome.storage.local.set({ fs: checkbox.checked }).then(() => {
      chrome.storage.local.set({ tabsallow: tabsallow }).then(() => {
        document.getElementById("labelverde").style.visibility="visible";
      });
    });
  }else{
    alert('La cantidad debe ser mayor que uno!')
  }
}
button.addEventListener('click', function() {
  // Ahora guardo el estado de los elementos
    save();
});

function load() {
  let fs = "";
  let cantidadTabs = 2;
  chrome.storage.local.get('fs', function (result) {
      fs = result.fs;
      if(!fs){
        checkbox.checked = false;
      }
  });
  chrome.storage.local.get('tabsallow', function (result) {
    cantidadTabs = result.tabsallow;
    document.getElementById('tabsallow').value = parseInt(cantidadTabs);
  });

} 

load();
