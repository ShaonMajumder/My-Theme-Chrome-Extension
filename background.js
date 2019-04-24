chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var tabid = sender.tab.id;
    var custom_message = message.shaon_message;
    
    if(custom_message=='closetab'){
    	chrome.tabs.remove(tabid);
    	//sendResponse({shaon_response:'my response'})
    }else if(custom_message=='settingstab'){
    	var url = message.urltab;
    	chrome.tabs.remove(tabid);
    	chrome.tabs.create({url: url});
    	//sendResponse({shaon_response:'my response'})
    }else if(custom_message=='setwall'){
        
        

        chrome.tabs.get(tabid, function(tab){
            url = tab.url;
            if(url == 'chrome://newtab'){
                sendResponse({shaon_response:'ok'});        
            }
        });

        
    }
});

/*
get url from id


*/