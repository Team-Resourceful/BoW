onEvent('recipes', e => {
	e.shaped('storagenetwork:inventory_remote', [' P ', 'ISE', ' B '], {
		P: 'minecraft:ender_chest',
		S: 'storagenetwork:inventory',
		B: 'minecraft:iron_block',
		I: 'storagenetwork:import_kabel',
		E: 'storagenetwork:export_kabel'
	}).id('storagenetwork:inventory_remote')

	e.shaped('storagenetwork:crafting_remote', [' T ', ' R ', ' S '], {
		T: 'minecraft:diamond',
		R: 'storagenetwork:inventory_remote',
		S: 'storagenetwork:request'
	}).id('storagenetwork:crafting_remote')

	e.shaped('storagenetwork:picker_remote', ['EPE', 'ERE', 'EBE'], {
		P: 'minecraft:piston',
		R: 'storagenetwork:inventory_remote',
		B: 'minecraft:iron_block',
		E: 'storagenetwork:export_kabel'
	}).id('storagenetwork:picker_remote')

	e.shaped('storagenetwork:builder_remote', ['EPE', 'ERE', 'EBE'], {
		P: 'constructionwand:iron_wand',
		R: 'storagenetwork:picker_remote',
		B: 'minecraft:iron_block',
		E: 'storagenetwork:export_kabel'
	}).id('storagenetwork:builder_remote')
})
