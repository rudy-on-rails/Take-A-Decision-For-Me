// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Ti.include("doubts.js");
Titanium.UI.setBackgroundColor('#000');

doubts = new Doubts();

var assignmets = {
	buttonClickEvent: function(){
		var guessed = doubts.guessADoubt();
		var t = Ti.UI.create2DMatrix();
		var spin = Titanium.UI.createAnimation();
		t = t.rotate(360);		
		spin.transform = t;
		spin.duration = 500;
		startScreen.decideButton.animate(spin);
		alert(guessed);				
	},
	textChangedFunction: function(e){
		if (doubts.alreadyIsAnElement(e.value))
			alert("No kiddin you have the same option twice?!?");
		else{
			if (e.value == "")
				alert("Are you kidding?");
			else{
				doubts.addDoubt(e.value);												
				startScreen.DoubtsTable.data = assignmets.getDataFromDoubtsInstance();
			}			
		}
		startScreen.inputQuestion.value = "";
	},	
	getDataFromDoubtsInstance: function(){	
		data = []
		for (var i=0; i < doubts.getSize(); i++) {
		  var row = Titanium.UI.createTableViewRow({
		  	height: 30
		  });		
		  var label = Titanium.UI.createLabel({
			 text: doubts.getDoubt(i),
			 font:{fontSize:16,fontWeight:'bold'},
			 width:'auto',
			 textAlign:'left',
			 color: '#000',
			 top:2,
			 left:33,
			 height:30
		  });
		  row.add(label);
		  data.push(row);		  
		};
		return data;
	}
}

var startScreen = {	
	win1: Titanium.UI.createWindow({  
	    title:'I just Can\'t find an answer!',
	    backgroundColor:'#000'
	}),	
	windowText: Titanium.UI.createLabel({
		color:'#999',
		text:'Give me a tip, bro...',
		font:{fontSize:16,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto',
		top: 10
	}),		
	questionText: Titanium.UI.createLabel({
		color:'#999',
		text:'I just can\'t decide between:',
		font:{fontSize:16,fontFamily:'Helvetica Neue'},
		textAlign:'center',
		width:'auto',
		top: 30
	}),	
	inputQuestion: Titanium.UI.createTextField({
		height: 40,
		width: 230,		
		hintText: "One option i have is...",
		top: 70,
		borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED		 			
	}),	
	DoubtsTable: Titanium.UI.createTableView({
		data: assignmets.getDataFromDoubtsInstance(),
		backgroundColor: '#fff',		
		height: 150,
		width: 200,
		top: 130
	}),
	decideButton: Titanium.UI.createButton({
		top: 300,
		height: 48,
		width: 48,			
		backgroundImage: "interrogation.png"
	})
}

createWidgets = function(){
	startScreen.inputQuestion.addEventListener("return", assignmets.textChangedFunction);
	startScreen.win1.add(startScreen.windowText);
	startScreen.win1.add(startScreen.questionText);
	startScreen.win1.add(startScreen.inputQuestion);	
	startScreen.win1.add(startScreen.DoubtsTable);
	startScreen.win1.add(startScreen.decideButton);
	startScreen.decideButton.addEventListener("click", assignmets.buttonClickEvent)	
}

createWidgets();
startScreen.win1.open();

