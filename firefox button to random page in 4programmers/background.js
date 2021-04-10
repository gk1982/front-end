
async function openPage() {
  
  do {
    var u = Math.floor(Math.random() * 333333);
    var response = await fetch(`https://4programmers.net/Forum/JavaScript/${u}`);
  }while (response.status == 404);
  
  browser.tabs.create({
    url: `${response.url}`
  });
}  

browser.browserAction.onClicked.addListener(openPage);
