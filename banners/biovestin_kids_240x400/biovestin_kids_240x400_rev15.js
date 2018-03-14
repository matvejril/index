(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,241,401);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,238,30);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Untitled1 = function() {
	this.initialize(img.Untitled1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,342);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.whiteframe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap8();
	this.instance.parent = this;
	this.instance.setTransform(1,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.whiteframe, new cjs.Rectangle(1,1,240,400), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,238.1,31), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,127.7).s().p("At+N/QlzlzAAoMQAAoLFzlzQFzlzILAAQIMAAFzFzQFyFzAAILQAAIMlyFzQlzFyoMAAQoLAAlzlyg");
	this.shape.setTransform(126.6,126.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,253.1,253.1), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151616").s().p("AgwAPIgDACIAGgHIgCADIAGgFIgDABQAOgPAUgIIAEgBQASgGASAGIAEAAIATAMQgegOgdACQgRAGgOAMIgDAEQAigcAtAPIAFAGIgOAFIgJgFQgVgIgUALIgEAAIgcAQIAEgEg");
	this.shape.setTransform(26.6,51.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(21.4,50,10.5,3.8), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151616").s().p("AAdgHIgFgHQgYgLgTANIgBABQACgDACgCQAWgLAWAOIAFAEQADAHgBAHIgEARgAATAKQgEgEgEgDIgGAAIAAAAQgSgJgWADQAHgEAIgCQAYgIAUAMIACAIIgEAMIgDgFg");
	this.shape.setTransform(25.7,51.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(22.2,49.3,7.1,4.4), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A543").s().p("A/eCuQg3hKDQg0QDFgjgxgBIiUgDQgbAAgcgGQgqgIAogPQAtgRBbgYQBbgYBPgQQKEh/KygPQLNgQKLBuQHxBUEqCvQBpA+AdAsQANASgJAIQgKAHgdgHQjvg8k0gJQlnAAjAgEQn6gJmpAFQnOAHniAZQlYAkjXAKQhIADg9AAQkYAAg1hIg");
	this.shape.setTransform(202.7,31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9A543").s().p("Ab/C5QAAgqgEAEQgeg4g3gnQhFgwh6geQjxg/mvggQmMgenkAAQosAAnZA6QmcAyj5BQIg3ATQgdAJAbgXQAmggAwgTQAdgMA9gRQD1hEGXgnQGpgqHuAAQMAAAIgBYQEBApCKA1QCPA2gHA9QgKBOgBAAIAAgDg");
	this.shape_1.setTransform(186.2,18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,0,405.4,55.7), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FAD596").s().p("AA7BpIgDgCIgEgNQgFgOgUgFQg4gNgsgeQgrgcgFgYQAAgBAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABQAAgigGglQAJAAApgHIAdgHQAMgCAAAOQAAAtAEALQAIAXAfADQALABAZAHQAZAHAMAAQALAAAVARQAWARgIAFQgFACgFAAIAKAJQAMALgFADIgRAAIAIAFQAGAHgHANQgEAAgHgCQASAOgHAEQgPAFgPAAQgQAAgPgFg");
	this.shape.setTransform(113.4,114,1,1.005,0,5.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD596").s().p("AgLDEQgHgEgDgHQgBgBAAAAQAAAAgBAAQAAAAgBABQAAAAgBACIgFAGQgFAEgBgBQgHAAgFgKIgEgLQgVAcACgVIABgHQAAgCAAgBQAAgBAAAAQAAgBAAAAQAAAAgBABQgYAUACgdQACgUAJgWQAFgNAgguQAWggADgkQACgngMg4QgKgzgPgqIAQADQAMAAAUgDQAKgBAXACIAhACQAFAAASByIAKAmQADAQgCAYQgBALgPAfQgPAegBAOQAAAUgOAqQgQAwgNAAIgMgTQAAAGgGAIQgEAFgEAAIgDAAg");
	this.shape_1.setTransform(52.9,125.5,1,1.005,0,5.8,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag4CtQgUgHgQgkQgPghgEABIglAQQgdAMgOgFQgfgRgJgiQgKglAdgYQAKgHAhgDQAbgDABgHQABgHgMggQgKgcAIgNQASgcAbgIQAfgJANAfQAMAeAFAHQAQARAfgKQAMgEABgQIgCgiQgCgxAxgMQAZgEAPAmIANA3QACAIATgBIApgEQA6gEAEAvQAEAogYAFQgjAAgVAFQgNACACAPQABAGAJAaQARAxgbALQgwAWgWgyQgOgfgEgGQgMgQgTAEQgWAEALAcQAPAogCAKQgIAhgdAOQgQAHgOAAQgKAAgJgEg");
	this.shape_2.setTransform(69.5,69.2,1,1.005,0,5.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7467").s().p("Ag4CtQgVgIgQgkQgOgfgEABIgmAPQgeAMgOgGQgfgPgIgjQgJglAegXQAJgHAfgDQAbgDABgJQACgHgMggQgKgcAJgNQAQgaAbgIQAfgKANAeQANAfAFAGQAQASAggJQAMgEABgRIgCgiQgCgxAygKQAYgGAOAmQAIAVAGAiQACAIATgCIApgEQA6gDAEAvQADAogZAEQgjAAgVAFQgQAEAQAvQAQAxgbAMQguAUgWgzQgNgegFgGQgNgRgUAEQgVAFALAdQAOAmgCAKQgIAigdAOQgPAGgNAAQgKAAgJgDg");
	this.shape_3.setTransform(71.7,69.5,1,1.005,0,5.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2E7467").s().p("Ag+DRIhCjeQgjh2gagmQgGgKhvhsQhihggHglQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQAEACACgBQAIAAAOgDQAPgEAJgFQA4gdgPgjIAHAAQAGAEAGAGICAB8QBJBFA5AkQCZBgC7gyIAqgMQgSAtgzAzQggAeAMA7QAJAsAnBLIBECCQAjBIAEAqQAJBaggBIQhyAGiBgBIgBABQhyAAhbkeg");
	this.shape_4.setTransform(35.5,57.5,1,1.005,0,5.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#56B55B").s().p("AibFyQgDgqgkhJIhEiBQgnhMgJgsQgMg6AggeQA0gzARgtQBbgiBEhBQBMhLAphwQATg/AGgEQABgBAIASQAMAVASAIQAZAKAagFIAUgFQgCASgaAmIg0BIQhEBhAUApQBaDBA2CEQBSDNAaCJQAHAoimAXQiBARjLAEQAfhIgJhag");
	this.shape_5.setTransform(92.4,53.2,1,1.005,0,5.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0C591").s().p("AgaAkQAHgXARguQAQgvAHgXQAAgHACgCQAGASABALQACANgCAWQgBAMgPAfQgOAdgBAOQAAAKgFAWQgFAYgIATQgRgdAKgwg");
	this.shape_6.setTransform(58.7,130.3,1,1.005,0,5.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.4,0,127.3,145.2), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C591").s().p("AgbAPQgIgHgCgFQgPgTAagGQAagHARAPIALAFQAKAEACACQAGAIgEAGQgDAEgLAEQgPAHgbAAIgNgLg");
	this.shape.setTransform(17.6,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C591").s().p("AAQBCQgIAAgSgKQgWgIgZgoQAYgrAIgIQAgglAgAaQAeAagQAkIgDAUQgDASgDAEQgNAQgOAAIgBAAg");
	this.shape_1.setTransform(6.1,71.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAD596").s().p("AhVGDQgTgPgRgzQAshgAkiBQAniLAGhhIAIg4QACgWgIgkQgBgGgUgTQgUgSABgDQANgcARARQATAWADgCQACgCgJgTQgNgdgFgcQgGgZANAAQANgBAFAPQAQA6ACgRIAEguQAFgEAMABQAMACgBAKQgFAmAEANQADALAJgLQADgDAKgWQAIgRAHADQAZAHgRA4QgIAcgOAhQAGBBggDBQgYCQgXBkQgPBGgOAWQgeApgZAAQgLAAgKgIg");
	this.shape_2.setTransform(12.2,39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,0,24.5,79.1), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0C591").s().p("AgcAOQgHgHgDgGQgNgSAZgGQAYgGARANQADACAXAJQAGAIgFAGQgCADgLAFQgHAEgOACIgYADIgMgMg");
	this.shape.setTransform(8.1,13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C591").s().p("AgnAiQgKgQgEgLQgSgrAjgPQAjgPAZAcQABACAOALQAOALADAEQAHARgHAMQgDAFgPANQgQAPgtAFIgQgXg");
	this.shape_1.setTransform(18.3,44.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAD596").s().p("AATDzQgTgOgYg7QgXgzgLhAQgHgngJhdQgUgfgOgaQgbgzAWgNQAHgCANARIARAYQAVARgVhKQgEgLAKgFQAJgGAKAIQAEAGACAZIADAfIAEABQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQADgFABgSIADgnQACgOANgDQANgDAAAZQAAAcgIAfQgFAVADACQAEABAMgXQAMgTARASQAHAIgHAKIgQAVQgKANgCAFQgBAkAHAVIATA2QAZBeAEAIQAJAQA2BEQgEAlgrAQQgVAIgPAAQgNAAgJgGg");
	this.shape_2.setTransform(12.4,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,24.8,50.3), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027139").s().p("AgZCvIAAg1IA0AAIAAA1gAgTBiIgHh+IAAiSIA2AAIAACSIgIB+g");
	this.shape.setTransform(166.4,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#027139").s().p("ABACvIAAj6IgmD6IgzAAIgqj2IAAD2IgvAAIAAldIBMAAIAoD4IAlj4IBNAAIAAFdg");
	this.shape_1.setTransform(149.6,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#027139").s().p("AAnCvIAAiPIgTAAQgTAAgIALQgIAJAAAZIAAAwQAAAKgEAKQgDAJgGAHQgOAOghAAIgSAAIAAgyIADAAQAJAAAGgEQAEgFAAgQIAAgVQABgcAHgUQAIgTAVgIQgSgHgJgTQgJgRAAgbIAAgcQAAgUAFgPQAFgPAJgKQAKgKAPgFQAQgFAVAAIBTAAIAAFdgAgIhzQgGAIgBATIAAAjQAAAUAJAIQAIAJAPAAIAWAAIAAhsIgaAAQgOAAgHAJg");
	this.shape_2.setTransform(126.2,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#027139").s().p("AAfCvIAAiWIg+AAIAACWIg3AAIAAldIA3AAIAACWIA+AAIAAiWIA4AAIAAFdg");
	this.shape_3.setTransform(105.9,12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#027139").s().p("AgjCtQgPgFgKgMQgVgWAAgrIAAgsIA0AAIAAAvQAAAUAIAHQAHAIANAAQAMAAAJgIQAHgIAAgXIAAgcQAAgZgJgJQgIgLgSABIgJAAIAAgyIAMAAQAPABAIgJQAJgHAAgWIAAgTQAAgXgHgJQgJgIgMAAQgNAAgHAIQgIAHAAATIAAAmIg0AAIAAgiQAAgrAVgXQAKgKAPgGQAQgGATAAQApAAAUAWQALAMAFARQAFAQAAAVIAAAJQAAA4gnAQQAWAJAJASQAIATAAAbIAAAbQAAAWgFAPQgFARgLALQgKAMgQAFQgPAGgUAAQgTAAgQgGg");
	this.shape_4.setTransform(86.8,12);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#027139").s().p("AhKCvIAAldICVAAIAAAyIheAAIAABiIBKAAIAAAwIhKAAIAABnIBeAAIAAAyg");
	this.shape_5.setTransform(68.8,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#027139").s().p("AAwCvIAAkrIguAAIAACIQgBArgDAeQgDAfgMAUQgKAUgUAJQgTAKgeAAIgGAAIAAgyIAHAAQAPAAAJgIQAKgIAEgPQAFgOACgWIACgvIAAi5ICXAAIAAFdg");
	this.shape_6.setTransform(48.5,12);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027139").s().p("AgjCtQgQgFgKgMQgWgWABgrIAAi1QgBgrAWgXQAKgKAQgGQAPgGAUAAQApAAAVAWQALAMAFARQAGAQgBAVIAAC1QABAWgGAPQgFARgLALQgKAMgQAFQgQAGgUAAQgUAAgPgGgAgUh4QgHAHAAATIAAC8QAAAUAHAHQAIAIAMAAQANAAAHgIQAJgHgBgUIAAi8QABgTgJgHQgHgIgNAAQgMAAgIAIg");
	this.shape_7.setTransform(28,12);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#027139").s().p("AhUCvIAAldICQAAIAAAyIhZAAIAABcIAgAAQAqAAAUAXQAUAUAAArIAAAjQAAAqgUAWQgKALgQAGQgPAFgVAAgAgdB9IAgAAQANAAAHgHQAHgHAAgTIAAgqQAAgSgHgHQgHgHgNAAIggAAg");
	this.shape_8.setTransform(8.8,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-3,-10,175.6,54), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7403").s().p("AgeDHIAAlVIhCAAIAAg4IDBAAIAAA4IhCAAIAAFVg");
	this.shape.setTransform(212.4,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC7403").s().p("AhVDHIAAmNICrAAIAAA4IhsAAIAABwIBVAAIAAA4IhVAAIAAB1IBsAAIAAA4g");
	this.shape_1.setTransform(192.1,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7403").s().p("AAjDHIAAirIhGAAIAACrIg/AAIAAmNIA/AAIAACrIBGAAIAAirIBAAAIAAGNg");
	this.shape_2.setTransform(170.8,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#027139").s().p("AgeDHIAAlVIhCAAIAAg4IDBAAIAAA4IhCAAIAAFVg");
	this.shape_3.setTransform(140.4,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#027139").s().p("AArDHIAAjhIhgDhIguAAIAAmNIA4AAIAADtIBhjtIAtAAIAAGNg");
	this.shape_4.setTransform(118.6,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#027139").s().p("AhcDHIAAmNIBcAAQAvAAAXAZQAXAZAAAwIAAA0QAAAwgXAZQgMAMgRAHQgRAFgYAAIgdAAIAACWgAgdgHIAdAAQAPABAHgJQAJgHgBgWIAAg8QABgVgJgIQgHgJgPAAIgdAAg");
	this.shape_5.setTransform(97.5,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#027139").s().p("AgoDGQgRgHgNgNQgYgaAAgwIAAjPQAAgwAYgaQANgNARgHQASgGAWAAQAuAAAZAaQAMANAGATQAGASAAAYIAADPQAAAYgGASQgGAUgMAMQgNANgRAHQgSAGgXAAQgWAAgSgGgAgXiJQgJAJAAAVIAADXQAAAWAJAIQAJAJAOAAQAPAAAJgJQAJgIAAgWIAAjXQAAgVgJgJQgJgJgPAAQgOAAgJAJg");
	this.shape_6.setTransform(76,14.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027139").s().p("AhgDHIAAmNIBfAAQAXgBASAGQASAGALALQALAMAFARQAGARAAAXIAAAPQAAAfgKATQgKAUgVAKQANAFAJAHQAKAHAEALQALAXAAAfIAAAhQAAAugYAYQgMAMgSAGQgRAHgYgBgAghCPIAjAAQAQAAAIgJQAJgIgBgXIAAgiQABgdgKgKQgKgKgUAAIgcAAgAghgkIAZAAQAQAAAKgJQAKgJAAgYIAAgWQAAgWgHgKQgJgKgPAAIgeAAg");
	this.shape_7.setTransform(54.1,14.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#027139").s().p("AgoDGQgRgHgNgNQgYgaAAgwIAAjPQAAgwAYgaQANgNARgHQASgGAWAAQAuAAAZAaQAMANAGATQAGASAAAYIAADPQAAAYgGASQgGAUgMAMQgNANgRAHQgSAGgXAAQgWAAgSgGgAgXiJQgJAJAAAVIAADXQAAAWAJAIQAJAJAOAAQAPAAAJgJQAJgIAAgWIAAjXQAAgVgJgJQgJgJgPAAQgOAAgJAJg");
	this.shape_8.setTransform(32.2,14.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#027139").s().p("AhSDHIAAmNIClAAIAAA4IhmAAIAAFVg");
	this.shape_9.setTransform(11.7,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-10,224.9,61), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027139").s().p("AghC1IAAg2IA1AAIAAA2gAgfBlQgDgJAAgMQAAgUAFgOIALgaIAPgXIAOgXQAGgNAFgQQAFgQAAgXQAAgTgIgIQgHgHgNgBQgNABgHAHQgHAIAAATIAAAoIg2AAIAAgkQAAgrAVgYQAVgWAoAAQApAAAVAWQAVAYAAArQAAAYgFAQQgFASgIAOIgQAYIgQAXIgMAYQgFAMAAARIACATg");
	this.shape.setTransform(134.1,90.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#027139").s().p("AAmDYIAAjKIhVDKIgpAAIAAlkIAyAAIAADVIBWjVIApAAIAAFkgAgZicQgMgEgIgIQgQgRgDgeIAqAAQABANAGAFQAHAFAJAAQAJAAAHgFQAHgFAAgNIApAAQgBAegRARQgIAIgMAEQgLAEgPAAQgPAAgLgEg");
	this.shape_1.setTransform(115.3,86.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#027139").s().p("AgjCxQgQgGgLgLQgWgYAAgrIAAi5QAAgrAWgYQALgLAQgGQAPgGAUABQApAAAWAWQALANAGAQQAFARAAAVIAAC5QAAAVgFARQgGARgLAMQgLALgPAGQgQAGgVgBQgUABgPgGgAgUh7QgIAIAAATIAADBQAAASAIAJQAIAHAMABQANgBAIgHQAIgJAAgSIAAjBQAAgTgIgIQgIgHgNgBQgMABgIAHg");
	this.shape_2.setTransform(95.6,90.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#027139").s().p("ABBCzIAAkAIgnEAIg0AAIgpj8IAAD8IgyAAIAAllIBOAAIApD9IAmj9IBOAAIAAFlg");
	this.shape_3.setTransform(72.9,90.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#027139").s().p("AhSCzIAAllIBSAAQAqAAAVAXQAUAXAAArIAAAuQAAArgUAWQgLALgQAGQgPAFgVABIgaAAIAACGgAgagGIAaAAQANABAHgIQAHgHAAgUIAAg1QAAgTgHgHQgHgIgNABIgaAAg");
	this.shape_4.setTransform(51.1,90.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#027139").s().p("AgjCxQgQgGgLgLQgWgYAAgrIAAi5QAAgrAWgYQALgLAQgGQAPgGAUABQApAAAWAWQALANAGAQQAFARAAAVIAAC5QAAAVgFARQgGARgLAMQgLALgPAGQgQAGgVgBQgUABgPgGgAgUh7QgIAIAAATIAADBQAAASAIAJQAIAHAMABQANgBAIgHQAIgJAAgSIAAjBQAAgTgIgIQgIgHgNgBQgMABgIAHg");
	this.shape_5.setTransform(31.9,90.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#027139").s().p("AAfCzIAAiZIg/AAIAACZIg4AAIAAllIA4AAIAACZIA/AAIAAiZIA6AAIAAFlg");
	this.shape_6.setTransform(12.1,90.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027139").s().p("AgjCxQgQgGgLgMQgWgXAAgrIAAi5QAAgrAWgXQALgMAQgGQAPgGAUAAQApAAAWAYQALALAGARQAFAQAAAWIAAC5QAAAVgFARQgGARgLALQgLAMgPAGQgQAFgVABQgUgBgPgFgAgUh6QgIAHAAAUIAAC/QAAAUAIAHQAIAJAMgBQANABAIgJQAIgHAAgUIAAi/QAAgUgIgHQgIgJgNAAQgMAAgIAJg");
	this.shape_7.setTransform(208.6,42.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#027139").s().p("AgbCyIAAkxIg7AAIAAgyICtAAIAAAyIg7AAIAAExg");
	this.shape_8.setTransform(189.7,42.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#027139").s().p("AgjCxQgQgGgKgMQgWgWAAgrIAAgwIA2AAIAAAzQAAATAHAIQAIAHAOAAQAMAAAIgHQAIgIAAgTIAAhKIguAAIAAgyIAuAAIAAhEQAAgUgIgHQgIgJgMAAQgOAAgIAJQgHAHAAAUIAAAmIg2AAIAAgjQAAgrAWgXQAKgMAQgGQAPgGAUAAQApAAAWAYQAKALAFARQAGAQAAAWIAAC5QAAAVgGARQgFARgKALQgLAMgQAGQgPAFgVABQgUgBgPgFg");
	this.shape_9.setTransform(171,42.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#027139").s().p("AhMCyIAAljICZAAIAAAyIhhAAIAABkIBNAAIAAAyIhNAAIAABpIBhAAIAAAyg");
	this.shape_10.setTransform(144.8,42.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#027139").s().p("AgbCyIAAkxIg7AAIAAgyICtAAIAAAyIg7AAIAAExg");
	this.shape_11.setTransform(126.6,42.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#027139").s().p("AhMCyIAAljICZAAIAAAyIhhAAIAABkIBNAAIAAAyIhNAAIAABpIBhAAIAAAyg");
	this.shape_12.setTransform(108.5,42.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#027139").s().p("AAqCyIgKhAIhEAAIgJBAIg0AAIA5ljIBRAAIA5FjgAAYBBIgaizIgbCzIA1AAg");
	this.shape_13.setTransform(89,42.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#027139").s().p("AgbCyIAAkxIg7AAIAAgyICtAAIAAAyIg7AAIAAExg");
	this.shape_14.setTransform(69.3,42.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#027139").s().p("AAmCyIAAjJIhVDJIgpAAIAAljIAyAAIAADVIBWjVIApAAIAAFjg");
	this.shape_15.setTransform(49.8,42.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#027139").s().p("AAdCyIAAiJIgOAEIgQABQgUgBgQgGQgPgFgLgMQgVgWAAgrIAAiGIA4AAIAACJQAAAUAIAIQAIAHAMAAQANABAHgIQAIgGABgRIAAiOIA4AAIAAFjg");
	this.shape_16.setTransform(29.8,42.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#027139").s().p("AgjCxQgQgGgKgMQgWgXAAgrIAAi5QAAgrAWgXQAKgMAQgGQAPgGAUAAQApAAAWAYQAKALAGARQAFAQAAAWIAAAjIg1AAIAAgmQAAgUgIgHQgIgJgNAAQgNAAgIAJQgIAHAAAUIAADAQAAATAIAIQAIAHANAAQANAAAIgHQAIgIAAgTIAAgzIA1AAIAAAwQAAAVgFAQQgGARgKALQgWAYgpAAQgUgBgPgFg");
	this.shape_17.setTransform(11.5,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,20,220.5,103), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgXRAjoMAAAhHPMAujAAAMAAABHPg");
	this.shape.setTransform(149,228);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,298,456), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#027139").s().p("AgbCVIAAgtIArAAIAAAtgAgZBUQgDgIAAgLQABgPAEgMIAJgWIAMgSIALgTQAGgLADgNQAEgNAAgTQAAgQgGgGQgHgHgJAAQgLAAgGAHQgGAGAAAQIAAAgIgsAAIAAgdQAAgjARgUQARgTAhAAQAiAAARATQARAUAAAjQAAAUgDAOQgFAOgGALIgNAUIgNATIgKATQgFALAAANIACARg");
	this.shape.setTransform(123.9,-23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#027139").s().p("Ag+CTIAAklIB9AAIAAAqIhPAAIAABSIA/AAIAAApIg/AAIAABWIBPAAIAAAqg");
	this.shape_1.setTransform(109.3,-23.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#027139").s().p("AAoCTIAAj7IgnAAIAABzQAAAigCAbQgDAagKAQQgJARgQAIQgQAIgZAAIgFAAIAAgqIAFAAQANAAAIgHQAHgGAFgNQAEgMABgSIACgnIAAicIB+AAIAAElg");
	this.shape_2.setTransform(92.2,-23.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#027139").s().p("AgdCSQgNgFgJgKQgSgTAAgkIAAiYQAAgjASgUQAJgJANgEQANgGAQAAQAiABASASQAJALAFANQAEAOAAARIAACYQAAATgEANQgFAOgJAJQgJAKgNAFQgNAEgRAAQgQAAgNgEgAgQhlQgHAGAAARIAACeQAAAPAHAHQAGAGAKABQALgBAHgGQAGgHAAgPIAAieQAAgRgGgGQgHgHgLABQgKgBgGAHg");
	this.shape_3.setTransform(75,-23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#027139").s().p("AA+CTQgLAAgIgCQgJgDgGgGQgNgMAAgTIAAgwQAAgVgJgJQgIgIgQAAIgQAAIAACAIguAAIAAklIAuAAIAAB8IASAAQANAAAJgHQAJgGAAgSIAAgyQAAgTANgMQAGgGAJgDQAIgDALAAIATAAIAAAqIgCAAIgKAAIgGACQgDACgBAEIgCAOIAAATQAAAWgHAPQgIAPgPAHQAJAEAGAFQAFAFAEAIQAGARAAAXIAAAaIACANQABAFADABIAGACIAKAAIACAAIAAAqg");
	this.shape_4.setTransform(57.9,-23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#027139").s().p("AhqCTIAAklIAuAAIAAD7IAmAAIAAj7IAtAAIAAD7IAlAAIAAj7IAvAAIAAElg");
	this.shape_5.setTransform(37,-23.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#027139").s().p("AAgCTIAAilIhHClIghAAIAAklIApAAIAACvIBHivIAhAAIAAElg");
	this.shape_6.setTransform(10.4,-23.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027139").s().p("Ag1CTIgJgBIAAgpIAFAAIAGAAIALgBQAGgBAEgDQAEgEABgGQACgGgCgKIg/jdIAvAAIAtCrIAnirIAuAAIg5DYQgIAYgGAQQgIAOgIAJQgIAJgLADQgMADgPAAg");
	this.shape_7.setTransform(217.2,-64.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#027139").s().p("AA7CkIAAgRIgBgKIgCgFIgEgCIhnAAIgEACIgDAFIgBAKIAAARIgmAAIAAhMIAJAAQAVgHAJgXQAFgMACgQQACgQAAgUIAAidICAAAIAAD7IATAAIAABMgAgGgFIgCAeIgHAdIgJAWQgFAJgFADIBDAAIAAjRIgnAAg");
	this.shape_8.setTransform(197,-62.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#027139").s().p("AAiCTIgIg1Ig4AAIgHA1IgrAAIAvklIBDAAIAvElgAAUA1IgViTIgXCTIAsAAg");
	this.shape_9.setTransform(177.8,-64.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#027139").s().p("AgdCRQgNgEgIgKQgSgTAAgjIAAiYQAAgkASgTQAIgKANgFQANgEAQgBQAiAAARAUQAJAJAFAOQAEANAAATIAAAcIgsAAIAAggQAAgPgGgHQgHgGgKgBQgKABgHAGQgGAHAAAPIAACeQAAARAGAGQAHAGAKAAQAKAAAHgGQAGgGAAgRIAAgpIAsAAIAAAnQAAASgEANQgFAOgJAKQgRASgiABQgQAAgNgGg");
	this.shape_10.setTransform(161.5,-64.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#027139").s().p("AA1CTIAAjSIggDSIgqAAIgijPIAADPIgpAAIAAklIBAAAIAhDPIAgjPIBAAAIAAElg");
	this.shape_11.setTransform(136.4,-64.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#027139").s().p("AgdCRQgNgEgJgKQgSgTAAgjIAAiYQAAgkASgTQAJgKANgFQANgEAQgBQAiAAASAUQAJAJAFAOQAEANAAATIAACYQAAASgEANQgFAOgJAJQgJAKgNAEQgNAGgRAAQgQAAgNgGgAgQhlQgHAHAAAPIAACeQAAARAHAGQAGAGAKAAQALAAAHgGQAGgGAAgRIAAieQAAgPgGgHQgHgGgLgBQgKABgGAGg");
	this.shape_12.setTransform(117.7,-64.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#027139").s().p("AA+CTQgLAAgIgCQgJgDgGgGQgNgMAAgTIAAgwQAAgVgJgJQgIgIgQAAIgQAAIAACAIguAAIAAklIAuAAIAAB8IASAAQANAAAJgHQAJgGAAgSIAAgyQAAgTANgMQAGgGAJgDQAIgDALAAIATAAIAAAqIgCAAIgKAAIgGACQgDACgBAEIgCAOIAAATQAAAWgHAPQgIAPgPAHQAJAEAGAFQAFAFAEAIQAGARAAAXIAAAaIACANQABAFADABIAGACIAKAAIACAAIAAAqg");
	this.shape_13.setTransform(100.6,-64.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#027139").s().p("AgdCRQgNgEgJgKQgRgTAAgjIAAiYQAAgkARgTQAJgKANgFQANgEAQgBQAiAAASAUQAIAJAEAOQAFANAAATIAAAcIgrAAIAAggQgBgPgGgHQgHgGgLgBQgKABgGAGQgHAHABAPIAACeQgBARAHAGQAGAGAKAAQALAAAHgGQAGgGABgRIAAgpIArAAIAAAnQAAASgFANQgEAOgIAKQgSASgiABQgQAAgNgGg");
	this.shape_14.setTransform(83.8,-64.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#027139").s().p("AgWCTIAAj7IgwAAIAAgqICOAAIAAAqIgxAAIAAD7g");
	this.shape_15.setTransform(68.4,-64.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#027139").s().p("Ag+CTIAAklIB9AAIAAAqIhPAAIAABSIA+AAIAAApIg+AAIAABWIBPAAIAAAqg");
	this.shape_16.setTransform(53.4,-64.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#027139").s().p("AA8CkIAAgRIgBgKIgDgFIgFgCIhlAAIgFACIgCAFIgBAKIAAARIgnAAIAAhMIAJAAQAVgHAJgXQAFgMACgQQACgQABgUIAAidIB/AAIAAD7IATAAIAABMgAgGgFIgCAeIgGAdIgKAWQgFAJgGADIBEAAIAAjRIgnAAg");
	this.shape_17.setTransform(35.4,-62.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#027139").s().p("AhGCTIAAklIBFAAQARAAANAEQAOAEAHAJQAIAIAFANQADAMAAARIAAALQABAXgIAPQgGAOgQAHQAKAEAGAFQAHAFAEAJQAHAQABAXIAAAZQAAAhgSASQgJAJgOAEQgNAFgRAAgAgYBpIAZAAQAMAAAGgHQAGgFAAgRIAAgZQAAgVgHgHQgGgJgQABIgUAAgAgYgbIASAAQAMAAAHgGQAHgHAAgRIAAgQQAAgRgFgHQgGgHgLAAIgWAAg");
	this.shape_18.setTransform(10.2,-64.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-83,228.6,87), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC7403").s().p("AgcC2IAAk3Ig7AAIAAg0ICvAAIAAA0Ig8AAIAAE3g");
	this.shape.setTransform(217.6,-16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC7403").s().p("AhNC2IAAlrICbAAIAAA0IhiAAIAABlIBOAAIAAAzIhOAAIAABrIBiAAIAAA0g");
	this.shape_1.setTransform(199.1,-16.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EC7403").s().p("AhNC2IAAlrICbAAIAAA0IhiAAIAABlIBOAAIAAAzIhOAAIAABrIBiAAIAAA0g");
	this.shape_2.setTransform(180.9,-16.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC7403").s().p("AAyC2IAAk3IgxAAIAACOQABAsgEAfQgEAhgMAUQgLAVgTAKQgVAKgfAAIgGAAIAAg0IAHAAQAQAAAJgJQAKgIAFgPQAFgQACgVIABgxIAAjBICeAAIAAFrg");
	this.shape_3.setTransform(159.8,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EC7403").s().p("AgkC0QgQgGgLgLQgXgYAAgtIAAi8QAAgsAXgYQALgLAQgHQAQgFAUAAQAqAAAXAXQALAMAFASQAGAQAAAWIAAC8QAAAXgGARQgFARgLAMQgMALgQAGQgQAGgVAAQgUAAgQgGgAgVh9QgIAIAAAUIAADDQAAAUAIAIQAJAJAMgBQANABAJgJQAIgIAAgUIAAjDQAAgUgIgIQgJgIgNAAQgMAAgJAIg");
	this.shape_4.setTransform(138.4,-16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC7403").s().p("AhYC2IAAlrICXAAIAAA0IhdAAIAABgIAhAAQArAAAWAXQAUAWAAAsIAAAkQAAAtgUAWQgLAMgQAFQgRAGgVAAgAgeCCIAhAAQAOAAAHgIQAHgHAAgUIAAgrQAAgTgHgHQgHgIgOAAIghAAg");
	this.shape_5.setTransform(118.5,-16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EC7403").s().p("AgkC0QgQgGgLgLQgXgYAAgtIAAi8QAAgsAXgYQALgLAQgHQAQgFAUAAQAqAAAXAXQALAMAFASQAGAQAAAWIAAC8QAAAXgGARQgFARgLAMQgMALgQAGQgQAGgVAAQgUAAgQgGgAgVh9QgIAIAAAUIAADDQAAAUAIAIQAJAJAMgBQANABAJgJQAIgIAAgUIAAjDQAAgUgIgIQgJgIgNAAQgMAAgJAIg");
	this.shape_6.setTransform(90.4,-16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EC7403").s().p("AgcC2IAAk3Ig7AAIAAg0ICvAAIAAA0Ig8AAIAAE3g");
	this.shape_7.setTransform(71.2,-16.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EC7403").s().p("AgkC0QgQgGgLgLQgVgYAAgtIAAi8QAAgsAVgYQALgLAQgHQAQgFAUAAQAqAAAWAXQAKAMAGASQAFAQAAAWIAAAkIg2AAIAAgnQAAgUgIgIQgIgIgNAAQgNAAgIAIQgIAIAAAUIAADDQAAAVAIAIQAIAHANAAQANAAAIgHQAIgIAAgVIAAgzIA2AAIAAAwQAAAWgFARQgGARgKAMQgWAXgqAAQgUAAgQgGg");
	this.shape_8.setTransform(52.3,-16.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EC7403").s().p("AArC2IgKhCIhGAAIgJBCIg1AAIA6lrIBTAAIA6FrgAAZBDIgbi4IgbC4IA2AAg");
	this.shape_9.setTransform(31.9,-16.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EC7403").s().p("AAeC2IAAiMIgPAEIgPAAQgVAAgQgGQgQgFgLgNQgWgWAAgsIAAiJIA6AAIAACNQAAATAIAIQAIAJAMAAQANAAAIgIQAIgHABgRIAAiRIA5AAIAAFrg");
	this.shape_10.setTransform(11.1,-16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EC7403").s().p("ABHDwQgOgEgLgKQgUgUgBggIAAhQQAAgigPgOQgOgOgbgBIgaAAIAADWIhOAAIAAnpIBOAAIAADOIAeAAQAVABAPgMQARgLgBgeIAAhUQABgfAUgUQALgJAOgFQAOgGATABIAfAAIAABGIgEAAIgQAAIgKADQgFADgDAIIgBAWIAAAgQAAAlgNAZQgNAZgaAMQAQAFAJAJQAKAKAGAOQAKAbABAmIAAArIABAWQADAIAFADIAKADIAQAAIAEAAIAABGIgfAAIgEAAQgQAAgNgFg");
	this.shape_11.setTransform(173.1,-72);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EC7403").s().p("AgxDyQgWgHgPgQQgeggAAg7IAAj/QAAg7AeggQAPgPAWgIQAWgIAbAAQA5gBAeAgQAPAQAHAXQAIAXAAAdIAAD/QAAAdgIAXQgHAXgPAQQgPAQgWAHQgWAIgcAAQgbAAgWgIgAgcioQgLAKAAAbIAAEHQAAAbALALQALALARAAQASAAALgLQALgLAAgbIAAkHQAAgbgLgKQgLgMgSAAQgRAAgLAMg");
	this.shape_12.setTransform(144.5,-72);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EC7403").s().p("AArD1IAAjSIhWAAIAADSIhOAAIAAnpIBOAAIAADSIBWAAIAAjSIBOAAIAAHpg");
	this.shape_13.setTransform(117.3,-72);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EC7403").s().p("AhoD1IAAnpIDRAAIAABGIiEAAIAACIIBpAAIAABFIhpAAIAACQICEAAIAABGg");
	this.shape_14.setTransform(91.2,-72);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EC7403").s().p("Ah2D1IAAnpIDLAAIAABGIh+AAIAACBIAtAAQA6AAAdAfQAcAeAAA8IAAAwQAAA8gcAeQgOAQgWAHQgVAIgeAAgAgpCvIAtAAQASAAAKgKQAKgKAAgaIAAg7QAAgZgKgKQgKgLgSAAIgtAAg");
	this.shape_15.setTransform(65.3,-72);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC7403").s().p("AhoD1IAAnpIDRAAIAABGIiEAAIAACIIBpAAIAABFIhpAAIAACQICEAAIAABGg");
	this.shape_16.setTransform(39.4,-72);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EC7403").s().p("AhxD1IAAnpIBxAAQA5AAAdAfQAcAeAAA8IAABAQAAA7gcAeQgPAPgVAIQgWAIgcAAIgkAAIAAC4gAgkgIIAkAAQARAAAKgKQAKgKAAgbIAAhJQAAgagKgKQgKgKgRAAIgkAAg");
	this.shape_17.setTransform(15.2,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-102,229.2,119), null);


(lib.shad1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0,0,0,0,0,112.2).s().p("AsMMNQlElEAAnJQAAnIFElEQFElEHIAAQHJAAFEFEQFEFEAAHIQAAHJlEFEQlEFDnJAAQnIAAlElDg");
	this.shape.setTransform(110.5,110.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.shad1, new cjs.Rectangle(0,0,221,220.9), null);


(lib.logo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9A543").s().p("AgyAzQgUgVAAgeQAAgcAUgVQAWgVAcAAQAeAAAUAVQAWAVAAAcQAAAegWAVQgVAUgdAAQgcAAgWgUgAgrgrQgSASAAAZQAAAaASASQATASAYAAQAaAAASgSQASgSABgaQgBgZgSgSQgSgSgaAAQgYAAgTASg");
	this.shape.setTransform(383.2,-5.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F9A543").s().p("AAUAlIgRgaIgDgFIgFgBIgFgBIgMAAIAAAhIgJAAIAAhJIAfAAQALABAEACQAFABADAFQADAFAAAHQAAAHgFAFQgEAEgMACIAGAEQAFAEADAFIANAVgAgWgDIAWAAQAFgBAEgBQADgBACgDIADgGQAAgGgFgDQgDgEgIAAIgXAAg");
	this.shape_1.setTransform(383.7,-5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#008466").s().p("ABBBHIAFgZIg3AAIgFAZIgUAAIAIgrIAAAAIAHgBQADgBAEgEIAGgKIAHgQIAShAIA/AAIgTBgIAIAAIgKArgAAqAIIgEAJIgFAGIgEAFIAkAAIAPhNIgVAAgACGAmQgKgJAAgUIACgRQABgKADgIQADgKAFgHQAFgIAHgGQAFgFAKgFQAJgDAKAAQASAAAKAKQAJAJAAAUIgBASQgCALgDAGQgDALgFAGQgEAIgHAGQgHAHgIADQgIADgLAAQgTAAgJgKgACqgwQgDACgFAFQgEAEgDAGIgEAMIgDAOIgBANQAAALAEAFQAEAFAKAAQAGAAAEgDQAFgCADgEQAFgGACgEIAFgMIADgNIAAgOQAAgMgEgEQgEgGgJAAQgFAAgGADgAjMAwIACgKQgGgBgGgCQgFgCgEgEQgEgEgBgFQgCgFAAgIQAAgSAEgKQAEgNAGgHQAGgIAKgFQAJgFAJAAIACgLIAVAAIgDALQAHAAAGADQAGADADAEQACACADAHQACAHAAAGQAAAPgEAMQgFAOgGAGQgFAHgKAGQgIAEgKABIgCAKgAixATQAGgCAEgDIAHgKQADgFABgHQACgIAAgHIgBgHIgCgFIgDgEIgFgCgAjCglIgGAGIgEAIIgDAJIgCAQIABAHIACAFIADADIAFACIAMg8IgIAEgARpAuIAPhIIgBAAIg1BIIgWAAIAXhyIAWAAIgPBIIA2hIIAWAAIgXBygAPyAuIAPhIIAAAAIg2BIIgWAAIAXhyIAWAAIgOBIIA2hIIAWAAIgYBygANCAuIAYhyIAgAAQALAAAIACQAHACAGAFQAEAEADAFQACAFAAAGQAAAKgDAJQgEAIgHAHQgHAHgKADQgLAEgNAAIgMAAIgIAlgANjgIIAMAAQAHAAAFgCQAFgCAEgEQAEgDACgGQACgEAAgGIgBgGQgBgCgCgDIgGgDQgEgBgGAAIgMAAgALQAuIAXhyIBGAAIgEASIgvAAIgGAdIAtAAIgDASIguAAIgGAfIAvAAIgDASgAJwAuIAUhgIggAAIAEgSIBVAAIgDASIggAAIgTBggAIXAuIgXg3IgMA3IgWAAIAXhyIAXAAIgLA0IAtg0IAbAAIgzA4IAdA6gAGpAuIgCgWIgoAAIgLAWIgXAAIA5hyIAfAAIALBygAGHAGIAeAAIgEg1gAEJhEIBJAAIgEARIgzAAIgGAdIAOAAQALAAAGACQAIADAEADQAFAEADAFQACAFAAAFIgBAKIgDAJQgDAGgEADQgDAEgGADQgIAEgGABIg3ABgAEKAdIAPAAQAEAAAHgCQAGgBACgDQAEgDABgEQACgEAAgFIgBgEIgDgEIgGgDIgYgBgAg3AuIAPhIIg2BIIgWAAIAXhyIAWAAIgPBIIA2hIIAWAAIgXBygAkkAuIAPhIIg2BIIgWAAIAXhyIAWAAIgPBIIA2hIIAWAAIgXBygAm9hEIBJAAIgEARIgzAAIgGAdIAOAAQALAAAGACQAIADAEADQAFAEADAFQACAFAAAFIgBAKIgDAJQgDAGgEADQgDAEgGADQgIAEgGABIg3ABgAm7AdIAOAAQAEAAAHgCQAGgBACgDQAEgDABgEQACgEAAgFIgBgEIgDgEIgGgDIgXgBgAqqAuIAXhyIBGAAIgEASIgvAAIgGAdIAtAAIgDASIguAAIgGAfIAvAAIgDASgArnAuIAXhyIAVAAIgXBygAsrAuIAXhyIAUAAIgIAsIADAAQAMAAAFADQAGACAEAEQAEAFABAEQACAFAAADIgBAKIgDAKIgFAJQgEAFgFADQgGAEgGABQgHACgKAAgAsTAdIAEAAQAFAAAFgCQADgBADgFIAEgHIABgKIAAgDQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAIgEgDIgIgBIgFAAgAucAuIAYhyIAkAAQAKAAAGACQAHABAEADQAFADABAFQACADAAAGQAAAGgCAEQgBAGgDAEQgDAEgFADQgDADgGACIAHADQADABADADIADAGIABAGIgBAIIgCAJQgDAFgDADQgDAEgHAEQgHAEgHABQgHACgNAAgAuDAdIAOAAQAIAAAFgCQADgBAFgEQADgDABgEIACgHIgBgFIgDgDIgGgDIgKgBIgOAAgAt5gUIANAAQAGAAAEgCQAFgCADgDQACgCACgEQACgDAAgEIgBgEIgCgEIgFgCQgCgBgHAAIgNAAgAvYAuIAPhIIg2BIIgWAAIAXhyIAWAAIgPBIIA2hIIAWAAIgXBygAxFAuIgIg5IgLA5IgUAAIAMg5IgeA5IgXAAIAjg9IgKg1IAUAAIAIA3IALg3IAUAAIgLA3IAdg3IAVAAIggA5IAKA5g");
	this.shape_2.setTransform(190.3,91.9,1.39,1.39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F18824").s().p("AghBrQgNgBgHgJQgGgKACgMQAOgigpgFQgOgBgHgJQgHgKADgMIAFgQQADgNALgIQALgJANAAQAUAFALgKQAKgJAFgWQADgMAMgJQALgIAMAAIAQACQANAAAHAJQAIAKgEANQgRAsAtgFQANABAHAJQAGAJgCANIgFAQQgBAMgMAJQgMAIgMgBQgpAAgGAkQgEANgKAJQgKAIgMAAg");
	this.shape_3.setTransform(125.5,24.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AidCLQgogoAAhBQAAhdBDhBQBBg7BeAAQBVgBAsAvQAoAoAABBQAABdhDA/Qg/A8hgABQhVgBgsgtg");
	this.shape_4.setTransform(124.9,25.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AicCuIA2lbID8AAQAFABAAAPQACAOgDAUQgDAUgGAOQgGAOgEgBIiCAAIgEAhIAlAAQB3AAAABUIgCAWQgGAwgmAdQgrAihLAAgAgUBbIANAAQAjAAAEgbIAAgFQAAgTgjAAIgJAAg");
	this.shape_5.setTransform(44.3,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhwCvQhXgOAThhIAljhQABgFARgFQASgEAZAAQAYAAATAEQASAFAAAFIgjDKQgFAeAfgCQAfgCAegeIAfjHQABgFASgEQASgEAYAAQAZAAASAEQARAEABAFIgxFAQAAAGgSAEQgSAEgZAAQgZAAgTgEQgSgEAAgGIAFgaQgTAYgmAMQgZAIgZAAQgLAAgLgBg");
	this.shape_6.setTransform(82.6,25.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#027139").s().p("AmeEUQhxAAhLhRQhKhRAJhyQAIhwBXhRQBXhRBwgBIQSAAQhBAnghBZQgMAhgdCGQgXBqgiA0QgwBLhgAXg");
	this.shape_7.setTransform(75.2,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgFADIABgLIAEABQAAAGAFABIgBAJg");
	this.shape_8.setTransform(199.1,33.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIAEIAGgJIALACIgBADQgGAAgCAGg");
	this.shape_9.setTransform(201.2,17.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ah6CuQgJAAgHgHQgFgFAAgJIABgHIAvknIAAgBQgBgKAHgGQAGgHAIAAIAFABIDXAAIgQBhIhzAAIgFAgIBoAAIgNBWIhoAAIgFAiIBxAAIgOBhg");
	this.shape_10.setTransform(199.9,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkCrQgSgDAAgCIATh9IhXAAIgTB+QgCAGg7AAQgYAAgSgCQgRgCgCgDIAzlMQAAgCASgCQASgCAZAAIArADQATACAAACIgTB4IBWAAIATh5QAAgCASgCQASgCAZAAIAsADQASACAAACIg0FLQAAADgSACQgSACgZAAQgYAAgTgCg");
	this.shape_11.setTransform(337.9,25.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhvCuQhXgOAShgIAmjhQABgGARgEQARgEAaAAQAYAAASAEQASAEAAAGIgjDKQgFAeAggCQAfgBAdgeIAgjHQABgGASgEQASgEAXAAQAZAAASAEQARAEABAGIgwFAQAAAFgSAEQgSAEgaAAQgZAAgSgEQgSgEAAgFIAEgbQgTAYglAMQgaAIgYAAQgLAAgLgCg");
	this.shape_12.setTransform(298.8,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgsCtQgZAAgSgCQgSgCgBgDIAmjtIhIAAQgFAAAAgPQAAgPADgVQAEgWAEgOQAFgOAEAAIELAAQADAAABAOQAAAPgDAVQgEAVgFAOQgFAPgEABIhIAAIglDtQAAADgQACQgQACgUAAIgIAAg");
	this.shape_13.setTransform(264.9,25.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhwCQQgrgnAAhFQAAgSADgSQAOhYBDgzQA6gsBJAAQAyAAAoAUQAFABAAAQQABAQgDAWQgCAVgIAQQgHAOgEgEQgPgMgTgFQgOgDgWAAQgmAAgaAfQgZAfAAAkQAAAbASAUQAQASAdAAQAqAAAdgTQABAAAAAAQAAAAABgBQABAAAAAAQABAAABAAQAIAAAAAHIgGArIgGAkQgDAPgFABQgvAUgxAAQhJAAgrgog");
	this.shape_14.setTransform(231.4,25.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AikCtIA3lZICpAAQBpAAgBBAQAAAMgBAHQgIAxg5ARQAgAHAQASQARAUAAAeIgBAQQgHAsggAcQgnAhhJAAgAgfBbIAdAAQALAAALgHQAOgHADgNIAAgGQAAgagfAAIgcAAgAgMgfQAdAAANgHQAQgHACgQIAAgJQABgVgbAAIgZAAg");
	this.shape_15.setTransform(165.8,25.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EC7403").s().p("A0mEUQBfgXAxhLQAig0AWhqQAdiGANghQAghZBCgnIf7AAQBxAABLBRQBLBRgJBxQgJBxhXBSQhYBRhxAAg");
	this.shape_16.setTransform(240,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A4uErQgTgBgbgFQgpgLgZgNQgRgJgTgMQgbgVgXgaIgXghQgRghgLggIgIgqQgFglAFglIAJgtQAKgfAUgnQAJgPAPgXQAbgfAagXQAQgNAUgOQApgXAagKIAsgMQAggGAcAAMAwdAAAIAsAGQAfAHAjAQQAOAHAWAPQAcAVAWAaIAXAhQAPAbANAlQAHAeACANQAEAngFAiIgJAuQgMAmgRAgIgaAmQgTAZghAdIgjAbQglAWgfALQgdAJgQADQgfAGgdAAg");
	this.shape_17.setTransform(190.1,25.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F18824").s().p("A4vE5QgZgBgWgFQgkgIgigRQgMgFgagRQgagUgagdIgagjQgSgigKgiQgHgegCgPQgFgmAFgnQADgXAHgYQAKgiAUgnIAagnQAXgdAfgdQALgJAagTQAegSAqgQIAtgOQAngFAYAAMAwdAAAQASABAcAFQAnAJAgAQIAlAWQAgAZAVAYQAQAWAIAOQASAgALAjQAEAMAFAhQAFAmgFAoQgEAbgGATQgOAtgQAdIgZAnQgWAbghAdQgbAWgLAHQgmAWghANIgtAMQgfAGgfAAg");
	this.shape_18.setTransform(190.1,25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EC7403").s().p("A5cFnQgdgHgXgJQgsgRgigXIgoggQghgigUggQgNgUgKgaQgPgkgJgyQgCgRAAglQADgpADgPQADgSALgjQASguAWglQAHgLAZgiQAggjAkgcQARgNAdgSQAngVAvgQIA4gMIA3gFMAv+AACQAdABAbAFQArAKAqATQAVAKAYARQAkAcAbAcQATAZALASQAWAkAOArQAGAVAHAxQABAbgBAbQgCAQgHAoQgFAVgMAgQgQAngcAqQgUAagPAQQgeAggoAdIgvAdQgoATgwAOQgfAGgtAFMgv+AABQgmgCgjgGg");
	this.shape_19.setTransform(190.1,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo1, new cjs.Rectangle(0,-12.9,390.3,114.8), null);


(lib.ligt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#72FF72","rgba(116,255,116,0)"],[0,1],0,0,0,0,0,197.5).s().p("A1nVoQo+o9AAsrQAAsqI+o9QI9o+MqAAQMrAAI9I+QI+I9AAMqQAAMro+I9Qo9I+srAAQsqAAo9o+g");
	this.shape.setTransform(195.8,195.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ligt2, new cjs.Rectangle(0,0,391.6,391.6), null);


(lib.im1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Untitled1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.im1, new cjs.Rectangle(0,0,400,342), null);


(lib.head1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151616").s().p("AgkARQgEgDABgFQABgHAEgEQAGgJAHgHQAPgMASAAIAUADIABAAIABACIAFABIACABQgFABgFgBQgVAFgLASQgBACABACIABACIAWAAIABAFQgBAIgFAGQgMAGgLAAQgQAAgOgOg");
	this.shape.setTransform(33.1,25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#151616").s().p("AgUAWQgQgFAHgPQAFgJAJgGQAMgGANgCQAJgCAJAAIAEAFIgPADQgOADgEAOIABABIASABQACAMgKAEQgIAEgJAAQgGAAgHgCg");
	this.shape_1.setTransform(64,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151616").s().p("AgvAsIADgFIAAAJgAgxAiQgBgHgEgEIACgBIABgGQADAAABgFIADgGIACgFQAJgNANgJQAhgaAqABIgqAPQgOAIgOAKIgIAHIgGAGIgCADIACgEQgIAIgHAMIgBAHIgEAOIAAgFgAgrAcIABgGIACgEIgCAQIgBgGg");
	this.shape_2.setTransform(62.6,13.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0C591").s().p("Ag1AWQgMgPgEgQQgDgRAGgDQBKgiAuAnQARAPAAAQQABASgUAHQgdAOgXAAQggAAgVgYg");
	this.shape_3.setTransform(45.5,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0C591").s().p("AgtA9QgagPgGgcQgFgbASgZQATgZAggGQAfgJAbAOQAaAOAHAdQAFAagTAaQgTAZgfAGQgMAEgKAAQgUAAgRgJg");
	this.shape_4.setTransform(26.2,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#151616").s().p("AAHAkIgBgCQgGgTgFgPQADAPAEAQIAEAKIgIgDQgDgIgCgKIgBgJQgCgPAAgQQAAgEACgDIAGgLIABgCIgBAGIgFAHIACAbIAAgGIADAGIALAkIACAFQgCAAgCgFg");
	this.shape_5.setTransform(43,9.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#151616").s().p("AAHADQgFgEADgBQAEACgBADgAAAAAIgDgCIADACIACABIAAACIgCgDgAgIAAIABgBIAEgBIAAADg");
	this.shape_6.setTransform(43.6,14.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#151616").s().p("AgGgFIAGA1IgIgGIAAgLIgDgfQAAgLAEgIQACgHgBgHQAIgEAFgMIAFgCIgEAEQgJALgCANIgCACIABAFQADAdAFAgQABAFgCACQgDgegGgbg");
	this.shape_7.setTransform(45.9,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151616").s().p("AgBgCIAAAIQgIgFAEgIIACABIACADIAEADIAAAIgAAGAGIgDgGIAEABIAAAFIgBAAg");
	this.shape_8.setTransform(45.6,14.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#151616").s().p("AgdAqIACgOIAEgPIAEgQQAGgUAPgQIAMgHQAFgEAHgCQAAAAABAAQAAAAAAAAQABAAABAAQAAABABAAIgHACIgQAOQADgHAIgEIAFgDIAAgBQgGAFgIADIgHAJIgKAQQgMAigCAkgAgKgFIAEgJIgBAEIgDAJIAAgEgAAAgcIACgFIAFgCIgIAOIABgHg");
	this.shape_9.setTransform(50.5,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#151616").s().p("AACAKIAAgJIAFAFIgDAJIgCgFgAAAAIIgCgNIAEAFIgCANIAAgFgAgFAAIgBgOIAEAHIgCAKIgBgDg");
	this.shape_10.setTransform(48.2,12.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#151616").s().p("Ag1BEIACgOIACgFIgCAXgAg5A4QgEgLAEgKIAJgSQAPgkAegWIgDAEIgCACIgQAVIgJARQgIARgHARQgFANgDANIgBgHgAgnARIAPgfIAOgQIACgFIgBAGIgGAJQgMAUgLAVIgDAIIgDAHIgFANQACgPAIgRgAgYgOIAAAAgAAfg9IAdgKIgwAUIATgKg");
	this.shape_11.setTransform(57.5,7.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#151616").s().p("AACASIgBgRIADAFIACACIgDALIgBgBgAgBAMQAAgIABgHIAAgBIABAEIgBAPIgBgDgAgEgKIACgIIACAIIgFAQIABgQg");
	this.shape_12.setTransform(51.7,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#151616").s().p("AgsAiIABgCIgCAOQAAgGABgGgAgxAoQgFgMAEgMIAOgWIAEgEQAhgfAxgEIgVAGQgLAEgLAFQgMAHgLAKQgIAGgHAIIgHAJQgJAPgBASIgBgDgAgZgEIAJgJIgWAdQACgMALgIgAAMgdQATgJAVgHQgZAKgZAMIgNAHQALgHAMgGg");
	this.shape_13.setTransform(59.9,10.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#151616").s().p("AAEAGIABgGIAAABIAAAQIgBgLgAgBgOIACAGIAAAOQgDgDABgRgAgEgOQAAAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAIACACIgCAOIgBgOg");
	this.shape_14.setTransform(54.8,16.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#151616").s().p("AADAAIgDALQgCgIABgHIgDAEIgCAEQgCgIAGgIIAAgBIACgCQAFADgGAGIAAACQAGgHgCAKIAAABIACACQACAGAAAIQgEgIAAgIg");
	this.shape_15.setTransform(57.3,17.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#151616").s().p("AAZAAIAjAUQgegYglgOIgNgEIgVACQAAAAgBAAQgBAAAAABQAAAAgBAAQAAAAgBABIgKAEQgMAFgEAHIgCACIABgYIABAAIADgDQAZgEAYAEQAZAFAZAPQARAKAOAPIAEAFIAGAFIABABIABABIgxgegAhCAHQgFgDAEgEQAFgHAKgGIACAAQAQgIASADIARAHQANAGALAFQgXgHgXgGQgHgBgIABQgUAAgHAPIgDAHIAAgCg");
	this.shape_16.setTransform(65.9,23.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#151616").s().p("AAFAFIAAgEQgCAAgDAHIgBAGIAAgTIABgCIACACQAAADADABIAAACIACADIACAAIABABIABADIgCAQgAgKgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBIAAgFIADgCIAAgCQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABAAIABgDIACgCIABgCIAAALIgBAFIgCACIAAACIgDACIgBACIgCADIgBABg");
	this.shape_17.setTransform(58.1,23.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#151616").s().p("Ag/AGIgFAEIgSARIgKAIQAQgPARgOgAhMAUIAMgKQAWgOAXgNIAFgCIAOgFQAPgDAQADIASAFQAIADAJACQAJADAGAIIgHACQgGAAgGADIgEADQgHgBgGgEIgDgBQgGgBgGgDQgLgDgMACQgIgBgIADQgpAMglAYIALgMgABRgMIgCgBQgTgNgZgCQgSgEgRAEIgOAEQgQAHgOAKQAOgKAQgJQAKgFAKgCQAQgDARAFQAQACAOAGQAPAGANAJIgHACIgJgGg");
	this.shape_18.setTransform(35.3,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#151616").s().p("AgZAAIABAAIADgBIAFAAIACgCIALARgAAUAEQgIgGgLgGIACAAQAGAAADgFIAOAUIgBAAQgCAAgDgDgAgCABIgKgEIADgDIAFAAIAEgCIAKAPIgMgGg");
	this.shape_19.setTransform(44,19.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#151616").s().p("AAJC4IgRgDIgjgIIgKgDIgfgOIgfgQQgOgIgHgPIADACQAOANARAKIATAIQAJAFAJADIAOADIAkAJQAWADAXABQAcABAdgHQARgFAKgQIAFgCIACgFQAHgMAAgNIgCgBIAAgBIg8iCQgGgVgFgVQgEgOgBgPQgBgXABgXQAAgFADgFQADAWAGASQADAFACAFIAFAPIAaBZIAqBbIAAACQAIAPgGAUIgFAEQgDAFABAFIgRAPIgJAGQgQAIgUAFIhAgCgAg0CeQgMgDgMgFQgEAAgEgCIgNgGQgSgHgOgNQgFgEgCgFIAAAEIgHgJIAAgJIACAFIgCgRQACgFAEgGQACgEACgCIAEgDQAJgIAQgGQgUAIgLARIgEAFIADAXIAAAEIALAMIACAEIATAMQAOAFAQADQBIAKBJAHQASgCANgLQAGgFAGgJIAFgHQgBgIgDgHIgPgeQgrhLgShTQgIgkAJgiQADgMAIgLQAIgMAMgGIgCACQgHAIgHAJQgMARgDAWQgDAOABAMQAEAuARAoIA8B9QAJAKgGAJIgGAIQgLAMgNAJQgKAGgMADQgUACgTAAQgpAAgqgLg");
	this.shape_20.setTransform(51.2,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0C591").s().p("Ah2EbQgqgfAVgpQAgg6AVg6QAJgZASgIQAygUAJgWQAHgSgQgdQgbgpgQgbQgbgygKgyQgJgnAKgjQAOgtAqASQALAFAPAAQAKAEAFAVQAAAEgDADIgIAGQgNAKAGgCQAMgFADACQgdAGgJAkQgGAaAGAoQAKAvAtAXQBEAiAZAcQA9BGg5BmQg0BchYAlQgXAJgUAAQgeAAgZgTg");
	this.shape_21.setTransform(69.5,50.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0C591").s().p("Ag8C7QgFgJgggLQgggKgCgCQgUgbAoAKQA/APAJgBQA3gFARgcQANgWgJgtQgrh6gBhGQgCgkAZgRQAWgOAhAGQAhAVAdAaQAEALABAKQgEAWgQALQgGADgZAKQglANAKAxQAEATAcAnQAdAoAGAdQADAPAIAVQABAQgVAOQgvAhhAACIgJABQgwAAgKgRg");
	this.shape_22.setTransform(57,37.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0C591").s().p("AghDYQg4hOgQhPQgUhnAvhwQAuhvBghOQAeAAAFAMQAGAMgcAZQiAB0AHCsQAICnB/BzQAjAkgYAjQhQg1g3hMg");
	this.shape_23.setTransform(11.2,56.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FAD596").s().p("AhkGpQhQgShKgxQAYgjgjgkQiAh0gIinQgHisCBh0QAcgYgGgNQgFgLgeAAQBRhDBqgYQCsgqCWB6QCMBzAkC2QAiCrhaCBQhaB/i1AsQgpAKgqAAQgpAAgqgKg");
	this.shape_24.setTransform(46.9,54.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.head1, new cjs.Rectangle(0,0,87.2,98.3), null);


(lib.head2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E7467").s().p("AAWDyIgCgBIgCAAIgDgBIgCgBIgCgBIgCAAIgEABIgCgBIgBgDIgWgHIgGgFIgHgCIgGgFIgHgCIgYgSIgNgHIhGg2IghgfIgMgJIgJgLIgNgJIgSgVIgXgkIgGgMIgBgGIgEgCIgBgGIgCgDIABgCIgCgBIAAgCIgBgDIABgCIAAgIIgBgDIAAgCIAMgdIgHAeIgBACIADAJIgCACIADABIgBACIACADIACADIAAADIADAGIAFADIAAAFIAUAZIAJAKQAsAwApAiIAqAgIAMALIAbARIAMAJIANAHIAGAEIADAEIAHACIAHAFIAhALIACABIAEACIAEgCIACABQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIAIgCQBAgdBHg3IA6g0IASgYIAEgEIABgFQADgBACgFIAEgNIACgNIACgEIgEgGQABgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIAAgDIgBgBIAAgCIgDgFQgFgHgMgJIgIgHIgNgLIgNgKIgNgHQgygjglgWIjiiEIA/AfQBVAtBQAxIBkBAIAcAWIAFABIAXAXIAJARIAAAIIACADIgBACIgBACQABAGgDAJIgCAEQgEANgMAUIgYAcQgSAUggAYIiIBZIgJAEIgCgBIgDAAIgDABIgCgBIgEACg");
	this.shape.setTransform(85,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E7467").s().p("ACACyQgygWh1hNQhehAg3hKQg5hMAWgmQAjhCDzCkQBcA8AyBMQAwBKgXAnQgKATgZAAQgXAAgkgPg");
	this.shape_1.setTransform(90.4,19.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FCF1").s().p("AiKCeQiMh0AJgsQAKg0AqhSQAuhdAKgiQACAKAiAIQAwALAeARQAvAYB6BjQB/BnARAgQAYAuhsBXQhdBLgvAOIgIABQguAAh+hqg");
	this.shape_2.setTransform(84.4,27.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7467").s().p("AgkB7IAAgCIgDgGIgBgBIAAgCIgFgJIABgCIgCgDIABgDIgBgDIAAgCIgBgDIABgCIAAgDIABgCIgBgDIAuh7IgbBKIgMAzIgBADIAAACIgCAFIACADIgCAEIACABIAAACIgBACIACABIgBACIABAEIAAACIAFAJIgCACIACADgAgZAfIA3iCIgnBnIALgaQANgZAYg5IAJgTIgiBXIgZAtIACgFIgCAGIAAgBIgCAIQgPAcgDAJIgDAMg");
	this.shape_3.setTransform(61.8,17.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0C591").s().p("AgJAcQgQgFgJgMQgJgLAEgLQAEgMAPgFQAOgFAPAFQARAGAJANQAJAMgEAMQgEAMgPADIgLABQgKAAgJgDg");
	this.shape_4.setTransform(16.6,50);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#151616").s().p("AgZA6QgdACgMgXIABgCIABgDIACABIACABIABgCIAOAEQAyADAYgnIgFgFIADgJIgGgXIAMAEQAJAKAHALQAJAMgGAQQgNANgRAIQgsAXgqgWIAVAOIAgADIAigLQAZgHAKgXQAOgbgbgSIgogaQAmADASAfQAIAOgEAMQgSA3g9AAIgLAAg");
	this.shape_5.setTransform(74.7,87.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0C591").s().p("AgmA/QgmgUgQgiQgQghARgaQARgaAmgEQAmgEAmAUQAmAWAPAiQAPAggQAbQgQAbgoADIgLABQggAAgfgTg");
	this.shape_6.setTransform(55.7,77);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#151616").s().p("AgZARQgIgQALgLIACgCQAGgBAHgEIACAAIASAEIAGAFIgGgBQAIAEAIAFIgiABIgNANIgBgSIACgCIAIgDIgLAAIgEAEQAAAFABADQACALgDAEIgBgBg");
	this.shape_7.setTransform(14.9,79.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151616").s().p("AAXAYQADgLAFgKQgFgcgeAAIAPAAIARAIQANARgMARIgGAJIAAgCgAAIABIgDgCQgMgLgbgGIAGgBIAGgDIgBAAIAFAAIgEAAQAUgCASAKQAHADADAIIgLASg");
	this.shape_8.setTransform(37.9,85.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#151616").s().p("AAMgCQgbgMgdALIgBABIgFgDIgFgDIgEgCIgIgDQAjgTAjAKIARAFQAQAKAQAMQAQANANAPQgggXglgMgAhQgSIASgHQAogQAlATQgTgIgYAAIgPAEQgRACgQAIg");
	this.shape_9.setTransform(26.6,40.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#151616").s().p("AAPgBIAJAEIgUAHgAACgFIALADIgVAJgAgXADIAOgMIAJADIgPAJg");
	this.shape_10.setTransform(19.1,40.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#151616").s().p("AglgIQgBgEAEgCQArgYAdAoQgZgOgTAMIgBACIAQALIgIALIgBAAQggAAgFggg");
	this.shape_11.setTransform(25.5,44.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F0C591").s().p("AhvBCQATgZBCgaQBMgdAHgFQAZgSg3gSQgTgDgIgFQgQgHgJgVQgHgVAdgZQAggcAuAeQAVAPAOAVQAXAhgUAUQgrAtgpASQgLAFg4AQQgsAOgNAUQgSAcAeAwQADABgGADQg1gxAcglg");
	this.shape_12.setTransform(24.5,51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0C591").s().p("AAjAtQgJgCgjgMQgZgIgPgRQgPgPAFgNQAFgQAWgEQAVgFAZAJQAXAHAPAbQANAXgFAPQgEALgOAAIgHAAg");
	this.shape_13.setTransform(25.8,66.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0C591").s().p("AlNELQgEgDCng1QCyhFAnhNQAdAOAagEQAbgEAPgRQAPgRgEgUQgEgRgRgJQgRgLgXAAQA9hyA2hKQBAhWAjgEQAOgEAIAoQAJArgLAsQgWBagyBaQg6BohOBHQiCB4iaAAQhRAAhYghg");
	this.shape_14.setTransform(63.4,85.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#151616").s().p("AgNAWIADgBIACABIADgCIAFgDIgBgBIADgEIgCAFQANgJADgNIAEgOIAFANIAAACIgFAHIgOATIgTAAIAAAAgAgVAUIABAAIAHACIgIgCgAgYATIAEABIgCAAIgCgBgAgHATIADgBIgBACgAAMgVIABADQADAOgKAKg");
	this.shape_15.setTransform(81,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#151616").s().p("AAHAGIgCgBIABgEIACAAIAAADIACABIgBACIgBACgAABABIgBAAIAAgCIgBgDIABgCQgBABAAAAQAAABAAAAQABAAAAABQAAAAAAAAIACADIACAAIgBACgAgEgCIACABIgBABgAgEgCIgCgBQgBAAgBAAQAAgBAAAAQAAAAgBgBQAAAAABgBIABgCQABADADABIgBACg");
	this.shape_16.setTransform(82.9,51.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#151616").s().p("AgmARIAhABIACABIAFgDIgCgBIADgBIgBACIAFgBIASgVIAIgKIAGAMQgFAEgEAGQgFAIgJAEQgNAFgMAAQgPAAgOgGgAAYgOIAFgIIgBAHIgUAWIgFAHIAVgcg");
	this.shape_17.setTransform(75.1,51.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#151616").s().p("AADAJQABAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgBgBIADgEIADABIgDAHgAACAGIgCgGIAAgBIACgCIADABIgDAGIAAACgAgEgDIAAgCQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAIAHACIgBADIgBACIgBACgAgHgJIAAAAg");
	this.shape_18.setTransform(78.7,49.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#151616").s().p("AgtAFIAOACIAGgBIAAACIACABIABACIAQgBQAfADAZgTIAFgDIABAMQgaAMgbAAQgXAAgZgKgAgNAIIATgBIgDABIgJACgAAGAHIAfgMIARgJIgQAKIgbAMgAg3ABIAFAAIAIACg");
	this.shape_19.setTransform(68.9,49.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#151616").s().p("AgDAIIALgGIgFAGIgDABQAAACgDACgAgDAAIAIgEIgCAEIgDACIAAABIgDACgAgHgFIAHgGIACACIgBACIgBACIAAACIgDABIAAACgAACgJIAAgDIAAADgAACgJg");
	this.shape_20.setTransform(75.2,48);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#151616").s().p("AAAAQQgegJgdgNIANAGIgqgWIBLAgIANADQAnAKAlgLIgEgCIgOAEIAZgIIAGgCIgNAIIACgBIAHgBIABABIAAACIgBACQgDAGgIABIgRABQgeAAgbgHgAAUAOIgRgBIA3ABIgmAAg");
	this.shape_21.setTransform(59.2,41.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#151616").s().p("AhHgYIA9AdIgHgCQAaAKAdAGIgEgBIAJAAIgFABIAKABIgFgCIATgDIAJgDQgFADgBAEIAEABIACAAIABABIAAACIgBACIgHAAQhJAAg+gxg");
	this.shape_22.setTransform(58.3,38.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#151616").s().p("AgogOIgIgFIAAgBIAIAGIAbAOIgHgFQAdANAfAEIADABIgBAAIAHAEIAAABIAAACIgEABQgwgHglgcg");
	this.shape_23.setTransform(58.7,36.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#151616").s().p("AgOARIAAgDIACABIADABIABgCIACAAIABgBIAFgDIABgDIAAgDQAGgEgBgKIABgDIABgCIAHAIIAAACIgBACIgBACIAAACIgBACIgBACIgDACIgBADIgGAEIgCAAIgBACIgCgBIgDACIgDAAIgEAAgAgLANIADABIgEABgAgIAOIABgCIACABIgDABgAgEAIIADgCIABgCIAEgUIACABIgBABIgBADIAAADIABADIgBAEIgBABIgDAEIgCAFIgDABg");
	this.shape_24.setTransform(61,36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#151616").s().p("AgSAKIABgBIAEAAIADAAIADgBIADgCIADgBIgCgBIANgRIgGAKQAHgJAIgBQABAKgNALQgHAGgHAAQgFAAgGgEgAgKAJIgCgBIADgBIADgCIgBADIgCgBIgBACIAAAAgAgGAFIADgBIgBACg");
	this.shape_25.setTransform(57.9,35.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#151616").s().p("AgtADIAoABIgIACQAMABAKgFIAKgCIgOAEIAVgEIAKgFIAKgHIgDAOIgFABQgLAJgOAAIgIABQgZAAgZgKgAgbAGIAEgCIgHAAg");
	this.shape_26.setTransform(53.5,33.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#151616").s().p("ABCAZQhcgDhNgvIBXAhQAJADAJAAQAsAIArgIIAFABQgiAKgigEIAKACQAjACAhgJIgDAIQgNAFgNAAIgJgBg");
	this.shape_27.setTransform(44,27.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#151616").s().p("AgIAKIAEgKIAKgEIAEgBIgCAEIgDABIgCACIgCABIgBACIAGgCIAEgCIgBACQgEACAAACIgCAAIgLAGgAgEgCIABgDIADgBIAAgCIAGgEIgCAHIgIAFg");
	this.shape_28.setTransform(55.3,29);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#151616").s().p("AA5AaIgDgBQgWABgVgHQgrgPgngYIAzAWIg3gbQAcANAdAMQAnAPApAAIgGADIgPAAIAEABIAGgBIAHAAIAGAAIAIgCIAEABIgDAHQgDABgDgBQgEACgDAAIgDAAgAARAOIAKACIgMgFIgIAAIAKADgAA+APIAGgEIgEAEIgCAAgAA+APIAAAAg");
	this.shape_29.setTransform(44.1,24.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#151616").s().p("AgHALIACgFIABgCIgBgCIAAgBIAAgCIAAgFIAIgEIgDAGIgCACIgDADIALgFIgFAFIgBACIgFADIAKgBIACgCIgDAEIgIAEg");
	this.shape_30.setTransform(52.6,25.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#151616").s().p("AAvAdIgegHQgxgNgbgkIAAgCIAAAAIAAACIABACIAEAEQASATAaAIIgLgGQAbAOAdAFQAWADADACIgegEIAHADQAQgBAHAGQgCACgFAAIgGgBg");
	this.shape_31.setTransform(43.2,21.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#151616").s().p("AgHAJIAAgDIABgCIACABIADABIABAAIgCACIgEABIgBAAgAACAHIgCgBIABgCIACABIACABIAAACgAAFAGIADgCIAAACgAAFAGgAgFACIACAAIABgCQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAFgDIAAACIAAADIgCADIACABQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIABgCIACABIAAABIgFADIgGABg");
	this.shape_32.setTransform(50.2,23.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#151616").s().p("Ag2AfIgXgIIgdgOIgBgJIgBgVQAhAhAuAHQAsAKAsgPIAogOQgjAbguAJQgOADgNAAQgXAAgWgIgAAWAPIAHgCQApgGAngOIgQAHQggAPgjAAIgEAAgAgnALQgqgJgbghIADgHQAKAMALAKQALAJALAGIAqANIgTgBg");
	this.shape_33.setTransform(28,85.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#151616").s().p("AgMABIAWAPIAAAPgAgJgOIAUAOIgBAEIgBAFIAAACIACADgAgEgfIAEADIANAOIgCALg");
	this.shape_34.setTransform(15.7,83);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#151616").s().p("AhOBwQgRgLgLgSQgDgFgCgFQgUgzAxgcICDg8QAPgHAJgMQAEgFAGgEIAOgJIACgGIAFgGQAEAagVAWQgMAMgOAJIgRALIgTAIIhFAdIAPgCQBJgQA2gxIAGgHIADgKIAEgDQAIgbgJgaQgBgFAAgFQAVAyghAoQgMAQgRALIh1AoQgrAKAAAmQgBAOAKAKIAMAMQAwAwBEAHIglgDIANAEQg1gHgugegAhKAQQgMAFgKAJIgHAUQADAPAHAOIAHAMIAOAJQgTgTgFgbQgCgHADgHIAEgGQALgNAPgJIgJAEg");
	this.shape_35.setTransform(26.4,56.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#151616").s().p("AgEAuIABgDIABgCIABgCIgCgDIABgCIABgDIgDgGIgFgQIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAEACIAHAIIAJASIgBACIgEAGIgGADIgDAEgAALAcIgLgaIAAgCIgCgDIgBgGIgEgEIgBgDIgEgDIACAAQAFACgBACIAFACIAKALQABAAAAABQABAAAAAAQABABAAAAQAAAAABABIADAGIACABIACADIgGASIgEAEgAATAHIAAgCIgQgbIgEgGIgTgTQAGACAPALQATANgBAFIAAAHIACAJIgBABIAAACIAAAGIgBgCg");
	this.shape_36.setTransform(34.5,42.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#151616").s().p("ABOAeQgogegvgFQgTgBgTAEIgUgJIACgFQAigLAjAHQANADAMAIQAZAMASAVIgCgFIAQARgAA5AIIgTgRIAdAZIgKgIgAhOgPIgHgDQAegMAggFIAHADQATABATAJIAEADIAMAKQg4gmg8Agg");
	this.shape_37.setTransform(63.5,61.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#151616").s().p("AAOABIAJADIgUAGgAgJAGIAKgLIAKAFIgWAKIACgEgAgMgJIALADIgNAHIgIADg");
	this.shape_38.setTransform(55.9,60.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#151616").s().p("AgTASQgMgLgLgLQANgcAhALQAVAFASASQgagOgVAMQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIAMAGIADAGQgGAKgIAAQgHAAgIgHg");
	this.shape_39.setTransform(62,64.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FAD596").s().p("AiUG3QhvgThShNQhLhHgmhqQglhlAGhoQAHhrAxhNQBjifBzgsQB1gtDPAtQDeAxBhB+QBqCMhXDAQhhDUiEBXQhqBFiQAAQg3AAg9gKg");
	this.shape_40.setTransform(48.7,70.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.head2, new cjs.Rectangle(0,0,113.4,115.7), null);


(lib.Symbol6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAD596").s().p("AghAGQgPgfAZgQQAQgJAaAWQAaAXgHAOQgEAMgJAKQgKANgJAAQgZgIgOgeg");
	this.shape_9.setTransform(47,30.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0C591").s().p("AgjAGQgRguAkgJQAQgDASAPQASAOAGATQgHgQgUgNQgUgNgMAHQgYARAOAeQANAdAYAJIADgCIADAGIgGAAQgdAAgQgsg");
	this.shape_10.setTransform(46.6,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#56B55B").s().p("AAkC+QgygRASg3QAMghABgIQACgVgSgLQgTgNgMAfQgQAqgJAGQgeAUghgMQgegKgJgVQgKgVAMgoQAMgigEgCIgogPQgfgMgGgOQgNgjASghQATgiAnAEQAOABAaATQAXARAHgEQAGgFANghQAMgeAQgFQAhgIAaAOQAfAPgMAfQgOAhAAAJQAAAYAgAQQANAHAMgMQAHgHAQgUQAhgnAtAbQAXAMgQAoQgFAMgYAnQgEAIAQAMIAiAbQAwAngfAnQgZAggXgNQgagZgUgKQgMgHgJAMQgFAGgLAaQgTApgXAAQgFAAgFgCg");
	this.shape_11.setTransform(23.8,21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAD596").s().p("ABGBjQgHAAgSgRQgQgPgEACQgVALgigCQgbgCgYgHIgbgKQgRgJADgKQADgJATABQAMABALADIADAFQADADACgCQACgCgIgDIgCgBQgIgHgUgLQgTgLACgKQACgQAcAKQAcAKACgJQAAgBgXgTQgXgTAGgKQAJgQAbAIQAOAEARAJQgLgOgHgNQgPgaAmAJQAYAFAdArQAeAsgIANQgHANAiAOQApARAEAGQAOAFgSATQgPARgVAAIgHgBg");
	this.shape_12.setTransform(47.6,31);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E7467").s().p("AgEBmQgagPgggYQgjgbgbgbQA8AxAwAbQAqAYA4ATIANAEQgHADgJAAQgfAAg0ghgAgiAkQhEgbghgLIgFgGIgIgJQgjgqAFgSQAFgPAQgRQAJgJAIgHQANgJAGAAIBMAOQBFAOBMgDQBMgCAEADQgnABgqAFIABgBIgDABIgCAAIABAAQgtAKgTADQgXADgJgDIhJgSQgfgIABACQACAfgZAQIgOAFIgVAJIAAAAIAAAAQADgBASAKQAXANAtAeIBMAzIgmgPg");
	this.shape_13.setTransform(70.5,47.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#286B5F").s().p("ABpBDIgNgDQg4gTgqgZQgwgag8gxIgPgNIAEABQAhAMBEAcIAmAOQAnANAaABQAdACAQAhIADAGQAKAagTABIgNgCg");
	this.shape_14.setTransform(69.5,53.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0FCF1").s().p("AAZBFQgQghgcgCQgagDgngMIhNgyQgugfgWgMQgSgLgEACIAWgKIAOgFQAZgQgCgfQgBgCAfAIIBJATQAJACAYgDQATgCArgLIAAAAIACAAIADgBIgCABQAqgFAngBIAbAAICHBgIiIC+Qg2gdglgwgAgRh8QgDABgCABQgCABAAAAQgBAAABAAQABAAACAAIANgEQAQgFgCgDIgXAJgAj7hTIAAAAIAAAAg");
	this.shape_15.setTransform(79.5,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer 2
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E7467").s().p("AAkC+QgygRASg3QAMgiABgHQACgWgSgLQgSgMgMAdQgRApgJAHQgdAVgigLQgegKgJgVQgKgVAOgnQAMgjgDgCIgrgQQgfgLgGgPQgNgiASghQAUgjApADQALABAcAVQAWARAGgGQAGgFAPggQAMgcAQgFQAggJAaANQAeAQgMAfQgMAkAAAGQgBAZAfAPQANAGAMgLQAHgHAQgUQAignAvAbQAVAMgQAoQgFALgZAoQgEAHAQAMIAjAaQAvAngfAoQgZAhgXgNQgagZgUgLQgMgHgJANQgFAFgLAaQgTAqgYAAIgJgCg");
	this.shape_16.setTransform(23.2,19.6,1,1.119,0,3.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6_1, new cjs.Rectangle(0.7,-1.8,104,66.9), null);


(lib.Symbol5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0C591").s().p("AAiAsQgcgqgGgLIgdgwQgUgbgXgIIgDgBQAcgJALAHQAkAMAgBEQATAlAZBNQgKgHgggwg");
	this.shape_10.setTransform(27.4,32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FAD596").s().p("AAZC8QgHgdABghQAAgXgDAAQgEAAgIAaQgGAXgVgOQgFgCgCgFQgCgFACgFIAMgbQAIgQgCgEQgdhNgagvQgfg3gogoQgDgYAMgSQALgPASgGQAZAIAVAcIAeAvIAiA3QAgAxAKAIQAGAUAGALQACAGAuAsQApAtgUARQgEAGgTgPQgWgTgDgBQgMgGAEAQQAFARAVAgQAFAKgIAHQgJAIgMgHQgEgDgKgZQgKgbgCgCIgDgBQgBAAAAAAQgBAAAAAAQAAABAAAAQAAAAAAABQgCAFADATIAHAqQACAPgNAFIgEABQgKAAgGgVg");
	this.shape_11.setTransform(30.2,43.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2E7467").s().p("AgkCmQgLiBACglQAFhPAohPQAIgLAVgCQAVgCgGAMQgyASAGBnQADBFAdBoQABAOghARQgTAJgIAAQgIAAgBgHg");
	this.shape_12.setTransform(4.6,18.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2E7467").s().p("ADXAtQipg4g4gLQhzgXhzAWQgOADgJgGQgJgGANgCQB8gXCLAWQBoARCaAyQAOAFgYAGQgNAEgKAAQgIAAgGgCg");
	this.shape_13.setTransform(33.3,4.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FCF1").s().p("AhsERQgPgIgTgkQgYgygRgfQhDh7hrg9QgBgBCOgnQCkguA0gsQAdgYA8g5QAygpAVAVQBVBZAUAYQAuA2AtBKQAWAjjjCNQhaA5hKAkQhCAggWAAQgFAAgCgCg");
	this.shape_14.setTransform(42,37.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2E7467").s().p("AgFDJQglgvgag5IgmhfQgthvhUhAQgKgJAQgOQARgNALAJQAuAjA4BSIBcCHQA1BHAzAWQBAAcBOglQAJALh7AhQhZAZgdAAQgKAAgCgEg");
	this.shape_15.setTransform(24.4,53.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2E7467").s().p("Aj3CtQh5jFgrghQgJgHAYgHQARgFA8gOQCUgnBvhFQArgaBWg/QBHgsAYAaQBBBABDBmQAnA7BMB6QAfAvjPBoQhzA6iTA6QgRAHgSAAQhTAAhmiPg");
	this.shape_16.setTransform(44.2,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5_1, new cjs.Rectangle(0,0,85.7,74.4), null);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0C591").s().p("AAGBHQgvgBgbgCIgEgCQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgEABgDgBQgKgDgHgGQgGgJAMgKQAMgJANABIBDADQAxAAAKgLQAOgOgJgeQgMgrABgGIAlBHIALAiQAIAkgSAAQgUACgfAAIghgBg");
	this.shape_18.setTransform(-70.3,21.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FAD596").s().p("AgqCMIgFgCIAGAAQAAgBABAAQAAAAABAAQAAAAAAABQAAAAAAAAIAEACgAhdBXQAAgFAFgEQABgBABgBQAAAAABgBQAAAAAAAAQgBgBAAAAQgKgDgCgDQgCgEADgLQAEgJAHADQAGACADAGQABABAlgCQAmgCAHADQAYAIhBhlQhChmAFACICOBBIAnBJQgBAGANArQAIAfgOAOQgJALgyAAIhDgDQgNgBgMAJQgMAKAGAJQgdgXACgTg");
	this.shape_19.setTransform(-73.7,13.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FAD596").s().p("AgEAFQgHgHAIgEQAFgDAGAHQABAGgEACIgGACQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_20.setTransform(-78.7,26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0C591").s().p("AgHAGQgBgKADgDQADgBADABQAEABADADQACADgCADIgEAFIgEABQgEAAgDgDg");
	this.shape_21.setTransform(-80.8,24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4_1, new cjs.Rectangle(-83.6,0,23.7,28.3), null);


(lib.Symbol3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0C591").s().p("AAjBxQhOgFgKACQgTABgEgHQgBgIgCAAQgRgGgHgKQgGgJAEgJQgHgCgGgHQgKgOAIgZQAEgLAkAKQAOADAsAPQAXAIgGgOQgNgUgCgIQgXgrgLgYQgUguAUABIBuAJIAvCGIAUAtQAGAXgRASQgBACgPAAQgTAAgqgDg");
	this.shape_1.setTransform(-64.4,15.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAD596").s().p("Ag+BpQgBgFgBAAQgRgGgHgKQgGgJAEgJQgHgCgGgHQgKgOAIgZQAEgLAkAKQAOADAsAPQAXAIgGgPQgMgUgDgIQgXgqgLgYQgUguAUABIBuAJIAdBRQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAAAQgEALAMApQALAlgNAOQgUAShqgMQgMAAgKAGQgMAGgBAJQgDgCgBgFg");
	this.shape_2.setTransform(-65.9,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3_1, new cjs.Rectangle(-76.8,4,24.9,23.2), null);


(lib.border = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.border, new cjs.Rectangle(-1.5,-1.5,241,401), null);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2E7467").s().p("AgNAQIgFgCQADgOgBgEIANgJIACABIADgEIACABIADABIACAAIADgBIAHACIgBAKIgIAHIgEADQgBAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgDgBIgFAGIgEAEg");
	this.shape.setTransform(8,46.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2E7467").s().p("AgNAQIgFAAQACgNgBgFIANgJIADABIADgGIACABIADABIACABIACABIAEgCIAEACIgDAJIgHAJIgDABIgFABIgEABIgHAHg");
	this.shape_1.setTransform(8.8,36.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2E7467").s().p("AgNAQIgEgBQABgPAAgEIANgIIACAAIABgEIACABIACAAIADgBIADABIABAAIAIADIgDAJIgGAHIgFADQAAABgBAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgEgCIgGAGIgCAEg");
	this.shape_2.setTransform(10.5,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2E7467").s().p("AFFGqQhGgJhXgaQh4gkgpgKIi0gWQh1gOgjgjIgBgBQgPgQgDgbQgEgiAWjPQAEhgAIgnIABgDIAFgUIADgVIACgKQAPhlARgjQgHgOgNgMIgVgTIgBgBIAAgBIgCgBQADgCAGAAIAEgCIADACIAXABIAzADIBaAFQBCABAogKQBRgbAYgFQBWgUgNApIgCAFQgdBHi4APQhLAGg9gIQgpgGgQgJIgIArQgQBigJBNQgfEJAzBMQAEAHAPAPIA3gMQBhgOBWAnQA7AbBqA0QBdAqBKALQAtAGhSkYIg+jWQgehuADgfQAAgBAbA/QAMAbAHAKIAIAlQAPBEAoCdQBFEjgqAAIgCAAgAD0iCQgBgkAagNQAQgIAlgIQAWgGhXhYQg8g9gxgpIANgFQAxAoBCBHQBVBagUALQgiAHgTAFQgiAIAAAlQAAAJgCAAQgDAAgFgMg");
	this.shape_3.setTransform(34.6,42.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FCF1").s().p("AEvGOQhKgLhdgqQhqg0g7gbQhWgnhhAOIg3AMQgPgPgEgHQgzhMAfkJQAJhNAQhiIAIgrQAQAJApAGQA9AIBLgGQC4gPAdhHIABABQAxApA8A9QBXBYgWAGQglAIgQAIQgaANABAkIAAADQAAALgHgLQgHgKgMgbQgbg/AAABQgDAfAeBuIA+DWQBQESgpAAIgCAAg");
	this.shape_4.setTransform(36,43.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,69.1,85.2), null);


(lib.Symbol2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_102 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(102).call(this.frame_102).wait(1));

	// Layer 13
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(61.4,12,1,1,0,0,0,3.6,2.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({_off:false},0).to({alpha:1},6).wait(1));

	// Layer 14
	this.instance_1 = new lib.Symbol13();
	this.instance_1.parent = this;
	this.instance_1.setTransform(5.2,1.9,1,1,0,0,0,5.2,1.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({_off:false},0).to({alpha:1},6).wait(1));

	// Layer 15
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#151616").s().p("ACyA7Qh8g7hnADQhVADg6gDIAMgKQBFhDCRAOQCAAMAfBvIgPgEg");
	this.shape_19.setTransform(55.9,74.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#151616").s().p("ADBA2IgIgEIgEgCQghgMghgJQgsgOgrgGQgogHgnAAQhXAAg8gIQAGgFAHgEQAKgHALgGQAogVA4gDQAugCA1AGQBJAJAtAeQAjAWANAqIABADIgFgCg");
	this.shape_20.setTransform(55.9,74.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#151616").s().p("ADHAvIgHgEIgDgDIhGgQQgsgLgugHQgqgGgogCQhZgCg9gOQAGgFAHgCQAJgGAMgEQAogOA6ABQAtADA2AHQBMALAwAWQAmAPANAlIABACIgFgCg");
	this.shape_21.setTransform(55.8,74.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#151616").s().p("ADNApQgDgBgDgEIgDgCQgigEglgHQgvgJgwgIQgsgGgogDQhcgFg+gUQAEgFAIAAQAKgEAMgBQApgIA5AFIBmAQQBNANAzAOQApAIANAhIABABIgEgDg");
	this.shape_22.setTransform(55.7,73.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#151616").s().p("ADVAoIAAgBIACACIgCgBgADTAmQgDgCgDgEIgCgDQgiAAgngFIhjgPQgtgHgrgEQhdgIhAgZQAEgFAJACQAJgDAMABQAqgBA5AJQAxAMA3AKQBPAOA2AHQArABAOAbIgCgBg");
	this.shape_23.setTransform(55.6,73);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#151616").s().p("ADbApIgDgEIABACQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIgBgBgADOAdIAFAAIACADIACAEQgEgEgFgDgACHAdQgygGg1gIIhagNQhggKhBgfQAEgEAJAEQAJgBAMACQArAHA5AMQAyAQA3AKQBSARA5AAQAegDARAIQgQACgRAAQgSAAgUgCgADOAdIAAAAg");
	this.shape_24.setTransform(55.5,71.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#151616").s().p("ADgAsQgHgLgVAAIAWgEIACAEQABAFACACQABAAAAABQAAAAABABQAAAAAAABQAAAAABABIgCAAgAARAbQgfgHgegJIBNAMQA4AIAzAEQASABARgBIgNADQgTADgUAAQgvAAg7gOgAg8AIQhigNhCgkQADgEAKAGQAJAAAMAFIBkAdQAWAIAYAIIgQgDg");
	this.shape_25.setTransform(55.5,70.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#151616").s().p("AAOAoQg4gNg0gaIgCAAIAiAGQAuAJAyAHQA7AIA0ADQAtABAkgMIABAEQAAAFACACQACACAAADIgCAAQgMgMg1ASQgcAIgfAAQgqAAgxgNgAjmgzQADgDAKAIQAJACANAGQArAUA4ATQhOgRg4gjg");
	this.shape_26.setTransform(55.4,70.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#151616").s().p("AAMAzQg4gOg3geQglgPgggRQAvAUA5AKQAvAJA1AIQA9AJA1ABQAwgBAjgQIABAEQAAAGABACQACACgBAEIgBAAQgNgHg4AZQghAMgnAAQgmAAgsgMgAjrg+QACgDALAKQAJADANAJIAgASQglgQgegVg");
	this.shape_27.setTransform(55.3,69.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#151616").s().p("AAJA/Qg5gQg4gjQg4gbgtghIgFgDQA9AkBTARQAwALA3AIQA/AJA3gBQAygCAjgUIAAAFQAAAGABADQABABgBAEIgBACQgNgDg7AgQgmARgsAAQgkAAgpgLgAjxhIQACgEALANQAIAEAKAIQgQgKgPgLg");
	this.shape_28.setTransform(55.2,69.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#151616").s().p("AAABFQg5gRg5goQg5gfgugnQgNgNgJgHIgBgBQBEAzBhAXQAyAMA4AHQBCAKA5gDQAzgDAkgXIAAAEQgBAGABADIgBAGIgBACQgMACg+AnQgrAXgxAAQgjAAgmgLg");
	this.shape_29.setTransform(55.8,69.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#151616").s().p("AgBBRQg7gSg6gsQg4gjgvgvIgXgWIgEgGQBGA6BmAbQAzAMA6AIQBFAKA6gEQA1gFAkgbIgBAFIgBAJQABACgCAFIgBACQgMAHhBAuQguAcg1AAQgiAAgkgLg");
	this.shape_30.setTransform(55.6,69.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#151616").s().p("AgDBdQg8gUg7gwQg4gngwg1IgXgbIgHgKQBIBCBqAdQA1APA8AIQBHAJA8gGQA3gGAkgfIgBAFQgCAIAAADIgCAGIgCADQgMAMhEA1QgxAjg5AAQghAAgigMg");
	this.shape_31.setTransform(55.5,68.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#151616").s().p("AgHBpQg7gVg8g1Qg5grgwg8IgWgdIgKgPQBKBJBuAhQA2APA9AIQBKAKA8gHQA6gIAkgjIgBAGQgDAIAAADIgCAIIgCACQgMARhHA7Qg1Apg8AAQghAAgigMg");
	this.shape_32.setTransform(55.4,68.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#151616").s().p("AgKB0Qg7gVg+g6Qg4gvgxhCIgXgiIgMgSQBMBPBxAlQA4AQA/AJQBMAKA/gJQA7gKAlgnIgDAGIgDANIgDAIIgCADQgMAVhJBDQg5Aug+AAQghAAgigNg");
	this.shape_33.setTransform(55.4,67.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#151616").s().p("AgMCAQg8gXhAg+Qg4gzgxhJIgYglIgNgWQBOBWB1AnQA4ATBBAIQBPALA/gMQA+gKAlgrIgCAGIgFANIgEAIIgCAEQgLAahNBKQg8A0hBAAQggAAghgNg");
	this.shape_34.setTransform(55.3,67.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#151616").s().p("AiNAxQg4g3gyhQIgmhCQB3CJDMAaQBSALBBgNQA/gLAmgwQgIAPgBAFIgGANQgMAfhQBQQg+A7hDAAQhaAAhlhog");
	this.shape_35.setTransform(55.3,67.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(80).to({_off:true},1).wait(22));

	// Layer 18
	this.instance_2 = new lib.ligt2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(55.7,126.7,0.127,0.127,0,0,0,195.8,195.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(91).to({_off:false},0).to({regX:195.6,regY:196,scaleX:0.71,scaleY:0.71,x:55.6,y:126.8},6,cjs.Ease.get(1)).to({scaleX:0.65,scaleY:0.65,y:126.7,alpha:0},5).wait(1));

	// Layer 19
	this.instance_3 = new lib.Symbol15();
	this.instance_3.parent = this;
	this.instance_3.setTransform(59.7,120.6,0.415,0.415,0,0,0,126.5,126.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(97).to({_off:false},0).to({regY:126.7,scaleX:0.32,scaleY:0.32,alpha:0.512},5).wait(1));

	// Symbol 5
	this.instance_4 = new lib.Symbol5_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(294.6,155.2,1,1,0,0,0,8.7,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:42.9,regY:37.2,rotation:-0.1,x:328.5,y:184.2},0).wait(1).to({rotation:-0.3,x:327.7,y:183.6},0).wait(1).to({rotation:-0.8,x:326.1,y:182.5},0).wait(1).to({rotation:-1.5,x:323.8,y:180.8},0).wait(1).to({rotation:-2.5,x:320.7,y:178.7},0).wait(1).to({rotation:-3.4,x:317.5,y:176.5},0).wait(1).to({rotation:-4.2,x:314.8,y:174.6},0).wait(1).to({rotation:-4.8,x:312.9,y:173.3},0).wait(1).to({rotation:-5.1,x:311.9,y:172.6},0).wait(1).to({regX:8.7,regY:8,rotation:-5.2,x:274.9,y:146.3},0).wait(1).to({regX:42.9,regY:37.2,rotation:-5.1,x:311.3,y:172.3},0).wait(1).to({rotation:-4.9,x:310.5,y:172.2},0).wait(1).to({rotation:-4.4,x:308.8},0).wait(1).to({rotation:-3.7,x:306.3,y:172},0).wait(1).to({rotation:-2.7,x:303.2,y:171.8},0).wait(1).to({rotation:-1.8,x:299.9,y:171.6},0).wait(1).to({rotation:-1,x:297.1,y:171.5},0).wait(1).to({rotation:-0.4,x:295.2,y:171.3},0).wait(1).to({rotation:-0.1,x:294.1,y:171.2},0).wait(1).to({regX:8.7,regY:8,rotation:0,x:259.6,y:142.1},0).wait(1).to({regX:42.9,regY:37.2,rotation:-0.1,x:293.5,y:171},0).wait(1).to({rotation:-0.3,x:292.7,y:170.2},0).wait(1).to({rotation:-0.8,x:291.1,y:168.7},0).wait(1).to({rotation:-1.5,x:288.7,y:166.4},0).wait(1).to({rotation:-2.5,x:285.7,y:163.5},0).wait(1).to({rotation:-3.4,x:282.4,y:160.5},0).wait(1).to({rotation:-4.2,x:279.7,y:157.9},0).wait(1).to({rotation:-4.8,x:277.8,y:156.1},0).wait(1).to({rotation:-5.1,x:276.8,y:155.2},0).wait(1).to({regX:8.7,regY:8,rotation:-5.2,x:239.8,y:128.8},0).wait(1).to({regX:42.9,regY:37.2,rotation:-5.1,x:276.2,y:154.9},0).wait(1).to({rotation:-4.9,x:275.2,y:155.1},0).wait(1).to({rotation:-4.4,x:273.4,y:155.7},0).wait(1).to({rotation:-3.7,x:270.6,y:156.4},0).wait(1).to({rotation:-2.7,x:267.1,y:157.4},0).wait(1).to({rotation:-1.8,x:263.4,y:158.4},0).wait(1).to({rotation:-1,x:260.2,y:159.2},0).wait(1).to({rotation:-0.4,x:258,y:159.8},0).wait(1).to({rotation:-0.1,x:256.8,y:160.1},0).wait(1).to({regX:8.7,regY:8,rotation:0,x:222.3,y:131.1},0).wait(1).to({regX:42.9,regY:37.2,rotation:-0.1,x:256.3,y:160.1},0).wait(1).to({rotation:-0.3,x:255.7,y:159.5},0).wait(1).to({rotation:-0.8,x:254.5,y:158.4},0).wait(1).to({rotation:-1.5,x:252.8,y:156.7},0).wait(1).to({rotation:-2.5,x:250.5,y:154.6},0).wait(1).to({rotation:-3.4,x:248.1,y:152.4},0).wait(1).to({rotation:-4.2,x:246.1,y:150.5},0).wait(1).to({rotation:-4.8,x:244.7,y:149.2},0).wait(1).to({rotation:-5.1,x:243.9,y:148.5},0).wait(1).to({regX:8.7,regY:8,rotation:-5.2,x:207,y:122.2},0).wait(1).to({regX:42.9,regY:37.2,rotation:-5.1,x:243.2,y:148.3},0).wait(1).to({rotation:-4.9,x:241.7},0).wait(1).to({rotation:-4.4,x:238.8,y:148.4},0).wait(1).to({rotation:-3.7,x:234.5,y:148.5},0).wait(1).to({rotation:-2.7,x:229.1,y:148.7},0).wait(1).to({rotation:-1.8,x:223.4,y:148.9},0).wait(1).to({rotation:-1,x:218.4,y:149.1},0).wait(1).to({rotation:-0.4,x:215.1},0).wait(1).to({rotation:-0.1,x:213.2,y:149.2},0).wait(1).to({regX:8.7,regY:8,rotation:0,x:178.5,y:120.1},0).wait(43));

	// head 2
	this.instance_5 = new lib.head2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(270.8,108.2,1,1,-18.5,0,0,50.4,70.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:70.7,scaleX:1,scaleY:1,rotation:-20.3,x:251.1,y:99.4},10).to({regY:70.8,scaleX:1,scaleY:1,rotation:-22.1,x:235.8,y:95.1},10).to({regX:50.3,regY:70.7,scaleX:1,scaleY:1,rotation:-24.4,x:215.8,y:81.9},10).to({regX:50.4,regY:70.8,scaleX:1,scaleY:1,rotation:-17.3,x:198.5,y:84.2},10).to({rotation:-11,x:183.1,y:75.4},10).to({regX:50.3,scaleX:1,scaleY:1,rotation:-5,x:154.5,y:73.2},10).wait(43));

	// body
	this.instance_6 = new lib.body();
	this.instance_6.parent = this;
	this.instance_6.setTransform(277.3,187,1,1,0,0,0,34.6,42.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:257.6,y:178.2},10).to({x:242.3,y:173.9},10).to({x:222.5,y:160.7},10).to({x:205,y:162.9},10).to({x:189.7,y:154.1},10).to({x:161.2,y:151.9},10).wait(43));

	// Symbol 6
	this.instance_7 = new lib.Symbol6_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(250.6,159.4,1,1,0,0,0,75.4,48.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({rotation:-18.5,x:230.9,y:150.6},10).to({rotation:0,x:215.6,y:146.3},10).to({rotation:-18.5,x:195.8,y:133.1},10).to({rotation:0,x:178.3,y:135.3},10).to({rotation:-18.5,x:163,y:126.5},10).to({rotation:0,x:134.5,y:124.3},10).to({regX:75.3,rotation:-35.5,x:116.6,y:122.7},20).wait(23));

	// Symbol 4
	this.instance_8 = new lib.Symbol4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(368.6,220.4,1,1,0,0,0,9,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-71.9,regY:14.1,x:287.3,y:231.3},0).wait(1).to({x:286.1,y:230.8},0).wait(1).to({x:283.6,y:230},0).wait(1).to({x:279.2,y:228.5},0).wait(1).to({x:272,y:225.9},0).wait(1).to({x:261.6,y:222.3},0).wait(1).to({x:251.9,y:218.9},0).wait(1).to({x:246.2,y:216.9},0).wait(1).to({x:243.6,y:216},0).wait(1).to({regX:9,regY:3.1,x:323.8,y:204.8},0).wait(1).to({regX:-71.9,regY:14.1,x:243,y:215.8},0).wait(1).to({x:243.2,y:215.9},0).wait(1).to({x:243.8,y:216},0).wait(1).to({x:244.7,y:216.3},0).wait(1).to({x:246.3,y:216.7},0).wait(1).to({x:248.6,y:217.3},0).wait(1).to({x:250.7,y:217.8},0).wait(1).to({x:251.9,y:218.1},0).wait(1).to({x:252.5,y:218.3},0).wait(1).to({regX:9,regY:3.1,x:333.6,y:207.3},0).wait(1).to({regX:-71.9,regY:14.1,x:252.3,y:218.1},0).wait(1).to({x:251,y:217.6},0).wait(1).to({x:248.6,y:216.5},0).wait(1).to({x:244.2,y:214.5},0).wait(1).to({x:237,y:211.3},0).wait(1).to({x:226.6,y:206.7},0).wait(1).to({x:216.8,y:202.3},0).wait(1).to({x:211.1,y:199.8},0).wait(1).to({x:208.5,y:198.6},0).wait(1).to({regX:9,regY:3.1,x:288.7,y:187.3},0).wait(1).to({regX:-71.9,regY:14.1,x:207.9,y:198.4},0).wait(1).to({x:208.1,y:198.6},0).wait(1).to({x:208.5,y:199.1},0).wait(1).to({x:209.2,y:200},0).wait(1).to({x:210.4,y:201.4},0).wait(1).to({x:212.2,y:203.5},0).wait(1).to({x:213.8,y:205.5},0).wait(1).to({x:214.8,y:206.6},0).wait(1).to({x:215.2,y:207.2},0).wait(1).to({regX:9,regY:3.1,x:296.3,y:196.3},0).wait(1).to({regX:-71.9,regY:14.1,x:215,y:207.2},0).wait(1).to({x:213.9,y:206.7},0).wait(1).to({x:211.7,y:205.9},0).wait(1).to({x:207.7,y:204.4},0).wait(1).to({x:201.2,y:201.8},0).wait(1).to({x:191.9,y:198.2},0).wait(1).to({x:183.1,y:194.8},0).wait(1).to({x:178,y:192.8},0).wait(1).to({x:175.6,y:191.9},0).wait(1).to({regX:9,regY:3.1,x:255.9,y:180.7},0).wait(1).to({regX:-71.9,regY:14.1,x:175,y:191.7},0).wait(1).to({x:174.9,y:191.9},0).wait(1).to({x:174.7,y:192.1},0).wait(1).to({x:174.3,y:192.6},0).wait(1).to({x:173.8,y:193.3},0).wait(1).to({x:173,y:194.4},0).wait(1).to({x:172.2,y:195.4},0).wait(1).to({x:171.8,y:196},0).wait(1).to({x:171.6,y:196.2},0).wait(1).to({regX:9,regY:3.1,x:252.5,y:185.3},0).wait(43));

	// Symbol 3
	this.instance_9 = new lib.Symbol3_1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(339.5,217.9,1,1,0,0,0,12.8,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-64.4,regY:15.6,x:262.3,y:228.5},0).wait(1).to({x:262.5,y:228.4},0).wait(1).to({x:262.8,y:228.2},0).wait(1).to({x:263.5,y:227.9},0).wait(1).to({x:264.5,y:227.3},0).wait(1).to({x:266.1,y:226.5},0).wait(1).to({x:267.5,y:225.7},0).wait(1).to({x:268.3,y:225.2},0).wait(1).to({x:268.7,y:225},0).wait(1).to({regX:12.8,regY:4.9,x:346,y:214.3},0).wait(1).to({regX:-64.4,regY:15.6,x:268.5,y:224.9},0).wait(1).to({x:267.3,y:224.6},0).wait(1).to({x:265,y:224.1},0).wait(1).to({x:261,y:223.2},0).wait(1).to({x:254.3,y:221.6},0).wait(1).to({x:244.6,y:219.4},0).wait(1).to({x:235.6,y:217.4},0).wait(1).to({x:230.3,y:216.1},0).wait(1).to({x:227.9,y:215.6},0).wait(1).to({regX:12.8,regY:4.9,x:304.5,y:204.8},0).wait(1).to({regX:-64.4,regY:15.6,x:227.3,y:215.4},0).wait(1).to({x:227.5,y:215.2},0).wait(1).to({x:227.8,y:214.7},0).wait(1).to({x:228.5,y:213.9},0).wait(1).to({x:229.5,y:212.7},0).wait(1).to({x:231,y:210.8},0).wait(1).to({x:232.4,y:209.1},0).wait(1).to({x:233.2,y:208},0).wait(1).to({x:233.6,y:207.6},0).wait(1).to({regX:12.8,regY:4.9,x:310.9,y:196.8},0).wait(1).to({regX:-64.4,regY:15.6,x:233.4,y:207.4},0).wait(1).to({x:232.1,y:207.3},0).wait(1).to({x:229.7,y:207.2},0).wait(1).to({x:225.4,y:206.9},0).wait(1).to({x:218.4,y:206.4},0).wait(1).to({x:208.3,y:205.7},0).wait(1).to({x:198.8,y:205.1},0).wait(1).to({x:193.2,y:204.7},0).wait(1).to({x:190.6,y:204.5},0).wait(1).to({regX:12.8,regY:4.9,x:267.2,y:193.8},0).wait(1).to({regX:-64.4,regY:15.6,x:190,y:204.4},0).wait(1).to({x:190.3,y:204.3},0).wait(1).to({x:190.9,y:204.1},0).wait(1).to({x:192,y:203.8},0).wait(1).to({x:193.8,y:203.2},0).wait(1).to({x:196.3,y:202.4},0).wait(1).to({x:198.7,y:201.6},0).wait(1).to({x:200.1,y:201.1},0).wait(1).to({x:200.7,y:200.9},0).wait(1).to({regX:12.8,regY:4.9,x:278.1,y:190.2},0).wait(1).to({regX:-64.4,regY:15.6,x:200.5,y:200.8},0).wait(1).to({x:198.9,y:200.6},0).wait(1).to({x:195.9,y:200.2},0).wait(1).to({x:190.6,y:199.5},0).wait(1).to({x:181.7,y:198.3},0).wait(1).to({x:169.1,y:196.5},0).wait(1).to({x:157.2,y:194.9},0).wait(1).to({x:150.2,y:194},0).wait(1).to({x:147,y:193.6},0).wait(1).to({regX:12.8,regY:4.9,x:223.4,y:182.8},0).wait(43));

	// Layer 17
	this.instance_10 = new lib.shad1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(270.3,238.3,0.7,0.164,7.3,0,0,110.4,111.1);
	this.instance_10.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:173.9,y:205.4},60).wait(43));

	// head1
	this.instance_11 = new lib.head1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(57.5,90.2,1,1,0,0,0,48.6,89.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:43.6,regY:49.1,x:52.5,y:50.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.8},0).wait(1).to({rotation:-1.3},0).wait(1).to({rotation:-2.1,x:52.4},0).wait(1).to({rotation:-3.1,x:52.5,y:50},0).wait(1).to({rotation:-4.4,x:52.4},0).wait(1).to({rotation:-5.9,x:52.5},0).wait(1).to({rotation:-7.4},0).wait(1).to({rotation:-8.6,y:50.1},0).wait(1).to({rotation:-9.4},0).wait(1).to({rotation:-9.9},0).wait(1).to({rotation:-10.2,y:50.2},0).wait(1).to({regX:48.5,regY:89.2,x:64.5,y:88.8},0).wait(1).to({regX:43.6,regY:49.1,x:52.5,y:50.1},0).wait(1).to({rotation:-10.1},0).wait(1).to({rotation:-9.9},0).wait(1).to({rotation:-9.7,x:52.6},0).wait(1).to({rotation:-9.3,x:52.5,y:50},0).wait(1).to({rotation:-8.7,y:50.1},0).wait(1).to({rotation:-8,y:50},0).wait(1).to({rotation:-7.1,y:49.9},0).wait(1).to({rotation:-5.9,y:50},0).wait(1).to({rotation:-4.6,y:49.9},0).wait(1).to({rotation:-3.2,y:50},0).wait(1).to({rotation:-2.1},0).wait(1).to({rotation:-1.2,x:52.6,y:50.1},0).wait(1).to({rotation:-0.6},0).wait(1).to({rotation:-0.3,x:52.5},0).wait(1).to({rotation:-0.1},0).wait(1).to({regX:48.6,regY:89.1,rotation:0,x:57.5,y:90.2},0).wait(1).to({regX:43.6,regY:49.1,x:52.5,y:50.2},0).wait(1).to({rotation:-0.1,y:50.1},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({rotation:-1.1},0).wait(1).to({rotation:-1.7},0).wait(1).to({rotation:-2.4,x:52.4,y:50},0).wait(1).to({rotation:-3.2,x:52.5},0).wait(1).to({rotation:-4.2},0).wait(1).to({rotation:-5.4},0).wait(1).to({rotation:-6.7},0).wait(1).to({rotation:-7.8},0).wait(1).to({rotation:-8.7,y:50.1},0).wait(1).to({rotation:-9.3},0).wait(1).to({rotation:-9.8,x:52.4},0).wait(1).to({rotation:-10,x:52.5,y:50.2},0).wait(1).to({rotation:-10.2},0).wait(1).to({regX:48.5,regY:89.2,x:64.5,y:88.8},0).wait(1).to({regX:43.6,regY:49.1,x:52.5,y:50.1},0).wait(2).to({rotation:-10},0).wait(1).to({rotation:-9.8},0).wait(1).to({rotation:-9.6,y:50},0).wait(1).to({rotation:-9.2,y:49.9},0).wait(1).to({rotation:-8.8},0).wait(1).to({rotation:-8.2,y:49.8},0).wait(1).to({rotation:-7.4,y:49.7},0).wait(1).to({rotation:-6.5,y:49.6},0).wait(1).to({rotation:-5.5,y:49.5},0).wait(1).to({rotation:-4.3,y:49.4},0).wait(1).to({rotation:-3.2,y:49.3},0).wait(1).to({rotation:-2.2,y:49.2},0).wait(1).to({rotation:-1.4},0).wait(1).to({rotation:-0.8,y:49.1},0).wait(1).to({rotation:-0.4},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:0,x:52.6},0).wait(1).to({regX:48.6,regY:89.1,x:57.5,y:89.2},0).to({rotation:-5.7,x:61.5,y:88.5},20).wait(12));

	// Symbol 10
	this.instance_12 = new lib.Symbol10();
	this.instance_12.parent = this;
	this.instance_12.setTransform(58.1,68.1,1,1.006,0,6.1,0,63.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(103));

	// Layer 2
	this.instance_13 = new lib.shad1();
	this.instance_13.parent = this;
	this.instance_13.setTransform(62.6,189.7,0.7,0.164,-6.7,0,0,110.3,111);
	this.instance_13.alpha = 0.359;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(103));

	// Symbol 9
	this.instance_14 = new lib.Symbol9();
	this.instance_14.parent = this;
	this.instance_14.setTransform(105.2,63.7,1,1,0,0,0,4.7,77);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:12.2,regY:39.5,rotation:-0.6,x:112.3,y:26.2},0).wait(1).to({rotation:-2.8,x:110.9,y:25.9},0).wait(1).to({rotation:-7.4,x:107.8,y:25.6},0).wait(1).to({rotation:-14.4,x:103.2},0).wait(1).to({rotation:-19.3,x:99.9,y:25.9},0).wait(1).to({regX:4.8,regY:77,rotation:-20.7,x:105.3,y:63.9},0).wait(1).to({regX:12.2,regY:39.5,rotation:-20.2,x:99.3,y:26.2},0).wait(1).to({rotation:-18.7,x:100.3,y:26},0).wait(1).to({rotation:-15.6,x:102.3,y:25.8},0).wait(1).to({rotation:-10.4,x:105.8,y:25.6},0).wait(1).to({rotation:-4.5,x:109.7,y:25.9},0).wait(1).to({rotation:-1,x:112,y:26.2},0).wait(1).to({regX:4.7,regY:77,rotation:0,x:105.2,y:63.7},0).wait(1).to({regX:12.2,regY:39.5,rotation:-0.6,x:112.3,y:26.2},0).wait(1).to({rotation:-2.8,x:110.9,y:25.9},0).wait(1).to({rotation:-7.4,x:107.8,y:25.6},0).wait(1).to({rotation:-14.4,x:103.2},0).wait(1).to({rotation:-19.3,x:99.9,y:25.9},0).wait(1).to({regX:4.8,regY:77,rotation:-20.7,x:105.3,y:63.9},0).wait(1).to({regX:12.2,regY:39.5,rotation:-20.2,x:99.3,y:26.2},0).wait(1).to({rotation:-18.7,x:100.3,y:26},0).wait(1).to({rotation:-15.6,x:102.3,y:25.8},0).wait(1).to({rotation:-10.4,x:105.8,y:25.6},0).wait(1).to({rotation:-4.5,x:109.7,y:25.9},0).wait(1).to({rotation:-1,x:112,y:26.2},0).wait(1).to({regX:4.7,regY:77,rotation:0,x:105.2,y:63.7},0).wait(1).to({regX:12.2,regY:39.5,rotation:-0.2,x:112.5,y:26.2},0).wait(1).to({rotation:-1.1,x:112,y:26.1},0).wait(1).to({rotation:-2.8,x:110.9,y:25.9},0).wait(1).to({rotation:-5.5,x:109.1,y:25.7},0).wait(1).to({rotation:-9.6,x:106.4,y:25.6},0).wait(1).to({rotation:-14.4,x:103.2},0).wait(1).to({rotation:-18.1,x:100.8,y:25.9},0).wait(1).to({rotation:-20.1,x:99.5,y:26.1},0).wait(1).to({regX:4.8,regY:77,rotation:-20.7,x:105.3,y:63.9},0).wait(1).to({regX:12.2,regY:39.5,rotation:-20.5,x:99.1,y:26.2},0).wait(1).to({rotation:-20.1,x:99.4,y:26.1},0).wait(1).to({rotation:-19.2,x:99.9},0).wait(1).to({rotation:-17.9,x:100.8,y:25.9},0).wait(1).to({rotation:-15.9,x:102.1,y:25.8},0).wait(1).to({rotation:-13.2,x:103.9,y:25.7},0).wait(1).to({rotation:-9.9,x:106.1,y:25.6},0).wait(1).to({rotation:-6.3,x:108.5,y:25.7},0).wait(1).to({rotation:-3.3,x:110.5,y:26},0).wait(1).to({rotation:-1.3,x:111.7,y:26.1},0).wait(1).to({rotation:-0.3,x:112.4,y:26.3},0).wait(1).to({regX:4.7,regY:77,rotation:0,x:105.2,y:63.7},0).wait(1).to({regX:12.2,regY:39.5,rotation:-0.3,x:112.5,y:26.2},0).wait(1).to({rotation:-1.4,x:111.8,y:26.1},0).wait(1).to({rotation:-3.5,x:110.4,y:25.9},0).wait(1).to({rotation:-7.2,x:108,y:25.7},0).wait(1).to({rotation:-11.3,x:105.3,y:25.6},0).wait(1).to({rotation:-13.8,x:103.6},0).wait(1).to({regX:4.8,regY:77,rotation:-14.5,x:105.4,y:63.9},0).wait(7).to({regX:12.2,regY:39.5,x:103.1,y:25.7},0).wait(1).to({rotation:-14.4,x:103.2},0).wait(1).to({y:25.8},0).wait(1).to({rotation:-14.3,x:103.3},0).wait(1).to({rotation:-14.1,x:103.4,y:25.7},0).wait(1).to({rotation:-14,x:103.5},0).wait(1).to({rotation:-13.8,x:103.6},0).wait(1).to({rotation:-13.5,x:103.8},0).wait(1).to({rotation:-13.2,x:104},0).wait(1).to({rotation:-12.9,x:104.2},0).wait(1).to({rotation:-12.4,x:104.4,y:25.6},0).wait(1).to({rotation:-11.9,x:104.8,y:25.7},0).wait(1).to({rotation:-11.4,x:105.1},0).wait(1).to({rotation:-10.7,x:105.6},0).wait(1).to({rotation:-9.9,x:106.1,y:25.6},0).wait(1).to({rotation:-9,x:106.7,y:25.7},0).wait(1).to({rotation:-8,x:107.4},0).wait(1).to({rotation:-6.9,x:108.1},0).wait(1).to({rotation:-5.8,x:108.8,y:25.8},0).wait(1).to({rotation:-4.7,x:109.5},0).wait(1).to({rotation:-3.7,x:110.2,y:25.9},0).wait(1).to({rotation:-2.9,x:110.8,y:26},0).wait(1).to({rotation:-2.1,x:111.2,y:26.1},0).wait(1).to({rotation:-1.6,x:111.6},0).wait(1).to({rotation:-1.1,x:111.9,y:26.2},0).wait(1).to({rotation:-0.7,x:112.2},0).wait(1).to({rotation:-0.4,x:112.3},0).wait(1).to({rotation:-0.2,x:112.4,y:26.3},0).wait(1).to({rotation:-0.1,x:112.5},0).wait(1).to({rotation:0,x:112.6},0).wait(1).to({regX:4.7,regY:77,x:105.2,y:63.7},0).wait(12));

	// Symbol 8
	this.instance_15 = new lib.Symbol8();
	this.instance_15.parent = this;
	this.instance_15.setTransform(1.3,70.6,1,1,0,0,0,21.4,47.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:12.4,regY:25.1,rotation:0.4,x:-7.5,y:48},0).wait(1).to({rotation:2,x:-6.9,y:47.8},0).wait(1).to({rotation:5.5,x:-5.5,y:47.4},0).wait(1).to({rotation:10.6,x:-3.4,y:46.9},0).wait(1).to({rotation:14.2,x:-1.9,y:46.6},0).wait(1).to({regX:21.4,regY:47.6,rotation:15.2,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:14.9,x:-1.6,y:46.5},0).wait(1).to({rotation:13.8,x:-2.1,y:46.6},0).wait(1).to({rotation:11.5,x:-3,y:46.7},0).wait(1).to({rotation:7.6,x:-4.6,y:47.1},0).wait(1).to({rotation:3.3,x:-6.4,y:47.6},0).wait(1).to({rotation:0.7,x:-7.4,y:47.9},0).wait(1).to({regX:21.4,regY:47.6,rotation:0,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:0.4,x:-7.5,y:48},0).wait(1).to({rotation:2,x:-6.9,y:47.8},0).wait(1).to({rotation:5.5,x:-5.5,y:47.4},0).wait(1).to({rotation:10.6,x:-3.4,y:46.9},0).wait(1).to({rotation:14.2,x:-1.9,y:46.6},0).wait(1).to({regX:21.4,regY:47.6,rotation:15.2,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:14.9,x:-1.6,y:46.5},0).wait(1).to({rotation:13.8,x:-2.1,y:46.6},0).wait(1).to({rotation:11.5,x:-3,y:46.7},0).wait(1).to({rotation:7.6,x:-4.6,y:47.1},0).wait(1).to({rotation:3.3,x:-6.4,y:47.6},0).wait(1).to({rotation:0.7,x:-7.4,y:47.9},0).wait(1).to({regX:21.4,regY:47.6,rotation:0,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:0.2,x:-7.6,y:48.1},0).wait(1).to({rotation:0.8,x:-7.4,y:48},0).wait(1).to({rotation:2,x:-6.9,y:47.8},0).wait(1).to({rotation:4.1,x:-6.1,y:47.6},0).wait(1).to({rotation:7.1,x:-4.9,y:47.2},0).wait(1).to({rotation:10.6,x:-3.4,y:46.9},0).wait(1).to({rotation:13.3,x:-2.3,y:46.6},0).wait(1).to({rotation:14.8,x:-1.6},0).wait(1).to({regX:21.4,regY:47.6,rotation:15.2,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:15.1,x:-1.5,y:46.6},0).wait(1).to({rotation:14.8,x:-1.6,y:46.5},0).wait(1).to({rotation:14.2,x:-1.9,y:46.6},0).wait(1).to({rotation:13.2,x:-2.3,y:46.7},0).wait(1).to({rotation:11.7,x:-2.9},0).wait(1).to({rotation:9.7,x:-3.8,y:46.9},0).wait(1).to({rotation:7.3,x:-4.8,y:47.1},0).wait(1).to({rotation:4.6,x:-5.9,y:47.4},0).wait(1).to({rotation:2.4,x:-6.7,y:47.7},0).wait(1).to({rotation:1,x:-7.3,y:47.9},0).wait(1).to({rotation:0.2,x:-7.6,y:48},0).wait(1).to({regX:21.4,regY:47.6,rotation:0,x:1.3,y:70.6},0).wait(1).to({regX:12.4,regY:25.1,rotation:0.5,x:-7.5,y:48},0).wait(1).to({rotation:2.5,x:-6.7,y:47.8},0).wait(1).to({rotation:6.5,x:-5.1,y:47.3},0).wait(1).to({rotation:13.2,x:-2.3,y:46.7},0).wait(1).to({rotation:20.7,x:0.8,y:46.5},0).wait(1).to({rotation:25.2,x:2.7},0).wait(1).to({regX:21.4,regY:47.7,rotation:26.5,x:1.2,y:70.7},0).wait(5).to({regX:12.4,regY:25.1,rotation:26.4,x:3.2,y:46.4},0).wait(2).to({rotation:26.3,x:3.1},0).wait(1).to({rotation:26.1},0).wait(1).to({rotation:25.9,x:3},0).wait(1).to({rotation:25.7,x:2.9},0).wait(1).to({rotation:25.4,x:2.7},0).wait(1).to({rotation:25,x:2.6},0).wait(1).to({rotation:24.5,x:2.4},0).wait(1).to({rotation:23.9,x:2.1},0).wait(1).to({rotation:23.3,x:1.9},0).wait(1).to({rotation:22.5,x:1.6},0).wait(1).to({rotation:21.6,x:1.2,y:46.3},0).wait(1).to({rotation:20.6,x:0.8},0).wait(1).to({rotation:19.4,x:0.3},0).wait(1).to({rotation:18,x:-0.3,y:46.4},0).wait(1).to({rotation:16.5,x:-1},0).wait(1).to({rotation:14.8,x:-1.7,y:46.5},0).wait(1).to({rotation:13,x:-2.5,y:46.6},0).wait(1).to({rotation:11.1,x:-3.3,y:46.8},0).wait(1).to({rotation:9.2,x:-4,y:46.9},0).wait(1).to({rotation:7.4,x:-4.8,y:47.1},0).wait(1).to({rotation:5.9,x:-5.4,y:47.2},0).wait(1).to({rotation:4.5,x:-5.9,y:47.3},0).wait(1).to({rotation:3.4,x:-6.4,y:47.5},0).wait(1).to({rotation:2.4,x:-6.7,y:47.7},0).wait(1).to({rotation:1.7,x:-7.1},0).wait(1).to({rotation:1.1,x:-7.3,y:47.8},0).wait(1).to({rotation:0.7,x:-7.5,y:47.9},0).wait(1).to({rotation:0.4,x:-7.6,y:48},0).wait(1).to({rotation:0.2,x:-7.7},0).wait(1).to({rotation:0},0).wait(1).to({regX:21.4,regY:47.6,x:1.3,y:70.6},0).wait(12));

	// FlashAICB
	this.instance_16 = new lib.Symbol11();
	this.instance_16.parent = this;
	this.instance_16.setTransform(122.6,217.4,0.929,1.312,3.7,0,0,202.6,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.6,-13.3,439.2,279.2);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.instance = new lib.Symbol16();
	this.instance.parent = this;
	this.instance.setTransform(121,380.9,1,1,0,0,0,119,14.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(193).to({_off:false},0).to({alpha:0.5},10).wait(122));

	// Symbol 2
	this.instance_1 = new lib.Symbol2_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121.5,471.4,0.52,0.52,0,0,0,119.2,106.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(180).to({_off:false},0).to({regX:119.4,scaleX:0.48,scaleY:0.48,x:120.4,y:284.4},21,cjs.Ease.get(1)).wait(124));

	// Symbol 6
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(114.6,223.2,1.676,1.676,0,0,0,83.8,27.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(187).to({_off:false},0).wait(1).to({regX:84.7,regY:12,scaleX:1.66,scaleY:1.66,x:116.2,y:197.5,alpha:0.02},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:116.3,y:196.7,alpha:0.068},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:116.4,y:195.3,alpha:0.147},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:116.6,y:193.4,alpha:0.259},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:116.9,y:190.9,alpha:0.409},0).wait(1).to({scaleX:1.27,scaleY:1.27,x:117.1,y:187.5,alpha:0.602},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:117.6,y:183.3,alpha:0.853},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:117.8,y:181.1,alpha:0.979},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:181.6,alpha:0.953},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:117.7,y:181.9,alpha:0.934},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:182.1,alpha:0.921},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:182.2,alpha:0.916},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:182,alpha:0.925},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:181.7,alpha:0.942},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:117.8,y:181.4,alpha:0.964},0).wait(1).to({regX:83.8,regY:27,scaleX:1,scaleY:1,x:117,y:195.8,alpha:1},0).wait(122));

	// Symbol 5
	this.instance_3 = new lib.Symbol5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(120.6,143.4,1.676,1.676,0,0,0,112.4,30.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(180).to({_off:false},0).wait(1).to({regX:112.7,regY:14.8,scaleX:1.66,scaleY:1.66,x:121.2,y:117.4,alpha:0.02},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:121.1,y:118.1,alpha:0.068},0).wait(1).to({scaleX:1.58,scaleY:1.58,y:119.4,alpha:0.147},0).wait(1).to({scaleX:1.5,scaleY:1.5,y:121.1,alpha:0.259},0).wait(1).to({scaleX:1.4,scaleY:1.4,y:123.4,alpha:0.409},0).wait(1).to({scaleX:1.27,scaleY:1.27,y:126.5,alpha:0.602},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:121,y:130.3,alpha:0.853},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:120.9,y:132.3,alpha:0.979},0).wait(1).to({scaleX:1.03,scaleY:1.03,y:131.8,alpha:0.953},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:131.6,alpha:0.934},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:131.4,alpha:0.921},0).wait(1).to({scaleX:1.06,scaleY:1.06,y:131.3,alpha:0.916},0).wait(1).to({scaleX:1.05,scaleY:1.05,y:131.4,alpha:0.925},0).wait(1).to({scaleX:1.04,scaleY:1.04,y:131.7,alpha:0.942},0).wait(1).to({scaleX:1.02,scaleY:1.02,y:132,alpha:0.964},0).wait(1).to({regX:112.4,regY:30.5,scaleX:1,scaleY:1,x:120.6,y:148.3,alpha:1},0).wait(129));

	// FlashAICB
	this.instance_4 = new lib.logo1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(120.5,77.2,0.726,0.726,0,0,0,195.1,50.8);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(168).to({_off:false},0).to({regX:195.2,regY:50.6,scaleX:0.48,scaleY:0.48,x:120.6,y:67.1,alpha:1},17,cjs.Ease.get(1)).wait(140));

	// Symbol 2
	this.instance_5 = new lib.Symbol4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(119.6,239.4,1,1,0,0,0,110.2,51.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({_off:false},0).to({y:77.4,alpha:1},12,cjs.Ease.get(1)).to({y:85.4},4).wait(49).to({y:-51.5},10,cjs.Ease.get(-1)).to({_off:true},1).wait(154));

	// Symbol 2
	this.instance_6 = new lib.Symbol2();
	this.instance_6.parent = this;
	this.instance_6.setTransform(351.2,247.8,1,1,0,0,0,114.3,43);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({x:117.2,alpha:1},19,cjs.Ease.get(1)).to({x:121.2},4).wait(56).to({y:37.8},13,cjs.Ease.get(-1)).to({_off:true},1).wait(226));

	// Symbol 1
	this.instance_7 = new lib.Symbol1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(351.5,162.8,1,1,0,0,0,114.6,51);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({x:117.5},19,cjs.Ease.get(1)).to({x:121.5},4).wait(62).to({y:-47.2},13,cjs.Ease.get(-1)).to({_off:true},1).wait(226));

	// Layer 10
	this.instance_8 = new lib.Symbol3();
	this.instance_8.parent = this;
	this.instance_8.setTransform(131.1,205.1,1,1,0,0,0,149,228);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:0},15).to({_off:true},165).wait(145));

	// Layer 11
	this.instance_9 = new lib.whiteframe();
	this.instance_9.parent = this;
	this.instance_9.setTransform(120,199,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(325));

	// Layer 3
	this.instance_10 = new lib.im1();
	this.instance_10.parent = this;
	this.instance_10.setTransform(119,307,1,1,0,0,0,200,171);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:0.7,scaleY:0.7,x:122.1,y:295.1},160,cjs.Ease.get(1)).to({y:684.2},19,cjs.Ease.get(-1)).to({_off:true},1).wait(145));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AylfLMAAAg+VMAlLAAAMAAAA+Vg");
	this.shape.setTransform(119,199.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,-22.9,547.1,501);


// stage content:
(lib.biovestin_kids_240x400_rev15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.border();
	this.instance.parent = this;
	this.instance.setTransform(120,200,1,1,0,0,0,119.5,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.instance_1 = new lib.main();
	this.instance_1.parent = this;
	this.instance_1.setTransform(119,199.5,1,1,0,0,0,119,199.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39,177.1,547.1,501);
// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1487064863743", id:"Bitmap1"},
		{src:"images/Bitmap2.png?1487064863743", id:"Bitmap2"},
		{src:"images/Bitmap8.png?1487064863743", id:"Bitmap8"},
		{src:"images/Untitled1.jpg?1487064863743", id:"Untitled1"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;