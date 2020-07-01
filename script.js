const SPANISH_MENU_ID = "SPANISH_MENU_ID";

function getword(info,tab) {
	if (info.menuItemId !== SPANISH_MENU_ID) {
		return;
	}
	let url = "https://en.wiktionary.org/wiki/" + info.selectionText + "#Spanish";

	chrome.tabs.query({"url": "https://en.wiktionary.org/*"}, function(tabs) {
		if (tabs.length == 0) {
			chrome.tabs.create({"url": url});
		}
		else {
			let tab = tabs[0];
			chrome.tabs.executeScript(tab.id, {"code": "window.location.href = '" + url + "';"})
		}
	});
}

chrome.contextMenus.create({
	title: "SPANISH: %s",
	contexts:["selection"],
	id: SPANISH_MENU_ID
});

chrome.contextMenus.onClicked.addListener(getword)

