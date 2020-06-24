const SPANISH_MENU_ID = "SPANISH_MENU_ID";

function getword(info,tab) {
	if (info.menuItemId !== SPANISH_MENU_ID) {
		return;
	}
	chrome.tabs.create({
		url: "https://en.wiktionary.org/wiki/" + info.selectionText + "#Spanish"
	});
}

chrome.contextMenus.create({
	title: "SPANISH: %s",
	contexts:["selection"],
	id: SPANISH_MENU_ID
});

chrome.contextMenus.onClicked.addListener(getword)

