var win = Ti.UI.createWindow({
	backgroundColor : "white"
});

var btn = Ti.UI.createButton({
	title : "Apri View",
	height : 60,
	width : 180,
	bottom:40
});

win.add(btn);

var view = Ti.UI.createView({
	backgroundColor : "green",
	width : "90%",
	height : "90%",
	borderRadius : 5,
	visible : false,
	borderColor: "black",
	borderWidth: 1
});

var btnClose = Ti.UI.createButton({
	title : "Chiudi View",
	height : 60,
	width : 180
});

view.add(btnClose);
win.add(view);



btn.addEventListener('click', function () {
	view.show();
	Ti.API.info("hai aperto view");
});

btnClose.addEventListener('click', function() {
	view.hide();
});

win.open();
