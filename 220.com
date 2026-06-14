<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>姚俊希220 - 双击编辑</title>
    <style>
        :root {
            --bg-start: #0f0c29;
            --bg-mid: #1a1a3e;
            --bg-end: #24243e;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #0f0c29 0%, #1a1a3e 40%, #24243e 70%, #1a1a2e 100%);
            background-attachment: fixed;
            font-family: 'PingFang SC', 'Microsoft YaHei', 'Helvetica Neue', sans-serif;
            overflow-x: hidden;
            user-select: none;
            -webkit-user-select: none;
            -webkit-tap-highlight-color: transparent;
            cursor: default;
            position: relative;
        }

        /* 背景装饰粒子 */
        .bg-particles {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }

        .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.03);
            animation: floatUp linear infinite;
        }

        @keyframes floatUp {
            0% {
                transform: translateY(100vh) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-10vh) scale(1.5);
                opacity: 0;
            }
        }

        /* 主文字容器 */
        .text-container {
            position: relative;
            z-index: 1;
            padding: 40px 60px;
            cursor: pointer;
            transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .text-container:hover {
            transform: scale(1.03);
        }

        .text-container:active {
            transform: scale(0.98);
        }

        /* 提示标签 */
        .hint-badge {
            position: absolute;
            top: 8px;
            right: 10px;
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.7);
            font-size: 12px;
            padding: 6px 14px;
            border-radius: 20px;
            letter-spacing: 0.5px;
            pointer-events: none;
            transition: all 0.4s ease;
            white-space: nowrap;
            animation: pulseHint 3s ease-in-out infinite;
            z-index: 2;
        }

        @keyframes pulseHint {
            0%,
            100% {
                opacity: 0.5;
                transform: translateY(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-3px);
            }
        }

        .text-container:hover .hint-badge {
            opacity: 0;
            transform: translateY(-10px);
        }

        /* 主文字 */
        .display-text {
            font-size: 100px;
            font-weight: 900;
            letter-spacing: 4px;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            text-align: center;
            word-break: keep-all;
            line-height: 1.2;
            position: relative;
            /* 默认金色渐变 */
            background: linear-gradient(135deg, #f7c948 0%, #e8943a 30%, #f7c948 60%, #e8943a 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 4px 8px rgba(200, 140, 30, 0.5));
            text-shadow: none;
            background-size: 200% 200%;
            animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
            0%,
            100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        /* 编辑面板覆盖层 */
        .panel-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
            z-index: 100;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            padding: 20px;
        }

        .panel-overlay.active {
            opacity: 1;
            pointer-events: all;
        }

        /* 编辑面板 */
        .editor-panel {
            background: linear-gradient(160deg, #1e1e38 0%, #252545 50%, #1c1c32 100%);
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 24px;
            padding: 32px 28px 28px;
            width: 100%;
            max-width: 560px;
            max-height: 85vh;
            overflow-y: auto;
            box-shadow:
                0 30px 70px rgba(0, 0, 0, 0.6),
                0 0 0 1px rgba(255, 255, 255, 0.05) inset,
                0 1px 0 rgba(255, 255, 255, 0.06) inset;
            transform: translateY(30px) scale(0.94);
            transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            color: #e0e0e0;
            position: relative;
            scroll-behavior: smooth;
        }

        .panel-overlay.active .editor-panel {
            transform: translateY(0) scale(1);
        }

        /* 面板滚动条 */
        .editor-panel::-webkit-scrollbar {
            width: 6px;
        }
        .editor-panel::-webkit-scrollbar-track {
            background: transparent;
            border-radius: 3px;
        }
        .editor-panel::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 3px;
        }

        /* 面板头部 */
        .panel-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 24px;
            position: sticky;
            top: 0;
            background: inherit;
            padding-bottom: 12px;
            z-index: 5;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .panel-title {
            font-size: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
            color: #ffffff;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .panel-title-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            background: linear-gradient(135deg, #f7c948, #e8943a);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
        }

        .close-btn {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            color: #ccc;
            cursor: pointer;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.25s ease;
            flex-shrink: 0;
        }

        .close-btn:hover {
            background: rgba(255, 80, 80, 0.3);
            border-color: rgba(255, 100, 100, 0.6);
            color: #fff;
            transform: rotate(90deg);
            box-shadow: 0 0 20px rgba(255, 80, 80, 0.3);
        }

        /* 表单分组 */
        .form-group {
            margin-bottom: 20px;
        }

        .form-label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: #aab;
            margin-bottom: 8px;
        }

        .form-label .label-icon {
            font-size: 15px;
        }

        /* 文本输入 */
        .text-input {
            width: 100%;
            padding: 14px 18px;
            border-radius: 14px;
            border: 2px solid rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.04);
            color: #fff;
            font-size: 18px;
            font-weight: 600;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            outline: none;
            font-family: inherit;
        }

        .text-input:focus {
            border-color: #f7c948;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 25px rgba(247, 201, 72, 0.2);
        }

        /* 字体选择 */
        .font-select {
            width: 100%;
            padding: 12px 16px;
            border-radius: 14px;
            border: 2px solid rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.04);
            color: #fff;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            outline: none;
            appearance: none;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.6)' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: right 16px center;
            padding-right: 40px;
        }

        .font-select:focus {
            border-color: #f7c948;
            box-shadow: 0 0 25px rgba(247, 201, 72, 0.2);
        }
        .font-select option {
            background: #1e1e38;
            color: #fff;
            padding: 10px;
        }

        /* 滑块样式 */
        .range-group {
            display: flex;
            align-items: center;
            gap: 14px;
        }

        .range-slider {
            flex: 1;
            -webkit-appearance: none;
            appearance: none;
            height: 8px;
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.12);
            outline: none;
            cursor: pointer;
        }

        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            background: linear-gradient(135deg, #f7c948, #e8943a);
            cursor: pointer;
            border: 3px solid #1e1e38;
            box-shadow: 0 4px 15px rgba(247, 201, 72, 0.4);
            transition: all 0.2s ease;
        }

        .range-slider::-webkit-slider-thumb:hover {
            transform: scale(1.15);
            box-shadow: 0 6px 22px rgba(247, 201, 72, 0.6);
        }

        .range-value {
            min-width: 44px;
            text-align: center;
            font-weight: 700;
            font-size: 14px;
            color: #f7c948;
            background: rgba(247, 201, 72, 0.1);
            padding: 6px 10px;
            border-radius: 10px;
            letter-spacing: 0.5px;
        }

        /* 颜色选择器 */
        .color-picker-wrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            background: rgba(255, 255, 255, 0.04);
            border: 2px solid rgba(255, 255, 255, 0.12);
            border-radius: 14px;
            padding: 8px 14px;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .color-picker-wrapper:hover {
            border-color: rgba(255, 255, 255, 0.3);
        }

        .color-picker-wrapper input[type="color"] {
            -webkit-appearance: none;
            appearance: none;
            width: 40px;
            height: 40px;
            border-radius: 10px;
            border: 2px solid rgba(255, 255, 255, 0.25);
            cursor: pointer;
            background: transparent;
            padding: 2px;
            flex-shrink: 0;
        }

        .color-picker-wrapper input[type="color"]::-webkit-color-swatch-wrapper {
            padding: 0;
        }
        .color-picker-wrapper input[type="color"]::-webkit-color-swatch {
            border-radius: 8px;
            border: none;
        }

        .color-hex {
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.5px;
            color: #ccc;
            font-family: 'SF Mono', 'Consolas', 'Monaco', monospace;
        }

        /* 切换开关 */
        .toggle-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
        }

        .toggle-label-text {
            font-size: 14px;
            font-weight: 500;
            color: #ccc;
        }

        .toggle-switch {
            position: relative;
            width: 52px;
            height: 28px;
            flex-shrink: 0;
        }

        .toggle-switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .toggle-slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 28px;
            transition: all 0.35s ease;
            border: 2px solid rgba(255, 255, 255, 0.15);
        }

        .toggle-slider::before {
            content: '';
            position: absolute;
            height: 20px;
            width: 20px;
            left: 3px;
            bottom: 2px;
            background: #fff;
            border-radius: 50%;
            transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }

        .toggle-switch input:checked+.toggle-slider {
            background: linear-gradient(135deg, #f7c948, #e8943a);
            border-color: transparent;
        }

        .toggle-switch input:checked+.toggle-slider::before {
            transform: translateX(22px);
        }

        /* 渐变子设置区 */
        .gradient-sub-settings {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 16px;
            margin-top: 10px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: all 0.4s ease;
        }

        .gradient-sub-settings.hidden {
            display: none;
        }

        .gradient-colors-row {
            display: flex;
            gap: 12px;
            align-items: center;
        }

        .gradient-colors-row .color-picker-wrapper {
            flex: 1;
            padding: 6px 10px;
        }

        .gradient-arrow {
            color: #888;
            font-size: 20px;
            flex-shrink: 0;
        }

        /* 阴影子设置区 */
        .shadow-sub-settings {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 16px;
            padding: 16px;
            margin-top: 10px;
            border: 1px solid rgba(255, 255, 255, 0.08);
            display: flex;
            flex-direction: column;
            gap: 12px;
            transition: all 0.4s ease;
        }

        .shadow-sub-settings.hidden {
            display: none;
        }

        .shadow-row {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .shadow-row .range-group {
            flex: 1;
        }
        .shadow-row .range-group .range-value {
            min-width: 36px;
            font-size: 12px;
        }
        .shadow-row-label {
            font-size: 11px;
            color: #999;
            min-width: 20px;
            text-align: center;
            flex-shrink: 0;
            font-weight: 600;
            letter-spacing: 0.5px;
        }

        /* 预设按钮 */
        .presets-section {
            margin-top: 6px;
        }
        .presets-label {
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: #aab;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .presets-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
            gap: 10px;
        }
        .preset-btn {
            padding: 10px 8px;
            border-radius: 12px;
            border: 2px solid rgba(255, 255, 255, 0.15);
            cursor: pointer;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            position: relative;
            overflow: hidden;
        }
        .preset-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.4);
            border-color: rgba(255, 255, 255, 0.4);
        }
        .preset-btn:active {
            transform: scale(0.94);
            transition: transform 0.1s ease;
        }
        .preset-gold {
            background: linear-gradient(135deg, #f7c948, #e8943a);
        }
        .preset-neon {
            background: linear-gradient(135deg, #00d4ff, #0099ff);
            box-shadow: 0 0 20px rgba(0, 180, 255, 0.3);
        }
        .preset-fire {
            background: linear-gradient(135deg, #ff4444, #ff8800);
        }
        .preset-purple {
            background: linear-gradient(135deg, #c44dff, #7b2fff);
            box-shadow: 0 0 20px rgba(160, 60, 255, 0.3);
        }
        .preset-rainbow {
            background: linear-gradient(135deg, #ff4444, #ff8800, #ffdd00, #44dd44, #4488ff, #cc44ff);
        }
        .preset-minimal {
            background: #ffffff;
            color: #1a1a3e;
        }

        /* 底部按钮 */
        .panel-footer {
            display: flex;
            gap: 10px;
            margin-top: 24px;
            padding-top: 16px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            position: sticky;
            bottom: 0;
            background: inherit;
            z-index: 5;
        }

        .btn {
            flex: 1;
            padding: 12px 20px;
            border-radius: 14px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            text-align: center;
        }

        .btn-reset {
            background: rgba(255, 255, 255, 0.08);
            color: #ccc;
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .btn-reset:hover {
            background: rgba(255, 255, 255, 0.16);
            color: #fff;
        }

        .btn-done {
            background: linear-gradient(135deg, #f7c948, #e8943a);
            color: #1a1a2e;
            font-weight: 700;
            box-shadow: 0 8px 25px rgba(247, 201, 72, 0.3);
        }
        .btn-done:hover {
            box-shadow: 0 14px 35px rgba(247, 201, 72, 0.5);
            transform: translateY(-2px);
        }

        /* 响应式设计 */
        @media (max-width: 768px) {
            .display-text {
                font-size: 60px;
                letter-spacing: 2px;
            }
            .text-container {
                padding: 24px 30px;
            }
            .editor-panel {
                padding: 22px 16px 20px;
                border-radius: 20px;
                max-width: 95vw;
                max-height: 80vh;
            }
            .panel-title {
                font-size: 16px;
            }
            .presets-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
            }
            .preset-btn {
                font-size: 11px;
                padding: 8px 6px;
            }
            .gradient-colors-row {
                flex-direction: column;
                gap: 8px;
            }
            .gradient-arrow {
                transform: rotate(90deg);
            }
            .shadow-row {
                flex-wrap: wrap;
            }
            .hint-badge {
                font-size: 10px;
                padding: 4px 10px;
                top: 4px;
                right: 4px;
            }
        }

        @media (max-width: 400px) {
            .display-text {
                font-size: 42px;
                letter-spacing: 1px;
            }
            .text-container {
                padding: 16px 20px;
            }
            .editor-panel {
                padding: 16px 12px 16px;
                border-radius: 16px;
                max-height: 78vh;
            }
            .presets-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 6px;
            }
            .btn {
                font-size: 12px;
                padding: 10px 14px;
            }
        }
    </style>
</head>
<body>

    <!-- 背景装饰粒子 -->
    <div class="bg-particles" id="particles"></div>

    <!-- 主文字容器 -->
    <div class="text-container" id="textContainer" title="双击编辑文字样式">
        <span class="hint-badge">✨ 双击我编辑</span>
        <span class="display-text" id="displayText">姚俊希220</span>
    </div>

    <!-- 编辑面板覆盖层 -->
    <div class="panel-overlay" id="panelOverlay">
        <div class="editor-panel" id="editorPanel">
            <!-- 头部 -->
            <div class="panel-header">
                <div class="panel-title">
                    <span class="panel-title-icon">🎨</span>
                    编辑文字样式
                </div>
                <button class="close-btn" id="closeBtn" title="关闭 (ESC)">✕</button>
            </div>

            <!-- 文字内容 -->
            <div class="form-group">
                <label class="form-label">
                    <span class="label-icon">📝</span> 文字内容
                </label>
                <input type="text" class="text-input" id="textInput" value="姚俊希220" maxlength="50" placeholder="输入文字...">
            </div>

            <!-- 字体选择 -->
            <div class="form-group">
                <label class="form-label">
                    <span class="label-icon">🔤</span> 字体
                </label>
                <select class="font-select" id="fontSelect">
                    <option value="'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif">🍎 苹方 / 微软雅黑（默认）</option>
                    <option value="'Microsoft YaHei', 'PingFang SC', sans-serif">💻 微软雅黑</option>
                    <option value="'PingFang SC', 'STHeiti', 'Helvetica Neue', sans-serif">🍏 苹方（Mac）</option>
                    <option value="'SimHei', '黑体', 'PingFang SC', sans-serif">🖤 黑体</option>
                    <option value="'SimSun', '宋体', 'STSong', serif">📜 宋体</option>
                    <option value="'KaiTi', '楷体', 'STKaiti', serif">🖋️ 楷体</option>
                    <option value="'FangSong', '仿宋', 'STFangsong', serif">✒️ 仿宋</option>
                    <option value="'Source Han Sans SC', 'Noto Sans SC', 'PingFang SC', sans-serif">🌐 思源黑体</option>
                    <option value="'Georgia', 'Times New Roman', 'SimSun', serif">📖 Georgia + 宋体</option>
                    <option value="'Montserrat', 'PingFang SC', 'Microsoft YaHei', sans-serif">✨ Montserrat + 雅黑</option>
                </select>
            </div>

            <!-- 字号 -->
            <div class="form-group">
                <label class="form-label">
                    <span class="label-icon">📏</span> 字号大小
                </label>
                <div class="range-group">
                    <span style="font-size:12px;color:#888;">A</span>
                    <input type="range" class="range-slider" id="fontSizeSlider" min="20" max="200" value="100" step="2">
                    <span style="font-size:18px;color:#888;">A</span>
                    <span class="range-value" id="fontSizeValue">100px</span>
                </div>
            </div>

            <!-- 纯色 / 渐变切换 -->
            <div class="form-group">
                <div class="toggle-row">
                    <span class="toggle-label-text">
                        <span class="label-icon">🌈</span> 使用渐变色
                    </span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="gradientToggle" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                <!-- 纯色选择 -->
                <div id="solidColorSection" style="margin-top:10px;">
                    <div class="color-picker-wrapper">
                        <input type="color" id="solidColorPicker" value="#f7c948">
                        <span class="color-hex" id="solidColorHex">#F7C948</span>
                    </div>
                </div>
                <!-- 渐变设置 -->
                <div class="gradient-sub-settings" id="gradientSettings">
                    <div class="gradient-colors-row">
                        <div class="color-picker-wrapper">
                            <input type="color" id="gradientColor1" value="#f7c948">
                            <span class="color-hex" id="gradientHex1">#F7C948</span>
                        </div>
                        <span class="gradient-arrow">→</span>
                        <div class="color-picker-wrapper">
                            <input type="color" id="gradientColor2" value="#e8943a">
                            <span class="color-hex" id="gradientHex2">#E8943A</span>
                        </div>
                    </div>
                    <label class="form-label" style="margin-bottom:4px;">
                        <span class="label-icon">🔄</span> 渐变角度
                    </label>
                    <div class="range-group">
                        <input type="range" class="range-slider" id="gradientAngleSlider" min="0" max="360" value="135" step="5">
                        <span class="range-value" id="gradientAngleValue">135°</span>
                    </div>
                </div>
            </div>

            <!-- 阴影设置 -->
            <div class="form-group">
                <div class="toggle-row">
                    <span class="toggle-label-text">
                        <span class="label-icon">💫</span> 文字阴影
                    </span>
                    <label class="toggle-switch">
                        <input type="checkbox" id="shadowToggle" checked>
                        <span class="toggle-slider"></span>
                    </label>
                </div>
                <div class="shadow-sub-settings" id="shadowSettings">
                    <div class="shadow-row">
                        <span class="shadow-row-label">X</span>
                        <div class="range-group">
                            <input type="range" class="range-slider" id="shadowXSlider" min="-20" max="20" value="3" step="1">
                            <span class="range-value" id="shadowXValue">3</span>
                        </div>
                    </div>
                    <div class="shadow-row">
                        <span class="shadow-row-label">Y</span>
                        <div class="range-group">
                            <input type="range" class="range-slider" id="shadowYSlider" min="-20" max="20" value="6" step="1">
                            <span class="range-value" id="shadowYValue">6</span>
                        </div>
                    </div>
                    <div class="shadow-row">
                        <span class="shadow-row-label">模糊</span>
                        <div class="range-group">
                            <input type="range" class="range-slider" id="shadowBlurSlider" min="0" max="40" value="15" step="1">
                            <span class="range-value" id="shadowBlurValue">15</span>
                        </div>
                    </div>
                    <div class="color-picker-wrapper" style="margin-top:4px;">
                        <input type="color" id="shadowColorPicker" value="#c88c1e">
                        <span class="color-hex" id="shadowColorHex">#C88C1E</span>
                        <span style="font-size:12px;color:#888;margin-left:auto;">阴影颜色</span>
                    </div>
                </div>
            </div>

            <!-- 预设样式 -->
            <div class="presets-section">
                <div class="presets-label">
                    <span class="label-icon">⭐</span> 快速预设
                </div>
                <div class="presets-grid">
                    <button class="preset-btn preset-gold" data-preset="gold">🥇 金色</button>
                    <button class="preset-btn preset-neon" data-preset="neon">💎 霓虹蓝</button>
                    <button class="preset-btn preset-fire" data-preset="fire">🔥 火焰</button>
                    <button class="preset-btn preset-purple" data-preset="purple">💜 紫光</button>
                    <button class="preset-btn preset-rainbow" data-preset="rainbow">🌈 彩虹</button>
                    <button class="preset-btn preset-minimal" data-preset="minimal">◻️ 简约</button>
                </div>
            </div>

            <!-- 底部 -->
            <div class="panel-footer">
                <button class="btn btn-reset" id="resetBtn">🔄 恢复默认</button>
                <button class="btn btn-done" id="doneBtn">✅ 完成</button>
            </div>
        </div>
    </div>

    <script>
        (function() {
            // ==================== DOM 元素 ====================
            const displayText = document.getElementById('displayText');
            const textContainer = document.getElementById('textContainer');
            const panelOverlay = document.getElementById('panelOverlay');
            const editorPanel = document.getElementById('editorPanel');
            const closeBtn = document.getElementById('closeBtn');
            const doneBtn = document.getElementById('doneBtn');
            const resetBtn = document.getElementById('resetBtn');

            // 表单元素
            const textInput = document.getElementById('textInput');
            const fontSelect = document.getElementById('fontSelect');
            const fontSizeSlider = document.getElementById('fontSizeSlider');
            const fontSizeValue = document.getElementById('fontSizeValue');
            const gradientToggle = document.getElementById('gradientToggle');
            const solidColorSection = document.getElementById('solidColorSection');
            const solidColorPicker = document.getElementById('solidColorPicker');
            const solidColorHex = document.getElementById('solidColorHex');
            const gradientSettings = document.getElementById('gradientSettings');
            const gradientColor1 = document.getElementById('gradientColor1');
            const gradientColor2 = document.getElementById('gradientColor2');
            const gradientHex1 = document.getElementById('gradientHex1');
            const gradientHex2 = document.getElementById('gradientHex2');
            const gradientAngleSlider = document.getElementById('gradientAngleSlider');
            const gradientAngleValue = document.getElementById('gradientAngleValue');
            const shadowToggle = document.getElementById('shadowToggle');
            const shadowSettings = document.getElementById('shadowSettings');
            const shadowXSlider = document.getElementById('shadowXSlider');
            const shadowYSlider = document.getElementById('shadowYSlider');
            const shadowBlurSlider = document.getElementById('shadowBlurSlider');
            const shadowXValue = document.getElementById('shadowXValue');
            const shadowYValue = document.getElementById('shadowYValue');
            const shadowBlurValue = document.getElementById('shadowBlurValue');
            const shadowColorPicker = document.getElementById('shadowColorPicker');
            const shadowColorHex = document.getElementById('shadowColorHex');

            // 预设按钮
            const presetButtons = document.querySelectorAll('.preset-btn');

            // ==================== 默认值 ====================
            const defaults = {
                text: '姚俊希220',
                fontFamily: "'PingFang SC', 'Microsoft YaHei', 'Hiragino Sans GB', sans-serif",
                fontSize: 100,
                useGradient: true,
                solidColor: '#f7c948',
                gradientColor1: '#f7c948',
                gradientColor2: '#e8943a',
                gradientAngle: 135,
                useShadow: true,
                shadowX: 3,
                shadowY: 6,
                shadowBlur: 15,
                shadowColor: '#c88c1e',
            };

            // ==================== 当前状态 ====================
            let currentState = { ...defaults };

            // ==================== 从 localStorage 加载 ====================
            function loadState() {
                try {
                    const saved = localStorage.getItem('yaojunxi-text-editor-state');
                    if (saved) {
                        const parsed = JSON.parse(saved);
                        // 合并，确保所有键都存在
                        currentState = { ...defaults, ...parsed };
                    }
                } catch (e) {
                    currentState = { ...defaults };
                }
            }

            // ==================== 保存到 localStorage ====================
            function saveState() {
                try {
                    localStorage.setItem('yaojunxi-text-editor-state', JSON.stringify(currentState));
                } catch (e) {
                    // localStorage 不可用
                }
            }

            // ==================== 应用样式到文字 ====================
            function applyStyles() {
                const s = currentState;

                // 更新文字内容
                displayText.textContent = s.text;
                textInput.value = s.text;

                // 字体
                displayText.style.fontFamily = s.fontFamily;
                fontSelect.value = s.fontFamily;

                // 字号
                displayText.style.fontSize = s.fontSize + 'px';
                fontSizeSlider.value = s.fontSize;
                fontSizeValue.textContent = s.fontSize + 'px';

                // 渐变或纯色
                if (s.useGradient) {
                    displayText.style.background =
                        `linear-gradient(${s.gradientAngle}deg, ${s.gradientColor1}, ${s.gradientColor2})`;
                    displayText.style.webkitBackgroundClip = 'text';
                    displayText.style.backgroundClip = 'text';
                    displayText.style.webkitTextFillColor = 'transparent';
                    displayText.style.color = 'transparent';
                    displayText.style.backgroundSize = '200% 200%';
                    displayText.style.animation = 'shimmer 3s ease-in-out infinite';
                } else {
                    displayText.style.background = 'none';
                    displayText.style.webkitBackgroundClip = 'unset';
                    displayText.style.backgroundClip = 'unset';
                    displayText.style.webkitTextFillColor = 'unset';
                    displayText.style.color = s.solidColor;
                    displayText.style.backgroundSize = 'unset';
                    displayText.style.animation = 'none';
                }

                // 阴影
                if (s.useShadow) {
                    displayText.style.textShadow = `${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowColor}`;
                    if (s.useGradient) {
                        displayText.style.filter =
                            `drop-shadow(${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowColor})`;
                        displayText.style.textShadow = 'none';
                    } else {
                        displayText.style.filter = 'none';
                        displayText.style.textShadow = `${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowColor}`;
                    }
                } else {
                    displayText.style.textShadow = 'none';
                    displayText.style.filter = 'none';
                }

                // 更新面板中的控件
                updatePanelControls();
            }

            // ==================== 更新面板控件显示 ====================
            function updatePanelControls() {
                const s = currentState;

                // 渐变开关
                gradientToggle.checked = s.useGradient;
                if (s.useGradient) {
                    solidColorSection.style.display = 'none';
                    gradientSettings.classList.remove('hidden');
                } else {
                    solidColorSection.style.display = 'block';
                    gradientSettings.classList.add('hidden');
                }

                // 纯色
                solidColorPicker.value = s.solidColor;
                solidColorHex.textContent = s.solidColor.toUpperCase();

                // 渐变颜色
                gradientColor1.value = s.gradientColor1;
                gradientColor2.value = s.gradientColor2;
                gradientHex1.textContent = s.gradientColor1.toUpperCase();
                gradientHex2.textContent = s.gradientColor2.toUpperCase();
                gradientAngleSlider.value = s.gradientAngle;
                gradientAngleValue.textContent = s.gradientAngle + '°';

                // 阴影开关
                shadowToggle.checked = s.useShadow;
                if (s.useShadow) {
                    shadowSettings.classList.remove('hidden');
                } else {
                    shadowSettings.classList.add('hidden');
                }

                // 阴影参数
                shadowXSlider.value = s.shadowX;
                shadowYSlider.value = s.shadowY;
                shadowBlurSlider.value = s.shadowBlur;
                shadowXValue.textContent = s.shadowX;
                shadowYValue.textContent = s.shadowY;
                shadowBlurValue.textContent = s.shadowBlur;
                shadowColorPicker.value = s.shadowColor;
                shadowColorHex.textContent = s.shadowColor.toUpperCase();
            }

            // ==================== 打开面板 ====================
            function openPanel() {
                updatePanelControls();
                panelOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
                // 聚焦到文本输入框
                setTimeout(() => textInput.focus(), 400);
            }

            // ==================== 关闭面板 ====================
            function closePanel() {
                panelOverlay.classList.remove('active');
                document.body.style.overflow = '';
                saveState();
            }

            // ==================== 事件监听 ====================

            // 双击文字打开面板
            textContainer.addEventListener('dblclick', function(e) {
                e.preventDefault();
                e.stopPropagation();
                if (panelOverlay.classList.contains('active')) {
                    closePanel();
                } else {
                    openPanel();
                }
            });

            // 移动端：也支持快速双击（通过检测）
            let lastTapTime = 0;
            textContainer.addEventListener('click', function(e) {
                const now = Date.now();
                if (now - lastTapTime < 350 && window.innerWidth <= 768) {
                    // 快速双击检测（移动端）
                    e.preventDefault();
                    e.stopPropagation();
                    if (panelOverlay.classList.contains('active')) {
                        closePanel();
                    } else {
                        openPanel();
                    }
                }
                lastTapTime = now;
            });

            // 关闭按钮
            closeBtn.addEventListener('click', closePanel);
            doneBtn.addEventListener('click', closePanel);

            // 点击覆盖层外部关闭
            panelOverlay.addEventListener('click', function(e) {
                if (e.target === panelOverlay) {
                    closePanel();
                }
            });

            // ESC 关闭
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && panelOverlay.classList.contains('active')) {
                    closePanel();
                }
            });

            // 阻止面板内部点击冒泡
            editorPanel.addEventListener('click', function(e) {
                e.stopPropagation();
            });

            // ---- 表单事件 ----

            // 文字内容
            textInput.addEventListener('input', function() {
                const val = this.value.trim() || ' ';
                currentState.text = val;
                displayText.textContent = val;
            });

            // 字体
            fontSelect.addEventListener('change', function() {
                currentState.fontFamily = this.value;
                displayText.style.fontFamily = this.value;
            });

            // 字号
            fontSizeSlider.addEventListener('input', function() {
                const val = parseInt(this.value);
                currentState.fontSize = val;
                displayText.style.fontSize = val + 'px';
                fontSizeValue.textContent = val + 'px';
            });

            // 渐变开关
            gradientToggle.addEventListener('change', function() {
                currentState.useGradient = this.checked;
                applyStyles();
            });

            // 纯色
            solidColorPicker.addEventListener('input', function() {
                currentState.solidColor = this.value;
                solidColorHex.textContent = this.value.toUpperCase();
                if (!currentState.useGradient) {
                    displayText.style.color = this.value;
                }
            });

            // 渐变颜色1
            gradientColor1.addEventListener('input', function() {
                currentState.gradientColor1 = this.value;
                gradientHex1.textContent = this.value.toUpperCase();
                if (currentState.useGradient) {
                    displayText.style.background =
                        `linear-gradient(${currentState.gradientAngle}deg, ${currentState.gradientColor1}, ${currentState.gradientColor2})`;
                    displayText.style.webkitBackgroundClip = 'text';
                    displayText.style.backgroundClip = 'text';
                    displayText.style.webkitTextFillColor = 'transparent';
                    displayText.style.backgroundSize = '200% 200%';
                }
            });

            // 渐变颜色2
            gradientColor2.addEventListener('input', function() {
                currentState.gradientColor2 = this.value;
                gradientHex2.textContent = this.value.toUpperCase();
                if (currentState.useGradient) {
                    displayText.style.background =
                        `linear-gradient(${currentState.gradientAngle}deg, ${currentState.gradientColor1}, ${currentState.gradientColor2})`;
                    displayText.style.webkitBackgroundClip = 'text';
                    displayText.style.backgroundClip = 'text';
                    displayText.style.webkitTextFillColor = 'transparent';
                    displayText.style.backgroundSize = '200% 200%';
                }
            });

            // 渐变角度
            gradientAngleSlider.addEventListener('input', function() {
                const val = parseInt(this.value);
                currentState.gradientAngle = val;
                gradientAngleValue.textContent = val + '°';
                if (currentState.useGradient) {
                    displayText.style.background =
                        `linear-gradient(${val}deg, ${currentState.gradientColor1}, ${currentState.gradientColor2})`;
                    displayText.style.webkitBackgroundClip = 'text';
                    displayText.style.backgroundClip = 'text';
                    displayText.style.webkitTextFillColor = 'transparent';
                    displayText.style.backgroundSize = '200% 200%';
                }
            });

            // 阴影开关
            shadowToggle.addEventListener('change', function() {
                currentState.useShadow = this.checked;
                applyStyles();
            });

            // 阴影参数
            shadowXSlider.addEventListener('input', function() {
                const val = parseInt(this.value);
                currentState.shadowX = val;
                shadowXValue.textContent = val;
                updateShadowOnText();
            });
            shadowYSlider.addEventListener('input', function() {
                const val = parseInt(this.value);
                currentState.shadowY = val;
                shadowYValue.textContent = val;
                updateShadowOnText();
            });
            shadowBlurSlider.addEventListener('input', function() {
                const val = parseInt(this.value);
                currentState.shadowBlur = val;
                shadowBlurValue.textContent = val;
                updateShadowOnText();
            });
            shadowColorPicker.addEventListener('input', function() {
                currentState.shadowColor = this.value;
                shadowColorHex.textContent = this.value.toUpperCase();
                updateShadowOnText();
            });

            function updateShadowOnText() {
                if (!currentState.useShadow) return;
                const s = currentState;
                if (s.useGradient) {
                    displayText.style.filter =
                        `drop-shadow(${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowColor})`;
                    displayText.style.textShadow = 'none';
                } else {
                    displayText.style.filter = 'none';
                    displayText.style.textShadow = `${s.shadowX}px ${s.shadowY}px ${s.shadowBlur}px ${s.shadowColor}`;
                }
            }

            // ---- 预设按钮 ----
            presetButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    const preset = this.dataset.preset;
                    applyPreset(preset);
                });
            });

            function applyPreset(preset) {
                switch (preset) {
                    case 'gold':
                        currentState.useGradient = true;
                        currentState.gradientColor1 = '#f7c948';
                        currentState.gradientColor2 = '#e8943a';
                        currentState.gradientAngle = 135;
                        currentState.useShadow = true;
                        currentState.shadowX = 3;
                        currentState.shadowY = 6;
                        currentState.shadowBlur = 15;
                        currentState.shadowColor = '#c88c1e';
                        currentState.solidColor = '#f7c948';
                        break;
                    case 'neon':
                        currentState.useGradient = true;
                        currentState.gradientColor1 = '#00d4ff';
                        currentState.gradientColor2 = '#0099ff';
                        currentState.gradientAngle = 180;
                        currentState.useShadow = true;
                        currentState.shadowX = 0;
                        currentState.shadowY = 0;
                        currentState.shadowBlur = 25;
                        currentState.shadowColor = '#00b4ff';
                        currentState.solidColor = '#00d4ff';
                        break;
                    case 'fire':
                        currentState.useGradient = true;
                        currentState.gradientColor1 = '#ff4444';
                        currentState.gradientColor2 = '#ff8800';
                        currentState.gradientAngle = 0;
                        currentState.useShadow = true;
                        currentState.shadowX = 0;
                        currentState.shadowY = 4;
                        currentState.shadowBlur = 20;
                        currentState.shadowColor = '#ff4400';
                        currentState.solidColor = '#ff4444';
                        break;
                    case 'purple':
                        currentState.useGradient = true;
                        currentState.gradientColor1 = '#c44dff';
                        currentState.gradientColor2 = '#7b2fff';
                        currentState.gradientAngle = 225;
                        currentState.useShadow = true;
                        currentState.shadowX = 0;
                        currentState.shadowY = 0;
                        currentState.shadowBlur = 28;
                        currentState.shadowColor = '#a03cff';
                        currentState.solidColor = '#c44dff';
                        break;
                    case 'rainbow':
                        currentState.useGradient = true;
                        currentState.gradientColor1 = '#ff4444';
                        currentState.gradientColor2 = '#4488ff';
                        currentState.gradientAngle = 90;
                        currentState.useShadow = true;
                        currentState.shadowX = 2;
                        currentState.shadowY = 4;
                        currentState.shadowBlur = 18;
                        currentState.shadowColor = '#8866cc';
                        currentState.solidColor = '#ff4444';
                        // 彩虹用多色渐变
                        displayText.style.background =
                            'linear-gradient(90deg, #ff4444, #ff8800, #ffdd00, #44dd44, #4488ff, #cc44ff)';
                        displayText.style.webkitBackgroundClip = 'text';
                        displayText.style.backgroundClip = 'text';
                        displayText.style.webkitTextFillColor = 'transparent';
                        displayText.style.backgroundSize = '300% 300%';
                        currentState.gradientColor1 = '#ff4444';
                        currentState.gradientColor2 = '#cc44ff';
                        currentState.gradientAngle = 90;
                        break;
                    case 'minimal':
                        currentState.useGradient = false;
                        currentState.solidColor = '#ffffff';
                        currentState.useShadow = false;
                        currentState.shadowX = 0;
                        currentState.shadowY = 0;
                        currentState.shadowBlur = 0;
                        currentState.shadowColor = '#000000';
                        break;
                }
                applyStyles();
            }

            // ---- 重置按钮 ----
            resetBtn.addEventListener('click', function() {
                currentState = { ...defaults };
                applyStyles();
                saveState();
            });

            // ==================== 初始化 ====================
            function init() {
                loadState();
                applyStyles();
                // 生成背景粒子
                generateParticles();
            }

            // ==================== 背景粒子 ====================
            function generateParticles() {
                const container = document.getElementById('particles');
                const count = 35;
                let html = '';
                for (let i = 0; i < count; i++) {
                    const size = Math.random() * 4 + 2;
                    const left = Math.random() * 100;
                    const duration = Math.random() * 15 + 10;
                    const delay = Math.random() * 15;
                    const opacity = Math.random() * 0.06 + 0.02;
                    html +=
                        `<div class="particle" style="
                            width:${size}px;
                            height:${size}px;
                            left:${left}%;
                            animation-duration:${duration}s;
                            animation-delay:${delay}s;
                            background:rgba(255,255,255,${opacity});
                        "></div>`;
                }
                container.innerHTML = html;
            }

            // ==================== 启动 ====================
            init();

            console.log('✨ 姚俊希220 - 文字样式编辑器已就绪');
            console.log('   💡 双击文字打开编辑面板');
            console.log('   ⌨️  按 ESC 关闭面板');
            console.log('   💾 设置自动保存到本地存储');
        })();
    </script>
</body>
</html>
