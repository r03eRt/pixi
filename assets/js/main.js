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
	var renderer = autoDetectRenderer(256, 256);

	// Add the canvas to the html document
	document.body.appendChild(renderer.view);

	// Create a container called stage
	var stage = new Container();


	// Load the resources and then init setup
	loader
		.add(baseUrl + 'titleset.png')
		.load(setup);


	// Setup function will run when img loaded
	function setup(){

		// create the texture
		var texture = TextureCache[baseUrl + 'titleset.png'];

		//Create a rectangle object that defines the position and
		//size of the sub-image you want to extract from the texture
		var rectangle = new PIXI.Rectangle(192, 128, 64, 64);

		// telkl the texture to use the rectangle section
		console.log(texture);
		texture.frame = rectangle;

		// Now we can set the the sprite from the recture
		var rocket = new Sprite(texture);
		rocket.x = 32;
	  rocket.y = 32;



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


		// Add the cat to the stage
		stage.addChild(rocket);

		//Render the stage
		renderer.render(stage);

		var el = document.querySelector(".hide");

	/**	el.addEventListener('click', function(){

			if(this.classList.contains('hidden')){
				this.classList.remove('hidden');
				stage.addChild(cat);
				renderer.render(stage);
			}else{
				this.classList.add('hidden');
				stage.removeChild(cat);
				renderer.render(stage);
			}


		});
		**/
	}




})();
