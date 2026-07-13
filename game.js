// 游戏数据
const gameData = {
    // 方块种类
    blocks: [
        { name: '土块I', hp: 100, coins: 1, sqrtZone: 1 },
        { name: '土块II', hp: 300, coins: 2, sqrtZone: 1 },
        { name: '土块III', hp: 500, coins: 3, sqrtZone: 1 },
        { name: '石块I', hp: 1000, coins: 5, sqrtZone: 1 },
        { name: '石块II', hp: 3000, coins: 10, sqrtZone: 1 },
        { name: '石块III', hp: 5000, coins: 15, sqrtZone: 1 },
        { name: '铁块I', hp: 10000, coins: 20, sqrtZone: 1 },
        { name: '铁块II', hp: 30000, coins: 30, sqrtZone: 1 },
        { name: '铁块III', hp: 100000, coins: 50, sqrtZone: 1 },
        { name: '金块I', hp: 5e5, coins: 100, sqrtZone: 1 },
        { name: '金块II', hp: 1e6, coins: 150, sqrtZone: 1 },
        { name: '金块III', hp: 3e6, coins: 200, sqrtZone: 1 },
        { name: '钻石块I', hp: 1e7, coins: 300, sqrtZone: 1 },
        { name: '钻石块II', hp: 8e7, coins: 500, sqrtZone: 1 },
        { name: '钻石块III', hp: 5e8, coins: 1000, sqrtZone: 1 },
        { name: '下界合金块I', hp: 5e9, coins: 1500, sqrtZone: 1 },
        { name: '下界合金块II', hp: 1e11, coins: 2000, sqrtZone: 1 },
        { name: '下界合金块III', hp: 1e12, coins: 3000, sqrtZone: 1 },
        { name: '紫水晶块', hp: 1e13, coins: 5000, drop: 'amethyst', sqrtZone: 1 },
        { name: '铜块', hp: 2e14, coins: 10000, drop: 'copperIngot', sqrtZone: 1 },
        { name: '京核', hp: 1e32, coins: 6.4e8, drop: 'jingCore', dropChance: 32, sqrtZone: 1 },
        // 二次开方区方块
        { name: '蓝曜石碎片', hp: 3.2e9, coins: 50000, drop: 'blueObsidianFragment', sqrtZone: 2 },
        { name: '红曜石碎片', hp: 9.6e9, coins: 100000, drop: 'redObsidianFragment', sqrtZone: 2 },
        { name: '红蓝结晶', hp: 2.4e10, coins: 180000, drop: 'redBlueCrystal', sqrtZone: 2 },
        { name: '基岩碎片', hp: 8e10, coins: 320000, drop: 'bedrockFragment', sqrtZone: 2 },
        { name: '黑曜石', hp: 4.4e11, coins: 600000, drop: 'obsidian', sqrtZone: 2 },
        { name: '下界之星', hp: 1e12, coins: 1e6, drop: 'netherStar', sqrtZone: 2 },
        { name: '玻璃', hp: 1, coins: 1, drop: 'glass', dropChance: 0.1, sqrtZone: 2 },
        { name: '坤坤', hp: 2.5e13, coins: 2.5e6, drop: 'kunKun', sqrtZone: 2 },
        { name: '物质X', hp: 1e24, coins: 1e8, drop: 'matterX', sqrtZone: 2 },
        { name: '物质Y', hp: 1e24, coins: 1e8, drop: 'matterY', sqrtZone: 2 },
        { name: '物质Z', hp: 1e24, coins: 1e8, drop: 'matterZ', sqrtZone: 2 },
        // 三次开方区新增方块
        { name: '玻璃2.0', hp: 4e9, coins: 1e7, drop: 'glass', sqrtZone: 3 },
        { name: '土核心', hp: 1e10, coins: 1.5e7, drop: 'earthCore', sqrtZone: 3 },
        { name: '木核心', hp: 1.5e10, coins: 2e7, drop: 'woodCore', sqrtZone: 3 },
        { name: '火立方', hp: 5e10, coins: 3e7, drop: 'fireCube', sqrtZone: 3 },
        { name: '水立方', hp: 8e10, coins: 5e7, drop: 'waterCube', sqrtZone: 3 },
        { name: '金立方', hp: 2e11, coins: 1e8, drop: 'goldCube', sqrtZone: 3 },
        { name: '五行结晶', hp: 4e12, coins: 2e8, drop: 'fiveElementCrystal', sqrtZone: 3 },
        { name: '方立水', hp: 1e13, coins: 4.5e8, drop: 'waterCube', dropAmount: 64, sqrtZone: 3 },
        { name: '水沝㴇淼㵘', hp: 5e14, coins: 1e9, drop: 'waterCube', dropAmount: 256, sqrtZone: 3 },
        { name: '纯金', hp: 2e15, coins: 1e10, sqrtZone: 3 },
        { name: '元素晶片', hp: 1e17, coins: 1e6, drop: 'elementChip', sqrtZone: 3 }
    ],
    // 镐子属性
    pickaxes: [
        { name: '木镐', damage: 1, usage: 0.01, coins: 1, price: 1, count: 1, currency: 'trophies' },
        { name: '石镐', damage: 2, usage: 0.02, coins: 1, price: 2, count: 0, currency: 'trophies' },
        { name: '铁镐', damage: 5, usage: 0.03, coins: 1, price: 6, count: 0, currency: 'trophies' },
        { name: '金镐', damage: 15, usage: 0.05, coins: 1, price: 24, count: 0, currency: 'trophies' },
        { name: '钻石镐', damage: 50, usage: 0.1, coins: 1, price: 120, count: 0, currency: 'trophies' },
        { name: '下界合金镐', damage: 200, usage: 0.2, coins: 1, price: 600, count: 0, currency: 'trophies' },
        { name: '红石镐', damage: 1000, usage: 0.3, coins: 1, price: 3000, count: 0, currency: 'trophies' },
        { name: '青金石镐', damage: 5000, usage: 0.5, coins: 1, price: 15000, count: 0, currency: 'trophies' },
        { name: '下界石英镐', damage: 20000, usage: 0.8, coins: 1, price: 75000, count: 0, currency: 'trophies' },
        { name: '萤石镐', damage: 80000, usage: 1, coins: 1, price: 375000, count: 0, currency: 'trophies' },
        { name: '黑曜石镐', damage: 350000, usage: 1.2, coins: 1, price: 1875000, count: 0, currency: 'trophies' },
        { name: '紫水晶镐I', damage: 1, usage: 2, coins: 1, price: 10, count: 0, currency: 'amethyst' },
        { name: '紫水晶镐II', damage: 5, usage: 3, coins: 1, price: 25, count: 0, currency: 'amethyst' },
        { name: '紫水晶镐III', damage: 25, usage: 4, coins: 1, price: 100, count: 0, currency: 'amethyst' },
        { name: '紫水晶镐IV', damage: 125, usage: 5, coins: 1, price: 500, count: 0, currency: 'amethyst' },
        { name: '紫水晶镐V', damage: 625, usage: 6, coins: 1, price: 2000, count: 0, currency: 'amethyst' },
        { name: '紫水晶镐VI', damage: 3125, usage: 7, coins: 1, price: 10000, count: 0, currency: 'amethyst' },
        { name: '铜镐I', damage: 1, usage: 1, coins: 1.5, price: 10, count: 0, currency: 'copperIngot' },
        { name: '铜镐II', damage: 5, usage: 1, coins: 2, price: 25, count: 0, currency: 'copperIngot' },
        { name: '铜镐III', damage: 25, usage: 1, coins: 2.5, price: 100, count: 0, currency: 'copperIngot' },
        { name: '铜镐IV', damage: 125, usage: 1, coins: 3, price: 500, count: 0, currency: 'copperIngot' },
        { name: '铜镐V', damage: 625, usage: 1, coins: 3.5, price: 2000, count: 0, currency: 'copperIngot' },
        { name: '铜镐VI', damage: 3125, usage: 1, coins: 4, price: 10000, count: 0, currency: 'copperIngot' },
        { name: '蓝曜石镐', damage: 1000000, usage: 1.5, coins: 1, count: 0, isCraftable: true, recipe: { '黑曜石镐': 1, '紫水晶镐VI': 1, '铜镐VI': 1, '蓝曜石碎片': 10 } },
        { name: '红曜石镐', damage: 2500000, usage: 2, coins: 1, count: 0, isCraftable: true, recipe: { '蓝曜石镐': 1, '红曜石碎片': 10 } },
        { name: '红蓝镐', damage: 6666666, usage: 3, coins: 1.5, count: 0, isCraftable: true, recipe: { '蓝曜石镐': 1, '红曜石镐': 1, '红蓝结晶': 10 } },
        { name: '基岩镐', damage: 1.6e7, usage: 4, coins: 1.5, count: 0, isCraftable: true, recipe: { '红蓝镐': 1, '基岩碎片': 10 } },
        { name: '坤坤镐', damage: 8e7, usage: 5, coins: 2.5, count: 0, isCraftable: true, recipe: { '基岩镐': 1, '坤坤': 25 } },
        { name: '土核心镐', damage: 2e8, usage: 6, coins: 2.5, count: 0, isCraftable: true, recipe: { '坤坤镐': 1, '土核心': 10 } },
        { name: '木核心镐', damage: 3e8, usage: 7, coins: 2.5, count: 0, isCraftable: true, recipe: { '土核心镐': 1, '木核心': 10 } },
        { name: '火立方镐', damage: 1e9, usage: 8, coins: 2.5, count: 0, isCraftable: true, recipe: { '火立方': 10, '使用增益': 2.5e5 } },
        { name: '水立方镐', damage: 2e9, usage: 9, coins: 2.5, count: 0, isCraftable: true, recipe: { '水立方': 10, '使用增益': 2.5e5 } },
        { name: '金立方镐', damage: 5e9, usage: 10, coins: 3.5, count: 0, isCraftable: true, recipe: { '金立方': 10, '金币': 1e11 } },
        { name: '五行镐', damage: 1e10, usage: 15, coins: 5, count: 0, isCraftable: true, recipe: { '土核心镐': 1, '木核心镐': 1, '火立方镐': 1, '水立方镐': 1, '金立方镐': 1, '五行结晶': 10 } },
        { name: '京镐', damage: 2e10, usage: 16, coins: 5.4, count: 0, isCraftable: true, recipe: { '五行镐': 1, '京核': 32 } },
        { name: '元素镐', damage: 5e10, usage: 20, coins: 6.4, count: 0, isCraftable: true, recipe: { '元素晶片': 1000 } },
        { name: '信标', type: 'item', count: 0, isCraftable: true, recipe: { '黑曜石': 3, '玻璃': 5, '下界之星': 1 } }
    ],
    // 游戏状态
    currentBlockIndex: 0,
    currentPickaxeIndex: 0,
    coins: 0,
    trophies: 0,
    amethyst: 0,
    copperIngot: 0,
    blueObsidianFragment: 0,
    redObsidianFragment: 0,
    redBlueCrystal: 0,
    bedrockFragment: 0,
    obsidian: 0,
    netherStar: 0,
    glass: 0,
    kunKun: 0,
    earthCore: 0,
    woodCore: 0,
    fireCube: 0,
    waterCube: 0,
    goldCube: 0,
    fiveElementCrystal: 0,
    jingCore: 0,
    elementChip: 0,
    matterX: 0,
    matterY: 0,
    matterZ: 0,
    beacon: 0,
    level: 1,
    experience: 0,
    usageBonus: 1,
    specialBonus: 1, 
    digCount: 0,
    blocksMined: 0,
    treeLevel: 1,
    treeExperience: 0,
    autoMine: false,
    autoExchange: false,
    autoExchangeThreshold: 1000,
    startTime: Date.now(),
    originalStartTime: Date.now(),
    lastOnlineTime: Date.now(),
    currentHp: 100,
    sqrtPower: 1,
    debugEnabled: false,
    researchInstituteActive: false,
    energy: 0,
    energyProductionSpeed: 1,
    energyUpgradeCost: 100
};

// DOM元素
const elements = {
    blockName: document.getElementById('block-name'),
    currentHp: document.getElementById('current-hp'),
    maxHp: document.getElementById('max-hp'),
    hpBar: document.getElementById('hp-bar'),
    expBar: document.getElementById('exp-bar'),
    prevBlock: document.getElementById('prev-block'),
    nextBlock: document.getElementById('next-block'),
    blockDisplay: document.getElementById('block-display'),
    autoMineBtn: document.getElementById('auto-mine-btn'),
    autoExchangeBtn: document.getElementById('auto-exchange-btn'),
    autoExchangeThreshold: document.getElementById('auto-exchange-threshold'),
    exchangeBtn: document.getElementById('exchange-btn'),
    damageTextContainer: document.getElementById('damage-text-container'),
    dropInfo: document.getElementById('drop-info'),
    pickaxeName: document.getElementById('pickaxe-name'),
    pickaxeDamage: document.getElementById('pickaxe-damage'),
    pickaxeDamageValue: document.getElementById('pickaxe-damage-value'),
    pickaxeUsageValue: document.getElementById('pickaxe-usage-value'),
    pickaxeCoinsValue: document.getElementById('pickaxe-coins-value'),
    usageBonus: document.getElementById('usage-bonus'),
    levelBonus: document.getElementById('level-bonus'),
    trophyBonus: document.getElementById('trophy-bonus'),
    beaconBonus: document.getElementById('beacon-bonus'),
    timeBonus: document.getElementById('time-bonus'),
    specialBonus: document.getElementById('special-bonus'),
    energyBonus: document.getElementById('energy-bonus'),
    totalDamage: document.getElementById('total-damage'),
    level: document.getElementById('level'),
    experience: document.getElementById('experience'),
    coins: document.getElementById('coins'),
    trophies: document.getElementById('trophies'),
    amethyst: document.getElementById('amethyst'),
    copperIngot: document.getElementById('copper-ingot'),
    blueObsidianFragment: document.getElementById('blue-obsidian-fragment'),
    redObsidianFragment: document.getElementById('red-obsidian-fragment'),
    redBlueCrystal: document.getElementById('red-blue-crystal'),
    bedrockFragment: document.getElementById('bedrock-fragment'),
    obsidian: document.getElementById('obsidian'),
    netherStar: document.getElementById('nether-star'),
    glass: document.getElementById('glass'),
    kunKun: document.getElementById('kun-kun'),
    earthCore: document.getElementById('earth-core'),
    woodCore: document.getElementById('wood-core'),
    fireCube: document.getElementById('fire-cube'),
    waterCube: document.getElementById('water-cube'),
    goldCube: document.getElementById('gold-cube'),
    fiveElementCrystal: document.getElementById('five-element-crystal'),
    jingCore: document.getElementById('jing-core'),
    elementChip: document.getElementById('element-chip'),
    matterX: document.getElementById('matter-x'),
    matterY: document.getElementById('matter-y'),
    matterZ: document.getElementById('matter-z'),
    treeLevel: document.getElementById('tree-level'),
    treeProgressBar: document.getElementById('tree-progress-bar'),
    treeExperience: document.getElementById('tree-experience'),
    treeExperienceRequired: document.getElementById('tree-experience-required'),
    waterTreeBtn: document.getElementById('water-tree-btn'),
    autoWaterTreeBtn: document.getElementById('auto-water-tree-btn'),
    craftBeaconBtn: document.getElementById('craft-beacon-btn'),
    treeBonus: document.getElementById('tree-bonus'),
    sqrtPower: document.getElementById('sqrt-power'),
    playtime: document.getElementById('playtime'),
    digCount: document.getElementById('dig-count'),
    blocksMined: document.getElementById('blocks-mined'),
    shopItems: document.getElementById('shop-items'),
    redeemInput: document.getElementById('redeem-input'),
    redeemBtn: document.getElementById('redeem-btn'),
    researchInactive: document.getElementById('research-inactive'),
    researchActive: document.getElementById('research-active'),
    activateResearchBtn: document.getElementById('activate-research-btn'),
    upgradeEnergyBtn: document.getElementById('upgrade-energy-btn'),
    energyTotal: document.getElementById('energy-total'),
    energySpeed: document.getElementById('energy-speed'),
    energyBonusStat: document.getElementById('energy-bonus-stat'),
    energyUsageStat: document.getElementById('energy-usage-stat'),
    energyTreeStat: document.getElementById('energy-tree-stat')
};

function setStat(el, text) {
    if (!el) return;
    if (document.activeElement === el) return;
    if (el.tagName === 'INPUT') { el.value = text; } else { el.textContent = text; }
}

function formatNumber(num) {
    if (num < 1000000) return num.toFixed(2).replace(/\.00$/, '');
    if (num < 1e10) return (num / 10000).toFixed(2) + '万';
    if (num < 1e14) return (num / 1e8).toFixed(2) + '亿';
    if (num < 1e18) return (num / 1e12).toFixed(2) + '万亿';
    if (num < 1e22) return (num / 1e16).toFixed(2) + '兆';
    if (num < 1e26) return (num / 1e20).toFixed(2) + '万兆';
    if (num < 1e30) return (num / 1e24).toFixed(2) + '亿兆';
    if (num < 1e34) return (num / 1e28).toFixed(2) + '万亿兆';
    if (num < 1e38) return (num / 1e32).toFixed(2) + '京';
    if (num < 1e42) return (num / 1e36).toFixed(2) + '万京';
    if (num < 1e46) return (num / 1e40).toFixed(2) + '亿京';
    if (num < 1e50) return (num / 1e44).toFixed(2) + '万亿京';
    if (num < 1e54) return (num / 1e48).toFixed(2) + '兆京';
    if (num < 1e58) return (num / 1e52).toFixed(2) + '万兆京';
    if (num < 1e62) return (num / 1e56).toFixed(2) + '亿兆京';
    if (num < 1e66) return (num / 1e60).toFixed(2) + '万亿兆京';
    return (num / 1e64).toFixed(2) + '垓';
}

function updateBlockDisplay() {
    const block = gameData.blocks[gameData.currentBlockIndex];
    elements.blockName.textContent = block.name;
    elements.currentHp.textContent = formatNumber(gameData.currentHp);
    elements.maxHp.textContent = formatNumber(block.hp);
    elements.hpBar.style.width = (gameData.currentHp / block.hp) * 100 + '%';

    if (block.drop) {
        const dropChance = block.dropChance || 100;
        let dropName = '';
        switch (block.drop) {
            case 'amethyst': dropName = '紫水晶'; break;
            case 'copperIngot': dropName = '铜锭'; break;
            case 'blueObsidianFragment': dropName = '蓝曜石碎片'; break;
            case 'redObsidianFragment': dropName = '红曜石碎片'; break;
            case 'redBlueCrystal': dropName = '红蓝结晶'; break;
            case 'bedrockFragment': dropName = '基岩碎片'; break;
            case 'obsidian': dropName = '黑曜石'; break;
            case 'netherStar': dropName = '下界之星'; break;
            case 'glass': dropName = '玻璃'; break;
            case 'kunKun': dropName = '坤坤'; break;
            case 'earthCore': dropName = '土核心'; break;
            case 'woodCore': dropName = '木核心'; break;
            case 'fireCube': dropName = '火立方'; break;
            case 'waterCube': dropName = '水立方'; break;
            case 'goldCube': dropName = '金立方'; break;
            case 'fiveElementCrystal': dropName = '五行结晶'; break;
            case 'jingCore': dropName = '京核'; break;
            case 'elementChip': dropName = '元素晶片'; break;
            case 'matterX': dropName = '物质X'; break;
            case 'matterY': dropName = '物质Y'; break;
            case 'matterZ': dropName = '物质Z'; break;
            default: dropName = block.drop;
        }
        const dropAmount = block.dropAmount || 1;
        elements.dropInfo.textContent = `${dropChance}%概率掉落${dropName} x ${dropAmount}`;
        elements.dropInfo.style.display = 'block';
    } else {
        elements.dropInfo.textContent = '';
        elements.dropInfo.style.display = 'none';
    }
}

function getCurrentSqrtZoneBlocks() {
    return gameData.blocks.map((block, index) => block.sqrtZone === gameData.sqrtPower ? index : null).filter(index => index !== null);
}

function changeBlock(direction) {
    const currentBlocks = getCurrentSqrtZoneBlocks();
    const currentIndex = currentBlocks.indexOf(gameData.currentBlockIndex);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = currentBlocks.length - 1;
    else if (newIndex >= currentBlocks.length) newIndex = 0;
    gameData.currentBlockIndex = currentBlocks[newIndex];
    gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
    updateBlockDisplay();
}

function showDamageText(damage) {
    const damageText = document.createElement('div');
    damageText.className = 'damage-text';
    damageText.textContent = formatNumber(damage);
    damageText.style.left = `50%`;
    damageText.style.top = `50%`;
    damageText.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
    elements.damageTextContainer.appendChild(damageText);
    setTimeout(() => damageText.remove(), 1000);
}

function calculateBeaconBonus() { return Math.pow(1 + gameData.beacon, 0.64); }
function calculateTimeBonus() {
    const seconds = Math.max(0, Math.floor((Date.now() - gameData.originalStartTime) / 1000));
    const baseTime = 160;
    if (seconds < baseTime) return 1;
    return Math.log(seconds / baseTime) / Math.log(8);
}
function calculateTreeBonus() { return Math.pow(gameData.treeLevel, 0.4); }
function calculateEnergyBonus() { return gameData.researchInstituteActive ? Math.pow(gameData.energy, 0.22) : 1; }
function calculateEnergyUsageBonus() { return gameData.researchInstituteActive ? Math.pow(gameData.energy, 0.44) : 1; }
function calculateEnergyTreeExp() { return gameData.researchInstituteActive ? Math.pow(gameData.energy, 0.55) : 0; }

function calculateTotalDamage() {
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const levelBonus = Math.pow(gameData.level, 0.5);
    const trophyBonus = Math.pow(1 + gameData.trophies, 2/3);
    const beaconBonus = calculateBeaconBonus();
    const timeBonus = calculateTimeBonus();
    const treeBonus = calculateTreeBonus();
    const energyBonus = calculateEnergyBonus();
    const bonusProduct = pickaxe.damage * gameData.usageBonus * levelBonus * trophyBonus;
    return Math.pow(bonusProduct, 1 / gameData.sqrtPower) * beaconBonus * timeBonus * treeBonus * gameData.specialBonus * energyBonus;
}

function waterTree() {
    if (gameData.waterCube < 1) return;
    gameData.waterCube--;
    gameData.treeExperience++;
    const requiredExp = 10 * gameData.treeLevel;
    while (gameData.treeExperience >= requiredExp) {
        gameData.treeLevel++;
        gameData.treeExperience -= requiredExp;
    }
    updateStats();
    updateShopButtons();
}

function autoWaterTree() {
    if (gameData.waterCube < 1) return;
    const availableWater = gameData.waterCube;
    gameData.waterCube = 0;
    gameData.treeExperience += availableWater;
    const requiredExp = 10 * gameData.treeLevel;
    while (gameData.treeExperience >= requiredExp) {
        gameData.treeLevel++;
        gameData.treeExperience -= requiredExp;
    }
    updateStats();
    updateShopButtons();
}

function craftAllBeacons() {
    const beaconItem = gameData.pickaxes.find(p => p.name === '信标');
    if (!beaconItem) return;
    const maxCraft = Math.min(Math.floor(gameData.obsidian / 3), Math.floor(gameData.glass / 5), Math.floor(gameData.netherStar / 1));
    if (maxCraft > 0) {
        gameData.obsidian -= maxCraft * 3;
        gameData.glass -= maxCraft * 5;
        gameData.netherStar -= maxCraft * 1;
        beaconItem.count += maxCraft;
        gameData.beacon = beaconItem.count;
        updateStats(); updateShopButtons(); saveGame();
        alert(`成功合成了 ${maxCraft} 个信标！`);
    } else {
        alert('材料不足，无法合成信标！(需要3黑曜石, 5玻璃, 1下界之星)');
    }
}

function activateResearchInstitute() {
    if (gameData.matterX >= 1e5 && gameData.matterY >= 1e5 && gameData.matterZ >= 1e5) {
        gameData.matterX -= 1e5;
        gameData.matterY -= 1e5;
        gameData.matterZ -= 1e5;
        gameData.researchInstituteActive = true;
        updateStats(); saveGame();
    } else {
        alert('需要各10万个 X, Y, Z 物质才能开启！');
    }
}

function upgradeEnergyProduction() {
    if (gameData.energy >= gameData.energyUpgradeCost) {
        gameData.energy -= gameData.energyUpgradeCost;
        gameData.energyProductionSpeed *= 2;
        gameData.energyUpgradeCost *= 10;
        updateStats(); saveGame();
    }
}

function dig(silent = false) {
    const block = gameData.blocks[gameData.currentBlockIndex];
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const damage = calculateTotalDamage();
    gameData.currentHp -= damage;
    gameData.digCount++;
    const usageMult = calculateEnergyUsageBonus();
    gameData.usageBonus += pickaxe.usage * usageMult;
    if (!silent) showDamageText(damage);
    if (gameData.currentHp <= 0) {
        const earnedCoins = block.coins * pickaxe.coins;
        gameData.coins += earnedCoins;
        const earnedExp = earnedCoins * Math.pow(1 + Math.log(earnedCoins), 2);
        gameData.experience += earnedExp;
        gameData.blocksMined++;
        if (block.drop) {
            if (block.dropChance) {
                if (Math.random() * 100 <= block.dropChance) {
                    gameData[block.drop] += (block.dropAmount || 1);
                }
            } else {
                gameData[block.drop] += (block.dropAmount || 1);
            }
        }
        gameData.currentHp = block.hp;
        checkAutoExchange();
    }
    updateBlockDisplay();
    updateStats();
    updateExchangeButton();
}

let autoMineInterval = null, lastAutoMineTime = 0;
function autoMineTick() {
    if (!gameData.autoMine) return;
    const now = Date.now();
    if (lastAutoMineTime === 0) lastAutoMineTime = now;
    const ticks = Math.min(1000, Math.floor((now - lastAutoMineTime) / 100)); 
    for (let i = 0; i < ticks; i++) dig(i < ticks - 1); 
    lastAutoMineTime = now;
}
function updateAutoMine() {
    if (gameData.autoMine) {
        if (!autoMineInterval) {
            lastAutoMineTime = Date.now();
            autoMineInterval = setInterval(autoMineTick, 100);
        }
    } else {
        if (autoMineInterval) { clearInterval(autoMineInterval); autoMineInterval = null; }
    }
}
function toggleAutoMine() {
    gameData.autoMine = !gameData.autoMine;
    elements.autoMineBtn.textContent = `自动挖矿: ${gameData.autoMine ? '开启' : '关闭'}`;
    elements.autoMineBtn.classList.toggle('active', gameData.autoMine);
    updateAutoMine();
}
function toggleAutoExchange() {
    gameData.autoExchange = !gameData.autoExchange;
    elements.autoExchangeBtn.textContent = `自动兑换: ${gameData.autoExchange ? '开启' : '关闭'}`;
    elements.autoExchangeBtn.classList.toggle('active', gameData.autoExchange);
}
function updateAutoExchangeThreshold() {
    const threshold = parseInt(elements.autoExchangeThreshold.value);
    gameData.autoExchangeThreshold = threshold >= 100 ? threshold : gameData.autoExchangeThreshold;
    elements.autoExchangeThreshold.value = gameData.autoExchangeThreshold;
}
function checkAutoExchange() { if (gameData.autoExchange && gameData.coins >= gameData.autoExchangeThreshold) exchangeTrophies(); }
function calculateExchangeInfo() { return { earnedTrophies: Math.floor(Math.pow(gameData.coins / 100, 3/4)) }; }
function updateExchangeButton() {
    const exchangeInfo = calculateExchangeInfo();
    elements.exchangeBtn.textContent = exchangeInfo.earnedTrophies > 0 ? `兑换奖杯 (获得: ${exchangeInfo.earnedTrophies}个)` : `兑换奖杯 (需100金币以上)`;
    elements.exchangeBtn.disabled = exchangeInfo.earnedTrophies <= 0;
}
function exchangeTrophies(updateUI = true) {
    const exchangeInfo = calculateExchangeInfo();
    if (exchangeInfo.earnedTrophies > 0) {
        gameData.trophies += exchangeInfo.earnedTrophies;
        gameData.coins = 0;
        if (updateUI) { updateStats(); updateShopButtons(); updateExchangeButton(); }
    }
}

let longPressInterval = null, lastLongPressTime = 0;
function longPressTick() {
    const now = Date.now();
    if (lastLongPressTime === 0) lastLongPressTime = now;
    const ticks = Math.min(1000, Math.floor((now - lastLongPressTime) / 100));
    for (let i = 0; i < ticks; i++) dig(i < ticks - 1);
    lastLongPressTime = now;
}
function startLongPress() { if (!gameData.autoMine) { lastLongPressTime = Date.now(); longPressInterval = setInterval(longPressTick, 100); } }
function stopLongPress() { if (longPressInterval) { clearInterval(longPressInterval); longPressInterval = null; } }
function levelUp() { while (gameData.experience >= Math.pow(gameData.level, 2)) { gameData.experience -= Math.pow(gameData.level, 2); gameData.level++; } }

function updateStats() {
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const levelBonus = Math.pow(gameData.level, 0.5);
    const trophyBonus = Math.pow(1 + gameData.trophies, 2/3);
    const beaconBonus = calculateBeaconBonus();
    const timeBonus = calculateTimeBonus();
    const treeBonus = calculateTreeBonus();
    const energyBonus = calculateEnergyBonus();
    const energyUsageBonus = calculateEnergyUsageBonus();
    const energyTreeExp = calculateEnergyTreeExp();
    const totalDamage = calculateTotalDamage();

    const requiredExp = Math.pow(gameData.level, 2);
    elements.expBar.style.width = (gameData.experience / requiredExp) * 100 + '%';

    elements.pickaxeName.textContent = pickaxe.name;
    elements.pickaxeDamageValue.textContent = formatNumber(pickaxe.damage) + 'x';
    elements.pickaxeUsageValue.textContent = formatNumber(pickaxe.usage) + 'x';
    elements.pickaxeCoinsValue.textContent = formatNumber(pickaxe.coins) + 'x';

    setStat(elements.pickaxeDamage, formatNumber(pickaxe.damage) + 'x');
    setStat(elements.usageBonus, formatNumber(gameData.usageBonus) + 'x');
    setStat(elements.levelBonus, formatNumber(levelBonus) + 'x');
    setStat(elements.trophyBonus, formatNumber(trophyBonus) + 'x');
    setStat(elements.beaconBonus, formatNumber(beaconBonus) + 'x');
    elements.beaconBonus.style.color = '#2ecc71';
    setStat(elements.treeBonus, formatNumber(treeBonus) + 'x');
    elements.treeBonus.style.color = '#2ecc71';
    setStat(elements.timeBonus, formatNumber(timeBonus) + 'x');
    elements.timeBonus.style.color = '#2ecc71';
    setStat(elements.specialBonus, formatNumber(gameData.specialBonus) + 'x');
    elements.specialBonus.style.color = '#2ecc71';
    setStat(elements.energyBonus, formatNumber(energyBonus) + 'x');
    elements.energyBonus.style.color = '#2ecc71';

    elements.totalDamage.textContent = formatNumber(totalDamage);
    setStat(elements.level, gameData.level);
    setStat(elements.experience, formatNumber(gameData.experience));
    setStat(elements.coins, formatNumber(gameData.coins));
    setStat(elements.trophies, formatNumber(gameData.trophies));
    setStat(elements.amethyst, formatNumber(gameData.amethyst));
    setStat(elements.copperIngot, formatNumber(gameData.copperIngot));
    setStat(elements.blueObsidianFragment, formatNumber(gameData.blueObsidianFragment));
    setStat(elements.redObsidianFragment, formatNumber(gameData.redObsidianFragment));
    setStat(elements.redBlueCrystal, formatNumber(gameData.redBlueCrystal));
    setStat(elements.bedrockFragment, formatNumber(gameData.bedrockFragment));
    setStat(elements.obsidian, formatNumber(gameData.obsidian));
    setStat(elements.netherStar, formatNumber(gameData.netherStar));
    setStat(elements.glass, formatNumber(gameData.glass));
    setStat(elements.kunKun, formatNumber(gameData.kunKun));
    setStat(elements.earthCore, formatNumber(gameData.earthCore));
    setStat(elements.woodCore, formatNumber(gameData.woodCore));
    setStat(elements.fireCube, formatNumber(gameData.fireCube));
    setStat(elements.waterCube, formatNumber(gameData.waterCube));
    setStat(elements.goldCube, formatNumber(gameData.goldCube));
    setStat(elements.fiveElementCrystal, formatNumber(gameData.fiveElementCrystal));
    setStat(elements.jingCore, formatNumber(gameData.jingCore));
    setStat(elements.elementChip, formatNumber(gameData.elementChip));
    setStat(elements.matterX, formatNumber(gameData.matterX));
    setStat(elements.matterY, formatNumber(gameData.matterY));
    setStat(elements.matterZ, formatNumber(gameData.matterZ));

    const treeRequiredExp = 10 * gameData.treeLevel;
    elements.treeLevel.textContent = gameData.treeLevel;
    elements.treeProgressBar.style.width = (gameData.treeExperience / treeRequiredExp) * 100 + '%';
    elements.treeExperience.textContent = formatNumber(gameData.treeExperience);
    elements.treeExperienceRequired.textContent = formatNumber(treeRequiredExp);

    elements.digCount.textContent = formatNumber(gameData.digCount);
    elements.blocksMined.textContent = formatNumber(gameData.blocksMined);

    if (gameData.researchInstituteActive) {
        elements.researchInactive.style.display = 'none';
        elements.researchActive.style.display = 'block';
        setStat(elements.energyTotal, formatNumber(gameData.energy));
        setStat(elements.energySpeed, formatNumber(gameData.energyProductionSpeed) + '/秒');
        setStat(elements.energyBonusStat, formatNumber(energyBonus) + 'x');
        setStat(elements.energyUsageStat, formatNumber(energyUsageBonus) + 'x');
        setStat(elements.energyTreeStat, formatNumber(energyTreeExp) + '/秒');
        elements.upgradeEnergyBtn.textContent = `升级产能 (消耗: ${formatNumber(gameData.energyUpgradeCost)} 能量)`;
        elements.upgradeEnergyBtn.disabled = gameData.energy < gameData.energyUpgradeCost;
    } else {
        elements.researchInactive.style.display = 'block';
        elements.researchActive.style.display = 'none';
    }
}

function redeemCode() {
    const code = elements.redeemInput.value.trim();
    let success = false;
    if (code === '姚俊希220') { gameData.specialBonus = 2.2; alert('兑换成功！特殊增益变为 2.2'); success = true; }
    else if (code === '七八九幺十三一六九') { gameData.specialBonus = 7.8; alert('兑换成功！特殊增益变为 7.8'); success = true; }
    else if (code === 'dfsoft6767调试模式') { gameData.debugEnabled = true; toggleDebugMode(true); alert('调试模式已开启！'); success = true; }
    else alert('无效的兑换码！');
    if (success) { elements.redeemInput.value = ''; updateStats(); saveGame(); }
}

function toggleDebugMode(enabled) { document.querySelectorAll('.editable-debug').forEach(input => input.disabled = !enabled); }
function setupDebugInputs() {
    document.querySelectorAll('.editable-debug').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = e.target.id;
            let val = parseFloat(e.target.value.replace('x', '').trim());
            if (isNaN(val)) return;
            switch(id) {
                case 'level': gameData.level = val; break;
                case 'experience': gameData.experience = val; break;
                case 'coins': gameData.coins = val; break;
                case 'trophies': gameData.trophies = val; break;
                case 'amethyst': gameData.amethyst = val; break;
                case 'copper-ingot': gameData.copperIngot = val; break;
                case 'blue-obsidian-fragment': gameData.blueObsidianFragment = val; break;
                case 'red-obsidian-fragment': gameData.redObsidianFragment = val; break;
                case 'red-blue-crystal': gameData.redBlueCrystal = val; break;
                case 'bedrock-fragment': gameData.bedrockFragment = val; break;
                case 'obsidian': gameData.obsidian = val; break;
                case 'nether-star': gameData.netherStar = val; break;
                case 'glass': gameData.glass = val; break;
                case 'kun-kun': gameData.kunKun = val; break;
                case 'earth-core': gameData.earthCore = val; break;
                case 'wood-core': gameData.woodCore = val; break;
                case 'fire-cube': gameData.fireCube = val; break;
                case 'water-cube': gameData.waterCube = val; break;
                case 'gold-cube': gameData.goldCube = val; break;
                case 'five-element-crystal': gameData.fiveElementCrystal = val; break;
                case 'jing-core': gameData.jingCore = val; break;
                case 'element-chip': gameData.elementChip = val; break;
                case 'matter-x': gameData.matterX = val; break;
                case 'matter-y': gameData.matterY = val; break;
                case 'matter-z': gameData.matterZ = val; break;
                case 'pickaxe-damage': gameData.pickaxes[gameData.currentPickaxeIndex].damage = val; break;
                case 'usage-bonus': gameData.usageBonus = val; break;
                case 'special-bonus': gameData.specialBonus = val; break;
                case 'level-bonus': gameData.level = Math.pow(val, 2); break;
                case 'trophy-bonus': gameData.trophies = Math.max(0, Math.pow(val, 1.5) - 1); break;
                case 'beacon-bonus': gameData.beacon = Math.max(0, Math.pow(val, 1 / 0.64) - 1); break;
                case 'tree-bonus': gameData.treeLevel = Math.max(1, Math.floor(Math.pow(val, 2.5))); break;
                case 'time-bonus': gameData.originalStartTime = Date.now() - (160 * Math.pow(8, val) * 1000); break;
                case 'energy-bonus': gameData.energy = Math.max(0, Math.pow(val, 1 / 0.22)); break;
            }
            updateStats(); saveGame();
        });
    });
}

function saveGame() {
    const gameState = { ...gameData, pickaxes: gameData.pickaxes, lastOnlineTime: Date.now() };
    localStorage.setItem('miningGameSave', JSON.stringify(gameState));
}

function loadGame() {
    try {
        const savedGame = localStorage.getItem('miningGameSave');
        if (savedGame) {
            const gameState = JSON.parse(savedGame);
            if (gameState.blocks) {
                localStorage.removeItem('miningGameSave');
                gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
                return;
            }
            Object.assign(gameData, gameState);
            if (gameState.pickaxes) {
                gameState.pickaxes.forEach((savedPickaxe, index) => {
                    if (gameData.pickaxes[index]) gameData.pickaxes[index].count = savedPickaxe.count;
                });
            }
        }
    } catch (error) {
        console.error('加载游戏数据失败:', error);
        localStorage.removeItem('miningGameSave');
    }

    const beaconItem = gameData.pickaxes.find(p => p.name === '信标');
    if (beaconItem && beaconItem.count > gameData.beacon) {
        gameData.beacon = beaconItem.count;
    }
    processOfflineMining();
}

function processOfflineMining() {
    const now = Date.now();
    const offlineTime = now - (gameData.lastOnlineTime || now);
    const beforeOffline = { ...gameData };

    // 离线产能
    if (gameData.researchInstituteActive) {
        const offlineSeconds = Math.floor(offlineTime / 1000);
        const offlineEnergy = offlineSeconds * gameData.energyProductionSpeed;
        gameData.energy += offlineEnergy;
        const offlineTreeExp = Math.pow(gameData.energy, 0.55) * offlineSeconds; // 近似计算
        gameData.treeExperience += offlineTreeExp;
        const requiredExp = 10 * gameData.treeLevel;
        while (gameData.treeExperience >= requiredExp) {
            gameData.treeExperience -= requiredExp;
            gameData.treeLevel++;
        }
    }

    const miningActions = Math.floor(offlineTime / 300);
    if (miningActions > 0) {
        const block = gameData.blocks[gameData.currentBlockIndex];
        const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
        let remainingHp = gameData.currentHp;
        const usageMult = calculateEnergyUsageBonus();
        for (let i = 0; i < miningActions; i++) {
            const totalDamage = calculateTotalDamage();
            remainingHp -= totalDamage;
            gameData.digCount++;
            gameData.usageBonus += pickaxe.usage * usageMult;
            if (remainingHp <= 0) {
                const earnedCoins = block.coins * pickaxe.coins;
                gameData.coins += earnedCoins;
                const earnedExp = earnedCoins * Math.pow(1 + Math.log(earnedCoins), 2);
                gameData.experience += earnedExp;
                gameData.blocksMined++;
                if (block.drop) {
                    if (block.dropChance) {
                        if (Math.random() * 100 <= block.dropChance) gameData[block.drop] += (block.dropAmount || 1);
                    } else {
                        gameData[block.drop] += (block.dropAmount || 1);
                    }
                }
                remainingHp = block.hp;
                checkAutoExchange();
            }
        }
        gameData.currentHp = remainingHp;
        levelUp();
        checkAutoExchange();
        // 简单弹出离线收益
        if (miningActions > 10) {
            alert(`离线收益：\n金币 +${formatNumber(gameData.coins - beforeOffline.coins)}\n经验 +${formatNumber(gameData.experience - beforeOffline.experience)}\n能量 +${formatNumber(gameData.energy - beforeOffline.energy)}`);
        }
    }
    gameData.lastOnlineTime = now;
    gameData.startTime = now;
}

function updatePlaytime() {
    const seconds = Math.floor((Date.now() - gameData.originalStartTime) / 1000);
    elements.playtime.innerHTML = `${Math.floor(seconds/31536000)}年${Math.floor((seconds%31536000)/86400)}日${Math.floor((seconds%86400)/3600)}时${Math.floor((seconds%3600)/60)}分${seconds%60}秒<br>合计${seconds}秒`;
}

function initShop() {
    elements.shopItems.innerHTML = '';
    gameData.pickaxes.forEach((pickaxe, index) => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        let buyButtonHtml = '', recipeHtml = '';
        if (pickaxe.isCraftable) {
            let recipeDesc = '合成材料：';
            for (const [material, required] of Object.entries(pickaxe.recipe)) {
                let materialName = material;
                switch (material) {
                    case 'usageBonus': materialName = '使用增益'; break;
                    case 'coins': materialName = '金币'; break;
                    case 'trophies': materialName = '奖杯'; break;
                    case 'amethyst': materialName = '紫水晶'; break;
                    case 'copperIngot': materialName = '铜锭'; break;
                }
                recipeDesc += `${formatNumber(required)}${materialName} `;
            }
            recipeHtml = `<div class="recipe-desc">${recipeDesc}</div>`;
            buyButtonHtml = `<button class="buy-btn craft-btn" data-index="${index}">合成</button>`;
        } else {
            const currencyName = { 'trophies': '奖杯', 'amethyst': '紫水晶', 'copperIngot': '铜锭' }[pickaxe.currency || 'trophies'];
            buyButtonHtml = `<button class="buy-btn" data-index="${index}">购买 (${pickaxe.price}${currencyName})</button>`;
        }
        let useButtonHtml = pickaxe.type !== 'item' ? `<button class="use-btn" data-index="${index}">使用</button>` : '';
        shopItem.innerHTML = `<div class="shop-item-info"><h4>${pickaxe.name}</h4><span class="shop-item-count">数量: ${pickaxe.count}</span></div><div class="shop-buttons">${recipeHtml}${buyButtonHtml}${useButtonHtml}</div>`;
        elements.shopItems.appendChild(shopItem);
    });
    document.querySelectorAll('.buy-btn').forEach(btn => btn.addEventListener('click', buyPickaxe));
    document.querySelectorAll('.use-btn').forEach(btn => btn.addEventListener('click', usePickaxe));
    updateShopButtons();
}

function updateShopButtons() {
    document.querySelectorAll('.buy-btn').forEach((btn, index) => {
        const pickaxe = gameData.pickaxes[index];
        if (pickaxe.isCraftable) {
            let canCraft = true;
            for (const [material, required] of Object.entries(pickaxe.recipe)) {
                switch (material) {
                    case '黑曜石镐': if (gameData.pickaxes[10].count < required) canCraft = false; break;
                    case '紫水晶镐VI': if (gameData.pickaxes[16].count < required) canCraft = false; break;
                    case '铜镐VI': if (gameData.pickaxes[22].count < required) canCraft = false; break;
                    case '蓝曜石碎片': if (gameData.blueObsidianFragment < required) canCraft = false; break;
                    case '红曜石碎片': if (gameData.redObsidianFragment < required) canCraft = false; break;
                    case '蓝曜石镐': if (gameData.pickaxes[23].count < required) canCraft = false; break;
                    case '红曜石镐': if (gameData.pickaxes[24].count < required) canCraft = false; break;
                    case '红蓝结晶': if (gameData.redBlueCrystal < required) canCraft = false; break;
                    case '基岩碎片': if (gameData.bedrockFragment < required) canCraft = false; break;
                    case '红蓝镐': if (gameData.pickaxes[25].count < required) canCraft = false; break;
                    case '黑曜石': if (gameData.obsidian < required) canCraft = false; break;
                    case '玻璃': if (gameData.glass < required) canCraft = false; break;
                    case '下界之星': if (gameData.netherStar < required) canCraft = false; break;
                    case '坤坤': if (gameData.kunKun < required) canCraft = false; break;
                    case '基岩镐': if (gameData.pickaxes[26].count < required) canCraft = false; break;
                    case '坤坤镐': if (gameData.pickaxes[27].count < required) canCraft = false; break;
                    case '土核心': if (gameData.earthCore < required) canCraft = false; break;
                    case '土核心镐': if (gameData.pickaxes[28].count < required) canCraft = false; break;
                    case '木核心': if (gameData.woodCore < required) canCraft = false; break;
                    case '木核心镐': if (gameData.pickaxes[29].count < required) canCraft = false; break;
                    case '火立方镐': if (gameData.pickaxes[30].count < required) canCraft = false; break;
                    case '水立方镐': if (gameData.pickaxes[31].count < required) canCraft = false; break;
                    case '火立方': if (gameData.fireCube < required) canCraft = false; break;
                    case '水立方': if (gameData.waterCube < required) canCraft = false; break;
                    case '使用增益': if (gameData.usageBonus < required) canCraft = false; break;
                    case '金立方': if (gameData.goldCube < required) canCraft = false; break;
                    case '金币': if (gameData.coins < required) canCraft = false; break;
                    case '金立方镐': if (gameData.pickaxes[32].count < required) canCraft = false; break;
                    case '五行结晶': if (gameData.fiveElementCrystal < required) canCraft = false; break;
                    case '京核': if (gameData.jingCore < required) canCraft = false; break;
                    case '五行镐': if (gameData.pickaxes[33] && gameData.pickaxes[33].count < required) canCraft = false; break;
                    case '元素晶片': if (gameData.elementChip < required) canCraft = false; break;
                    default: canCraft = false;
                }
                if (!canCraft) break;
            }
            btn.disabled = !canCraft;
        } else {
            const currencyType = pickaxe.currency || 'trophies';
            btn.disabled = gameData[currencyType] < pickaxe.price;
        }
    });
    document.querySelectorAll('.use-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index === gameData.currentPickaxeIndex);
    });
}

function buyPickaxe(e) {
    const index = parseInt(e.target.dataset.index);
    const pickaxe = gameData.pickaxes[index];
    if (pickaxe.isCraftable) {
        let canCraft = true;
        for (const [material, required] of Object.entries(pickaxe.recipe)) {
            switch (material) {
                case '黑曜石镐': if (gameData.pickaxes[10].count < required) canCraft = false; break;
                case '紫水晶镐VI': if (gameData.pickaxes[16].count < required) canCraft = false; break;
                case '铜镐VI': if (gameData.pickaxes[22].count < required) canCraft = false; break;
                case '蓝曜石碎片': if (gameData.blueObsidianFragment < required) canCraft = false; break;
                case '红曜石碎片': if (gameData.redObsidianFragment < required) canCraft = false; break;
                case '蓝曜石镐': if (gameData.pickaxes[23].count < required) canCraft = false; break;
                case '红曜石镐': if (gameData.pickaxes[24].count < required) canCraft = false; break;
                case '红蓝结晶': if (gameData.redBlueCrystal < required) canCraft = false; break;
                case '基岩碎片': if (gameData.bedrockFragment < required) canCraft = false; break;
                case '红蓝镐': if (gameData.pickaxes[25].count < required) canCraft = false; break;
                case '黑曜石': if (gameData.obsidian < required) canCraft = false; break;
                case '玻璃': if (gameData.glass < required) canCraft = false; break;
                case '下界之星': if (gameData.netherStar < required) canCraft = false; break;
                case '坤坤': if (gameData.kunKun < required) canCraft = false; break;
                case '基岩镐': if (gameData.pickaxes[26].count < required) canCraft = false; break;
                case '坤坤镐': if (gameData.pickaxes[27].count < required) canCraft = false; break;
                case '土核心': if (gameData.earthCore < required) canCraft = false; break;
                case '土核心镐': if (gameData.pickaxes[28].count < required) canCraft = false; break;
                case '木核心': if (gameData.woodCore < required) canCraft = false; break;
                case '木核心镐': if (gameData.pickaxes[29].count < required) canCraft = false; break;
                case '火立方镐': if (gameData.pickaxes[30].count < required) canCraft = false; break;
                case '水立方镐': if (gameData.pickaxes[31].count < required) canCraft = false; break;
                case '火立方': if (gameData.fireCube < required) canCraft = false; break;
                case '水立方': if (gameData.waterCube < required) canCraft = false; break;
                case '使用增益': if (gameData.usageBonus < required) canCraft = false; break;
                case '金立方': if (gameData.goldCube < required) canCraft = false; break;
                case '金币': if (gameData.coins < required) canCraft = false; break;
                case '金立方镐': if (gameData.pickaxes[32].count < required) canCraft = false; break;
                case '五行结晶': if (gameData.fiveElementCrystal < required) canCraft = false; break;
                case '京核': if (gameData.jingCore < required) canCraft = false; break;
                case '五行镐': if (gameData.pickaxes[33] && gameData.pickaxes[33].count < required) canCraft = false; break;
                case '元素晶片': if (gameData.elementChip < required) canCraft = false; break;
            }
        }
        if (canCraft) {
            for (const [material, required] of Object.entries(pickaxe.recipe)) {
                switch (material) {
                    case '黑曜石镐': gameData.pickaxes[10].count -= required; break;
                    case '紫水晶镐VI': gameData.pickaxes[16].count -= required; break;
                    case '铜镐VI': gameData.pickaxes[22].count -= required; break;
                    case '蓝曜石碎片': gameData.blueObsidianFragment -= required; break;
                    case '红曜石碎片': gameData.redObsidianFragment -= required; break;
                    case '蓝曜石镐': gameData.pickaxes[23].count -= required; break;
                    case '红曜石镐': gameData.pickaxes[24].count -= required; break;
                    case '红蓝结晶': gameData.redBlueCrystal -= required; break;
                    case '基岩碎片': gameData.bedrockFragment -= required; break;
                    case '红蓝镐': gameData.pickaxes[25].count -= required; break;
                    case '黑曜石': gameData.obsidian -= required; break;
                    case '玻璃': gameData.glass -= required; break;
                    case '下界之星': gameData.netherStar -= required; break;
                    case '坤坤': gameData.kunKun -= required; break;
                    case '基岩镐': gameData.pickaxes[26].count -= required; break;
                    case '坤坤镐': gameData.pickaxes[27].count -= required; break;
                    case '土核心': gameData.earthCore -= required; break;
                    case '土核心镐': gameData.pickaxes[28].count -= required; break;
                    case '木核心': gameData.woodCore -= required; break;
                    case '木核心镐': gameData.pickaxes[29].count -= required; break;
                    case '火立方镐': gameData.pickaxes[30].count -= required; break;
                    case '水立方镐': gameData.pickaxes[31].count -= required; break;
                    case '火立方': gameData.fireCube -= required; break;
                    case '水立方': gameData.waterCube -= required; break;
                    case '使用增益': gameData.usageBonus -= required; break;
                    case '金立方': gameData.goldCube -= required; break;
                    case '金币': gameData.coins -= required; break;
                    case '金立方镐': gameData.pickaxes[32].count -= required; break;
                    case '五行结晶': gameData.fiveElementCrystal -= required; break;
                    case '京核': gameData.jingCore -= required; break;
                    case '五行镐': if (gameData.pickaxes[33]) gameData.pickaxes[33].count -= required; break;
                    case '元素晶片': gameData.elementChip -= required; break;
                }
            }
            pickaxe.count++;
            if (pickaxe.name === '信标') gameData.beacon = pickaxe.count;
            initShop();
            updateStats();
        }
    } else {
        const currencyType = pickaxe.currency || 'trophies';
        if (gameData[currencyType] >= pickaxe.price) {
            gameData[currencyType] -= pickaxe.price;
            pickaxe.count++;
            initShop();
            updateStats();
        }
    }
}

function usePickaxe(e) {
    const index = parseInt(e.target.dataset.index);
    if (gameData.pickaxes[index].count > 0) {
        gameData.currentPickaxeIndex = index;
        initShop();
        updateStats();
    }
}

function handleKeyDown(e) {
    if (e.key === '>') changeBlock(1);
    else if (e.key === '<') changeBlock(-1);
}

function initGame() {
    loadGame();
    elements.prevBlock.addEventListener('click', () => changeBlock(-1));
    elements.nextBlock.addEventListener('click', () => changeBlock(1));
    elements.autoMineBtn.addEventListener('click', toggleAutoMine);
    elements.autoExchangeBtn.addEventListener('click', toggleAutoExchange);
    elements.autoExchangeThreshold.addEventListener('change', updateAutoExchangeThreshold);
    elements.exchangeBtn.addEventListener('click', exchangeTrophies);
    elements.redeemBtn.addEventListener('click', redeemCode);
    elements.craftBeaconBtn.addEventListener('click', craftAllBeacons);
    elements.activateResearchBtn.addEventListener('click', activateResearchInstitute);
    elements.upgradeEnergyBtn.addEventListener('click', upgradeEnergyProduction);

    elements.autoExchangeBtn.textContent = `自动兑换: ${gameData.autoExchange ? '开启' : '关闭'}`;
    elements.autoExchangeBtn.classList.toggle('active', gameData.autoExchange);
    elements.autoExchangeThreshold.value = gameData.autoExchangeThreshold;

    elements.sqrtPower.addEventListener('change', () => {
        const value = parseInt(elements.sqrtPower.value);
        if (value >= 1 && value <= 3) {
            gameData.sqrtPower = value;
            const currentBlocks = getCurrentSqrtZoneBlocks();
            if (currentBlocks.length > 0) {
                gameData.currentBlockIndex = currentBlocks[0];
                gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
                updateBlockDisplay();
            }
            updateStats();
        } else {
            elements.sqrtPower.value = gameData.sqrtPower;
        }
    });
    elements.sqrtPower.value = gameData.sqrtPower;

    const currentBlocks = getCurrentSqrtZoneBlocks();
    if (!currentBlocks.includes(gameData.currentBlockIndex) && currentBlocks.length > 0) {
        gameData.currentBlockIndex = currentBlocks[0];
        gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
        updateBlockDisplay();
    }

    toggleDebugMode(gameData.debugEnabled);
    setupDebugInputs();

    elements.blockDisplay.addEventListener('mousedown', startLongPress);
    elements.blockDisplay.addEventListener('mouseup', stopLongPress);
    elements.blockDisplay.addEventListener('mouseleave', stopLongPress);
    elements.blockDisplay.addEventListener('touchstart', startLongPress);
    elements.blockDisplay.addEventListener('touchend', stopLongPress);

    document.addEventListener('keydown', handleKeyDown);
    elements.waterTreeBtn.addEventListener('click', waterTree);
    elements.autoWaterTreeBtn.addEventListener('click', autoWaterTree);

    updateBlockDisplay();
    updateStats();
    updateAutoMine();
    initShop();
    updateExchangeButton();

    setInterval(() => {
        levelUp();
        if (gameData.researchInstituteActive) {
            gameData.energy += gameData.energyProductionSpeed;
            const expGain = Math.pow(gameData.energy, 0.55);
            gameData.treeExperience += expGain;
            const requiredExp = 10 * gameData.treeLevel;
            while (gameData.treeExperience >= requiredExp) {
                gameData.treeExperience -= requiredExp;
                gameData.treeLevel++;
            }
        }
        updateStats();
    }, 1000);

    setInterval(updatePlaytime, 1000);
    updatePlaytime();
    setInterval(saveGame, 5000);
}

initGame();
