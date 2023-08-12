//Create Live 4 Custom Recipes
//Author: RGB Pixl

ServerEvents.recipes(event => {


//Remove
event.remove({output: 'createaddition:electric_motor'})
event.remove({output: 'createaddition:alternator'})
event.remove({output: 'farmersdelight:hamburger'})
event.remove({output: 'createdeco:blue_brick'})
event.remove({output: 'createdeco:pearl_brick'})
event.remove({output: 'createdeco:dusk_brick'})
event.remove({output: 'createdeco:scarlet_brick'})
event.remove({output: 'createdeco:dean_brick'})
event.remove({output: 'minecraft:terracotta', type: 'minecraft:blasting'})
event.remove({output: 'extended_drawers:t1_upgrade'})
event.remove({output: 'extended_drawers:t2_upgrade'})
event.remove({output: 'extended_drawers:t3_upgrade'})
event.remove({output: 'extended_drawers:t4_upgrade'})
event.remove({output: 'extended_drawers:downgrade'})
event.remove({output: 'minecraft:infested_stone'})


//Gearcoins Bottom Up    
event.shapeless('1x kubejs:golden_gearcoin', ['4x kubejs:copper_gearcoin'])
event.shapeless('1x kubejs:diamond_gearcoin', ['4x kubejs:golden_gearcoin'])
event.shapeless('1x kubejs:netherite_gearcoin', ['4x kubejs:diamond_gearcoin'])
  
    event.shaped('1x kubejs:netherite_gearcoin_prestige', [
      ' A ',
      'ABA',
      ' A '
    ], {
      A: 'kubejs:netherite_gearcoin',
      B: 'minecraft:nether_star'
    })


//Gearcoins Top Down
    event.shapeless('4x kubejs:diamond_gearcoin', ['kubejs:netherite_gearcoin_prestige'])
    event.shapeless('4x kubejs:diamond_gearcoin', ['kubejs:netherite_gearcoin'])
    event.shapeless('4x kubejs:golden_gearcoin', ['kubejs:diamond_gearcoin'])
    event.shapeless('4x kubejs:copper_gearcoin', ['kubejs:golden_gearcoin'])


// Create Mech Crafting
    event.recipes.createMechanicalCrafting('minecraft:elytra', [
        '  A  ',
        ' CBC ',
        'GFDFG',
        'HFEFH',
        'HH HH'
    ], {
        A: 'betterend:blue_vine_fur',
        B: 'betterend:filalux',
        C: 'betterend:lumecorn_rod',
        D: 'betterend:purple_polypore',
        E: 'betterend:mossy_glowshroom_fur',
        F: 'betterend:aurora_crystal',
        G: 'betterend:neon_cactus',
        H: 'betterend:emerald_ice'
    })


// Create Sequenced Assembly
    event.recipes.createSequencedAssembly([
        Item.of('1x createaddition:electric_motor'),
        ], 'createaddition:spool', [
            event.recipes.createDeploying('kubejs:incomplete_motor', ['kubejs:incomplete_motor', 'createaddition:copper_wire']),
            event.recipes.createDeploying('kubejs:incomplete_motor', ['kubejs:incomplete_motor', 'create:shaft']),
            event.recipes.createPressing('kubejs:incomplete_motor', 'kubejs:incomplete_motor').processingTime(100),
            event.recipes.createDeploying('kubejs:incomplete_motor', ['kubejs:incomplete_motor', 'create:brass_sheet']),
            event.recipes.createDeploying('kubejs:incomplete_motor', ['kubejs:incomplete_motor', 'createdeco:cast_iron_sheet']),
            event.recipes.createDeploying('kubejs:incomplete_motor', ['kubejs:incomplete_motor', 'create:electron_tube']),
        ]).transitionalItem('kubejs:incomplete_motor').loops(1)

    event.recipes.createSequencedAssembly([
        Item.of('1x createaddition:alternator'),
        ], 'createaddition:spool', [
            event.recipes.createDeploying('kubejs:incomplete_alternator', ['kubejs:incomplete_alternator', 'createaddition:gold_wire']),
            event.recipes.createDeploying('kubejs:incomplete_alternator', ['kubejs:incomplete_alternator', 'create:shaft']),
            event.recipes.createPressing('kubejs:incomplete_alternator', 'kubejs:incomplete_alternator').processingTime(100),
            event.recipes.createDeploying('kubejs:incomplete_alternator', ['kubejs:incomplete_alternator', 'create:brass_sheet']),
            event.recipes.createDeploying('kubejs:incomplete_alternator', ['kubejs:incomplete_alternator', 'createdeco:cast_iron_sheet']),
            event.recipes.createDeploying('kubejs:incomplete_alternator', ['kubejs:incomplete_alternator', 'createaddition:capacitor']),
        ]).transitionalItem('kubejs:incomplete_alternator').loops(1)


//Create Crushing
    event.recipes.createCrushing('betterend:ender_dust', '#c:ender_pearls').processingTime(500)


//Create Mixing
    event.recipes.createMixing('betterend:terminite_ingot', ['betterend:ender_dust', 'betterend:thallasium_ingot']).superheated()
    event.recipes.createMixing('4x create:veridium', ['minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'minecraft:stone','minecraft:orange_dye'])
    event.recipes.createMixing('4x create:asurine', ['minecraft:stone', 'minecraft:stone', 'minecraft:stone', 'minecraft:stone','minecraft:cyan_dye'])
    event.recipes.createMixing('create:chromatic_compound', ['minecraft:glowstone_dust', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust', 'create:powdered_obsidian', 'create:powdered_obsidian', 'create:powdered_obsidian', 'create:polished_rose_quartz']).superheated()
    //Food alternate
    event.recipes.createMixing('farmersdelight:chicken_soup', ['#c:raw_chicken', 'minecraft:carrot', '#c:salad_ingredients', '#c:vegetables',Fluid.of('minecraft:water', 40500)]).heated()
    event.recipes.createMixing('farmersdelight:vegetable_soup', ['minecraft:carrot', 'minecraft:potato', 'minecraft:beetroot', '#c:salad_ingredients',Fluid.of('minecraft:water', 40500)]).heated()
    event.recipes.createMixing('farmersdelight:pumpkin_soup', ['farmersdelight:pumpkin_slice', '#c:salad_ingredients', '#c:cooked_pork',Fluid.of('milk:still_milk', 40500)]).heated()
    event.recipes.createMixing('farmersdelight:noodle_soup', ['farmersdelight:raw_pasta', '#c:cooked_eggs', 'minecraft:dried_kelp', '#c:cooked_pork',Fluid.of('minecraft:water', 40500)]).heated()

//Create Compacting
    event.recipes.createCompacting('betterend:aeternium_ingot', ['betterend:terminite_ingot', 'minecraft:netherite_ingot']).superheated()
    event.recipes.createCompacting('minecraft:ice', ['minecraft:snowball', Fluid.of('minecraft:water', 81000)])
    event.recipes.createCompacting('minecraft:obsidian', [Fluid.of('minecraft:lava', 81000), Fluid.of('minecraft:water', 81000)])


//Create Pressing
    event.recipes.createPressing('betterend:thallasium_forged_plate', 'betterend:thallasium_ingot')
    event.recipes.createPressing('betterend:terminite_forged_plate', 'betterend:terminite_ingot')
    event.recipes.createPressing('betterend:aeternium_forged_plate', 'betterend:aeternium_ingot')


//Haunting
    event.recipes.createHaunting('minecraft:terracotta', 'minecraft:clay')  
    event.recipes.createHaunting('minecraft:netherrack', 'minecraft:stone')
	event.recipes.createHaunting('minecraft:coal', 'minecraft:charcoal')  
	event.recipes.createHaunting('minecraft:coal_block', 'betterend:charcoal_block')  


//Deploying
    event.recipes.createDeploying('extended_drawers:t1_upgrade', ['extended_drawers:upgrade_frame', '#minecraft:logs'])
    event.recipes.createDeploying('extended_drawers:t2_upgrade', ['extended_drawers:upgrade_frame', 'minecraft:iron_ingot'])
    event.recipes.createDeploying('extended_drawers:t3_upgrade', ['extended_drawers:upgrade_frame', 'minecraft:diamond'])
    event.recipes.createDeploying('extended_drawers:t4_upgrade', ['extended_drawers:upgrade_frame', 'betterend:eternal_crystal'])
    event.recipes.createDeploying('extended_drawers:downgrade', ['extended_drawers:upgrade_frame', 'minecraft:dirt'])
    event.recipes.createDeploying('create:refined_radiance_casing', ['#minecraft:logs', 'create:refined_radiance'])
    event.recipes.createDeploying('create:shadow_steel_casing', ['#minecraft:logs', 'create:shadow_steel'])

    
// Food
    event.recipes.createMixing('kubejs:rice_milk', ['#c:crops/rice','#c:crops/rice','#c:crops/rice','#c:crops/rice'])
    event.recipes.createCompacting(['kubejs:cheese', 'minecraft:glass_bottle'], 'farmersdelight:milk_bottle').heated()
    event.recipes.createCompacting('kubejs:cheese', 'kubejs:rice_milk').heated()
    event.recipes.createCompacting('kubejs:cheese', [Fluid.of('milk:still_milk')]).heated()
    event.recipes.createEmptying([Fluid.of('milk:still_milk')], 'kubejs:rice_milk')

    event.recipes.createSequencedAssembly([
        Item.of('1x farmersdelight:hamburger'),
        ], '#c:bread', [
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:cooked_beef']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', 'kubejs:cheese']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/cabbage']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/tomato']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', 'farmersdelight:onion']),
        ]).transitionalItem('kubejs:incomplete_burger').loops(1)
      
    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:algae_burger'),
        ], '#c:bread', [
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', 'kubejs:plant_patty']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', 'minecraft:kelp']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/cabbage']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/tomato']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', 'farmersdelight:onion']),
        ]).transitionalItem('kubejs:incomplete_burger').loops(1)   

    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:plant_patty'),
        ], 'farmersdelight:rice', [
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/tomato']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:crops/onion']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:mushrooms']),
            event.recipes.createDeploying('kubejs:incomplete_burger', ['kubejs:incomplete_burger', '#c:flour/wheat']),
            event.recipes.createPressing('kubejs:incomplete_burger', 'kubejs:incomplete_burger').processingTime(100),
        ]).transitionalItem('kubejs:incomplete_burger').loops(1)
        
    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:pizza'),
        ], 'farmersdelight:wheat_dough', [
            event.recipes.createPressing('kubejs:incomplete_pizza', 'kubejs:incomplete_burger').processingTime(100),
            event.recipes.createDeploying('kubejs:incomplete_pizza', ['kubejs:incomplete_pizza', 'farmersdelight:tomato_sauce']),
            event.recipes.createDeploying('kubejs:incomplete_pizza', ['kubejs:incomplete_pizza', '#c:cooked_beef']),
            event.recipes.createDeploying('kubejs:incomplete_pizza', ['kubejs:incomplete_pizza', 'kubejs:cheese']),
            event.recipes.createDeploying('kubejs:incomplete_pizza', ['kubejs:incomplete_pizza', '#c:crops/onion']),
            event.recipes.createDeploying('kubejs:incomplete_pizza', ['kubejs:incomplete_pizza', '#c:mushrooms']),
        ]).transitionalItem('kubejs:incomplete_pb_chicken').loops(1)  

    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:pb_chicken'),
        ], '#c:crops/potato', [
            event.recipes.createDeploying('kubejs:incomplete_pb_chicken', ['kubejs:incomplete_pb_chicken', '#c:crops/carrot']),
            event.recipes.createDeploying('kubejs:incomplete_pb_chicken', ['kubejs:incomplete_pb_chicken', '#c:crops/onion']),
            event.recipes.createDeploying('kubejs:incomplete_pb_chicken', ['kubejs:incomplete_pb_chicken', '#c:mushrooms']),
            event.recipes.createDeploying('kubejs:incomplete_pb_chicken', ['kubejs:incomplete_pb_chicken', '#c:flour/wheat']),
            event.recipes.createPressing('kubejs:incomplete_pb_chicken', 'kubejs:incomplete_pb_chicken').processingTime(100),
        ]).transitionalItem('kubejs:incomplete_pb_chicken').loops(1)  

    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:pb_bacon'),
        ], 'farmersdelight:rice', [
            event.recipes.createDeploying('kubejs:incomplete_pb_bacon', ['kubejs:incomplete_pb_bacon', '#c:crops/tomato']),
            event.recipes.createDeploying('kubejs:incomplete_pb_bacon', ['kubejs:incomplete_pb_bacon', '#c:crops/onion']),
            event.recipes.createDeploying('kubejs:incomplete_pb_bacon', ['kubejs:incomplete_pb_bacon', '#c:crops/beetroot']),
            event.recipes.createDeploying('kubejs:incomplete_pb_bacon', ['kubejs:incomplete_pb_bacon', '#c:crops/carrot']),
            event.recipes.createPressing('kubejs:incomplete_pb_bacon', 'kubejs:incomplete_pb_bacon').processingTime(100),
        ]).transitionalItem('kubejs:incomplete_pb_bacon').loops(1)    

    event.recipes.createSequencedAssembly([
        Item.of('1x kubejs:taco'),
        ], 'create:dough', [
            event.recipes.createPressing('kubejs:incomplete_taco', 'kubejs:incomplete_taco').processingTime(100),
            event.recipes.createDeploying('kubejs:incomplete_taco', ['kubejs:incomplete_taco', 'farmersdelight:tomato_sauce']),
            event.recipes.createDeploying('kubejs:incomplete_taco', ['kubejs:incomplete_taco', '#c:cooked_beef']),
            event.recipes.createDeploying('kubejs:incomplete_taco', ['kubejs:incomplete_taco', '#c:crops/onion']),
            event.recipes.createDeploying('kubejs:incomplete_taco', ['kubejs:incomplete_taco', '#c:crops/carrot']),
        ]).transitionalItem('kubejs:incomplete_taco').loops(1)     
        

    //New Create Deko Bricks
    event.shaped('8x createdeco:blue_brick', [
        'BBB',
        'BAB',
        'BBB'
      ], {
        A: 'minecraft:light_blue_dye',
        B: 'createdeco:worn_brick'
    })

    event.shaped('8x createdeco:pearl_brick', [
        'BBB',
        'BAB',
        'BBB'
      ], {
        A: 'minecraft:light_gray_dye',
        B: 'createdeco:worn_brick'
    })

    event.shaped('8x createdeco:dusk_brick', [
        'BBB',
        'BAB',
        'BBB'
      ], {
        A: 'minecraft:black_dye',
        B: 'createdeco:worn_brick'
    })

    event.shaped('8x createdeco:scarlet_brick', [
        'BBB',
        'BAB',
        'BBB'
      ], {
        A: 'minecraft:red_dye',
        B: 'createdeco:worn_brick'
    })

    event.shaped('8x createdeco:dean_brick', [
        'BBB',
        'BAB',
        'BBB'
      ], {
        A: 'minecraft:yellow_dye',
        B: 'createdeco:worn_brick'
    })

    event.shaped('4x minecraft:chest', [
        'AAA',
        'A A',
        'AAA'
      ], {
        A: '#minecraft:logs'
    })

    event.shaped('1x minecraft:lapis_lazuli', [
        'AAA',
        'ABA',
        'AAA'
      ], {
        A: 'minecraft:blue_dye',
        B: 'minecraft:quartz'
    })

    event.shaped('1x travelersbackpack:dragon', [
        'BAB',
        'CEC',
        'DCD'
      ], {
        A: 'kubejs:fake_dragon_egg',
        B: 'minecraft:end_stone',
        C: 'minecraft:obsidian',
        D: 'minecraft:ender_pearl',
        E: 'travelersbackpack:standard'
    })

    event.shaped('1x kubejs:fake_dragon_egg', [
        'ABA',
        'CDC',
        'EFE'
      ], {
        A: 'betterend:filalux',
        B: Item.of('minecraft:elytra', {Damage:0}),
        C: 'create:shadow_steel',
        D: 'create:refined_radiance',
        E: 'betterend:aeternium_forged_plate',
        F: 'betternether:nether_ruby'
    })

  })