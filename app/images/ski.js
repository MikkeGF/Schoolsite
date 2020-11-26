(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ski_atlas_1", frames: [[0,0,1280,1074],[1282,0,640,640]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.hill = function() {
	this.initialize(ss["ski_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ski_1 = function() {
	this.initialize(ss["ski_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ski_1();
	this.instance.setTransform(0,0,0.3044,0.3589);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,194.8,229.7), null);


// stage content:
(lib.ski = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		playSound("iceskatingdaniel_simon");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(86));

	// Layer_4
	this.instance = new lib.Symbol1();
	this.instance.setTransform(137.05,-34.95,1,1,0,0,0,97.4,114.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9446,scaleY:1.0274,rotation:-29.9979,x:172.85,y:12.95},0).wait(1).to({scaleX:0.9488,scaleY:1.0321,rotation:-29.09,x:195.4,y:44.7},0).wait(1).to({scaleX:0.9531,scaleY:1.0367,rotation:-28.1821,x:205.7,y:61.4},0).wait(1).to({scaleX:0.9574,scaleY:1.0414,rotation:-27.2742,x:208.1,y:67.05},0).wait(1).to({scaleX:0.9617,scaleY:1.046,rotation:-26.3663,x:209.6,y:70.9},0).wait(1).to({scaleX:0.9659,scaleY:1.0507,rotation:-25.4584,x:210.85,y:74},0).wait(1).to({scaleX:0.9702,scaleY:1.0553,rotation:-24.5505,x:211.9,y:76.85},0).wait(1).to({scaleX:0.9745,scaleY:1.0599,rotation:-23.6426,x:212.9,y:79.4},0).wait(1).to({scaleX:0.9787,scaleY:1.0646,rotation:-22.7347,x:213.75,y:81.8},0).wait(1).to({scaleX:0.983,scaleY:1.0693,rotation:-21.8269,x:214.7,y:84.15},0).wait(1).to({scaleX:0.9873,scaleY:1.0739,rotation:-20.919,x:215.4,y:86.4},0).wait(1).to({scaleX:0.9916,scaleY:1.0786,rotation:-20.0111,x:216.25,y:88.6},0).wait(1).to({scaleX:0.9958,scaleY:1.0832,rotation:-19.1032,x:217.05,y:90.7},0).wait(1).to({scaleX:1.0001,scaleY:1.0878,rotation:-18.1953,x:217.8,y:92.85},0).wait(1).to({scaleX:1.0044,scaleY:1.0925,rotation:-17.2874,x:218.5,y:94.95},0).wait(1).to({scaleX:1.0087,scaleY:1.0971,rotation:-16.3795,x:219.25,y:97.05},0).wait(1).to({scaleX:1.0129,scaleY:1.1018,rotation:-15.4716,x:220,y:99.2},0).wait(1).to({scaleX:1.0172,scaleY:1.1064,rotation:-14.5637,x:220.75,y:101.3},0).wait(1).to({scaleX:1.0215,scaleY:1.1111,rotation:-13.6558,x:221.6,y:103.45},0).wait(1).to({scaleX:1.0258,scaleY:1.1157,rotation:-12.7479,x:222.35,y:105.7},0).wait(1).to({scaleX:1.03,scaleY:1.1204,rotation:-11.84,x:223.15,y:108},0).wait(1).to({scaleX:1.0343,scaleY:1.125,rotation:-10.9321,x:224,y:110.4},0).wait(1).to({scaleX:1.0386,scaleY:1.1297,rotation:-10.0242,x:224.95,y:112.95},0).wait(1).to({scaleX:1.0428,scaleY:1.1343,rotation:-9.1163,x:226,y:115.75},0).wait(1).to({scaleX:1.0471,scaleY:1.139,rotation:-8.2084,x:227.2,y:118.85},0).wait(1).to({scaleX:1.0514,scaleY:1.1436,rotation:-7.3005,x:228.6,y:122.7},0).wait(1).to({scaleX:1.0557,scaleY:1.1483,rotation:-6.9251,x:230.45,y:127.35},0).wait(1).to({scaleX:1.06,scaleY:1.1529,rotation:-6.5496,x:232.8,y:133},0).wait(1).to({scaleX:1.0642,scaleY:1.1575,rotation:-6.1741,x:236.05,y:140.4},0).wait(1).to({scaleX:1.0685,scaleY:1.1622,rotation:-5.7987,x:242.15,y:152.25},0).wait(1).to({scaleX:1.0728,scaleY:1.1668,rotation:-5.4232,x:265,y:179.6},0).wait(1).to({scaleX:1.077,scaleY:1.1715,rotation:-5.0477,x:275.95,y:185.85},0).wait(1).to({scaleX:1.0813,scaleY:1.1761,rotation:-4.6723,x:282.75,y:188.25},0).wait(1).to({scaleX:1.0856,scaleY:1.1808,rotation:-4.2968,x:288.2,y:189.55},0).wait(1).to({scaleX:1.0899,scaleY:1.1855,rotation:-3.9213,x:292.85,y:190.25},0).wait(1).to({scaleX:1.0941,scaleY:1.1901,rotation:-3.5458,x:297,y:190.55},0).wait(1).to({scaleX:1.0984,scaleY:1.1948,rotation:-3.1704,x:300.8,y:190.65},0).wait(1).to({scaleX:1.1027,scaleY:1.1994,rotation:-2.7949,x:304.35,y:190.8},0).wait(1).to({scaleX:1.107,scaleY:1.204,rotation:-2.4194,x:308,y:191.4},0).wait(1).to({scaleX:1.1112,scaleY:1.2087,rotation:-2.044,x:311.7,y:192.4},0).wait(1).to({scaleX:1.1155,scaleY:1.2133,rotation:-1.6685,x:315.4,y:193.75},0).wait(1).to({scaleX:1.1198,scaleY:1.218,rotation:-5.1707,x:319.15,y:195.4},0).wait(1).to({scaleX:1.124,scaleY:1.2226,rotation:-8.6729,x:323,y:197.6},0).wait(1).to({scaleX:1.1283,scaleY:1.2273,rotation:-12.1751,x:326.8,y:200.15},0).wait(1).to({scaleX:1.1326,scaleY:1.2319,rotation:-15.6773,x:330.65,y:203.1},0).wait(1).to({scaleX:1.1368,scaleY:1.2366,rotation:-19.1795,x:334.65,y:206.4},0).wait(1).to({scaleX:1.1411,scaleY:1.2412,rotation:-22.6816,x:338.55,y:210.25},0).wait(1).to({scaleX:1.1454,scaleY:1.2459,rotation:-26.1838,x:342.5,y:214.35},0).wait(1).to({scaleX:1.1497,scaleY:1.2505,rotation:-29.686,x:346.6,y:219},0).wait(1).to({scaleX:1.1539,scaleY:1.2551,rotation:-33.1882,x:350.7,y:224.05},0).wait(1).to({scaleX:1.1582,scaleY:1.2598,rotation:-36.6904,x:354.8,y:229.5},0).wait(1).to({scaleX:1.1625,scaleY:1.2644,rotation:-40.1926,x:359,y:235.5},0).wait(1).to({scaleX:1.1667,scaleY:1.2691,x:363.2,y:241.85},0).wait(1).to({scaleX:1.171,scaleY:1.2737,x:367.45,y:248.75},0).wait(1).to({scaleX:1.1753,scaleY:1.2784,x:371.8,y:256.15},0).wait(1).to({scaleX:1.1796,scaleY:1.283,x:376.2,y:263.95},0).wait(1).to({scaleX:1.1838,scaleY:1.2877,x:380.65,y:272.35},0).wait(1).to({scaleX:1.1881,scaleY:1.2923,x:385.1,y:281.35},0).wait(1).to({scaleX:1.1924,scaleY:1.297,x:389.6,y:290.85},0).wait(1).to({scaleX:1.1966,scaleY:1.3016,x:394.25,y:301.05},0).wait(1).to({scaleX:1.2009,scaleY:1.3063,x:398.9,y:311.85},0).wait(1).to({scaleX:1.2052,scaleY:1.3109,x:403.6,y:323.45},0).wait(1).to({scaleX:1.2095,scaleY:1.3155,x:408.5,y:336},0).wait(1).to({scaleX:1.2137,scaleY:1.3202,x:413.45,y:349.85},0).wait(1).to({scaleX:1.218,scaleY:1.3248,x:427.35,y:349.9},0).wait(1).to({scaleX:1.2223,scaleY:1.3295,x:441.25,y:349.85},0).wait(1).to({scaleX:1.2266,scaleY:1.3341,x:455.1,y:349.9},0).wait(1).to({scaleX:1.2308,scaleY:1.3388,x:468.95},0).wait(1).to({scaleX:1.2351,scaleY:1.3434,x:482.85,y:349.85},0).wait(1).to({scaleX:1.2394,scaleY:1.3481,x:496.7},0).wait(1).to({scaleX:1.2436,scaleY:1.3527,x:510.6,y:349.9},0).wait(1).to({scaleX:1.2479,scaleY:1.3574,x:524.5},0).wait(1).to({scaleX:1.2522,scaleY:1.362,x:538.35},0).wait(1).to({scaleX:1.2565,scaleY:1.3667,x:552.25,y:349.85},0).wait(1).to({scaleX:1.2607,scaleY:1.3713,x:566.1},0).wait(1).to({scaleX:1.265,scaleY:1.376,x:580,y:349.9},0).wait(1).to({scaleX:1.2693,scaleY:1.3806,x:593.85},0).wait(1).to({scaleX:1.2736,scaleY:1.3853,x:607.7},0).wait(1).to({scaleX:1.2778,scaleY:1.3899,x:621.55},0).wait(1).to({scaleX:1.2821,scaleY:1.3946,x:635.5,y:349.85},0).wait(1).to({scaleX:1.2864,scaleY:1.3992,x:649.35,y:349.9},0).wait(1).to({scaleX:1.2906,scaleY:1.4038,x:663.25,y:349.85},0).wait(1).to({scaleX:1.2949,scaleY:1.4085,x:677.15},0).wait(1).to({scaleX:1.2992,scaleY:1.4131,x:691,y:349.9},0).wait(1).to({scaleX:1.3035,scaleY:1.4178,x:704.9,y:349.85},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.hill();
	this.instance_1.setTransform(-112,0,0.4525,0.4525);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(208,50.2,698.9,505.90000000000003);
// library properties:
lib.properties = {
	id: '57B59EB45AF3824A99A513A1AC9AC6A6',
	width: 640,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/ski_atlas_1.png", id:"ski_atlas_1"},
		{src:"sounds/iceskatingdaniel_simon.mp3", id:"iceskatingdaniel_simon"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['57B59EB45AF3824A99A513A1AC9AC6A6'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;