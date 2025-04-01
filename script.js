(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.fir_spectrometer = function() {
	this.initialize(img.fir_spectrometer);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2100,1500);// helper functions:

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("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");
	this.shape.setTransform(16.5232,351.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,33.1,704), null);


(lib.laser = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AylSoQnrntgBq3IAAgEQAAq5HsntQHtnuK4AAQK4AAHtHuQHoHoAFKyIAAAMQAAK6ntHuQntHtq4AAQq4AAntntg");
	mask.setTransform(11.15,647.25);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(16.5,466.6,1,1,0,0,0,16.5,351.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:352,y:480.55},0).wait(1).to({y:494.4},0).wait(1).to({y:508.25},0).wait(1).to({y:522.15},0).wait(1).to({y:536},0).wait(1).to({y:549.85},0).wait(1).to({y:563.75},0).wait(1).to({y:577.6},0).wait(1).to({y:591.45},0).wait(1).to({y:605.35},0).wait(1).to({y:619.2},0).wait(1).to({y:633.05},0).wait(1).to({y:646.9},0).wait(1).to({y:660.8},0).wait(1).to({y:674.65},0).wait(1).to({y:688.5},0).wait(1).to({y:702.4},0).wait(1).to({y:716.25},0).wait(1).to({y:730.1},0).wait(1).to({y:744},0).wait(1).to({y:757.85},0).wait(1).to({y:771.7},0).wait(1).to({y:785.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,467.6,33.1,348.19999999999993);


// stage content:
(lib.RECOVER_fir_spectrometer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// labels
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgfAlQgOgNAAgXQAAgWAPgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg8AAQABAVAYAAQAQAAAMgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAhAAQAAgUgQAAQgGAAgFAGg");
	this.shape.setTransform(820.7,106.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAGAAQAIAAAEgDQAEgCABgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgEgDgBgFQgBgDAAgHQAAgHADgGQADgGAGgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGAAIgDACIgEACIgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAFACIAGACIAKAFQAFACADACQAEAEACAEQACAFgBAFQAAAJgDAGQgEAGgGADQgGAEgIACQgIACgIAAQgPAAgNgFg");
	this.shape_1.setTransform(811.4,106.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAggEIAZgDQAAgQgQAAQgRAAgPAKIAAgWQAHgDAKgDQAKgCAIAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgRAAQgOAAgIgIgAgBAFQgOABAAALQAAAFADAEQAEADAGAAQAHAAAFgFQAFgHAAgIIAAgGg");
	this.shape_2.setTransform(801.8,106.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAlQgNgNABgXQgBgWAOgOQAOgOATAAQAVAAAMAMQAKANABAVIAAALIg9AAQABAVAYAAQAQAAALgHIAAAVQgNAHgVAAQgWAAgNgNgAgJgXQgFAGgBAIIAiAAQAAgUgRAAQgGAAgFAGg");
	this.shape_3.setTransform(791.85,106.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgkAtIAAgYQAIAEAHACQAHADAHAAQAHAAAEgDQAFgCgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgFgCIgGgDIgHgDIgKgEQgFgCgDgDQgDgDgBgFQgCgDAAgHQAAgHAEgGQAEgGAGgDQAFgEAHgCQAIgCAHAAIANABIANADIAAAXIgMgFQgGgCgHAAIgFAAIgEACIgCACIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAGACIAGACIALAFQAEACAEACQADAEACAEQACAFAAAFQAAAJgEAGQgEAGgGADQgGAEgIACQgIACgHAAQgQAAgOgFg");
	this.shape_4.setTransform(782.55,106.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOBGIAAheIAcAAIAABegAgLgsQgFgEAAgGQAAgHAFgEQAFgEAGAAQAHAAAFAEQAFAEAAAHQAAAGgFAEQgFAFgHAAQgGAAgFgFg");
	this.shape_5.setTransform(775.625,104.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglA7QgMgNAAgWQAAgYANgNQALgPAUAAQASAAAGAOIABAAIAAg5IAdAAIAACMIgdAAIAAgNIgBAAQgKAPgSAAQgSAAgKgMgAgNACQgGAIABANQAAAMAEAHQAGAHAIAAQAKAAAFgIQAFgHAAgLIAAgIQAAgJgFgGQgFgFgJAAQgJAAgFAHg");
	this.shape_6.setTransform(766.75,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgfAlQgNgNgBgXQABgWAOgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg9AAQACAVAYAAQAQAAALgHIAAAVQgNAHgVAAQgWAAgMgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_7.setTransform(750.85,106.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_8.setTransform(742.95,104.175);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAdgIIAAAdIAVAAIAAAVIgVAAIAAAmQAAAPALAAQAFAAAFgDIAAAWQgHADgNAAQgeAAAAggg");
	this.shape_9.setTransform(736.55,105.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAHAAQAHAAAEgDQAFgCAAgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgFgCIgGgDIgHgDIgKgEQgEgCgEgDQgDgDgBgFQgBgDAAgHQgBgHAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgGgCgHAAIgFAAIgEACIgDACIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAEACIAHACIAKAFQAFACAEACQADAEACAEQABAFABAFQgBAJgDAGQgEAGgGADQgGAEgIACQgIACgHAAQgQAAgNgFg");
	this.shape_10.setTransform(728.75,106.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAhgEIAZgDQgBgQgPAAQgRAAgQAKIAAgWQAGgDALgDQAKgCAIAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgRAAQgPAAgHgIgAgBAFQgOABAAALQAAAFAEAEQACADAHAAQAHAAAFgFQAFgHABgIIAAgGg");
	this.shape_11.setTransform(719.15,106.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgYAkQgOgNAAgUQAAgYAPgOQAOgOAXAAQARAAAIAEIAAAaQgKgIgKAAQgNAAgHAIQgHAHAAAMQAAANAHAHQAGAIANgBQAKAAALgGIAAAXQgKAGgTAAQgUAAgOgOg");
	this.shape_12.setTransform(709.75,106.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAQAwIgOg3IgCgMIAAAAIgBALIgPA4IgeAAIgbhfIAeAAIANA+IABAKIABAAIABgLIARg9IAbAAIAOA+IACAKIAAAAIACgKIAMg+IAbAAIgbBfg");
	this.shape_13.setTransform(697.625,106.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggAlQgNgNAAgXQAAgWAPgOQANgOATAAQAVAAAMAMQALANgBAVIAAALIg9AAQACAVAYAAQAPAAAMgHIAAAVQgNAHgVAAQgWAAgNgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_14.setTransform(684.95,106.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AARAxIAAg0QAAgWgQAAQgHAAgFAGQgFAGAAAJIAAA1IgdAAIAAheIAdAAIAAAPIABAAQAKgSATAAQAgAAAAAoIAAA5g");
	this.shape_15.setTransform(674.075,106.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIAAAAQAHgTASAAIAHABIAAAbQgFgDgIAAQgJAAgFAHQgFAHAAALIAAAtg");
	this.shape_16.setTransform(876.85,80.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglAkQgOgNABgXQAAgWAOgOQAOgNAXAAQAXAAAOANQANAOAAAVQABAYgOANQgOAOgYAAQgXAAgOgOgAgPgTQgFAHgBAMQAAAbAWAAQAUAAABgbQgBgbgUAAQgKAAgGAIg");
	this.shape_17.setTransform(866.7,80.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSBIIAAhJIgQAAIAAgWIAQAAIAAgLQAAgRAKgJQAKgKASAAQAJAAAGACIAAAWQgGgCgFAAQgOAAAAAQIAAAJIAWAAIAAAWIgWAAIAABJg");
	this.shape_18.setTransform(857.525,78.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAcgIIAAAdIAWAAIAAAVIgWAAIAAAmQAAAPAMAAQAFAAAFgDIAAAWQgGADgOAAQgeAAAAggg");
	this.shape_19.setTransform(844.7,79.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkAtIAAgYQAIAEAHACQAHADAGAAQAIAAAEgDQAFgCgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBgBIgFgCIgGgDIgHgDIgKgEQgFgCgDgDQgCgDgCgFQgCgDAAgHQAAgHAEgGQADgGAHgDQAFgEAHgCQAIgCAHAAIANABIANADIAAAXIgMgFQgHgCgGAAIgFAAIgEACIgCACIgBAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAGACIAGACIALAFQAEACAEACQADAEACAEQABAFAAAFQAAAJgDAGQgEAGgGADQgGAEgIACQgIACgHAAQgQAAgOgFg");
	this.shape_20.setTransform(836.9,80.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgfAlQgOgNAAgXQAAgWAOgOQAOgOATAAQAVAAALAMQAMANAAAVIAAALIg9AAQABAVAYAAQAPAAANgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAiAAQgBgUgQAAQgGAAgFAGg");
	this.shape_21.setTransform(827.55,80.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAdgIIAAAdIAVAAIAAAVIgVAAIAAAmQAAAPALAAQAFAAAFgDIAAAWQgHADgNAAQgeAAAAggg");
	this.shape_22.setTransform(818.65,79.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AglAkQgNgNAAgXQAAgWAOgOQAOgNAXAAQAYAAANANQANAOAAAVQAAAYgOANQgOAOgXAAQgXAAgOgOgAgPgTQgFAHAAAMQAAAbAUAAQAWAAAAgbQAAgbgWAAQgJAAgGAIg");
	this.shape_23.setTransform(803.95,80.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAcgIIAAAdIAWAAIAAAVIgWAAIAAAmQAAAPAMAAQAFAAAFgDIAAAWQgHADgNAAQgeAAAAggg");
	this.shape_24.setTransform(794.45,79.475);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgmA7QgLgNABgXQgBgXAMgNQANgPATAAQASAAAHAOIAAAAIAAg5IAdAAIAACMIgdAAIAAgNIAAAAQgLAPgSAAQgRAAgMgMgAgNACQgGAIAAANQAAAMAGAHQAFAHAJAAQAIAAAGgIQAFgHABgLIAAgIQgBgJgFgGQgFgFgJAAQgJAAgFAHg");
	this.shape_25.setTransform(779.4,78.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgkAkQgOgNgBgXQAAgWAPgOQAOgNAXAAQAYAAANANQAOAOAAAVQAAAYgOANQgOAOgYAAQgXAAgNgOgAgPgTQgGAHAAAMQAAAbAWAAQAUAAAAgbQAAgbgUAAQgKAAgGAIg");
	this.shape_26.setTransform(768,80.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkAkQgOgNgBgXQAAgWAPgOQAOgNAXAAQAXAAAOANQAOAOAAAVQAAAYgPANQgNAOgYAAQgXAAgNgOgAgPgTQgGAHABAMQgBAbAWAAQAVAAgBgbQABgbgVAAQgKAAgGAIg");
	this.shape_27.setTransform(756.4,80.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_28.setTransform(747.9,78.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgTA6IAAAAIAAALIgdAAIAAiMIAdAAIAAA8IAAAAQALgQATgBQATABAJANQAKAMAAAVQAAAYgLAOQgMAOgTAAQgRAAgJgNgAgOAAQgGAIAAAKIAAAJQAAAKAGAGQAFAGAIAAQAJAAAGgIQAFgHAAgPQAAgMgFgGQgFgGgJAAQgIAAgGAFg");
	this.shape_29.setTransform(739.575,78.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAQAwIgOg3IgCgMIAAAAIgBALIgPA4IgeAAIgbhfIAeAAIANA+IABAKIABAAIABgLIARg9IAbAAIAOA+IACAKIAAAAIACgKIAMg+IAbAAIgbBfg");
	this.shape_30.setTransform(720.625,80.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkAkQgOgNgBgXQAAgWAPgOQAOgNAXAAQAYAAANANQAOAOAAAVQAAAYgOANQgOAOgYAAQgXAAgNgOgAgPgTQgGAHAAAMQAAAbAWAAQAUAAAAgbQAAgbgUAAQgKAAgGAIg");
	this.shape_31.setTransform(707.25,80.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgZAkQgNgNAAgUQAAgYAOgOQAPgOAXAAQASAAAHAEIAAAaQgJgIgLAAQgOAAgFAIQgIAHAAAMQAAANAHAHQAGAIANgBQALAAAKgGIAAAXQgKAGgTAAQgUAAgPgOg");
	this.shape_32.setTransform(696.9,80.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgSBIIAAhJIgQAAIAAgWIAQAAIAAgLQAAgRAKgJQAKgKASAAQAJAAAGACIAAAWQgGgCgFAAQgOAAAAAQIAAAJIAWAAIAAAWIgWAAIAABJg");
	this.shape_33.setTransform(683.775,78.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgkAkQgOgNgBgXQAAgWAPgOQAOgNAXAAQAXAAAOANQAOAOAAAVQAAAYgPANQgNAOgYAAQgXAAgNgOgAgPgTQgGAHABAMQgBAbAVAAQAWAAgBgbQABgbgWAAQgJAAgGAIg");
	this.shape_34.setTransform(674.05,80.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgfAlQgOgMAAgYQAAgWAPgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg8AAQABAVAYAAQAPAAANgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAhAAQAAgUgQAAQgGAAgFAGg");
	this.shape_35.setTransform(938.15,55.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgOBGIAAiLIAcAAIAACLg");
	this.shape_36.setTransform(930.25,52.875);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgwBHIAAiKIAdAAIAAAOIAAAAQALgQATgBQASABAKANQAKAMAAAWQAAAXgLAOQgMAOgUAAQgQAAgJgNIAAAAIAAA3gAgOgoQgGAHAAALIAAAHQAAALAGAEQAFAHAIAAQAJAAAGgHQAFgHAAgPQAAgZgTAAQgIAAgGAHg");
	this.shape_37.setTransform(921.925,57.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAuAxIAAg1QAAgVgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAg2QAAgUgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAheIAdAAIAAAPIAAAAQAFgIAIgFQAIgFAKAAQATAAAIASQAKgSAVAAQAfAAAAAnIAAA6g");
	this.shape_38.setTransform(907.125,55.025);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAhgEIAYgDQAAgQgPAAQgRAAgQAKIAAgWQAHgDAKgDQALgCAHAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgSAAQgNAAgIgIgAgBAFQgOABAAALQAAAFADAEQAEADAFAAQAIAAAFgFQAGgHgBgIIAAgGg");
	this.shape_39.setTransform(893,55.15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgkAtIAAgYQAIAEAHACQAHADAGAAQAIAAAEgDQAFgCgBgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgDgDgCgFQgBgDgBgHQABgHADgGQADgGAHgDQAFgEAHgCQAIgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGABIgDABIgDACIgCAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAGACIAGACIALAFQAEACAEACQADAEACAEQABAFAAAFQABAJgEAGQgEAGgGADQgGAEgIACQgIACgIAAQgPAAgOgFg");
	this.shape_40.setTransform(884.05,55.15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAhgEIAZgDQAAgQgQAAQgSAAgPAKIAAgWQAHgDAKgDQAKgCAIAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgSAAQgOAAgHgIgAgBAFQgOABAAALQAAAFADAEQAEADAFAAQAIAAAFgFQAGgHAAgIIAAgGg");
	this.shape_41.setTransform(869.25,55.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAQBGIAAg2QAAgUgPAAQgHAAgFAFQgEAGAAAJIAAA2IgeAAIAAiLIAeAAIAAA7IAAAAQALgQASAAQAfAAAAAmIAAA6g");
	this.shape_42.setTransform(853.55,52.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgoBCIAAgZQAPAIAPAAQAOABAIgJQAIgHAAgNIAAgIQgKAQgTAAQgSAAgLgNQgLgNAAgUQABgZALgOQANgOATAAQAQAAAJANIAAgLIAdAAIAABTQAAAbgPAPQgPAOgcAAQgTAAgMgFgAgNgoQgGAIAAANQABAMAEAHQAGAGAIAAQAJAAAGgGQAFgHABgLIAAgHQAAgJgGgHQgFgGgIgBQgKAAgFAIg");
	this.shape_43.setTransform(841.6,57.25);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgtAJIAAg5IAdAAIAAA2QAAAUAQAAQAHAAAFgFQAFgGAAgJIAAg2IAdAAIAABeIgdAAIAAgOIgBAAQgLARgRAAQghAAAAgog");
	this.shape_44.setTransform(830.175,55.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgkAkQgPgNAAgXQAAgWAPgOQAOgNAXAAQAXAAAOANQAOAOAAAVQgBAYgOANQgOAOgXAAQgXAAgNgOgAgPgTQgGAHABAMQAAAbAUAAQAWAAAAgbQAAgbgWAAQgJAAgGAIg");
	this.shape_45.setTransform(818.7,55.15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIAAAAQAGgTATAAIAHABIAAAbQgFgDgIAAQgJAAgFAHQgFAHAAALIAAAtg");
	this.shape_46.setTransform(809.7,55.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AARBGIAAg2QAAgUgQAAQgHAAgEAFQgGAGAAAJIAAA2IgdAAIAAiLIAdAAIAAA7IABAAQALgQASAAQAfAAAAAmIAAA6g");
	this.shape_47.setTransform(799.7,52.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAdgIIAAAdIAVAAIAAAVIgVAAIAAAmQAAAPALAAQAFAAAFgDIAAAWQgHADgNAAQgeAAAAggg");
	this.shape_48.setTransform(790.2,53.825);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgkAtIAAgYQAIAEAHACQAHADAGAAQAIAAAEgDQAEgCAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgEgDgBgFQgBgDgBgHQABgHADgGQADgGAGgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGABIgDABIgEACIgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAFACIAGACIAKAFQAFACADACQAEAEACAEQACAFgBAFQAAAJgDAGQgEAGgGADQgGAEgIACQgIACgIAAQgPAAgOgFg");
	this.shape_49.setTransform(777.2,55.15);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AguBDIAAgXQAGAEAHAAQAMAAAEgLIAFgMIgnheIAhAAIASA6IABAMIABAAQAAgFADgHIASg6IAdAAIgnBmQgNAlgcAAQgLAAgHgDg");
	this.shape_50.setTransform(767.875,57.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAhgEIAZgDQgBgQgPAAQgRAAgQAKIAAgWQAGgDALgDQAKgCAIAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgRAAQgPAAgHgIgAgBAFQgOABAAALQAAAFAEAEQACADAHAAQAHAAAFgFQAFgHABgIIAAgGg");
	this.shape_51.setTransform(757.4,55.15);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIAAAAQAHgTARAAIAIABIAAAbQgGgDgGAAQgKAAgFAHQgFAHAAALIAAAtg");
	this.shape_52.setTransform(749.35,55.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AglA7QgLgNAAgXQAAgXALgNQANgPATAAQARAAAHAOIABAAIAAg5IAeAAIAACMIgeAAIAAgNIgBAAQgJAPgTAAQgSAAgKgMgAgNACQgFAIAAANQgBAMAGAHQAFAHAIAAQAKAAAFgIQAGgHgBgLIAAgIQABgJgGgGQgFgFgJAAQgJAAgFAHg");
	this.shape_53.setTransform(733.65,53);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfAlQgOgMAAgYQABgWAOgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg9AAQACAVAYAAQAQAAALgHIAAAVQgNAHgVAAQgWAAgMgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_54.setTransform(722.95,55.15);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIABAAQAFgTATAAIAHABIAAAbQgGgDgHAAQgJAAgGAHQgEAHAAALIAAAtg");
	this.shape_55.setTransform(714.55,55.075);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAggEIAagDQgBgQgPAAQgRAAgQAKIAAgWQAGgDALgDQALgCAHAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgRAAQgPAAgHgIgAgBAFQgOABAAALQAAAFAEAEQACADAHAAQAHAAAFgFQAFgHABgIIAAgGg");
	this.shape_56.setTransform(704.85,55.15);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIABAAQAFgTASAAIAIABIAAAbQgGgDgGAAQgKAAgGAHQgEAHAAALIAAAtg");
	this.shape_57.setTransform(696.8,55.075);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgSBIIAAhJIgQAAIAAgWIAQAAIAAgLQAAgRAKgJQAKgKASAAQAJAAAGACIAAAWQgGgCgFAAQgOAAAAAQIAAAJIAWAAIAAAWIgWAAIAABJg");
	this.shape_58.setTransform(689.075,52.75);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AARAxIAAg0QAAgWgQAAQgHAAgFAGQgFAGAAAJIAAA1IgdAAIAAheIAdAAIAAAPIABAAQAKgSATAAQAgAAAAAoIAAA5g");
	this.shape_59.setTransform(679.475,55.025);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgOBGIAAheIAcAAIAABegAgLgsQgFgEAAgGQAAgHAFgEQAFgEAGAAQAHAAAFAEQAFAEAAAHQAAAGgFAEQgFAFgHAAQgGAAgFgFg");
	this.shape_60.setTransform(670.975,52.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAGAAQAIAAAEgDQAEgCABgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgEgDgBgFQgBgDAAgHQAAgHADgGQADgGAGgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGAAIgDACIgEACIgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAFACIAGACIAKAFQAFACADACQAEAEACAEQACAFgBAFQAAAJgDAGQgEAGgGAEQgGADgIACQgIACgIAAQgPAAgNgFg");
	this.shape_61.setTransform(883.85,29.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgfAlQgNgNgBgXQABgWAOgOQANgOATAAQAVAAAMAMQALANgBAVIAAALIg9AAQACAVAYAAQAPAAAMgHIAAAVQgNAHgVAAQgWAAgMgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_62.setTransform(874.5,29.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAHAAQAHAAAEgDQAEgCABgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgFgCgDgDQgCgDgCgFQgCgDABgHQgBgHAEgGQAEgGAFgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgGgCgGAAIgGAAIgEACIgDACIAAAEQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAEACIAHACIAKAFQAFACADACQAEAEACAEQABAFABAFQgBAJgDAGQgEAGgGAEQgGADgIACQgIACgHAAQgQAAgNgFg");
	this.shape_63.setTransform(865.2,29.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAGAAQAIAAAEgDQAEgCABgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgEgDgBgFQgBgDAAgHQAAgHADgGQADgGAGgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGAAIgDACIgEACIgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAFACIAGACIAKAFQAFACADACQAEAEACAEQACAFgBAFQAAAJgDAGQgEAGgGAEQgGADgIACQgIACgIAAQgPAAgNgFg");
	this.shape_64.setTransform(856.85,29.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAggEIAZgDQAAgQgQAAQgRAAgPAKIAAgWQAHgDAKgDQAKgCAIAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgRAAQgOAAgIgIgAgBAFQgOABAAALQAAAFADAEQAEADAFAAQAIAAAFgFQAFgHAAgIIAAgGg");
	this.shape_65.setTransform(847.25,29.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgwBHIAAiKIAdAAIAAAOIAAAAQALgQATgBQASABAKANQAKAMAAAWQAAAXgLAOQgMAOgUAAQgQAAgJgNIAAAAIAAA3gAgOgoQgGAHAAALIAAAHQAAALAGAEQAFAHAIAAQAJAAAGgHQAFgHAAgPQAAgZgTAAQgIAAgGAHg");
	this.shape_66.setTransform(836.775,31.55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIABAAQAFgTATAAIAHABIAAAbQgFgDgIAAQgJAAgGAHQgEAHAAALIAAAtg");
	this.shape_67.setTransform(822.2,29.425);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AggAlQgNgNABgXQAAgWAOgOQANgOATAAQAVAAAMAMQALANgBAVIAAALIg9AAQACAVAYAAQAPAAAMgHIAAAVQgNAHgVAAQgWAAgNgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_68.setTransform(812.75,29.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAcgIIAAAdIAWAAIAAAVIgWAAIAAAmQAAAPAMAAQAFAAAFgDIAAAWQgGADgOAAQgeAAAAggg");
	this.shape_69.setTransform(803.85,28.175);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgfAlQgOgNAAgXQAAgWAPgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg8AAQABAVAYAAQAQAAAMgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAhAAQAAgUgQAAQgGAAgFAGg");
	this.shape_70.setTransform(795.05,29.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAuAxIAAg1QAAgVgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAg2QAAgUgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAheIAdAAIAAAPIAAAAQAFgIAIgFQAIgFAKAAQATAAAIASQAKgSAVAAQAfAAAAAnIAAA6g");
	this.shape_71.setTransform(781.225,29.375);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgkAkQgOgNgBgXQAAgWAPgOQAOgNAXAAQAYAAANANQAOAOAAAVQAAAYgPANQgNAOgYAAQgXAAgNgOgAgPgTQgGAHAAAMQAAAbAWAAQAUAAAAgbQAAgbgUAAQgKAAgGAIg");
	this.shape_72.setTransform(766.65,29.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgeAwIAAheIAdAAIAAASIABAAQAFgTASAAIAIABIAAAbQgGgDgGAAQgKAAgGAHQgEAHAAALIAAAtg");
	this.shape_73.setTransform(757.65,29.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgRAfIAAgrIgPAAIAAgVIAPAAIAAgVIAdgIIAAAdIAVAAIAAAVIgVAAIAAAmQAAAPALAAQAFAAAFgDIAAAWQgHADgNAAQgeAAAAggg");
	this.shape_74.setTransform(749.6,28.175);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgYAkQgOgNAAgUQAAgYAOgOQAPgOAXAAQASAAAHAEIAAAZQgJgHgLAAQgOAAgFAIQgIAHAAAMQAAANAHAHQAGAIANgBQAKAAALgGIAAAXQgKAGgTAAQgUAAgOgOg");
	this.shape_75.setTransform(741.35,29.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgfAlQgOgNAAgXQAAgWAOgOQAOgOATAAQAVAAALAMQAMANAAAVIAAALIg9AAQABAVAYAAQAPAAANgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAiAAQgBgUgQAAQgGAAgFAGg");
	this.shape_76.setTransform(731.7,29.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgwBHIAAiKIAdAAIAAAOIAAAAQALgQATgBQASABAKANQAKAMAAAWQAAAXgLAOQgMAOgUAAQgQAAgJgNIAAAAIAAA3gAgOgoQgGAHAAALIAAAHQAAALAGAEQAFAHAIAAQAJAAAGgHQAFgHAAgPQAAgZgTAAQgIAAgGAHg");
	this.shape_77.setTransform(720.875,31.55);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgjAtIAAgYQAHAEAHACQAHADAGAAQAIAAAEgDQAEgCABgEQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgCgDgDQgEgDgBgFQgBgDAAgHQAAgHADgGQADgGAGgDQAGgEAIgCQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGAAIgDACIgEACIgBAEQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAFAEIAFACIAGACIAKAFQAFACADACQAEAEACAEQACAFgBAFQAAAJgDAGQgEAGgGAEQgGADgIACQgIACgIAAQgPAAgNgFg");
	this.shape_78.setTransform(710.6,29.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgfAlQgOgNAAgXQAAgWAPgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg8AAQABAVAYAAQAQAAAMgHIAAAVQgOAHgVAAQgWAAgMgNgAgJgXQgGAGAAAIIAhAAQAAgUgQAAQgGAAgFAGg");
	this.shape_79.setTransform(696.05,29.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AARBGIAAg2QAAgUgQAAQgGAAgFAFQgGAGAAAJIAAA2IgcAAIAAiLIAcAAIAAA7IABAAQALgQARAAQAhAAAAAmIAAA6g");
	this.shape_80.setTransform(685.2,27.225);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgOBDIAAhsIgmAAIAAgYIBpAAIAAAYIgmAAIAABsg");
	this.shape_81.setTransform(673.825,27.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgfAlQgNgNgBgWQABgXAOgOQANgOATAAQAVAAALAMQALANAAAVIAAALIg9AAQACAVAYAAQAQAAALgHIAAAVQgNAHgVAAQgWAAgMgNgAgJgXQgGAGgBAIIAiAAQAAgUgQAAQgGAAgFAGg");
	this.shape_82.setTransform(942.1,593.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgNBGIAAiLIAbAAIAACLg");
	this.shape_83.setTransform(934.2,591.175);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgwBGIAAiJIAdAAIAAAOIAAAAQALgRATAAQASAAAKAOQAKAMAAAWQAAAXgLAOQgMAOgUAAQgQAAgJgNIAAAAIAAA2gAgOgoQgGAHAAALIAAAHQAAALAGAEQAFAHAIAAQAJAAAGgHQAFgIAAgOQAAgZgTAAQgIAAgGAHg");
	this.shape_84.setTransform(925.875,595.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAuAxIAAg1QAAgVgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAg2QAAgUgPAAQgHAAgFAGQgEAGAAAKIAAA0IgdAAIAAheIAdAAIAAAPIAAAAQAFgIAIgFQAIgFAKAAQATAAAIASQAKgSAVAAQAfAAAAAnIAAA6g");
	this.shape_85.setTransform(911.075,593.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgiAqQgIgIAAgNQAAgbAggEIAZgDQABgQgRAAQgRAAgPAKIAAgWQAGgDALgDQALgCAHAAQApAAAAAoIAAA5IgcAAIAAgOQgKAQgSAAQgNAAgIgIgAgBAFQgOACAAAKQAAAFADAEQADADAGAAQAIAAAFgGQAGgFgBgJIAAgGg");
	this.shape_86.setTransform(896.95,593.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgkAtIAAgYQAIAFAHABQAHADAGAAQAIAAAEgDQAEgBAAgFQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIgGgCIgGgDIgHgDIgKgEQgEgDgDgCQgDgDgCgFQgBgDgBgHQABgHADgGQADgGAHgDQAFgFAIgBQAHgCAHAAIANABIANADIAAAXIgMgFQgHgCgFAAIgGAAIgDACIgEADIgBADQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAGACIAGACIALAFQAEACADACQAEADACAFQACAEgBAGQABAJgEAGQgEAGgGADQgGAEgIACQgIACgIAAQgPAAgOgFg");
	this.shape_87.setTransform(888,593.45);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AglA7QgMgNAAgXQAAgXANgNQAMgPATAAQARAAAHAOIABAAIAAg4IAdAAIAACLIgdAAIAAgNIgBAAQgJAPgTAAQgSAAgKgMgAgNACQgGAIABANQAAAMAEAHQAGAHAJAAQAJAAAFgIQAFgHAAgLIAAgIQAAgIgFgGQgFgGgJAAQgIAAgGAHg");
	this.shape_88.setTransform(872.4,591.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AglAkQgOgNAAgXQAAgWAPgOQAOgNAXAAQAYAAANANQAOAOAAAVQgBAYgOANQgOAOgXAAQgXAAgOgOgAgPgTQgGAHABAMQAAAbAUAAQAWAAAAgbQAAgbgWAAQgJAAgGAIg");
	this.shape_89.setTransform(861,593.45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AglAkQgNgNAAgXQAAgWAOgOQAOgNAXAAQAYAAANANQANAOAAAVQAAAYgOANQgOAOgXAAQgXAAgOgOgAgPgTQgFAHAAAMQAAAbAUAAQAWAAAAgbQAAgbgWAAQgJAAgGAIg");
	this.shape_90.setTransform(849.4,593.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgOBGIAAiLIAcAAIAACLg");
	this.shape_91.setTransform(840.9,591.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgxBDIAAiEIAwAAQAWgBAMAJQAMAIAAAOQAAAMgHAHQgIAIgLAEIAAAAQAOACAIAIQAJAJAAAMQAAASgNALQgNALgWAAgAgTAsIAQAAQAKAAAGgEQAFgFABgJQAAgHgGgFQgGgFgKAAIgQAAgAgTgMIAOAAQAHAAAGgFQAFgEAAgIQAAgPgUAAIgMAAg");
	this.shape_92.setTransform(832.5,591.55);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AAQAwIgOg3IgCgNIAAAAIgBAMIgPA4IgeAAIgbhfIAeAAIANA9IABALIABAAIABgLIARg9IAbAAIAOA9IACALIAAAAIACgLIAMg9IAbAAIgbBfg");
	this.shape_93.setTransform(813.225,593.45);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgkAkQgOgNAAgXQgBgWAPgOQAOgNAXAAQAXAAAOANQANAOAAAVQAAAYgNANQgPAOgXAAQgXAAgNgOgAgPgTQgGAHAAAMQAAAbAWAAQAUAAAAgbQAAgbgUAAQgKAAgGAIg");
	this.shape_94.setTransform(799.85,593.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AghAzQgSgSAAgeQAAgfAUgUQAUgUAeAAQATAAAOAFIAAAdQgOgIgRAAQgSAAgLAMQgLAMAAASQAAAUALAMQAJALATAAQARAAAPgJIAAAcQgPAHgXAAQgeAAgRgSg");
	this.shape_95.setTransform(788.075,591.55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgrBFIAAiGIAqAAIAAAZIAAAAQAJgcAaAAQAHAAADACIAAAmQgHgEgKAAQgOAAgHAKQgHAKAAAQIAABBg");
	this.shape_96.setTransform(409.45,499.675);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AguA1QgSgTAAggQAAghAUgTQATgUAcAAQAdAAAQASQARARAAAeIAAARIhXAAQACAdAiAAQAWAAARgLIAAAfQgTAKgeAAQggAAgSgSgAgOghQgHAIgCAMIAxAAQAAgdgYAAQgJAAgHAJg");
	this.shape_97.setTransform(396.125,499.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgYAsIAAg9IgWAAIAAgfIAWAAIAAgdIApgMIAAApIAeAAIAAAfIgeAAIAAA2QAAAVAQAAQAHAAAHgEIAAAfQgJAFgTAAQgrAAAAgug");
	this.shape_98.setTransform(383.425,497.925);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AguA1QgSgTAAggQAAghAUgTQATgUAcAAQAdAAAQASQARARAAAeIAAARIhXAAQACAdAiAAQAWAAARgLIAAAfQgTAKgeAAQggAAgSgSgAgOghQgHAIgCAMIAxAAQAAgdgYAAQgJAAgHAJg");
	this.shape_99.setTransform(371.025,499.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ABCBFIAAhMQAAgdgWAAQgKAAgHAJQgGAJAAANIAABKIgpAAIAAhNQAAgcgVAAQgLAAgGAIQgHAJAAAOIAABKIgpAAIAAiGIApAAIAAAVIABAAQAGgKAMgHQAMgHAOAAQAbAAALAZQAPgZAeAAQAsAAAAA2IAABTg");
	this.shape_100.setTransform(351.325,499.625);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Ag0A0QgUgTAAggQAAghAUgTQAUgTAhAAQAiAAATATQATATAAAfQAAAhgTAUQgVATghAAQgiAAgSgTgAgWgbQgHAJgBASQABAnAeAAQAdAAAAgnQAAgmgdAAQgOAAgJALg");
	this.shape_101.setTransform(330.6,499.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgrBFIAAiGIAqAAIAAAZIAAAAQAJgcAaAAQAHAAADACIAAAmQgHgEgLAAQgNAAgHAKQgIAKABAQIAABBg");
	this.shape_102.setTransform(317.75,499.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgYAsIAAg9IgWAAIAAgfIAWAAIAAgdIApgMIAAApIAeAAIAAAfIgeAAIAAA2QAAAVAQAAQAHAAAHgEIAAAfQgJAFgTAAQgrAAAAgug");
	this.shape_103.setTransform(306.325,497.925);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgjA0QgTgTAAgeQAAghAUgUQAVgUAiAAQAXAAALAHIAAAjQgNgKgQAAQgSAAgJALQgLAKAAASQAAARAKAKQAJALASAAQAPAAAPgKIAAAiQgOAIgbAAQgeAAgTgTg");
	this.shape_104.setTransform(294.625,499.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AguA1QgSgTAAggQAAghAUgTQATgUAcAAQAdAAAQASQARARAAAeIAAARIhXAAQACAdAiAAQAWAAARgLIAAAfQgTAKgeAAQggAAgSgSgAgOghQgHAIgCAMIAxAAQAAgdgYAAQgJAAgHAJg");
	this.shape_105.setTransform(280.975,499.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhFBkIAAjEIApAAIAAAVIABAAQAPgYAbAAQAbAAAOASQAOASAAAfQAAAhgQAUQgRAVgcAAQgXAAgNgTIgBAAIAABNgAgUg5QgIAJAAAQIAAALQAAAOAHAIQAIAJAMAAQANAAAIgKQAHgLAAgVQAAgjgbAAQgMAAgIAKg");
	this.shape_106.setTransform(265.575,502.725);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgzBAIAAgiQAKAGALADQAKADAJABQALgBAFgDQAHgDAAgGQAAgEgDgDIgHgEIgJgDIgLgEIgOgHQgGgDgEgEQgFgEgCgHQgCgFAAgJQAAgLAFgIQAFgJAIgFQAJgFAKgDQALgCALAAIASABIASAFIAAAgQgJgFgIgCQgJgCgJgBIgHABIgGACIgEAEQgCACAAADQAAADADADQABADAFACIAHADIAKADIAOAGQAHAEAFAEQAEAFADAFQADAHAAAIQAAAMgFAJQgFAIgJAGQgJAFgLACQgLADgLAAQgXAAgTgHg");
	this.shape_107.setTransform(250.95,499.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ag1BUQgQgSAAggQAAgiARgTQARgUAcAAQAYAAALATIABAAIAAhRIApAAIAADHIgpAAIAAgSIgBAAQgOAWgbAAQgZAAgPgSgAgTADQgIALABATQgBARAIAKQAHAKANAAQAMAAAIgLQAJgKAAgQIAAgLQAAgNgJgIQgHgIgMAAQgNAAgIAKg");
	this.shape_108.setTransform(228.7,496.725);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AguA1QgSgTAAggQAAghAUgTQATgUAcAAQAdAAAQASQARARAAAeIAAARIhXAAQACAdAiAAQAWAAARgLIAAAfQgTAKgeAAQggAAgSgSgAgOghQgHAIgCAMIAxAAQAAgdgYAAQgJAAgHAJg");
	this.shape_109.setTransform(213.575,499.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgrBFIAAiGIAqAAIAAAZIAAAAQAJgcAaAAQAHAAADACIAAAmQgHgEgKAAQgOAAgHAKQgHAKAAAQIAABBg");
	this.shape_110.setTransform(201.55,499.675);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgxA7QgLgKAAgTQAAgmAugHIAkgEQAAgXgXAAQgYAAgWAPIAAggQAJgEAPgEQAPgDALAAQA6AAAAA6IAABPIgnAAIAAgTIgBAAQgNAXgaAAQgUAAgLgMgAgCAHQgUADAAAPQAAAHAFAFQAFAFAIgBQALABAIgJQAHgIAAgNIAAgJg");
	this.shape_111.setTransform(187.725,499.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgrBFIAAiGIAqAAIAAAZIAAAAQAJgcAaAAQAHAAADACIAAAmQgHgEgKAAQgOAAgIAKQgGAKAAAQIAABBg");
	this.shape_112.setTransform(176.25,499.675);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgaBlIAAhnIgXAAIAAgfIAXAAIAAgQQAAgYAPgOQAOgOAaABQAMgBAJADIAAAhQgIgEgIAAQgUABAAAVIAAAOIAfAAIAAAfIgfAAIAABng");
	this.shape_113.setTransform(165.325,496.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAYBFIAAhKQAAgfgXAAQgKAAgHAIQgHAIAAANIAABMIgpAAIAAiGIApAAIAAAWIABAAQAPgZAbAAQAtAAAAA4IAABRg");
	this.shape_114.setTransform(151.675,499.625);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgkBeIAAggIAPAAIAAh7IgPAAIAAghIBJAAIAAAhIgQAAIAAB7IAQAAIAAAgg");
	this.shape_115.setTransform(139.15,497.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgjAOIAAgcIBHAAIAAAcg");
	this.shape_116.setTransform(129.45,499.35);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgrBFIAAiGIAqAAIAAAZIAAAAQAJgcAaAAQAHAAADACIAAAmQgHgEgKAAQgOAAgIAKQgGAKAAAQIAABBg");
	this.shape_117.setTransform(111.9,499.675);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgxA7QgLgKAAgTQAAgmAugHIAkgEQAAgXgXAAQgYAAgWAPIAAggQAJgEAPgEQAPgDALAAQA6AAAAA6IAABPIgnAAIAAgTIgBAAQgNAXgaAAQgUAAgLgMgAgCAHQgUADAAAPQAAAHAFAFQAFAFAIgBQALABAIgJQAHgIAAgNIAAgJg");
	this.shape_118.setTransform(98.075,499.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ag2BeIAAi8IBtAAIAAAjIhCAAIAAAuIA8AAIAAAiIg8AAIAABJg");
	this.shape_119.setTransform(84.775,497.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1,1,1).p("EAjAgChIUm/fEAlSAJrIPmYWEgt3gDSIpuUl");
	this.shape_120.setTransform(482.7,364.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(27));

	// laser
	this.instance = new lib.laser();
	this.instance.setTransform(704.75,136.7,1,1,0,0,0,16.5,351.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:647.2,y:432},0).wait(26));

	// base
	this.instance_1 = new lib.fir_spectrometer();
	this.instance_1.setTransform(0,0,0.4571,0.4267);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,219.5,480,420.5);
// library properties:
lib.properties = {
	id: 'FD3894ED4C4B2949866DDAABE9F0FD7B',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/fir_spectrometer.png", id:"fir_spectrometer"}
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
an.compositions['FD3894ED4C4B2949866DDAABE9F0FD7B'] = {
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;