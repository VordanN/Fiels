//Create Live 4 - Manual override for buggy recipes
//Author: RGB Pixl

ServerEvents.recipes(event => {

//Remove buggy recipes
event.remove({output: 'create:precision_mechanism'})
event.remove({output: 'create:flywheel'})
event.remove({output: 'extendedflywheels:ironflywheel'})
event.remove({output: 'extendedflywheels:steelflywheel'})
event.remove({output: 'extendedflywheels:flywheel'})
event.remove({output: 'create:piston_extension_pole'})
event.remove({output: 'farmersdelight:chocolate_pie'})
event.remove({output: 'createdeco:cast_iron_ladder'})
event.remove({output: 'createdeco:netherite_ladder'})


//Add functional recipes
event.shaped('extendedflywheels:flywheel', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'create:andesite_alloy',
    B: 'create:brass_sheet',
    C: '#c:brass_ingots'
  })


  event.shaped('extendedflywheels:ironflywheel', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'create:andesite_alloy',
    B: 'create:iron_sheet',
    C: 'minecraft:iron_ingot'
  })


  event.shaped('extendedflywheels:steelflywheel', [
    'CBC',
    'BAB',
    'CBC'
  ], {
    A: 'create:andesite_alloy',
    B: 'createdeco:cast_iron_sheet',
    C: 'createdeco:cast_iron_ingot'
  })


  event.recipes.create.sequencedAssembly([
    Item.of('create:precision_mechanism').withChance(256.0),
    Item.of('create:golden_sheet').withChance(9.0),
    Item.of('create:andesite_alloy').withChance(9.0),
    Item.of('create:cogwheel').withChance(5.0),
    Item.of('create:crushed_gold_ore').withChance(2.0),
    Item.of('2x gold_nugget').withChance(2.0),
    Item.of('dirt').withChance(0.1),
    'minecraft:iron_ingot',
    'minecraft:clock'],
    'create:golden_sheet',
    [event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','#extendedgears:small_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','#extendedgears:large_cogwheel']),
     event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','minecraft:iron_nugget'])])
    .transitionalItem('create:incomplete_precision_mechanism')
    .loops(5)


event.shaped('8x create:piston_extension_pole', [
    ' B ',
    ' A ',
    ' B '
  ], {
    A: 'create:andesite_alloy',
    B: '#minecraft:logs',
  })

event.recipes.createFilling('farmersdelight:chocolate_pie', [Fluid.of('create:chocolate'), 'farmersdelight:pie_crust'])

event.stonecutting('2x createdeco:cast_iron_ladder', 'createdeco:cast_iron_sheet')
event.stonecutting('2x createdeco:netherite_ladder', 'createdeco:netherite_sheet')


})