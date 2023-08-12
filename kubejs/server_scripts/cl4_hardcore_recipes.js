//Create Live 4 Optional Custom Hardcode Recipes
//Author: RGB Pixl

ServerEvents.recipes(event => {

    //Netherite
    event.recipes.createMixing([Fluid.of('kubejs:paint_solvent')], [Fluid.of('createaddition:bioethanol'), 'minecraft:packed_ice','#c:dusts/redstone'])
    event.recipes.createMixing([Fluid.of('kubejs:ultra_strong_paint')], [Fluid.of('kubejs:paint_solvent'), Fluid.of('create:potion', 26973, {Potion: "minecraft:turtle_master"})]).superheated()
    event.recipes.createMixing('kubejs:hardened_strong_ingot', ['kubejs:strong_ingot', Fluid.of('minecraft:water', 81000)]).superheated()
    event.recipes.createMixing([Fluid.of('kubejs:primer', 81000)], ['minecraft:white_wool', 'minecraft:white_stained_glass', 'minecraft:white_terracotta','minecraft:white_concrete']).heated()

    
    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:strong_ingot'),
        ], 'minecraft:gold_ingot', [
            event.recipes.createDeploying('kubejs:incomplete_strong_ingot', ['kubejs:incomplete_strong_ingot', 'create:brass_ingot']),
            event.recipes.createDeploying('kubejs:incomplete_strong_ingot', ['kubejs:incomplete_strong_ingot', 'createdeco:cast_iron_ingot']),
            event.recipes.createDeploying('kubejs:incomplete_strong_ingot', ['kubejs:incomplete_strong_ingot', 'minecraft:prismarine_crystals']),
            event.recipes.createDeploying('kubejs:incomplete_strong_ingot', ['kubejs:incomplete_strong_ingot', 'minecraft:obsidian']),
            event.recipes.createPressing('kubejs:incomplete_strong_ingot', 'kubejs:incomplete_strong_ingot').processingTime(500),
    ]).transitionalItem('kubejs:incomplete_strong_ingot').loops(1)


    event.recipes.createSequencedAssembly([
        Item.of('1x minecraft:netherite_ingot'),
        ], 'minecraft:iron_ingot', [
            event.recipes.createDeploying('kubejs:incomplete_netherite', ['kubejs:incomplete_netherite', 'kubejs:hardened_strong_ingot']),
            event.recipes.createPressing('kubejs:incomplete_netherite', 'kubejs:incomplete_netherite').processingTime(500),
            event.recipes.createFilling('kubejs:incomplete_netherite', ['kubejs:incomplete_netherite', Fluid.of('kubejs:primer', 81000)]),
            event.recipes.createPressing('kubejs:incomplete_netherite', 'kubejs:incomplete_netherite').processingTime(500),
            event.recipes.createFilling('kubejs:incomplete_netherite', ['kubejs:incomplete_netherite', Fluid.of('kubejs:ultra_strong_paint', 81000)]),
            event.recipes.createPressing('kubejs:incomplete_netherite', 'kubejs:incomplete_netherite').processingTime(500),
    ]).transitionalItem('kubejs:incomplete_netherite').loops(1)


    //Dias
    event.recipes.createCompacting('kubejs:compacted_coal', ['#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', '#minecraft:coals', ]).superheated().processingTime(5000)
    event.recipes.createCompacting('kubejs:diamond_seed', ['kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'kubejs:compacted_coal', 'create:shadow_steel', ]).superheated().processingTime(5000)    
    event.recipes.createCompacting('minecraft:diamond', ['kubejs:diamond_seed', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks', '#c:coal_blocks',Fluid.of('createaddition:seed_oil', 81000)]).superheated().processingTime(50000)

})