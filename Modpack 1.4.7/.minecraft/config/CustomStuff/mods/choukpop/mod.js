
// Energy Crystal
mod.addAliasWithMetadata(30241, 27, "energycrystal");
mod.addRecipe("energycrystal 1", 3, 3, 331, 331, 331, 331, ":gemRuby", 331, 331, 331, 331);

// Lapotron Crystal
// DONT USE IC2 RECIPE (HARD RECIPE)
mod.addAliasWithMetadata(30240, 27, "lapotroncrystal");
mod.addRecipe("lapotroncrystal 1", 3, 3, 22, 30191, 22, 30241, ":gemSapphire", 30241, 22, 30191, 22);
mod.addRecipe("lapotroncrystal 1", 3, 3, 22, 30191, 22, 30241, 264, 30241, 22, 30191, 22);



// Irradiant Glass Pane
mod.addAliasWithMetadata(30831, 5, "irradiantglasspane");
mod.addAliasWithMetadata(30831, 2, "irradianturanium");
mod.addRecipe("irradiantglasspane 1", 3, 3, 230, 230, 230, "irradianturanium", 230, "irradianturanium", 230, 230, 230);

// Advanced Solar Panel
mod.addAliasWithMetadata(194, 0, "advancedsolarpanel");
mod.addAliasWithMetadata(246, 3, "solarpanel");
mod.addAliasWithMetadata(250, 12, "advancedmachineblock");
mod.addRecipe("advancedsolarpanel 1", 3, 3, "irradiantglasspane", "irradiantglasspane", "irradiantglasspane", 30187, "solarpanel", 30187, 30190, "advancedmachineblock", 30190);

// Hybrid Solar Panel
mod.addAliasWithMetadata(194, 1, "hybridsolarpanel");
mod.addAliasWithMetadata(30831, 1, "sunnariumalloy");
mod.addRecipe("hybridsolarpanel 1", 3, 3, "irradiantglasspane", "irradiantglasspane", "irradiantglasspane", 30147, "advancedsolarpanel", 30147, "sunnariumalloy", 30190, "sunnariumalloy");

// Ultimate Solar Panel
mod.addAliasWithMetadata(194, 2, "ultimatesolarpanel");
mod.addAliasWithMetadata(30831, 4, "enrichedsunnariumalloy");
mod.addRecipe("ultimatesolarpanel 1", 3, 3, "irradiantglasspane", "irradiantglasspane", "irradiantglasspane", "sunnariumalloy", "hybridsolarpanel", "sunnariumalloy", "enrichedsunnariumalloy", 30190, "enrichedsunnariumalloy");

// Ultimate Solar Helmet
mod.addAliasWithMetadata(30476, 0, "ultimatesolarhelmet");
mod.addAliasWithMetadata(227, 5, "hvtransformer");
mod.addAliasWithMetadata(30475, 1, "superconductor");
mod.addRecipe("ultimatesolarhelmet 1", 3, 3, 0, "ultimatesolarpanel", 0, 30190, 30174, 30190, "superconductor", "hvtransformer", "superconductor");



// Refined Iron
// DONT USE IC2 RECIPE (HARD RECIPE)
mod.addAliasWithMetadata(30249, 0, "refinediron");
mod.addAliasWithMetadata(263, 1, "charcoal");
mod.removeShapelessRecipe("refinediron", 27002, 263, 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refinediron", 27002, "charcoal", 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refinediron", 27003, 263, 265, 265, 265, 265, 265, 265, 265);
mod.removeShapelessRecipe("refinediron", 27003, "charcoal", 265, 265, 265, 265, 265, 265, 265);

// Refined Iron Dust
mod.addAliasWithMetadata(30031, 1, "refinedirondust");
mod.addShapelessRecipe("refinedirondust 1", ":dustCoal", ":dustIron", ":dustIron");



// Valve Pipe
mod.addRecipe("10456 1", 3, 1, 19436, 69, 19436);



// Sticky Resin
mod.addRecipe("30217 1", 3, 3, 12258, 12258, 12258, 12258, 12258, 12258, 12258, 12258, 12258);


