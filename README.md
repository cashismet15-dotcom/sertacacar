# Acarlar Çelik Yapı — Kurumsal Website

Endüstriyel çelik yapı, prefabrik konut ve çelik konstrüksiyon hizmetleri sunan Acarlar Çelik Yapı'nın kurumsal websitesi. Tek HTML, harici CSS ve JS — herhangi bir build aracına ihtiyaç duymaz.

---

## Proje Yapısı

```
acarlar-celik-yapi/
├── index.html       Tek sayfalı SPA — tüm sayfalar burada
├── css/
│   └── styles.css   Tüm stil dosyası (~1350 satır)
├── js/
│   └── main.js      Tüm JavaScript — veri, routing, animasyonlar
├── robots.txt       Arama motoru taraması için
├── .gitignore       Git takibi dışında bırakılacaklar
└── README.md        Bu dosya
```

## VS Code'da Açma

1. Klasörü çıkar (zip ise)
2. VS Code aç → **File** → **Open Folder** → `acarlar-celik-yapi` klasörünü seç
3. Sol panelden `index.html` dosyasını aç

### Önerilen VS Code Eklentileri

- **Live Server** (Ritwick Dey) — tek tıkla canlı önizleme. Yükledikten sonra `index.html` üzerine sağ tık → **Open with Live Server**.
- **Prettier** — kodu otomatik biçimlendirir.
- **HTML CSS Support** — class tamamlama desteği.

## Lokalde Çalıştırma

İki seçenek:

**1. Live Server (Önerilen)**
- VS Code'da yukarıdaki Live Server eklentisini yükle
- `index.html`'e sağ tık → "Open with Live Server"
- Tarayıcıda http://127.0.0.1:5500 açılır, değişiklikler anında yansır

**2. Doğrudan tarayıcıda**
- `index.html`'e çift tıkla, tarayıcıda açılır (sayfa içi rotaları çalışır, dosya:// protokolünde de sorunsuz)

## Yayına Alma (Hosting)

### A) cPanel / Klasik Hosting (acarlarcelik.com.tr için)

1. Hosting paneline gir → **File Manager** veya FTP (FileZilla)
2. `public_html` klasörüne git
3. `index.html`, `css/`, `js/`, `robots.txt` dosyalarını yükle
4. Domain'i tarayıcıda aç — çalışır

### B) Vercel (Ücretsiz, Profesyonel)

1. github.com'da yeni repo aç, klasörü push'la
2. vercel.com'a git, GitHub hesabıyla giriş yap
3. **Import Project** → repo'yu seç → **Deploy**
4. 30 saniyede `acarlar-celik-yapi.vercel.app` adresinde çalışır
5. Settings → Domains'den kendi domain'ini bağla

### C) Netlify (Ücretsiz)

1. netlify.com'a git
2. **Add new site** → **Deploy manually**
3. Klasörü sürükle bırak — yayına alınır

### D) GitHub Pages (Ücretsiz)

1. Repo'ya push'la
2. Repo Settings → Pages → Branch: `main`, Folder: `/ (root)` → Save
3. `kullaniciadi.github.io/repo-adi` adresinde yayına çıkar

## İçerik Düzenleme

### Hizmet bilgilerini değiştirme

`js/main.js` dosyasını aç, en üstte `SERVICES` dizisini bulacaksın:

```js
const SERVICES = [
  {
    id: 'endustriyel',
    title: 'Endüstriyel Çelik Yapı',
    short: '...',          // ana sayfa kartındaki kısa metin
    lead: '...',           // detay sayfası açılışı
    features: [...],       // 4 alt özellik
    faq: [...]             // SSS soruları
  },
  ...
]
```

### Proje listesini değiştirme

Aynı dosyada `PROJECTS` dizisi:

```js
{ code: '2024-014', name: 'Proje Adı', cat: 'endustriyel', year: 2024, area: '12.450 m²', loc: 'Aydın', type: 'Fabrika', icon: 'factory' }
```

Kategoriler: `endustriyel`, `konut`, `lojistik`, `ozel`
İkonlar: `factory`, `warehouse`, `hangar`, `house`, `mezzanine`, `showroom`

### Blog yazılarını değiştirme

`BLOG_POSTS` dizisinde başlık, tarih, kategori ve özet düzenlenir.

### Telefon ve adres

`index.html` içinde **Ctrl+F** ile şu metinleri ara ve değiştir:
- `444 15 09` — telefon (3 yerde geçer)
- `Sky City İş Merkezi` — adres (3 yerde geçer)
- `info@acarlarcelik.com.tr` — e-posta
- Aynı bilgileri en üstteki `<script type="application/ld+json">` Schema.org bloğunda da güncelle (Google SEO için)

### Renkleri değiştirme

`css/styles.css` dosyasının en üstündeki `:root` bloğunda renk değişkenleri:

```css
:root {
  --ink: #0D1218;       /* Ana koyu/metin rengi */
  --paper: #EAE4D4;     /* Arka plan kraft rengi */
  --rust: #B7501F;      /* Aksan/vurgu rengi */
  --steel: #5C6671;     /* İkincil gri */
  ...
}
```

Buradaki tek değer değiştiğinde tüm site uyumlu kalır.

## SEO Notları

- **17 anahtar kelime** site genelinde doğal olarak işli (çelik yapı, prefabrik ev, çelik konstrüksiyon, mezzanine vs.)
- **Schema.org LocalBusiness JSON-LD** dahil — Google'a yapılı veri olarak adres/telefon/mesai bildirir
- **Meta tagleri** (title, description, keywords, OpenGraph) hazır
- **Semantic HTML** — h1, h2, h3 hiyerarşisi korunmuş
- Yayına aldıktan sonra Google Search Console'a kaydet ve sitemap gönder

### Sitemap eklemek (opsiyonel ama önerilir)

Yayına aldıktan sonra `sitemap.xml` ekle:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://acarlarcelik.com.tr/</loc><priority>1.0</priority></url>
  <url><loc>https://acarlarcelik.com.tr/#hakkimizda</loc></url>
  <url><loc>https://acarlarcelik.com.tr/#hizmetler</loc></url>
  <url><loc>https://acarlarcelik.com.tr/#projeler</loc></url>
  <url><loc>https://acarlarcelik.com.tr/#blog</loc></url>
  <url><loc>https://acarlarcelik.com.tr/#iletisim</loc></url>
</urlset>
```

## İletişim Formunu Bağlama

`index.html` içindeki `<form id="contactForm">` şu an sadece görsel feedback verir; mesaj göndermez. Üç seçenek:

### Formspree (En Kolay)
1. formspree.io'ya kayıt ol
2. Yeni form oluştur, form ID'ni al
3. `<form>` etiketini şöyle değiştir:
```html
<form id="contactForm" action="https://formspree.io/f/SENIN_FORM_ID" method="POST">
```
4. `js/main.js` içinde formun submit handler'ı kaldır (yoksa Formspree çalışmaz):
```js
// Bu satırları sil veya yorum satırı yap:
document.getElementById('contactForm')?.addEventListener('submit', e => { ... });
```

### Web3Forms (Ücretsiz, Daha Esnek)
1. web3forms.com → access key al
2. Forma gizli input ekle: `<input type="hidden" name="access_key" value="KEY">`
3. Form action'ı: `action="https://api.web3forms.com/submit"`

### Kendi Backend'in
Supabase Edge Function, Vercel API Route veya Cloudflare Worker ile form datasını al, e-posta gönder.

## Tarayıcı Desteği

- Chrome, Edge, Firefox, Safari — son 2 sürüm tam destek
- IE 11 desteklenmez (CSS değişkenleri ve modern JS)
- Mobil — 380px genişliğe kadar tam responsive

## Performans

- Sayfa toplam: ~250KB (HTML + CSS + JS + fontlar)
- İlk paint: <1s (CDN'de)
- Lighthouse skoru: 90+ beklenir (yayına alınca test et)

## Lisans

Acarlar Çelik Yapı'ya özel. Başka projede kullanılamaz.

---

**Soru / sorun?** Web tasarımcına veya bu dosyayı hazırlayan kişiye yaz.
