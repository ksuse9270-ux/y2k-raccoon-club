@echo off
REM Y2K Raccoon Club - Windows 浣熊图片自动下载脚本
REM 功能：自动安装 gallery-dl 并下载浣熊图片到本地

setlocal enabledelayedexpansion
chcp 65001 >nul
title 🦝 Y2K Raccoon Club - 浣熊图片下载器

echo.
echo ========================================
echo   🦝 Y2K Raccoon Club - 浣熊图片下载器
echo ========================================
echo.

REM 检查 Python 是否已安装
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ 未检测到 Python！
    echo.
    echo 请先安装 Python 3.8 或以上版本：
    echo https://www.python.org/downloads/
    echo.
    echo 安装时请勾选 "Add Python to PATH"
    pause
    exit /b 1
)

echo ✅ 已检测到 Python
python --version
echo.

REM 检查 pip
pip --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ pip 安装失败！
    pause
    exit /b 1
)

echo ✅ 开始安装 gallery-dl...
echo.
pip install gallery-dl -q

if %errorlevel% neq 0 (
    echo ❌ gallery-dl 安装失败！
    pause
    exit /b 1
)

echo ✅ gallery-dl 安装成功！
echo.

REM 创建图片保存文件夹
if not exist "raccoon_images" (
    mkdir raccoon_images
    echo ✅ 已创建文件夹：raccoon_images
)

echo.
echo ========================================
echo   📥 开始下载浣熊图片...
echo ========================================
echo.
echo 说明：
echo   • 从 Unsplash 下载高质量浣熊图片
echo   • 约需下载 20-30 张图片
echo   • 根据网络速度，约需 2-5 分钟
echo.

REM 从 Unsplash 下载浣熊图片
echo ⏳ 正在下载第 1 批：Unsplash 浣熊图片...
gallery-dl -d raccoon_images "https://unsplash.com/search/photos/raccoon" -q

if %errorlevel% neq 0 (
    echo ⚠️  Unsplash 下载可能遇到限制，尝试备用方案...
)

REM 使用更稳定的下载方式
echo.
echo ⏳ 正在下载第 2 批：Flickr 浣熊图片...
gallery-dl -d raccoon_images "https://www.flickr.com/search/?text=raccoon&media=photos" -q 2>nul

REM 检查是否成功下载
cd raccoon_images
for /f %%A in ('dir /b /a-d 2^>nul ^| find /c /v ""') do set count=%%A
cd ..

if %count% gtr 0 (
    echo.
    echo ✅ 下载完成！
    echo ✅ 共下载了 %count% 张浣熊图片
    echo ✅ 图片保存在：%cd%\raccoon_images
    echo.
) else (
    echo.
    echo ⚠️  自动下载可能失败，请手动下载：
    echo.
    echo 方案 A：访问 Unsplash 搜索 "raccoon"
    echo   https://unsplash.com/search/photos/raccoon
    echo   下载图片放到 raccoon_images 文件夹即可
    echo.
    echo 方案 B：使用手动命令下载
    echo   gallery-dl -d raccoon_images "图片链接"
    echo.
)

echo.
echo ========================================
echo   ✅ 脚本执行完毕！
echo ========================================
echo.
echo 下一步：
echo   1. 打开 raccoon_images 文件夹
echo   2. 确认已下载浣熊图片
echo   3. 双击打开 index.html 预览网页
echo   4. 网页会自动显示本地图片
echo.

pause
