// Y2K Raccoon Club 交互脚本

// 时钟更新
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    document.getElementById('time').textContent = `${hours}:${minutes}`;
}
setInterval(updateTime, 1000);
updateTime();

// 菜单导航
const menuItems = document.querySelectorAll('.menu-item');
const sections = document.querySelectorAll('.section');

menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // 移除所有活跃状态
        menuItems.forEach(i => i.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        
        // 添加活跃状态
        item.classList.add('active');
        const targetId = item.getAttribute('href').substring(1);
        document.getElementById(targetId).classList.add('active');
    });
});

// 可交互浣熊情绪系统
const emotionButtons = document.querySelectorAll('.emotion-btn');
const raccoonMouth = document.getElementById('mouth');
const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');

const emotions = {
    happy: {
        mouth: '😄',
        leftEye: '●',
        rightEye: '●',
        description: '开心的浣熊在跳舞！'
    },
    sad: {
        mouth: '😢',
        leftEye: '◞',
        rightEye: '◝',
        description: '伤心的浣熊需要安慰...'
    },
    confused: {
        mouth: '😕',
        leftEye: '◆',
        rightEye: '◆',
        description: '困惑的浣熊在思考...'
    },
    excited: {
        mouth: '🤩',
        leftEye: '◉',
        rightEye: '◉',
        description: '兴奋的浣熊太开心了！'
    },
    sus: {
        mouth: '🤨',
        leftEye: '⊙',
        rightEye: '⊙',
        description: '可疑的浣熊发现了什么...'
    }
};

emotionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const emotion = btn.dataset.emotion;
        const emotionData = emotions[emotion];
        
        raccoonMouth.textContent = emotionData.mouth;
        leftEye.textContent = emotionData.leftEye;
        rightEye.textContent = emotionData.rightEye;
        
        // 添加动画效果
        const raccoon = document.getElementById('interactive-raccoon');
        raccoon.style.animation = 'none';
        setTimeout(() => {
            raccoon.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
        
        // 显示提示文字
        console.log(emotionData.description);
    });
});

// Unsplash API 配置
const UNSPLASH_API_KEY = 'YOUR_UNSPLASH_API_KEY'; // 稍后替换

// 从 Unsplash 获取浣熊图片
async function fetchRaccoonImages() {
    try {
        // 首先检查是否已有缓存的图片
        const cached = localStorage.getItem('raccoonImages');
        if (cached) {
            const images = JSON.parse(cached);
            displayImages(images);
            return;
        }

        // 如果没有缓存，使用示例图片 URL（这些是免费资源）
        const exampleImages = [
            {
                id: '1',
                urls: { regular: 'https://images.unsplash.com/photo-1444464666175-1c6f0f4b4d4f?w=400&h=300&fit=crop' },
                alt_description: '可爱的浣熊 1'
            },
            {
                id: '2',
                urls: { regular: 'https://images.unsplash.com/photo-1577934212681-e6bab6ad0623?w=400&h=300&fit=crop' },
                alt_description: '调皮的浣熊 2'
            },
            {
                id: '3',
                urls: { regular: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=300&fit=crop' },
                alt_description: '睡眠的浣熊 3'
            },
            {
                id: '4',
                urls: { regular: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
                alt_description: '树上的浣熊 4'
            },
            {
                id: '5',
                urls: { regular: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop' },
                alt_description: '饮水的浣熊 5'
            },
            {
                id: '6',
                urls: { regular: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop' },
                alt_description: '家族浣熊 6'
            }
        ];

        displayImages(exampleImages);
        localStorage.setItem('raccoonImages', JSON.stringify(exampleImages));
    } catch (error) {
        console.error('获取图片失败:', error);
        displayPlaceholderImages();
    }
}

// 显示图片
function displayImages(images) {
    const memesSection = document.getElementById('memes');
    if (!memesSection) return;

    const galleryDiv = memesSection.querySelector('.meme-gallery');
    if (!galleryDiv) return;

    // 清空现有迷因项，保留前8个
    const existingMemes = galleryDiv.querySelectorAll('.meme-item');
    existingMemes.forEach((item, index) => {
        if (index >= 8) {
            item.remove();
        }
    });

    // 添加图片项
    images.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-card';
        imageItem.innerHTML = `
            <img src="${image.urls.regular}" alt="${image.alt_description || '浣熊图片' + (index + 1)}" onerror="this.src='https://via.placeholder.com/150?text=Raccoon+${index + 1}'">
            <p>${image.alt_description || '浣熊 ' + (index + 1)}</p>
        `;
        galleryDiv.appendChild(imageItem);

        // 添加点击事件放大图片
        imageItem.addEventListener('click', () => {
            openImageModal(image.urls.regular, image.alt_description);
        });
    });
}

// 占位符图片（如果 API 失败）
function displayPlaceholderImages() {
    const placeholders = [
        { url: 'https://via.placeholder.com/150?text=Raccoon+1&bg=8B7D99', desc: '浣熊 1' },
        { url: 'https://via.placeholder.com/150?text=Raccoon+2&bg=8B7D99', desc: '浣熊 2' },
        { url: 'https://via.placeholder.com/150?text=Raccoon+3&bg=8B7D99', desc: '浣熊 3' },
        { url: 'https://via.placeholder.com/150?text=Raccoon+4&bg=8B7D99', desc: '浣熊 4' },
        { url: 'https://via.placeholder.com/150?text=Raccoon+5&bg=8B7D99', desc: '浣熊 5' },
        { url: 'https://via.placeholder.com/150?text=Raccoon+6&bg=8B7D99', desc: '浣熊 6' }
    ];

    const memesSection = document.getElementById('memes');
    const galleryDiv = memesSection.querySelector('.meme-gallery');

    placeholders.forEach((item, index) => {
        const imageCard = document.createElement('div');
        imageCard.className = 'image-card';
        imageCard.innerHTML = `
            <img src="${item.url}" alt="${item.desc}">
            <p>${item.desc}</p>
        `;
        galleryDiv.appendChild(imageCard);
    });
}

// 图片模态框
function openImageModal(imageUrl, description) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: white;
        padding: 20px;
        border: 2px outset #dfdfdf;
        max-width: 600px;
        max-height: 80vh;
        overflow: auto;
        text-align: center;
    `;

    content.innerHTML = `
        <img src="${imageUrl}" style="max-width: 100%; max-height: 500px; margin-bottom: 10px;" alt="${description}">
        <p style="margin: 10px 0; font-family: 'MS Sans Serif';">${description}</p>
        <button onclick="this.closest('div').parentElement.remove()" style="padding: 4px 16px; background: linear-gradient(to bottom, #dfdfdf, #808080); border: 2px outset #dfdfdf; cursor: pointer; font-size: 11px; font-weight: bold;">关闭</button>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    // 点击背景关闭
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// 页面加载时获取图片
window.addEventListener('load', () => {
    fetchRaccoonImages();
});

// 提交评论
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const textarea = document.querySelector('.community-card textarea');
            if (textarea && textarea.value.trim()) {
                alert(`🦝 感谢你的分享！你的故事："${textarea.value.substring(0, 50)}..." 已被记录！`);
                textarea.value = '';
            } else {
                alert('请先输入你的浣熊故事哦！');
            }
        });
    }
});

// Pinterest 图片搜索功能（可选）
function searchPinterestRaccoons() {
    // 这个函数可以在将来扩展
    // Pinterest API 需要授权，这里是备选方案
    const pinterestUrl = 'https://www.pinterest.com/search/pins/?q=raccoon';
    console.log('Pinterest 搜索链接：', pinterestUrl);
}

console.log('🦝 Y2K Raccoon Club 已加载！欢迎来到浣熊迷因世界！');