'use strict';

(function(){

	var baseUrl = './assets/img/sprites/'


	//Aliases
	var Container = PIXI.Container,
	    autoDetectRenderer = PIXI.autoDetectRenderer,
	    loader = PIXI.loader,
	    resources = PIXI.loader.resources,
	    TextureCache = PIXI.utils.TextureCache,
	    Texture = PIXI.Texture,
	    Sprite = PIXI.Sprite;


	// Create a renderer
	var renderer = autoDetectRenderer(512, 512);

	// Add the canvas to the html document
	document.body.appendChild(renderer.view);

	// Create a container called stage
	var stage = new Container();


	// Load the resources and then init setup
	loader
		.add(baseUrl + 'treasureHunter.json')
		.load(setup);



		//Define variables that might be used in more
		//than one function
		var dungeon, explorer, treasure, door, id;


	// Setup function will run when img loaded
	function setup(){

		// Set sprite position on stage
		//cat.x = 96;
		//cat.y = 96;
		// Or sprite.position.set(x, y)
		//cat.position.set(96, 96)

		// Set sprite width and height
		//cat.width = 120;
		//cat.height = 120;

		// Set sprite scale
		//cat.scale.x = 0.5;
		//cat.scale.y = 0.5;
		// or cat.scale.set(0.5, 0.5);
		//cat.scale.set(0.5, 0.5);

		// Set opacity
		//cat.alpha = 0.5;


		// Set rotation
		//cat.rotation =1;

		// Set anchor rotate .
		// Center for example
		//cat.anchor.x = 0.5;
		//cat.anchor.y = 0.5;
		// Or sprite.anchor.set(x, y)
		//cat.anchor.set(0.8, 0.8)


		// Set transform origin on this case sprite 64x64
		//cat.pivot.set(32, 32)


	// Three types of charge texture from json

	// Access directly to texture cache
	var dungeonTexture = TextureCache["dungeon.png"];
  dungeon = new Sprite(dungeonTexture);
  stage.addChild(dungeon);

	// Other form
	//dungeon = new Sprite(resources[baseUrl + 'treasureHunter.json'].textures['dungeon.png']);
	//stage.addChild(dungeon);



	// Access with loader Resource
	explorer = new Sprite(resources[baseUrl + 'treasureHunter.json'].textures['explorer.png']);
	explorer.x = 68;

	//Center the explorer vertically
	explorer.y = stage.height / 2 - explorer.height / 2;
	stage.addChild(explorer);


	// Create a option alias id for avoid large naming
	id = PIXI.loader.resources[baseUrl + "treasureHunter.json"].textures;

	treasure = new Sprite(id['treasure.png']);
	stage.addChild(treasure);

	//Position the treasure next to the right edge of the canvas
	treasure.x = stage.width - treasure.width - 48;
	treasure.y = stage.height / 2 - treasure.height / 2;
	stage.addChild(treasure);



	renderer.render(stage);



	}




})();
