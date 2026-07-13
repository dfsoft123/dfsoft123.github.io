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
        { name: '玻璃2.0', hp: 4e9, coins: 1e7, drop: 'glass', sqrtZone: 3 },
        // 三次开方区新增方块
        { name: '土核心', hp: 1e10, coins: 1.5e7, drop: 'earthCore', sqrtZone: 3 },
        { name: '木核心', hp: 1.5e10, coins: 2e7, drop: 'woodCore', sqrtZone: 3 },
        { name: '火立方', hp: 5e10, coins: 3e7, drop: 'fireCube', sqrtZone: 3 },
        { name: '水立方', hp: 8e10, coins: 5e7, drop: 'waterCube', sqrtZone: 3 },
        { name: '金立方', hp: 2e11, coins: 1e8, drop: 'goldCube', sqrtZone: 3 },
        { name: '五行结晶', hp: 4e12, coins: 2e8, drop: 'fiveElementCrystal', sqrtZone: 3 },
        // 新增三次开方区方块
        { name: '方立水', hp: 1e13, coins: 4.5e8, drop: 'waterCube', dropAmount: 64, sqrtZone: 3 },
        { name: '水沝㴇淼㵘', hp: 5e14, coins: 1e9, drop: 'waterCube', dropAmount: 256, sqrtZone: 3 },
        { name: '纯金', hp: 2e15, coins: 1e10, sqrtZone: 3 }
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
        // 新增合成镐子
        { name: '蓝曜石镐', damage: 1000000, usage: 1.5, coins: 1, count: 0, isCraftable: true, recipe: { '黑曜石镐': 1, '紫水晶镐VI': 1, '铜镐VI': 1, '蓝曜石碎片': 10 } },
        { name: '红曜石镐', damage: 2500000, usage: 2, coins: 1, count: 0, isCraftable: true, recipe: { '蓝曜石镐': 1, '红曜石碎片': 10 } },
        { name: '红蓝镐', damage: 6666666, usage: 3, coins: 1.5, count: 0, isCraftable: true, recipe: { '蓝曜石镐': 1, '红曜石镐': 1, '红蓝结晶': 10 } },
        { name: '基岩镐', damage: 1.6e7, usage: 4, coins: 1.5, count: 0, isCraftable: true, recipe: { '红蓝镐': 1, '基岩碎片': 10 } },
        { name: '坤坤镐', damage: 8e7, usage: 5, coins: 2.5, count: 0, isCraftable: true, recipe: { '基岩镐': 1, '坤坤': 25 } },
        // 新增镐子
        { name: '土核心镐', damage: 2e8, usage: 6, coins: 2.5, count: 0, isCraftable: true, recipe: { '坤坤镐': 1, '土核心': 10 } },
        { name: '木核心镐', damage: 3e8, usage: 7, coins: 2.5, count: 0, isCraftable: true, recipe: { '土核心镐': 1, '木核心': 10 } },
        { name: '火立方镐', damage: 1e9, usage: 8, coins: 2.5, count: 0, isCraftable: true, recipe: { '火立方': 10, '使用增益': 2.5e5 } },
        { name: '水立方镐', damage: 2e9, usage: 9, coins: 2.5, count: 0, isCraftable: true, recipe: { '水立方': 10, '使用增益': 2.5e5 } },
        { name: '金立方镐', damage: 5e9, usage: 10, coins: 3.5, count: 0, isCraftable: true, recipe: { '金立方': 10, '金币': 1e11 } },
        { name: '五行镐', damage: 1e10, usage: 15, coins: 5, count: 0, isCraftable: true, recipe: { '土核心镐': 1, '木核心镐': 1, '火立方镐': 1, '水立方镐': 1, '金立方镐': 1, '五行结晶': 10 } },
        { name: '京镐', damage: 2e10, usage: 16, coins: 5.4, count: 0, isCraftable: true, recipe: { '五行镐': 1, '京核': 32 } },
        // 新增物品
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
    beacon: 0,
    level: 1,
    experience: 0,
    usageBonus: 1,
    specialBonus: 1, // 新增特殊增益
    digCount: 0,
    blocksMined: 0,
    // 浇树相关变量
    treeLevel: 1,
    treeExperience: 0,
    autoMine: false,
    autoExchange: false,
    autoExchangeThreshold: 1000,
    startTime: Date.now(),
    originalStartTime: Date.now(),
    lastOnlineTime: Date.now(),
    currentHp: 100,
    sqrtPower: 1, // 开方次，1、2或3
    debugEnabled: false // 调试模式开关
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
    // 浇树相关元素
    treeLevel: document.getElementById('tree-level'),
    treeProgressBar: document.getElementById('tree-progress-bar'),
    treeExperience: document.getElementById('tree-experience'),
    treeExperienceRequired: document.getElementById('tree-experience-required'),
    waterTreeBtn: document.getElementById('water-tree-btn'),
    autoWaterTreeBtn: document.getElementById('auto-water-tree-btn'),
    treeBonus: document.getElementById('tree-bonus'),
    sqrtPower: document.getElementById('sqrt-power'),
    playtime: document.getElementById('playtime'),
    digCount: document.getElementById('dig-count'),
    blocksMined: document.getElementById('blocks-mined'),
    shopItems: document.getElementById('shop-items'),
    // 兑换码与调试面板元素
    redeemInput: document.getElementById('redeem-input'),
    redeemBtn: document.getElementById('redeem-btn'),
    debugPanel: document.getElementById('debug-panel'),
    debugAttr: document.getElementById('debug-attr'),
    debugVal: document.getElementById('debug-val'),
    debugApplyBtn: document.getElementById('debug-apply-btn')
};

// 单位格式化
function formatNumber(num) {
    if (num < 1000000) {
        return num.toFixed(2).replace(/\.00$/, '');
    } else if (num < 1e10) {
        return (num / 10000).toFixed(2) + '万';
    } else if (num < 1e14) {
        return (num / 1e8).toFixed(2) + '亿';
    } else if (num < 1e18) {
        return (num / 1e12).toFixed(2) + '万亿';
    } else if (num < 1e22) {
        return (num / 1e16).toFixed(2) + '兆';
    } else if (num < 1e26) {
        return (num / 1e20).toFixed(2) + '万兆';
    } else if (num < 1e30) {
        return (num / 1e24).toFixed(2) + '亿兆';
    } else if (num < 1e34) {
        return (num / 1e28).toFixed(2) + '万亿兆';
    } else if (num < 1e38) {
        return (num / 1e32).toFixed(2) + '京';
    } else if (num < 1e42) {
        return (num / 1e36).toFixed(2) + '万京';
    } else if (num < 1e46) {
        return (num / 1e40).toFixed(2) + '亿京';
    } else if (num < 1e50) {
        return (num / 1e44).toFixed(2) + '万亿京';
    } else if (num < 1e54) {
        return (num / 1e48).toFixed(2) + '兆京';
    } else if (num < 1e58) {
        return (num / 1e52).toFixed(2) + '万兆京';
    } else if (num < 1e62) {
        return (num / 1e56).toFixed(2) + '亿兆京';
    } else if (num < 1e66) {
        return (num / 1e60).toFixed(2) + '万亿兆京';
    } else {
        return (num / 1e64).toFixed(2) + '垓';
    }
}

// 更新方块显示
function updateBlockDisplay() {
    const block = gameData.blocks[gameData.currentBlockIndex];
    elements.blockName.textContent = block.name;
    elements.currentHp.textContent = formatNumber(gameData.currentHp);
    elements.maxHp.textContent = formatNumber(block.hp);
    const hpPercent = (gameData.currentHp / block.hp) * 100;
    elements.hpBar.style.width = hpPercent + '%';

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

// 获取当前开方区的方块索引数组
function getCurrentSqrtZoneBlocks() {
    return gameData.blocks.map((block, index) => block.sqrtZone === gameData.sqrtPower ? index : null).filter(index => index !== null);
}

// 切换方块
function changeBlock(direction) {
    const currentBlocks = getCurrentSqrtZoneBlocks();
    const currentIndex = currentBlocks.indexOf(gameData.currentBlockIndex);
    let newIndex = currentIndex + direction;
    if (newIndex < 0) {
        newIndex = currentBlocks.length - 1;
    } else if (newIndex >= currentBlocks.length) {
        newIndex = 0;
    }
    gameData.currentBlockIndex = currentBlocks[newIndex];
    gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
    updateBlockDisplay();
}

// 显示伤害数字
function showDamageText(damage) {
    const damageText = document.createElement('div');
    damageText.className = 'damage-text';
    damageText.textContent = formatNumber(damage);
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    damageText.style.left = `50%`;
    damageText.style.top = `50%`;
    damageText.style.transform = `translate(${x}px, ${y}px)`;
    elements.damageTextContainer.appendChild(damageText);
    setTimeout(() => {
        damageText.remove();
    }, 1000);
}

// 计算信标增益
function calculateBeaconBonus() {
    return Math.pow(1 + gameData.beacon, 0.64);
}

// 计算时间增益
function calculateTimeBonus() {
    const seconds = Math.max(0, Math.floor((Date.now() - gameData.originalStartTime) / 1000));
    const baseTime = 160;
    if (seconds < baseTime) {
        return 1;
    }
    const timeRatio = seconds / baseTime;
    return Math.log(timeRatio) / Math.log(8);
}

// 计算浇树增益
function calculateTreeBonus() {
    return Math.pow(gameData.treeLevel, 0.4);
}

// 计算总伤害
function calculateTotalDamage() {
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const levelBonus = Math.pow(gameData.level, 0.5);
    const trophyBonus = Math.pow(1 + gameData.trophies, 2/3);
    const beaconBonus = calculateBeaconBonus();
    const timeBonus = calculateTimeBonus();
    const treeBonus = calculateTreeBonus();
    const bonusProduct = pickaxe.damage * gameData.usageBonus * levelBonus * trophyBonus;
    return Math.pow(bonusProduct, 1 / gameData.sqrtPower) * beaconBonus * timeBonus * treeBonus * gameData.specialBonus;
}

// 浇树功能
function waterTree() {
    if (gameData.waterCube < 1) {
        console.log('水立方不足，无法浇树');
        return;
    }
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

// 一键浇树功能
function autoWaterTree() {
    if (gameData.waterCube < 1) {
        console.log('水立方不足，无法浇树');
        return;
    }
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

// 执行挖掘
function dig(silent = false) {
    const block = gameData.blocks[gameData.currentBlockIndex];
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const damage = calculateTotalDamage();
    gameData.currentHp -= damage;
    gameData.digCount++;
    gameData.usageBonus += pickaxe.usage;
    
    if (!silent) {
        showDamageText(damage);
    }
    
    if (gameData.currentHp <= 0) {
        const earnedCoins = block.coins * pickaxe.coins;
        gameData.coins += earnedCoins;
        const earnedExp = earnedCoins * Math.pow(1 + Math.log(earnedCoins), 2);
        gameData.experience += earnedExp;
        gameData.blocksMined++;
        
        if (block.drop) {
            if (block.dropChance) {
                if (Math.random() * 100 <= block.dropChance) {
                    const dropAmount = block.dropAmount || 1;
                    gameData[block.drop] += dropAmount;
                }
            } else {
                const dropAmount = block.dropAmount || 1;
                gameData[block.drop] += dropAmount;
            }
        }
        gameData.currentHp = block.hp;
        checkAutoExchange();
    }
    updateBlockDisplay();
    updateStats();
    updateExchangeButton();
}

// 自动挖矿(后台兼容)
let autoMineInterval = null;
let lastAutoMineTime = 0;

function autoMineTick() {
    if (!gameData.autoMine) return;
    
    const now = Date.now();
    if (lastAutoMineTime === 0) lastAutoMineTime = now;
    
    const elapsed = now - lastAutoMineTime;
    const ticks = Math.min(1000, Math.floor(elapsed / 100)); 
    
    for (let i = 0; i < ticks; i++) {
        dig(i < ticks - 1); 
    }
    
    lastAutoMineTime = now;
}

function updateAutoMine() {
    if (gameData.autoMine) {
        if (!autoMineInterval) {
            lastAutoMineTime = Date.now();
            autoMineInterval = setInterval(autoMineTick, 100);
        }
    } else {
        if (autoMineInterval) {
            clearInterval(autoMineInterval);
            autoMineInterval = null;
        }
    }
}

// 切换自动挖矿
function toggleAutoMine() {
    gameData.autoMine = !gameData.autoMine;
    elements.autoMineBtn.textContent = `自动挖矿: ${gameData.autoMine ? '开启' : '关闭'}`;
    elements.autoMineBtn.classList.toggle('active', gameData.autoMine);
    updateAutoMine();
}

// 切换自动兑换
function toggleAutoExchange() {
    gameData.autoExchange = !gameData.autoExchange;
    elements.autoExchangeBtn.textContent = `自动兑换: ${gameData.autoExchange ? '开启' : '关闭'}`;
    elements.autoExchangeBtn.classList.toggle('active', gameData.autoExchange);
}

// 更新自动兑换阈值
function updateAutoExchangeThreshold() {
    const threshold = parseInt(elements.autoExchangeThreshold.value);
    if (threshold >= 100) {
        gameData.autoExchangeThreshold = threshold;
    } else {
        elements.autoExchangeThreshold.value = gameData.autoExchangeThreshold;
    }
}

// 检查是否需要自动兑换
function checkAutoExchange() {
    if (gameData.autoExchange && gameData.coins >= gameData.autoExchangeThreshold) {
        exchangeTrophies();
    }
}

// 计算每次兑换能获得的奖杯数
function calculateExchangeInfo() {
    const earnedTrophies = Math.floor(Math.pow(gameData.coins / 100, 3/4));
    return { earnedTrophies: earnedTrophies };
}

// 更新兑换奖杯按钮
function updateExchangeButton() {
    const exchangeInfo = calculateExchangeInfo();
    if (exchangeInfo.earnedTrophies > 0) {
        elements.exchangeBtn.textContent = `兑换奖杯 (获得: ${exchangeInfo.earnedTrophies}个)`;
        elements.exchangeBtn.disabled = false;
    } else {
        elements.exchangeBtn.textContent = `兑换奖杯 (需100金币以上)`;
        elements.exchangeBtn.disabled = true;
    }
}

// 兑换奖杯函数
function exchangeTrophies(updateUI = true) {
    const exchangeInfo = calculateExchangeInfo();
    if (exchangeInfo.earnedTrophies > 0) {
        gameData.trophies += exchangeInfo.earnedTrophies;
        gameData.coins = 0;
        if (updateUI) {
            updateStats();
            updateShopButtons();
            updateExchangeButton();
        }
    }
}

// 长按挖掘(后台兼容)
let longPressInterval = null;
let lastLongPressTime = 0;

function longPressTick() {
    const now = Date.now();
    if (lastLongPressTime === 0) lastLongPressTime = now;
    
    const elapsed = now - lastLongPressTime;
    const ticks = Math.min(1000, Math.floor(elapsed / 100));
    
    for (let i = 0; i < ticks; i++) {
        dig(i < ticks - 1);
    }
    
    lastLongPressTime = now;
}

function startLongPress() {
    if (!gameData.autoMine) {
        lastLongPressTime = Date.now();
        longPressInterval = setInterval(longPressTick, 100);
    }
}

function stopLongPress() {
    if (longPressInterval) {
        clearInterval(longPressInterval);
        longPressInterval = null;
    }
}

// 升级系统
function levelUp() {
    const requiredExp = Math.pow(gameData.level, 2);
    while (gameData.experience >= requiredExp) {
        gameData.experience -= requiredExp;
        gameData.level++;
    }
}

// 更新统计信息
function updateStats() {
    const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
    const levelBonus = Math.pow(gameData.level, 0.5);
    const trophyBonus = Math.pow(1 + gameData.trophies, 2/3);
    const beaconBonus = calculateBeaconBonus();
    const timeBonus = calculateTimeBonus();
    const treeBonus = calculateTreeBonus();
    const totalDamage = calculateTotalDamage();

    const requiredExp = Math.pow(gameData.level, 2);
    const expPercent = (gameData.experience / requiredExp) * 100;
    elements.expBar.style.width = expPercent + '%';

    elements.pickaxeName.textContent = pickaxe.name;
    elements.pickaxeDamageValue.textContent = formatNumber(pickaxe.damage) + 'x';
    elements.pickaxeUsageValue.textContent = formatNumber(pickaxe.usage) + 'x';
    elements.pickaxeCoinsValue.textContent = formatNumber(pickaxe.coins) + 'x';

    elements.pickaxeDamage.textContent = formatNumber(pickaxe.damage) + 'x';
    elements.usageBonus.textContent = formatNumber(gameData.usageBonus) + 'x';
    elements.levelBonus.textContent = formatNumber(levelBonus) + 'x';
    elements.trophyBonus.textContent = formatNumber(trophyBonus) + 'x';
    
    elements.beaconBonus.textContent = formatNumber(beaconBonus) + 'x';
    elements.beaconBonus.style.color = '#2ecc71';
    
    elements.treeBonus.textContent = formatNumber(treeBonus) + 'x';
    elements.treeBonus.style.color = '#2ecc71';
    
    elements.timeBonus.textContent = formatNumber(timeBonus) + 'x';
    elements.timeBonus.style.color = '#2ecc71';

    elements.specialBonus.textContent = formatNumber(gameData.specialBonus) + 'x';
    elements.specialBonus.style.color = '#2ecc71';

    elements.totalDamage.textContent = formatNumber(totalDamage);
    elements.level.textContent = gameData.level;
    elements.experience.textContent = formatNumber(gameData.experience);
    elements.coins.textContent = formatNumber(gameData.coins);
    elements.trophies.textContent = formatNumber(gameData.trophies);
    elements.amethyst.textContent = formatNumber(gameData.amethyst);
    elements.copperIngot.textContent = formatNumber(gameData.copperIngot);
    elements.blueObsidianFragment.textContent = formatNumber(gameData.blueObsidianFragment);
    elements.redObsidianFragment.textContent = formatNumber(gameData.redObsidianFragment);
    elements.redBlueCrystal.textContent = formatNumber(gameData.redBlueCrystal);
    elements.bedrockFragment.textContent = formatNumber(gameData.bedrockFragment);
    elements.obsidian.textContent = formatNumber(gameData.obsidian);
    elements.netherStar.textContent = formatNumber(gameData.netherStar);
    elements.glass.textContent = formatNumber(gameData.glass);
    elements.kunKun.textContent = formatNumber(gameData.kunKun);
    elements.earthCore.textContent = formatNumber(gameData.earthCore);
    elements.woodCore.textContent = formatNumber(gameData.woodCore);
    elements.fireCube.textContent = formatNumber(gameData.fireCube);
    elements.waterCube.textContent = formatNumber(gameData.waterCube);
    elements.goldCube.textContent = formatNumber(gameData.goldCube);
    elements.fiveElementCrystal.textContent = formatNumber(gameData.fiveElementCrystal);
    elements.jingCore.textContent = formatNumber(gameData.jingCore);

    const treeRequiredExp = 10 * gameData.treeLevel;
    const treeExpPercent = (gameData.treeExperience / treeRequiredExp) * 100;
    elements.treeLevel.textContent = gameData.treeLevel;
    elements.treeProgressBar.style.width = treeExpPercent + '%';
    elements.treeExperience.textContent = formatNumber(gameData.treeExperience);
    elements.treeExperienceRequired.textContent = formatNumber(treeRequiredExp);

    elements.digCount.textContent = formatNumber(gameData.digCount);
    elements.blocksMined.textContent = formatNumber(gameData.blocksMined);
}

// 兑换码逻辑
function redeemCode() {
    const code = elements.redeemInput.value.trim();
    let success = false;
    
    if (code === '姚俊希220') {
        gameData.specialBonus = 2.2;
        alert('兑换成功！特殊增益变为 2.2');
        success = true;
    } else if (code === '七八九幺十三一六九') {
        gameData.specialBonus = 7.8;
        alert('兑换成功！特殊增益变为 7.8');
        success = true;
    } else if (code === 'dfsoft6767调试模式') {
        gameData.debugEnabled = true;
        elements.debugPanel.style.display = 'block';
        alert('调试模式已开启！可修改核心和伤害属性。');
        success = true;
    } else {
        alert('无效的兑换码！');
    }
    
    if (success) {
        elements.redeemInput.value = '';
        updateStats();
        saveGame();
    }
}

// 调试模式属性修改逻辑
function applyDebugChange() {
    const attr = elements.debugAttr.value.trim();
    const val = elements.debugVal.value.trim();
    if (attr && val !== '') {
        // 检查是否是 gameData 的直接属性（包含核心属性和伤害属性等）
        if (gameData.hasOwnProperty(attr)) {
            let numVal = parseFloat(val);
            if (!isNaN(numVal)) {
                gameData[attr] = numVal;
                alert(`修改成功：${attr} = ${numVal}`);
                updateStats();
                updateBlockDisplay();
                saveGame();
            } else {
                alert('请输入有效的数值！');
            }
        } else {
            alert('属性名不存在！请检查拼写。');
        }
    }
}

// 保存游戏数据
function saveGame() {
    const gameState = {
        currentBlockIndex: gameData.currentBlockIndex,
        currentPickaxeIndex: gameData.currentPickaxeIndex,
        coins: gameData.coins,
        trophies: gameData.trophies,
        amethyst: gameData.amethyst,
        copperIngot: gameData.copperIngot,
        blueObsidianFragment: gameData.blueObsidianFragment,
        redObsidianFragment: gameData.redObsidianFragment,
        redBlueCrystal: gameData.redBlueCrystal,
        bedrockFragment: gameData.bedrockFragment,
        obsidian: gameData.obsidian,
        netherStar: gameData.netherStar,
        glass: gameData.glass,
        kunKun: gameData.kunKun,
        earthCore: gameData.earthCore,
        woodCore: gameData.woodCore,
        fireCube: gameData.fireCube,
        waterCube: gameData.waterCube,
        goldCube: gameData.goldCube,
        fiveElementCrystal: gameData.fiveElementCrystal,
        jingCore: gameData.jingCore,
        beacon: gameData.beacon,
        sqrtPower: gameData.sqrtPower,
        level: gameData.level,
        experience: gameData.experience,
        usageBonus: gameData.usageBonus,
        specialBonus: gameData.specialBonus,
        debugEnabled: gameData.debugEnabled,
        digCount: gameData.digCount,
        blocksMined: gameData.blocksMined,
        treeLevel: gameData.treeLevel,
        treeExperience: gameData.treeExperience,
        autoMine: gameData.autoMine,
        autoExchange: gameData.autoExchange,
        autoExchangeThreshold: gameData.autoExchangeThreshold,
        startTime: gameData.startTime,
        originalStartTime: gameData.originalStartTime,
        lastOnlineTime: Date.now(),
        currentHp: gameData.currentHp,
        pickaxes: gameData.pickaxes
    };
    localStorage.setItem('miningGameSave', JSON.stringify(gameState));
}

// 加载游戏数据
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
            Object.assign(gameData, {
                currentBlockIndex: gameState.currentBlockIndex,
                currentPickaxeIndex: gameState.currentPickaxeIndex,
                coins: gameState.coins,
                trophies: gameState.trophies,
                amethyst: gameState.amethyst || 0,
                copperIngot: gameState.copperIngot || 0,
                blueObsidianFragment: gameState.blueObsidianFragment || 0,
                redObsidianFragment: gameState.redObsidianFragment || 0,
                redBlueCrystal: gameState.redBlueCrystal || 0,
                bedrockFragment: gameState.bedrockFragment || 0,
                obsidian: gameState.obsidian || 0,
                netherStar: gameState.netherStar || 0,
                glass: gameState.glass || 0,
                kunKun: gameState.kunKun || 0,
                earthCore: gameState.earthCore || 0,
                woodCore: gameState.woodCore || 0,
                fireCube: gameState.fireCube || 0,
                waterCube: gameState.waterCube || 0,
                goldCube: gameState.goldCube || 0,
                fiveElementCrystal: gameState.fiveElementCrystal || 0,
                jingCore: gameState.jingCore || 0,
                beacon: gameState.beacon || 0,
                sqrtPower: gameState.sqrtPower || 1,
                level: gameState.level,
                experience: gameState.experience,
                usageBonus: gameState.usageBonus,
                specialBonus: gameState.specialBonus || 1,
                debugEnabled: gameState.debugEnabled || false,
                digCount: gameState.digCount,
                blocksMined: gameState.blocksMined,
                treeLevel: gameState.treeLevel || 1,
                treeExperience: gameState.treeExperience || 0,
                autoMine: gameState.autoMine,
                autoExchange: gameState.autoExchange || false,
                autoExchangeThreshold: gameState.autoExchangeThreshold || 1000,
                startTime: gameState.startTime,
                originalStartTime: gameState.originalStartTime,
                lastOnlineTime: gameState.lastOnlineTime,
                currentHp: gameState.currentHp
            });
            if (gameState.pickaxes) {
                gameState.pickaxes.forEach((savedPickaxe, index) => {
                    if (gameData.pickaxes[index]) {
                        gameData.pickaxes[index].count = savedPickaxe.count;
                    }
                });
            }
        }
    } catch (error) {
        console.error('加载游戏数据失败:', error);
        gameData.coins = 0;
        gameData.trophies = 0;
        gameData.level = 1;
        gameData.experience = 0;
        gameData.usageBonus = 1;
        gameData.digCount = 0;
        gameData.blocksMined = 0;
        gameData.autoMine = false;
        gameData.startTime = Date.now();
        gameData.originalStartTime = Date.now();
        gameData.currentHp = gameData.blocks[gameData.currentBlockIndex].hp;
    }

    const defaultPickaxes = [
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
        { name: '信标', type: 'item', count: 0, isCraftable: true, recipe: { '黑曜石': 3, '玻璃': 5, '下界之星': 1 } }
    ];

    if (!gameData.pickaxes) {
        gameData.pickaxes = defaultPickaxes;
    } else {
        while (gameData.pickaxes.length < defaultPickaxes.length) {
            const missingIndex = gameData.pickaxes.length;
            gameData.pickaxes.push({ ...defaultPickaxes[missingIndex], count: 0 });
        }
        gameData.pickaxes.forEach((pickaxe, index) => {
            const defaultPickaxe = defaultPickaxes[index];
            const currentCount = pickaxe.count || 0;
            Object.assign(pickaxe, defaultPickaxe);
            pickaxe.count = currentCount;
        });
    }

    processOfflineMining();
}

// 处理离线挖矿
function processOfflineMining() {
    const now = Date.now();
    const lastOnline = gameData.lastOnlineTime || now;
    const offlineTime = now - lastOnline;

    const beforeOffline = {
        coins: gameData.coins,
        experience: gameData.experience,
        usageBonus: gameData.usageBonus,
        trophies: gameData.trophies,
        level: gameData.level,
        digCount: gameData.digCount,
        blocksMined: gameData.blocksMined,
        amethyst: gameData.amethyst,
        copperIngot: gameData.copperIngot,
        blueObsidianFragment: gameData.blueObsidianFragment,
        redObsidianFragment: gameData.redObsidianFragment,
        redBlueCrystal: gameData.redBlueCrystal,
        bedrockFragment: gameData.bedrockFragment,
        obsidian: gameData.obsidian,
        netherStar: gameData.netherStar,
        glass: gameData.glass,
        kunKun: gameData.kunKun,
        earthCore: gameData.earthCore,
        woodCore: gameData.woodCore,
        fireCube: gameData.fireCube,
        waterCube: gameData.waterCube,
        goldCube: gameData.goldCube,
        fiveElementCrystal: gameData.fiveElementCrystal,
        jingCore: gameData.jingCore
    };

    const miningActions = Math.floor(offlineTime / 300);
    if (miningActions > 0) {
        const block = gameData.blocks[gameData.currentBlockIndex];
        const pickaxe = gameData.pickaxes[gameData.currentPickaxeIndex];
        let remainingHp = gameData.currentHp;

        for (let i = 0; i < miningActions; i++) {
            const totalDamage = calculateTotalDamage();
            remainingHp -= totalDamage;
            gameData.digCount++;
            gameData.usageBonus += pickaxe.usage;
            if (remainingHp <= 0) {
                const earnedCoins = block.coins * pickaxe.coins;
                gameData.coins += earnedCoins;
                const earnedExp = earnedCoins * Math.pow(1 + Math.log(earnedCoins), 2);
                gameData.experience += earnedExp;
                gameData.blocksMined++;
                if (block.drop) {
                    if (block.dropChance) {
                        if (Math.random() * 100 <= block.dropChance) {
                            const dropAmount = block.dropAmount || 1;
                            gameData[block.drop] += dropAmount;
                        }
                    } else {
                        const dropAmount = block.dropAmount || 1;
                        gameData[block.drop] += dropAmount;
                    }
                }
                remainingHp = block.hp;
                checkAutoExchange();
            }
        }
        gameData.currentHp = remainingHp;
        levelUp();

        checkAutoExchange();

        const offlineGains = {
            coins: gameData.coins - beforeOffline.coins,
            experience: gameData.experience - beforeOffline.experience,
            usageBonus: gameData.usageBonus - beforeOffline.usageBonus,
            trophies: gameData.trophies - beforeOffline.trophies,
            level: gameData.level - beforeOffline.level,
            digCount: gameData.digCount - beforeOffline.digCount,
            blocksMined: gameData.blocksMined - beforeOffline.blocksMined,
            drops: {}
        };

        Object.keys(beforeOffline).forEach(key => {
            if (key !== 'coins' && key !== 'experience' && key !== 'usageBonus' && key !== 'trophies' && key !== 'level' && key !== 'digCount' && key !== 'blocksMined') {
                const gain = gameData[key] - beforeOffline[key];
                if (gain > 0) {
                    offlineGains.drops[key] = gain;
                }
            }
        });

        showOfflineGainsPopup(offlineGains, offlineTime);
    }

    gameData.lastOnlineTime = now;
    gameData.startTime = now;
}

// 显示离线收益弹窗
function showOfflineGainsPopup(gains, offlineTime) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.9); color: white; padding: 20px; border-radius: 10px;
        z-index: 1000; max-width: 400px; max-height: 80vh; overflow-y: auto; font-family: Arial, sans-serif;
    `;

    const hours = Math.floor(offlineTime / (1000 * 60 * 60));
    const minutes = Math.floor((offlineTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((offlineTime % (1000 * 60)) / 1000);
    let offlineTimeStr = '';
    if (hours > 0) offlineTimeStr += `${hours}小时`;
    if (minutes > 0) offlineTimeStr += `${minutes}分钟`;
    if (seconds > 0) offlineTimeStr += `${seconds}秒`;
    if (offlineTimeStr === '') offlineTimeStr = '0秒';

    popup.innerHTML = `<h2 style="margin-top: 0; text-align: center;">离线收益</h2><p style="text-align: center; color: #aaa; margin-bottom: 20px;">离线时间: ${offlineTimeStr}</p><div style="display: grid; gap: 10px;">`;

    if (gains.coins > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>金币:</span><span style="color: gold;">+${formatNumber(gains.coins)}</span></div>`;
    if (gains.experience > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>经验:</span><span style="color: #5cdb95;">+${formatNumber(gains.experience)}</span></div>`;
    if (gains.usageBonus > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>使用增益:</span><span style="color: #379683;">+${formatNumber(gains.usageBonus)}</span></div>`;
    if (gains.trophies > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>奖杯:</span><span style="color: #edf5e1;">+${formatNumber(gains.trophies)}</span></div>`;
    if (gains.level > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>等级提升:</span><span style="color: #8ee4af;">+${gains.level}</span></div>`;
    if (gains.digCount > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>挖掘次数:</span><span style="color: #659dbd;">+${formatNumber(gains.digCount)}</span></div>`;
    if (gains.blocksMined > 0) popup.innerHTML += `<div style="display: flex; justify-content: space-between;"><span>挖掉方块:</span><span style="color: #daad86;">+${formatNumber(gains.blocksMined)}</span></div>`;

    if (Object.keys(gains.drops).length > 0) {
        popup.innerHTML += `<div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #333;"><h3 style="margin-top: 0; margin-bottom: 10px;">掉落物品:</h3>`;
        Object.entries(gains.drops).forEach(([drop, amount]) => {
            let dropName = drop;
            switch (drop) {
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
            }
            popup.innerHTML += `<div style="display: flex; justify-content: space-between; margin-left: 10px;"><span>${dropName}:</span><span style="color: #fbeec1;">+${amount}</span></div>`;
        });
        popup.innerHTML += `</div>`;
    }

    popup.innerHTML += `</div><div style="text-align: center; margin-top: 20px;"><button onclick="this.parentElement.parentElement.remove()" style="padding: 10px 20px; background: #444; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">确定</button></div>`;
    document.body.appendChild(popup);
}

// 更新在线时间
function updatePlaytime() {
    const now = Date.now();
    const seconds = Math.floor((now - gameData.originalStartTime) / 1000);
    const years = Math.floor(seconds / 31536000);
    const days = Math.floor((seconds % 31536000) / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    elements.playtime.innerHTML = `${years}年${days}日${hours}时${minutes}分${secs}秒<br>合计${seconds}秒`;
}

// 初始化商店
function initShop() {
    elements.shopItems.innerHTML = '';
    if (!elements.shopItems) return;

    gameData.pickaxes.forEach((pickaxe, index) => {
        const shopItem = document.createElement('div');
        shopItem.className = 'shop-item';
        let buyButtonHtml = '';
        let recipeHtml = '';

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
            const currencyName = {
                'trophies': '奖杯',
                'amethyst': '紫水晶',
                'copperIngot': '铜锭'
            }[pickaxe.currency || 'trophies'];
            buyButtonHtml = `<button class="buy-btn" data-index="${index}">购买 (${pickaxe.price}${currencyName})</button>`;
        }

        let useButtonHtml = '';
        if (pickaxe.type !== 'item') {
            useButtonHtml = `<button class="use-btn" data-index="${index}">使用</button>`;
        }

        shopItem.innerHTML = `
            <div class="shop-item-info">
                <h4>${pickaxe.name}</h4>
                <span class="shop-item-count">数量: ${pickaxe.count}</span>
            </div>
            <div class="shop-buttons">
                ${recipeHtml}${buyButtonHtml}
                ${useButtonHtml}
            </div>
        `;
        elements.shopItems.appendChild(shopItem);
    });

    document.querySelectorAll('.buy-btn').forEach(btn => {
        btn.addEventListener('click', buyPickaxe);
    });
    document.querySelectorAll('.use-btn').forEach(btn => {
        btn.addEventListener('click', usePickaxe);
    });

    updateShopButtons();
}

// 更新商店按钮状态
function updateShopButtons() {
    document.querySelectorAll('.buy-btn').forEach((btn, index) => {
        const pickaxe = gameData.pickaxes[index];
        if (pickaxe.isCraftable) {
            let canCraft = true;
            for (const [material, required] of Object.entries(pickaxe.recipe)) {
                switch (material) {
                    case '黑曜石镐': if (gameData.pickaxes[10].count < required) { canCraft = false; } break;
                    case '紫水晶镐VI': if (gameData.pickaxes[16].count < required) { canCraft = false; } break;
                    case '铜镐VI': if (gameData.pickaxes[22].count < required) { canCraft = false; } break;
                    case '蓝曜石碎片': if (gameData.blueObsidianFragment < required) { canCraft = false; } break;
                    case '红曜石碎片': if (gameData.redObsidianFragment < required) { canCraft = false; } break;
                    case '蓝曜石镐': if (gameData.pickaxes[23].count < required) { canCraft = false; } break;
                    case '红曜石镐': if (gameData.pickaxes[24].count < required) { canCraft = false; } break;
                    case '红蓝结晶': if (gameData.redBlueCrystal < required) { canCraft = false; } break;
                    case '基岩碎片': if (gameData.bedrockFragment < required) { canCraft = false; } break;
                    case '红蓝镐': if (gameData.pickaxes[25].count < required) { canCraft = false; } break;
                    case '黑曜石': if (gameData.obsidian < required) { canCraft = false; } break;
                    case '玻璃': if (gameData.glass < required) { canCraft = false; } break;
                    case '下界之星': if (gameData.netherStar < required) { canCraft = false; } break;
                    case '坤坤': if (gameData.kunKun < required) { canCraft = false; } break;
                    case '基岩镐': if (gameData.pickaxes[26].count < required) { canCraft = false; } break;
                    case '坤坤镐': if (gameData.pickaxes[27].count < required) { canCraft = false; } break;
                    case '土核心': if (gameData.earthCore < required) { canCraft = false; } break;
                    case '土核心镐': if (gameData.pickaxes[28].count < required) { canCraft = false; } break;
                    case '木核心': if (gameData.woodCore < required) { canCraft = false; } break;
                    case '木核心镐': if (gameData.pickaxes[29].count < required) { canCraft = false; } break;
                    case '火立方镐': if (gameData.pickaxes[30].count < required) { canCraft = false; } break;
                    case '水立方镐': if (gameData.pickaxes[31].count < required) { canCraft = false; } break;
                    case '火立方': if (gameData.fireCube < required) { canCraft = false; } break;
                    case '水立方': if (gameData.waterCube < required) { canCraft = false; } break;
                    case '使用增益': if (gameData.usageBonus < required) { canCraft = false; } break;
                    case '金立方': if (gameData.goldCube < required) { canCraft = false; } break;
                    case '金币': if (gameData.coins < required) { canCraft = false; } break;
                    case '金立方镐': if (gameData.pickaxes[32].count < required) { canCraft = false; } break;
                    case '五行结晶': if (gameData.fiveElementCrystal < required) { canCraft = false; } break;
                    case '京核': if (gameData.jingCore < required) { canCraft = false; } break;
                    case '五行镐': 
                        if (gameData.pickaxes[34] && gameData.pickaxes[34].count < required) { canCraft = false; } break;
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

// 购买或合成镐子
function buyPickaxe(e) {
    const index = parseInt(e.target.dataset.index);
    const pickaxe = gameData.pickaxes[index];
    if (pickaxe.isCraftable) {
        let canCraft = true;
        for (const [material, required] of Object.entries(pickaxe.recipe)) {
            switch (material) {
                case '黑曜石镐': if (gameData.pickaxes[10].count < required) { canCraft = false; } break;
                case '紫水晶镐VI': if (gameData.pickaxes[16].count < required) { canCraft = false; } break;
                case '铜镐VI': if (gameData.pickaxes[22].count < required) { canCraft = false; } break;
                case '蓝曜石碎片': if (gameData.blueObsidianFragment < required) { canCraft = false; } break;
                case '红曜石碎片': if (gameData.redObsidianFragment < required) { canCraft = false; } break;
                case '蓝曜石镐': if (gameData.pickaxes[23].count < required) { canCraft = false; } break;
                case '红曜石镐': if (gameData.pickaxes[24].count < required) { canCraft = false; } break;
                case '红蓝结晶': if (gameData.redBlueCrystal < required) { canCraft = false; } break;
                case '基岩碎片': if (gameData.bedrockFragment < required) { canCraft = false; } break;
                case '红蓝镐': if (gameData.pickaxes[25].count < required) { canCraft = false; } break;
                case '黑曜石': if (gameData.obsidian < required) { canCraft = false; } break;
                case '玻璃': if (gameData.glass < required) { canCraft = false; } break;
                case '下界之星': if (gameData.netherStar < required) { canCraft = false; } break;
                case '坤坤': if (gameData.kunKun < required) { canCraft = false; } break;
                case '基岩镐': if (gameData.pickaxes[26].count < required) { canCraft = false; } break;
                case '坤坤镐': if (gameData.pickaxes[27].count < required) { canCraft = false; } break;
                case '土核心': if (gameData.earthCore < required) { canCraft = false; } break;
                case '土核心镐': if (gameData.pickaxes[28].count < required) { canCraft = false; } break;
                case '木核心': if (gameData.woodCore < required) { canCraft = false; } break;
                case '木核心镐': if (gameData.pickaxes[29].count < required) { canCraft = false; } break;
                case '火立方镐': if (gameData.pickaxes[30].count < required) { canCraft = false; } break;
                case '水立方镐': if (gameData.pickaxes[31].count < required) { canCraft = false; } break;
                case '火立方': if (gameData.fireCube < required) { canCraft = false; } break;
                case '水立方': if (gameData.waterCube < required) { canCraft = false; } break;
                case '使用增益': if (gameData.usageBonus < required) { canCraft = false; } break;
                case '金立方': if (gameData.goldCube < required) { canCraft = false; } break;
                case '金币': if (gameData.coins < required) { canCraft = false; } break;
                case '金立方镐': if (gameData.pickaxes[32].count < required) { canCraft = false; } break;
                case '五行结晶': if (gameData.fiveElementCrystal < required) { canCraft = false; } break;
                case '京核': if (gameData.jingCore < required) { canCraft = false; } break;
                case '五行镐':
                    if (gameData.pickaxes[33] && gameData.pickaxes[33].count >= required) { 
                        gameData.pickaxes[33].count -= required;
                    } break;
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
                    case '五行镐': 
                        if (gameData.pickaxes[33] && gameData.pickaxes[33].count >= required) {
                            gameData.pickaxes[33].count -= required;
                        } break;
                }
            }
            pickaxe.count++;
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

// 使用镐子
function usePickaxe(e) {
    const index = parseInt(e.target.dataset.index);
    if (gameData.pickaxes[index].count > 0) {
        gameData.currentPickaxeIndex = index;
        initShop();
        updateStats();
    }
}

// 键盘控制
function handleKeyDown(e) {
    if (e.key === '>') {
        changeBlock(1);
    } else if (e.key === '<') {
        changeBlock(-1);
    }
}

// 初始化游戏
function initGame() {
    loadGame();
    elements.prevBlock.addEventListener('click', () => changeBlock(-1));
    elements.nextBlock.addEventListener('click', () => changeBlock(1));
    elements.autoMineBtn.addEventListener('click', toggleAutoMine);
    elements.autoExchangeBtn.addEventListener('click', toggleAutoExchange);
    elements.autoExchangeThreshold.addEventListener('change', updateAutoExchangeThreshold);
    elements.exchangeBtn.addEventListener('click', exchangeTrophies);
    elements.redeemBtn.addEventListener('click', redeemCode);
    elements.debugApplyBtn.addEventListener('click', applyDebugChange);

    elements.autoExchangeBtn.textContent = `自动兑换: ${gameData.autoExchange ? '开启' : '关闭'}`;
    elements.autoExchangeBtn.classList.toggle('active', gameData.autoExchange);
    elements.autoExchangeThreshold.value = gameData.autoExchangeThreshold;

    elements.sqrtPower.addEventListener('change', () => {
        const value = parseInt(elements.sqrtPower.value);
        if (value === 1 || value === 2 || value === 3) {
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

    // 调试模式状态恢复
    if (gameData.debugEnabled) {
        elements.debugPanel.style.display = 'block';
    }

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
        updateStats();
    }, 1000);

    setInterval(updatePlaytime, 1000);
    updatePlaytime();

    setInterval(saveGame, 5000);
}

// 启动游戏
initGame();
