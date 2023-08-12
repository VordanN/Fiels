//Create Live 4 Custom Items
//Author: RGB Pixl

//Items
StartupEvents.registry('item', event => {

    event.create('copper_gearcoin').displayName('Gearcoin (Copper)')
    event.create('golden_gearcoin').displayName('Gearcoin §6(Gold)')
    event.create('diamond_gearcoin').displayName('Gearcoin §b(Diamond)')
    event.create('netherite_gearcoin').displayName('Gearcoin §c(Netherite)')
    event.create('netherite_gearcoin_prestige').texture('kubejs:item/netherite_gearcoin').displayName('Gearcoin §d(Prestige)').glow(true).maxStackSize(16).tooltip('§eICH BIN REICH!')
    event.create('strong_ingot').displayName('Strong Ingot').texture('kubejs:item/strong_ingot')
    event.create('hardened_strong_ingot').displayName('Hardened Strong Ingot').texture('kubejs:item/hardened_strong_ingot')
    event.create('compacted_coal').displayName('Compacted Coal')
    event.create('diamond_seed').displayName('Diamond Seed')
    event.create('fake_dragon_egg').displayName('Fake Dragon Egg')
    
    event.create('incomplete_motor', 'create:sequenced_assembly').displayName('Incomplete Electric Motor')
    event.create('incomplete_alternator', 'create:sequenced_assembly').displayName('Incomplete Alternator')
    event.create('incomplete_burger', 'create:sequenced_assembly').displayName('Incomplete Burger').texture('kubejs:item/plant_patty')
    event.create('incomplete_pizza', 'create:sequenced_assembly').displayName('Incomplete Pizza').texture('kubejs:item/pizza')
    event.create('incomplete_netherite', 'create:sequenced_assembly').displayName('Incomplete Netherite').texture('minecraft:item/iron_ingot')
    event.create('incomplete_strong_ingot', 'create:sequenced_assembly').displayName('Incomplete Strong Ingot').texture('kubejs:item/strong_ingot')
    event.create('incomplete_pb_chicken', 'create:sequenced_assembly').displayName('Incomplete Plant-Based Chicken').texture('kubejs:item/pb_chicken')
    event.create('incomplete_pb_bacon', 'create:sequenced_assembly').displayName('Incomplete Plant-Based Bacon').texture('kubejs:item/pb_bacon')
    event.create('incomplete_taco', 'create:sequenced_assembly').displayName('Incomplete Taco').texture('kubejs:item/taco')

  //Food
	event.create('pizza').food(food => {
		food
    		.hunger(12)
    		.saturation(1)
      		.removeEffect('poison')
    })

    event.create('cheese').food(food => {
        food
            .hunger(3)
            .saturation(2)
            .removeEffect('poison')
    })

    event.create('plant_patty').food(food => {
		food
    		.hunger(4)
    		.saturation(1)  
    }).displayName('Plant-Based Patty')

    event.create('algae_burger').food(food => {
		food
    		.hunger(12)
    		.saturation(1)
    }).displayName('Algae Burger')

    event.create('rice_milk').food(food => {
		food
    		.hunger(3)
    		.saturation(1)
            .alwaysEdible()
            .removeEffect('poison')
    }).displayName('Rice Milk')
    
    event.create('pb_chicken').food(food => {
      food
          .hunger(6)
          .saturation(1)  
      }).displayName('Plant-Based Chicken')

    event.create('pb_bacon').food(food => {
      food
          .hunger(4)
          .saturation(1)  
      }).displayName('Plant-Based Bacon')

      event.create('taco').food(food => {
        food
            .hunger(12)
            .saturation(1)  
        }).displayName('Taco')

})

//Fluids
StartupEvents.registry('fluid', e => {

      e.create('paint_solvent').displayName('Solvent').thinTexture(0x7DF7FA).bucketColor(0x7DF7FA).noBlock().flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')
      e.create('ultra_strong_paint').displayName('Ultra Strong Coating').thickTexture(0x404040).noBlock().flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')
      e.create('primer').displayName('Primer').thickTexture(0xF7F8FA).noBlock().flowingTexture('minecraft:block/water_flow').stillTexture('minecraft:block/water_still')

})
