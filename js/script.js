function attachProductObserver() {
    const revealProductCards = document.querySelectorAll('.product-card');
    if (!('IntersectionObserver' in window)) {
        revealProductCards.forEach(el => el.classList.add('active'));
        return;
    }
    const productObserverOptions = { threshold: 0.12, rootMargin: '0px 0px -10% 0px' };
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, productObserverOptions);
    revealProductCards.forEach(el => io.observe(el));

    // простий резерв — активуємо видимі картки під час скролу
    const scanVisible = () => {
        document.querySelectorAll('.product-card:not(.active)').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.top < innerHeight * 0.9 && r.bottom > 0) el.classList.add('active');
        });
    };
    document.addEventListener('scroll', scanVisible, { passive: true });
}






// Функція для запуску всіх анімацій після зникнення preload-екрану
function startAnimations() {
    // Анімації для hero-секції
    const heroText = document.querySelector('.hero-text');
    const heroImage = document.querySelector('.hero-image');
    const header = document.querySelector('.top-bar');
    if (header) header.classList.add('active');
    if (heroText) heroText.classList.add('active');
    if (heroImage) heroImage.classList.add('active');

    // Intersection Observer для елементів .cat-item
    const revealCatItems = document.querySelectorAll('.cat-item');
    const catObserverOptions = { threshold: 0.2 };
    const revealOnScrollCat = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, catObserverOptions);
    revealCatItems.forEach(el => revealOnScrollCat.observe(el));

    // // Intersection Observer для елементів .product-card
    // const revealProductCards = document.querySelectorAll('.product-card');
    // const productObserverOptions = { threshold: 0.12 };
    // const revealOnScrollProduct = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('active');
    //             observer.unobserve(entry.target);
    //         }
    //     });
    // }, productObserverOptions);
    // revealProductCards.forEach(el => revealOnScrollProduct.observe(el));

    attachProductObserver();

    // Smooth scroll для посилань навігації
    const navLinks = document.querySelectorAll('.navigator a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}





// Код для роботи з меню (зовнішній, не залежить від preload)
const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeMenu');

if (burger) {
    burger.addEventListener('click', () => {
        sideMenu.classList.add('active');
    });
}
if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
}
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
        sideMenu.classList.remove('active');
    });
});

// Після завантаження сторінки починаємо роботу з preload-екраном
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preload');
    if (preloader) {
        // Додаємо клас для плавного зникнення
        preloader.classList.add('fade-out');
        // Після завершення анімації прибираємо preload і запускаємо анімації
        preloader.addEventListener('transitionend', function() {
            preloader.style.display = 'none';
            startAnimations();
        });
    } else {
        // Якщо preload відсутній, запускаємо анімації одразу
        startAnimations();
    }
});

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preload');
    const launch = () => {
        if (preloader) preloader.style.display = 'none';
        startAnimations();
    };

    if (preloader) {
        preloader.classList.add('fade-out');
        let fired = false;
        const done = () => { if (!fired) { fired = true; launch(); } };
        preloader.addEventListener('transitionend', done, { once: true });
        setTimeout(done, 900);   // Fallback для iOS: гарантуємо запуск
    } else {
        startAnimations();
    }
});

/* ===== CART LOGIC ===== */
(function () {
    const STORAGE_KEY = 'ssc_cart_v1';

    const $  = (sel, root = document) => root.querySelector(sel);
    const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

    const cartLink   = $('.cart-link');
    const cartCount  = $('.cart-count');
    const drawer     = $('#cart-drawer');
    const overlay    = $('#cart-overlay');
    const closeBtn   = $('#cart-close');
    const itemsWrap  = $('#cart-items');
    const subtotalEl = $('#cart-subtotal');
    const clearBtn   = $('#cart-clear');
    const checkoutBtn= $('#cart-checkout');

    const fmt = (n) => `${Number(n).toLocaleString('uk-UA')} UAH`;
    const toNumberUAH = (str) => {
        if (!str) return 0;
        const m = String(str).replace(/\s+/g,'').match(/(\d+([.,]\d+)?)/);
        return m ? Number(m[1].replace(',', '.')) : 0;
    };

    const Cart = {
        state: { items: [] },

        load() {
            try { this.state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { items: [] }; }
            catch { this.state = { items: [] }; }
        },
        save() { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state)); },

        count()   { return this.state.items.reduce((s, it) => s + it.qty, 0); },
        subtotal(){ return this.state.items.reduce((s, it) => s + it.price * it.qty, 0); },

        add(item) {
            const idx = this.state.items.findIndex(i => i.id === item.id);
            if (idx >= 0) this.state.items[idx].qty += item.qty;
            else this.state.items.push(item);
            this.save(); this.render();
        },

        updateQty(id, delta) {
            const it = this.state.items.find(i => i.id === id);
            if (!it) return;
            it.qty += delta;
            if (it.qty <= 0) this.remove(id);
            else { this.save(); this.render(); }
        },

        remove(id) {
            this.state.items = this.state.items.filter(i => i.id !== id);
            this.save(); this.render();
        },

        clear() { this.state.items = []; this.save(); this.render(); },

        render() {
            // badge
            if (cartCount) cartCount.textContent = this.count();

            // items
            if (!this.state.items.length) {
                itemsWrap.innerHTML = `
          <div style="padding:18px; text-align:center; color:#666">
            Кошик порожній. Додайте товар.
          </div>`;
            } else {
                itemsWrap.innerHTML = this.state.items.map(it => `
          <div class="cart-item" data-id="${it.id}">
            <img class="cart-thumb" src="${it.image}" alt="${it.title}">
            <div class="cart-meta">
              <div class="cart-title">${it.title}</div>
              <div class="cart-opts">${it.weight}${it.grind ? ` • ${it.grind}` : ''}</div>
              <div class="cart-qty">
                <button class="c-minus" aria-label="Менше">−</button>
                <span class="cart-qty-value">${it.qty}</span>
                <button class="c-plus" aria-label="Більше">+</button>
              </div>
            </div>
            <div class="cart-price">
              <button class="cart-remove">Прибрати</button>
              <div><strong>${fmt(it.price * it.qty)}</strong>
                <div style="font-size:.82rem;color:#777">(${fmt(it.price)}/шт)</div>
              </div>
            </div>
          </div>
        `).join('');
            }

            // totals
            if (subtotalEl) subtotalEl.textContent = fmt(this.subtotal());
        }
    };

    // зробимо Cart доступним з інших скриптів (для renderProducts → Cart.add)
    window.Cart = Cart;

    /* ===== Drawer helpers ===== */
    const openDrawer = () => {
        if (!overlay || !drawer) return;
        overlay.classList.add('active');
        drawer.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        drawer.setAttribute('aria-hidden', 'false');
    };
    const closeDrawer = () => {
        if (!overlay || !drawer) return;
        overlay.classList.remove('active');
        drawer.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        drawer.setAttribute('aria-hidden', 'true');
    };

    /* ===== Init ===== */
    Cart.load();
    Cart.render();

    // Toggle by header cart button
    if (cartLink) cartLink.addEventListener('click', (e) => { e.preventDefault(); openDrawer(); });
    if (overlay)  overlay.addEventListener('click', closeDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

    // Delegate controls inside drawer
    if (itemsWrap) {
        itemsWrap.addEventListener('click', (e) => {
            const root = e.target.closest('.cart-item');
            if (!root) return;
            const id = root.dataset.id;
            if (e.target.matches('.c-plus'))  Cart.updateQty(id, +1);
            if (e.target.matches('.c-minus')) Cart.updateQty(id, -1);
            if (e.target.matches('.cart-remove')) Cart.remove(id);
        });
    }

    // Clear / Checkout
    if (clearBtn)   clearBtn.addEventListener('click', () => Cart.clear());
    if (checkoutBtn)checkoutBtn.addEventListener('click', () => {
        alert('Дякуємо! Оформлення замовлення — підключи свій бек або форму.');
    });

    /* ===== Делегування для динамічних карток товарів =====
       Працює і для карток, згенерованих після renderProducts(PRODUCTS)
    */
    function getCardPrice(card) {
        const prices = $$('.price', card).filter(p => !p.classList.contains('strike'));
        const el = prices.length ? prices[prices.length - 1] : $('.price', card);
        return toNumberUAH(el?.textContent || '0');
    }
    function getCardQty(card) {
        const q = $('.quantity', card);
        const n = parseInt(q?.textContent || '1', 10);
        return Number.isFinite(n) && n > 0 ? n : 1;
    }
    function slugifyId({ title, image, weight, grind }) {
        const img = (image || '').split('/').pop() || '';
        return [title, img, weight, grind].filter(Boolean).join('|').toLowerCase();
    }

    // один глобальний слухач для +/- та "У КОШИК"
    document.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        if (!card) return;

        // +/- кількість
        if (e.target.matches('.quantity-btn')) {
            const qtyEl = $('.quantity', card);
            if (!qtyEl) return;
            const cur = getCardQty(card);
            const next = (e.target.textContent.trim() === '+') ? cur + 1 : Math.max(1, cur - 1);
            qtyEl.textContent = String(next);
            return;
        }

        // додати в кошик
        if (e.target.matches('.add-to-cart') && !e.target.disabled) {
            const title  = $('.product-title', card)?.textContent?.trim() || 'Товар';
            const price  = getCardPrice(card);
            const qty    = getCardQty(card);
            const grind  = $('.grind-select', card)?.value || '';
            const weight = $('.weight', card)?.textContent?.trim() || '';
            const image  = $('.product-image', card)?.getAttribute('src') || '';
            const id     = slugifyId({ title, image, weight, grind });

            Cart.add({ id, title, price, qty, grind, weight, image });

            if (cartCount) {
                cartCount.classList.add('pulse');
                setTimeout(() => cartCount.classList.remove('pulse'), 400);
            }
        }
    });
})();




/* ===== PRODUCT CARD FLIP (polish) ===== */
(function () {
    const on = (type, sel, handler) => {
        document.addEventListener(type, (e) => {
            const target = e.target.closest(sel);
            if (target) handler(e, target);
        }, { passive: true });
    };

    on('click', '.product-card.flip .btn-more', (e, btn) => {
        const card = btn.closest('.product-card.flip');
        if (!card) return;
        card.classList.add('is-flipped', 'no-hover');     // <— фікс hover
        const title = card.querySelector('.flip-back .back-header h4, .flip-back .back-header h3');
        if (title) setTimeout(() => title.focus?.(), 10);
    });

    on('click', '.product-card.flip .btn-back', (e, btn) => {
        const card = btn.closest('.product-card.flip');
        if (!card) return;
        card.classList.remove('is-flipped', 'no-hover');  // <— повертаємо hover
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.product-card.flip.is-flipped')
                .forEach(card => card.classList.remove('is-flipped', 'no-hover'));
        }
    }, { passive: true });
})();



document.addEventListener('products:rendered', attachProductObserver);




