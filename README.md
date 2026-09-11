# 🦝 Y2K Raccoon Club - 浣熊迷因爱好者社区

欢迎来到 Y2K Raccoon Club！这是一个充满千禧年怀旧风味、专门为浣熊爱好者打造的社区网站。

## ✨ 特色功能

### 🦝 可交互的浣熊角色
- 点击按钮改变浣熊的表情
- 支持 5 种情绪：开心 😄、伤心 😢、困惑 😕、兴奋 🤩、可疑 🤨
- 浣熊会随着背景音乐漂浮（动画效果）

### 📸 浣熊图片库
- 从 Unsplash 免费获取高质量浣熊图片
- 点击图片查看大图
- 图片会自动缓存，快速加载

### 😂 迷因表情包库
- 收集各种浣熊相关迷因
- 风格化的 Windows 98 界面展示
- 轻松有趣的社区氛围

### 📚 浣熊百科
- 浣熊的有趣科普知识
- 了解浣熊的生活习性
- 学习浣熊的特殊能力

### 👥 社区互动
- 分享你的浣熊故事
- 与其他爱好者交流
- 社区数据统计展示

## 🎨 设计风格

网站采用经典的 **Windows 98 千禧年美学**（Y2K Aesthetic）：
- 蓝紫色渐变背景
- 3D 立体按钮效果
- 经典窗口界面（title bar、minimize/maximize/close 按钮）
- 复古任务栏和时钟
- 怀旧字体和配色方案

## 🚀 快速开始

### 本地运行
1. 克隆仓库：
```bash
git clone https://github.com/ksuse9270-ux/y2k-raccoon-club.git
cd y2k-raccoon-club
```

2. 用浏览器打开 `index.html` 文件
```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### GitHub Pages 发布
1. 进入仓库设置 → Pages
2. 在 "Build and deployment" 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main` / `/(root)`
3. 保存后，网站将在 `https://ksuse9270-ux.github.io/y2k-raccoon-club/` 上线

## 📁 项目结构

```
y2k-raccoon-club/
├── index.html      # 主网页（HTML 结构）
├── style.css       # 样式文件（Windows 98 风格 CSS）
├── script.js       # 交互脚本（JavaScript 功能）
└── README.md       # 项目文档（这个文件）
```

## 🔧 功能说明

### script.js 包含的功能：

#### 1. 时钟更新
- 实时显示当前时间（Windows 98 风格）
- 每秒更新一次

#### 2. 菜单导航
- 点击左侧菜单切换不同页面
- 支持 5 个主要分区：首页、迷因库、百科、社区、关于

#### 3. 浣熊情绪系统
- 5 个情绪按钮对应不同表情
- 改变浣熊的眼睛和嘴巴
- 浮动动画效果

#### 4. 图片获取
- 从 Unsplash 获取浣熊相关图片
- 本地存储缓存机制
- 支持点击放大查看

#### 5. 社区互动
- 提交评论功能
- 输入验证
- 用户反馈提示

#### 6. 图片模态框
- 点击图片展示大图
- 支持关闭操作
- 背景点击关闭

## 🖼️ 浣熊图片来源

目前网站使用以下图片源：
1. **Unsplash API** - 免费高质量浣熊图片
2. **本地存储缓存** - 首次加载后缓存图片
3. **占位符图片** - 如果加载失败的备选方案

所有图片都是免费使用，无需担心版权问题。

## 🎯 未来计划

- [ ] 添加更多浣熊迷因
- [ ] 实现用户账户系统
- [ ] 添加评论功能（使用 GitHub Issues）
- [ ] 更多互动游戏
- [ ] 浣熊视频库
- [ ] 社区排行榜
- [ ] 深色模式支持
- [ ] 国际化多语言支持

## 📝 贡献指南

欢迎提交 PR 和 Issue！你可以：
1. 添加更多浣熊相关内容
2. 改进网站设计和功能
3. 报告 bug 和建议改进
4. 分享有趣的浣熊故事

## 📜 许可证

这个项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 🐾 致谢

感谢所有浣熊爱好者！特别感谢：
- Unsplash - 免费图片素材
- Windows 98 怀旧设计灵感
- 互联网上所有可爱的浣熊视频和图片

---

**让我们一起热爱浣熊！** 🦝❤️

如有问题，请在 [Issues](https://github.com/ksuse9270-ux/y2k-raccoon-club/issues) 中提交。