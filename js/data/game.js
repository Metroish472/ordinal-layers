const game = {
    version: "1.1",
    timeSaved: Date.now(),
    layers: [],
    highestLayer: 0,
    highestUpdatedLayer: 0,
    automators: {
        autoMaxAll: new Automator("Auto Max All", "Automatically buys max on all Layers", () =>
        {
            for(let i = Math.max(0, game.volatility.autoMaxAll.apply().toNumber()); i < game.layers.length; i++)
            {
                game.layers[i].maxAll();
            }
        }, new DynamicLayerUpgrade(level => Math.floor(level / 3) + 1, () => null, () => "Decrease the Automator interval",
            level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.toNumber()) * [0.2, 0.5, 0.8][level.toNumber() % 3]),
            level => level.gt(0) ? Math.pow(0.8, level.toNumber() - 1) * 10 : Infinity, null, {
                getEffectDisplay: effectDisplayTemplates.automator()
            })),
        autoPrestige: new Automator("Auto Prestige", "Automatically prestiges all Layers", () =>
        {
            for(let i = 0; i < game.layers.length - 1; i++)
            {
                if(game.layers[game.layers.length - 2].canPrestige() && !game.settings.autoPrestigeHighestLayer)
                {
                    break;
                }
                if(game.layers[i].canPrestige() && !game.layers[i].isNonVolatile())
                {
                    game.layers[i].prestige();
                }
            }
        }, new DynamicLayerUpgrade(level => Math.floor(level / 2) + 2, () => null, () => "Decrease the Automator interval",
            level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.add(2).toNumber()) * (level.toNumber() % 2 === 0 ? 0.25 : 0.75)),
            level => level.gt(0) ? Math.pow(0.6, level.toNumber() - 1) * 30 : Infinity, null, {
                getEffectDisplay: effectDisplayTemplates.automator()
            })),
        autoAleph: new Automator("Auto Operate", "Automatically Max All Operator Upgrades", () =>
        {
            game.alephLayer.maxAll();
        }, new DynamicLayerUpgrade(level => level + 3, () => null, () => "Decrease the Automator interval",
            level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.add(3).toNumber()) * 0.7),
            level => level.gt(0) ? Math.pow(0.6, level.toNumber() - 1) * 60 : Infinity, null, {
                getEffectDisplay: effectDisplayTemplates.automator()
            })),
        autoAuto: new Automator("Auto Automators", "Automatically Max All Automators (except this)", () =>
        {
            for(let i = 0; i < game.automators.length - 2; i++)
            {
                game.automators[i].upgrade.buyMax()
            }
        }, new DynamicLayerUpgrade(level => level + 7, () => null, () => "Decrease the Automator interval",
            level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.add(10).toNumber()) * 10),
            level => level.gt(0) ? Math.pow(0.6, level.toNumber() - 1) * 500 : Infinity, null, {
                getEffectDisplay: effectDisplayTemplates.automator()
            })),
    },
    volatility: {
        layerVolatility: new DynamicLayerUpgrade(level => level + 1, level => level,
            function()
            {
                return "Make the next Layer non-volatile";
            }, level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.add(1).toNumber())), level => level.sub(1), null, {
                getEffectDisplay: function()
                {
                    const val1 = this.level.eq(0) ? "None" : PrestigeLayer.getNameForLayer(this.apply().toNumber());
                    const val2 = PrestigeLayer.getNameForLayer(this.getEffect(this.level.add(1)).toNumber());
                    return val1 + " → " + val2;
                }
            }),
        prestigePerSecond: new DynamicLayerUpgrade(level => Math.round(level * 1.3) + 3, level => null,
            () => "Boost the Prestige Reward you get per second",
            function(level)
            {
                const max = PrestigeLayer.getPrestigeCarryOverForLayer(Math.round(level.toNumber() * 1.3) + 3);
                return Decimal.pow(10, new Random(level.toNumber() * 10 + 10).nextDouble() * max).round();
            }, level => new Decimal(0.5 + 0.1 * level), null, {
                getEffectDisplay: effectDisplayTemplates.percentStandard(0)
            }),
        autoMaxAll: new DynamicLayerUpgrade(level => level + 2, level => level,
            function()
            {
                return "The next Layer is maxed automatically each tick";
            }, level => Decimal.pow(10, PrestigeLayer.getPrestigeCarryOverForLayer(level.add(2).toNumber()) * 0.125), level => level.sub(1), null, {
                getEffectDisplay: function()
                {
                    const val1 = this.level.eq(0) ? "None" : PrestigeLayer.getNameForLayer(this.apply().toNumber());
                    const val2 = PrestigeLayer.getNameForLayer(this.getEffect(this.level.add(1)).toNumber());
                    return val1 + " → " + val2;
                }
            }),
    },
    achievements: [
        new Achievement("You played!", "If you dont have this, you shouldn't exist", "START", () => true),
        new Achievement("A new layer!", "Prestige for the first time", "×", () => game.highestLayer >= 2
        new Achievement("Other Ordinals Await", "Go ^", "^", () => game.highestLayer >= 3
        new Achievement("Other Ordinals Still Await", "Go #", "#", () => game.highestLayer >= 4
        new Achievement("I wonder what new operators are like", "Start gaining operators", "↑", () => game.alephLayer.isUnlocked()),
        new Achievement("Ordinal Level 1 Operators", "Have 1e10 operators", "↑<sub>1</sub>", () => game.alephLayer.aleph.gte("1e10")),
        new Achievement("Googological Operators", "Have 1e100 operators", "↑<sub>2</sub>", () => game.alephLayer.aleph.gte("1e100")),
        new Achievement("Hyperoperators", "Have 1.8e308 operators", "↑<sub>3</sub>", () => game.alephLayer.aleph.gte("1.8e308")),
        new Achievement("BEAF", "Go ≬", "≬", () => game.highestLayer >= 5
        new Achievement("Stacking up", "Perform a hypercompute and restart your progress", "&", () => game.restackLayer.timesReset > 0),
        new Achievement("Wait, this isn't Ω-Layers", "Reach Ordinal Layer Ω", "Ω", () => game.highestLayer >= 18
        new Achievement("Upgradalicious", "Max all the non-ordinalized upgrades", "↑<sub>↑<sub>↑</sub></sub>", () => (Object.values(game.restackLayer.permUpgrades).filter(u => u.level.gt(0)).length + Object.values(game.restackLayer.permUpgrades).filter(u => u.level.gt(1)).length) == 12),
        new Achievement("It NEVER Ends", "Reach Ordinal Layer ⍰", "⍰", () => game.highestLayer >= 46
        new Achievement("Hyper^2-Compute", "Buy the ordinalized upgrade", "↑<sub>OL<sub>", () => game.restackLayer.metaUpgrade.level.gte(1)),
        new Achievement("No turning back", "Ordinalize and be reborn", "OL", () => game.metaLayer.active),
        new Achievement("The moment we've been waiting for", "Reach Ordinal Layer ᚖ (Ordinal Level 136)", "ᚖ", () => game.highestLayer >= 136
        new Achievement("The Ladder is Singafinite", "Reach layer 1,000 (Ordinal Level 1,000)", "↑<sub>+<sub>", () => game.highestLayer >= 1000
        new Achievement("OL(OL(1))", "Reach layer 1e10 (Ordinal Level 1e10)", "↑<sub>×<sub>", () => game.highestLayer >= "1e10"
        new Achievement("Go-Insta-Bility", "Reach layer 1e100 (Ordinal Level Googol)", "✇", () => game.highestLayer >= "1e100"
        new Achievement("Infinity-Insta-Bility", "Reach layer 1.8e308 (Ordinal Level ∞) and finish "+mod.primaryName+mod.secondaryName, "∾", () => game.metaLayer.layer.gte(Infinities[0])),
    ],
    secretAchievements: [
        new Achievement("A very long wait...", "Have a game with over 3 months of time", "...", () => game.timeSpent > 50803200),
        new Achievement("Operation Ordinal", "Have 1e1000 aleph", "↑<sub>π</sub>", () => game.alephLayer.aleph.gte("1e1000")),
        new Achievement("Who would even need Ordinalize?", "Get ᚖ without ordinalizing", "ᚖᚖᚖᚖᚖ", () => game.highestLayer >= 136 && !game.metaLayer.active),
        new Achievement("Anti-Volatility", "Get ≬ without layer volatility upgrade", "≬≬≬≬≬", () => game.highestLayer >= 5 && game.volatility.layerVolatility.level.eq(0)),
    ],
    alephLayer: new AlephLayer(),
    restackLayer: new ReStackLayer(),
    metaLayer: new MetaLayer(),
    currentLayer: null,
    currentChallenge: null,
    notifications: [],
    timeSpent: 0,
    settings: {
        tab: "Layers",
        showAllLayers: true,
        showMinLayers: 5,
        showMaxLayers: 5,
        showLayerOrdinals: true,
        layerTickSpeed: 1,
        buyMaxAlways10: true,
        disableBuyMaxOnHighestLayer: false,
        resourceColors: true,
        resourceGlow: true,
        newsTicker: true,
        autoMaxAll: true,
        autoPrestigeHighestLayer: true,
        notifications: true,
        saveNotifications: true,
        confirmations: true,
        offlineProgress: true,
        titleStyle: 2,
        theme: mod.themes[0][1],
        layerNames: mod.layerNames[0][1],
        font: mod.fonts[0][1],
        saveInfo: "i have no idea"
    },
};
const initialGame = functions.getSaveString();
