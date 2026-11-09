/* Service worker tối thiểu để trình duyệt cho phép "Cài đặt ứng dụng". Không lưu dữ liệu, luôn lấy từ mạng. */
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{});
