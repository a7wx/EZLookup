chrome.commands.onCommand.addListener(function (command) {
    let text;
    let tempUrl;
    //changes tempUrl based upon what command its sent
    switch (command) {
        case 'invest-tab':
            tempUrl = "https://www.investopedia.com/search?q=";
            break;
        case 'wso-tab':
            tempUrl = "https://www.wallstreetoasis.com/search/site?search_api_fulltext=";
            break;
        case 'cfi-tab':
            tempUrl = "https://corporatefinanceinstitute.com/?s=";
            break;
    }

    //gets highlighted text and appends it to the corresponding search URL, then calls to create a new tab with the new URL
    chrome.tabs.executeScript( {
        code: "window.getSelection().toString();"
        }, function(selection) {
            text = selection[0];
            var investUrl = tempUrl + text;
            createTab(investUrl);
        });
});

//creates a tab with the given url
function createTab(url) {
    chrome.tabs.create({ url: url, active: true});
}