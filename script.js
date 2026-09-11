// Y2K Raccoon Club v2.0 - 改进版脚本

// 时钟更新
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const timeEl = document.getElementById('time');
    if (timeEl) {
        timeEl.textContent = `${hours}:${minutes}`;
    }
}
setInterval(updateTime, 1000);
updateTime();

// 浣熊迷因数据
const raccoonMemes = [
    { emoji: '🦝', label: 'Trash Panda', desc: '垃圾熊' },
    { emoji: '🦝💰', label: '发财梦', desc: '财富自由' },
    { emoji: '🦝😴', label: '困到眯眼', desc: '睡眠不足' },
    { emoji: '🦝🤔', label: '沉思浣熊', desc: '思考人生' },
    { emoji: '🦝💪', label: '强壮浣熊', desc: '健身达人' },
    { emoji: '🦝👀', label: '窥探者', desc: '在线窃听' },
    { emoji: '🦝🎉', label: '派对浣熊', desc: '狂欢时刻' },
    { emoji: '🦝😡', label: '生气浣熊', desc: '愤怒时刻' },
    { emoji: '🦝❤️', label: '爱上浣熊', desc: '深陷浣熊' },
    { emoji: '🦝🚀', label: '火箭浣熊', desc: '飙升中' },
    { emoji: '🦝🎭', label: '戏精浣熊', desc: '我是演员' },
    { emoji: '🦝😎', label: '酷浣熊', desc: '社恐好手' }
];

// 真实浣熊图片 URLs (Unsplash 高质量免费图片)
const raccoonImages = [
    {
        url: 'https://images.unsplash.com/photo-1444464666175-1c6f0f4b4d4f?w=400&h=400&fit=crop',
        title: '可爱浣熊 #1 - 仰望天空'
    },
    {
        url: 'https://images.unsplash.com/photo-1577934212681-e6bab6ad0623?w=400&h=400&fit=crop',
        title: '调皮浣熊 #2 - 捣乱高手'
    },
    {
        url: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&h=400&fit=crop',
        title: '睡眠浣熊 #3 - 困死了'
    },
    {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
        title: '树上浣熊 #4 - 登山家'
    },
    {
        url: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop',
        title: '饮水浣熊 #5 - 解渴时刻'
    },
    {
        url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=400&fit=crop',
        title: '家族浣熊 #6 - 温暖时光'
    },
    {
        url: 'https://images.unsplash.com/photo-1573865526894-10342b9b757d?w=400&h=400&fit=crop',
        title: '野生浣熊 #7 - 森林漫步'
    },
    {
        url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
        title: '靠近浣熊 #8 - 特写镜头'
    }
];

// 初始化迷因库
function initMemeGallery() {
    const gallery = document.getElementById('meme-gallery');
    if (!gallery) return;

    gallery.innerHTML = '';
    raccoonMemes.forEach((meme) => {
        const memeItem = document.createElement('div');
        memeItem.className = 'meme-item';
        memeItem.innerHTML = `<span class="meme-icon">${meme.emoji}</span><span class="meme-label">${meme.label}</span>`;
        memeItem.title = meme.desc;
        memeItem.onclick = () => {
            alert(`🦝 ${meme.label}\n\n${meme.desc}\n\n—— 浣熊俱乐部`);
        };
        gallery.appendChild(memeItem);
    });
}

// 初始化图片库
function initImageGallery() {
    const gallery = document.getElementById('image-gallery');
    if (!gallery) return;

    gallery.innerHTML = '';
    raccoonImages.forEach((image, index) => {
        const card = document.createElement('div');
        card.className = 'image-card';
        card.innerHTML = `<img src="${image.url}" alt="${image.title}" onerror="this.src='https://via.placeholder.com/140?text=Raccoon+${index + 1}'" loading="lazy">`;
        card.title = image.title;
        card.onclick = () => openImageModal(image.url, image.title);
        gallery.appendChild(card);
    });
}

// 打开图片模态框
function openImageModal(imageUrl, title) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-title">
                <span>🖼️ ${title}</span>
                <button style="background: linear-gradient(to bottom, #dfdfdf, #808080); border: 1px solid #dfdfdf; border-right: 1px solid #000; border-bottom: 1px solid #000; width: 16px; height: 14px; cursor: pointer; font-size: 10px; padding: 0; display: flex; align-items: center; justify-content: center;" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="modal-body">
                <img src="${imageUrl}" alt="${title}" onerror="this.src='https://via.placeholder.com/400?text=Image+Failed'" style="max-width: 90vw; max-height: 70vh;">
                <p style="margin-top: 10px; font-size: 10px; color: #666;">© Unsplash - 免费使用 🦝</p>
            </div>
        </div>
    `;
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
    document.body.appendChild(modal);
}

// 提交评论
function submitComment() {
    const textarea = document.querySelector('.comment-box');
    if (textarea && textarea.value.trim()) {
        alert(`🦝 感谢你的分享！\n\n"${textarea.value.substring(0, 50)}..."\n\n你的故事已被记录在浣熊心中！`);
        textarea.value = '';
    } else {
        alert('请先输入你的浣熊故事哦！🦝');
    }
}

// 窗口拖动功能
function makeWindowsDraggable() {
    const windows = document.querySelectorAll('.window:not(.decorative-window)');
    
    windows.forEach(windowEl => {
        const titleBar = windowEl.querySelector('.title-bar');
        if (!titleBar) return;

        let isDragging = false;
        let currentX;
        let currentY;
        let initialX;
        let initialY;

        titleBar.addEventListener('mousedown', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            isDragging = true;
            initialX = e.clientX - windowEl.offsetLeft;
            initialY = e.clientY - windowEl.offsetTop;
            windowEl.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                
                // 限制窗口在视口内
                currentX = Math.max(0, Math.min(currentX, window.innerWidth - windowEl.offsetWidth));
                currentY = Math.max(0, Math.min(currentY, window.innerHeight - 40));
                
                windowEl.style.left = currentX + 'px';
                windowEl.style.top = currentY + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            windowEl.style.cursor = 'move';
        });

        // 提升窗口
        windowEl.addEventListener('mousedown', () => {
            const maxZ = Math.max(...Array.from(windows).map(w => parseInt(window.getComputedStyle(w).zIndex) || 0));
            windowEl.style.zIndex = maxZ + 1;
        });
    });
}

// 最小化窗口功能
function setupWindowButtons() {
    document.querySelectorAll('.window').forEach(windowEl => {
        const buttons = windowEl.querySelectorAll('.title-buttons button');
        
        if (buttons[0]) {
            // 最小化按钮
            buttons[0].addEventListener('click', () => {
                const content = windowEl.querySelector('.window-content');
                if (content) {
                    const isHidden = content.style.display === 'none';
                    content.style.display = isHidden ? 'block' : 'none';
                    windowEl.style.height = isHidden ? 'auto' : '18px';
                }
            });
        }
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', () => {
    initMemeGallery();
    initImageGallery();
    makeWindowsDraggable();
    setupWindowButtons();

    // 控制台消息
    console.log('%c🦝 Y2K Raccoon Club v2.0', 'color: #000080; font-size: 16px; font-weight: bold;');
    console.log('%c欢迎来到浣熊的千禧年世界！', 'color: #1084d7; font-size: 12px;');
    console.log('%c拖动窗口标题栏来移动窗口', 'color: #666;');
});

// 防止默认行为
document.addEventListener('dragover', (e) => e.preventDefault());
document.addEventListener('drop', (e) => e.preventDefault());