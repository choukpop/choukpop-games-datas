
// mod.addRecipe("[product] [quantity]", [width], [height], [ingredient 1], [ingredient 2], [ingredient 3], [ingredient 4], [ingredient 5], [ingredient 6], [ingredient 7], [ingredient 8], [ingredient 9]);
// mod.addShapelessRecipe("[product] [quantity]", [ingredient 1], [ingredient 2], [ingredient 3], [ingredient 4], [ingredient 5], [ingredient 6], [ingredient 7], [ingredient 8], [ingredient 9]);

// mod.addAlias([block or item ID], "[alias name]");
// mod.addAliasWithMetadata([block or item ID], [metadata number], "[alias name]");

// mod.removeRecipe("[product] [quantity]", [width], [height], [ingredient 1], [ingredient 2], [ingredient 3], [ingredient 4], [ingredient 5], [ingredient 6], [ingredient 7], [ingredient 8], [ingredient 9]);
// mod.removeShapelessRecipe("[product] [quantity]", [ingredient 1], [ingredient 2], [ingredient 3], [ingredient 4], [ingredient 5], [ingredient 6], [ingredient 7], [ingredient 8], [ingredient 9]);



// Energy Crystal
mod.addAliasWithMetadata(30241, 27, "energy_crystal");
mod.addAlias(331, "redstone");
mod.addRecipe("energy_crystal 1", 3, 3, "redstone", "redstone", "redstone", "redstone", ":gemRuby", "redstone", "redstone", "redstone", "redstone");

// Lapotron Crystal
// DONT USE IC2 RECIPE (HARD RECIPE)
mod.addAliasWithMetadata(30240, 27, "lapotron_crystal");
mod.addAlias(264, "diamond");
mod.addRecipe("lapotron_crystal 1", 3, 3, 22, 30191, 22, 30241, ":gemSapphire", 30241, 22, 30191, 22);
mod.addRecipe("lapotron_crystal 1", 3, 3, 22, 30191, 22, 30241, "diamond", 30241, 22, 30191, 22);



// Irradiant Glass Pane
mod.addAliasWithMetadata(30831, 5, "irradiant_glass_pane");
mod.addAliasWithMetadata(30831, 2, "irradiant_uranium");
mod.addRecipe("irradiant_glass_pane 1", 3, 3, 230, 230, 230, "irradiant_uranium", 230, "irradiant_uranium", 230, 230, 230);

// Iridium Iron Plate
mod.addAliasWithMetadata(30831, 6, "iridium_iron_plate");
mod.addAlias(30249, "refined_iron");
mod.addAliasWithMetadata(30831, 10, "iridium_ingot");
mod.addRecipe("iridium_iron_plate 1", 3, 3, "refined_iron", "refined_iron", "refined_iron", "refined_iron", "iridium_ingot", "refined_iron", "refined_iron", "refined_iron", "refined_iron");

// Reinforced Iridium Iron Plate
mod.addAliasWithMetadata(30831, 7, "reinforced_iridium_iron_plate");
mod.addAlias(30187, "advanced_alloy");
mod.addAlias(30150, "carbon_plate");
mod.addRecipe("reinforced_iridium_iron_plate 1", 3, 3, "advanced_alloy", "carbon_plate", "advanced_alloy", "carbon_plate", "iridium_iron_plate", "carbon_plate", "advanced_alloy", "carbon_plate", "advanced_alloy");

// Sunnarium Part
mod.addAliasWithMetadata(30831, 9, "sunnarium_part");
mod.addAlias(30188, "uu_matter");
mod.addRecipe("sunnarium_part 1", 1, 3, "uu_matter", 348, "uu_matter");

// Irradiant Reinforced Plate
mod.addAliasWithMetadata(30831, 8, "irradiant_reinforced_plate");
mod.addAliasWithMetadata(351, 4, "lapis_lazuli");
mod.addRecipe("irradiant_reinforced_plate 1", 3, 3, "redstone", "sunnarium_part", "redstone", "lapis_lazuli", "reinforced_iridium_iron_plate", "lapis_lazuli", "redstone", "diamond", "redstone");



// Advanced Solar Panel
mod.addAliasWithMetadata(194, 0, "advanced_solar_panel");
mod.addAlias(230, "reinforced_glass");
mod.addAliasWithMetadata(246, 3, "solar_panel");
mod.addAliasWithMetadata(250, 12, "advanced_machine_block");
mod.addAlias(30190, "advanced_circuit");
mod.addRecipe("advanced_solar_panel 1", 3, 3, "reinforced_glass", "reinforced_glass", "reinforced_glass", "advanced_alloy", "solar_panel", "advanced_alloy", "advanced_circuit", "advanced_machine_block", "advanced_circuit");

// Hybrid Solar Panel
mod.addAliasWithMetadata(194, 1, "hybrid_solar_panel");
mod.addAliasWithMetadata(30831, 1, "sunnarium_alloy");
mod.addRecipe("hybrid_solar_panel 1", 3, 3, "irradiant_glass_pane", "irradiant_glass_pane", "irradiant_glass_pane", 30147, "advanced_solar_panel", 30147, "sunnarium_alloy", "irradiant_reinforced_plate", "sunnarium_alloy");

// Ultimate Solar Panel
mod.addAliasWithMetadata(194, 2, "ultimate_solar_panel");
mod.addAliasWithMetadata(30831, 4, "enriched_sunnarium_alloy");
mod.addRecipe("ultimate_solar_panel 1", 3, 3, "irradiant_glass_pane", "irradiant_glass_pane", "irradiant_glass_pane", "sunnarium_alloy", "hybrid_solar_panel", "sunnarium_alloy", "enriched_sunnarium_alloy", "irradiant_reinforced_plate", "enriched_sunnarium_alloy");



// Advanced Solar Helmet
// mod.addAliasWithMetadata(30832, 0, "advanced_solar_helmet");
// mod.addAliasWithMetadata(30178, 0, "nanosuit_helmet");
// mod.addAliasWithMetadata(30184, 4, "2xins_gold_cable");
// mod.addAliasWithMetadata(227, 3, "lv_transformer");
// mod.addRecipe("advanced_solar_helmet 1", 3, 3, 0, "advanced_solar_panel", 0, "advanced_circuit", "nanosuit_helmet", "advanced_circuit", "2xins_gold_cable", "lv_transformer", "2xins_gold_cable");

// Hybrid Solar Helmet
// mod.addAliasWithMetadata(30833, 0, "hybrid_solar_helmet");
// mod.addAliasWithMetadata(30184, 9, "glass_fibre_cable");
// mod.addAliasWithMetadata(227, 4, "mv_transformer");
mod.addAliasWithMetadata(227, 5, "hv_transformer");
mod.addAliasWithMetadata(30174, 0, "quantumsuit_helmet");
// mod.addRecipe("hybrid_solar_helmet 1", 3, 3, 0, "hybrid_solar_panel", 0, "advanced_circuit", "advanced_solar_helmet", "advanced_circuit", "glass_fibre_cable", "mv_transformer", "glass_fibre_cable");
// mod.addRecipe("hybrid_solar_helmet 1", 3, 3, 0, "hybrid_solar_panel", 0, "sunnarium_alloy", "quantumsuit_helmet", "sunnarium_alloy", "glass_fibre_cable", "hv_transformer", "glass_fibre_cable");

// Ultimate Solar Helmet
// mod.addAliasWithMetadata(30834, 0, "IC2_ultimate_solar_helmet");
mod.addAliasWithMetadata(30476, 0, "GS_ultimate_solar_helmet");
mod.addAliasWithMetadata(30475, 1, "superconductor");
mod.addRecipe("GS_ultimate_solar_helmet 1", 3, 3, 0, "ultimate_solar_panel", 0, "advanced_circuit", "quantumsuit_helmet", "advanced_circuit", "superconductor", "hv_transformer", "superconductor");
// mod.addRecipe("GS_ultimate_solar_helmet 1", 3, 3, 0, "ultimate_solar_panel", 0, "enriched_sunnarium_alloy", "hybrid_solar_helmet", "enriched_sunnarium_alloy", "superconductor", "hv_transformer", "superconductor");
// mod.addShapelessRecipe("IC2_ultimate_solar_helmet 1", "GS_ultimate_solar_helmet");
// mod.addShapelessRecipe("GS_ultimate_solar_helmet 1", "IC2_ultimate_solar_helmet");



// Refined Iron
// DONT USE IC2 RECIPE (HARD RECIPE)
mod.addAliasWithMetadata(263, 1, "charcoal");
mod.removeShapelessRecipe("refined_iron", 27002, 263, 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refined_iron", 27002, "charcoal", 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refined_iron", 27003, 263, 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refined_iron", 27003, "charcoal", 265, 265, 265, 265, 265, 265, 265);

// Refined Iron Dust
// mod.addAliasWithMetadata(30031, 1, "refined_iron_dust");
// mod.addShapelessRecipe("refined_iron_dust 1", ":dustCoal", ":dustIron", ":dustIron");



// Valve Pipe
mod.addRecipe("10456 1", 3, 1, 19436, 69, 19436);

// Sticky Resin
mod.addRecipe("30217 1", 3, 3, 12258, 12258, 12258, 12258, 12258, 12258, 12258, 12258, 12258);

// Philosopher's Stone
mod.addRecipe("27003 1", 3, 3, "iridium_iron_plate", 27002, "iridium_iron_plate", 27002, "advanced_machine_block", 27002, "iridium_iron_plate", 27002, "iridium_iron_plate");

// Chest
mod.addRecipe("54 4", 3, 3, ":logWood", ":logWood", ":logWood", ":logWood", 0, ":logWood", ":logWood", ":logWood", ":logWood");

// Sticks
mod.addRecipe("280 16", 1, 2, ":logWood", ":logWood");

// UU Matter
// Marble
mod.addAliasWithMetadata(253, 0, "marble");
mod.addRecipe("marble 16", 3, 3, 0, 0, 0, 0, 0, 0, "uu_matter", 0, 0);

// Basalt Cobblestone
mod.addAliasWithMetadata(253, 3, "basalt_cobblestone");
mod.addRecipe("basalt_cobblestone 16", 3, 3, 0, 0, 0, 0, 0, 0, 0, "uu_matter", 0);

// Red Cobblestone
mod.addAliasWithMetadata(254, 1, "red_cobblestone");
mod.addRecipe("red_cobblestone 16", 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, "uu_matter");

// Cracked Sand
mod.addAlias(255, "cracked_sand");
mod.addRecipe("cracked_sand 16", 3, 3, 0, 0, 0, 0, 0, "uu_matter", 0, 0, 0);

// Obsidian
mod.addShapelessRecipe("49 1", "2422:0");
mod.addShapelessRecipe("49 1", "2422:1");



