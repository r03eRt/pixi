'use strict';

(function(){

	var baseUrl = './assets/img/sprites/'
	console.log(PIXI);

	// Create a renderer
	var renderer = PIXI.autoDetectRenderer(256, 256);

	// Add the canvas to the html document
	document.body.appendChild(renderer.view);

	// Create a container called stage
	var stage = new PIXI.Container();


	// Load the resources and then init setup
	PIXI.loader
		.add(baseUrl + 'cat.png')
		.load(setup);


	// Setup function will run when img loaded
	function setup(){
		
		// create the cat sprite from a texture
		var cat = new PIXI.Sprite(
			PIXI.loader.resources[baseUrl + 'cat.png'].texture
		);

		// Add the cat to the stage
		stage.addChild(cat);

		//Render the stage
		renderer.render(stage);
	}




})();