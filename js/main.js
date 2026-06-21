// ============================================
// DATA
// ============================================
const SERVICES = [
  {
    id: 'endustriyel',
    code: 'H-01',
    title: 'Endüstriyel Çelik Yapı',
    tag: 'endustriyel',
    short: 'Fabrika, depo, hangar ve büyük açıklıklı çelik yapılar. Proje, imalat ve anahtar teslim montaj.',
    lead: 'Üretim tesisleri, lojistik depolar, hangarlar ve büyük açıklıklı sanayi yapılarında, proje aşamasından anahtar teslim noktasına kadar tek elden hizmet.',
    tags: ['Fabrika', 'Depo', 'Hangar', 'Lojistik'],
    features: [
      { num: 'F-01', t: 'Üretim Tesisleri', p: 'Sanayi üretim hatlarına uygun, büyük açıklıklı çelik üretim tesisleri. Vinç hatları dahil komple çözüm.' },
      { num: 'F-02', t: 'Lojistik Depolar', p: 'Yüksek raf sistemlerine uyumlu, soğuk hava depoları dahil her tip lojistik yapı.' },
      { num: 'F-03', t: 'Hangarlar', p: 'Geniş açıklıklı, kolonsuz orta alan gerektiren hangar yapıları. Havacılık ve sanayi uygulamaları.' },
      { num: 'F-04', t: 'Anahtar Teslim', p: 'Statik proje, imalat, montaj, kaplama, vinç hattı — tek sözleşme, tek sorumlu.' }
    ],
    faq: [
      { q: 'Endüstriyel çelik yapı projesi ne kadar sürer?', a: 'Proje boyutuna ve karmaşıklığına göre değişir. Standart bir 3.000-5.000 m² depo için keşiften anahtar teslime ortalama 4-6 ay. Detaylı süre, ilk görüşme sonrası size özel takvimle netleştirilir.' },
      { q: 'Statik hesabı siz mi yapıyorsunuz?', a: 'Evet. Bünyemizde tam zamanlı statik mühendisi var. 3D modelleme, statik hesap ve shop drawing süreçlerini kendi ekibimiz yürütür.' },
      { q: 'Yurt dışına da kurulum yapıyor musunuz?', a: 'Evet, 2024 itibariyle yurt dışı projeler portföyümüze giriyor. Bölgenize göre uygulanabilirliği görüşmemiz gerekir; iletişime geçin.' },
      { q: 'Ruhsat işlemleri kimde?', a: 'Ruhsat ve imar süreci, projenin bağlı olduğu belediyenin yetkisindedir. Biz size projelendirme ve statik dökümanlar için tam destek veriyoruz; ruhsat başvurusu iş veren tarafında.' }
    ]
  },
  {
    id: 'prefabrik',
    code: 'H-02',
    title: 'Prefabrik Konut & Villa',
    tag: 'konut',
    short: 'Hafif çelik prefabrik ev, villa ve müstakil konut projeleri. Renginize ve mimarinize özel tasarım.',
    lead: 'Prefabrik ev, hafif çelik villa, müstakil konut — fabrikada üretilen, sahada hızla kurulan, depreme dayanıklı ve enerji verimli yaşam alanları.',
    tags: ['Prefabrik Ev', 'Hafif Çelik', 'Villa', 'Anahtar Teslim'],
    features: [
      { num: 'F-01', t: 'Hafif Çelik Yapı', p: 'Galvanizli hafif çelik profillerden, yüksek hassasiyetli üretim. Klasik betonarmeye göre çok daha hızlı kurulum.' },
      { num: 'F-02', t: 'Özel Tasarım', p: 'Her ev mimari olarak iş verene özeldir. Hazır katalog değil; sizin arsa, ihtiyaç ve estetik kararlarınıza göre tasarım.' },
      { num: 'F-03', t: 'Anahtar Teslim', p: 'Statik projeden iç tefrişe — her şey dahil. Temel, nakliye, montaj ve standart işçilik fiyata dahildir.' },
      { num: 'F-04', t: 'M² Fiyatı Şeffaf', p: 'Prefabrik konutta m² fiyatımız her şey dahil 20.000 TL. İç malzeme tercihlerinize göre uzmanımız net teklif çıkarır.' }
    ],
    faq: [
      { q: 'Prefabrik ev m² fiyatı ne kadar?', a: 'Her şey dahil m² 20.000 TL\'dir. Bu fiyata nakliye, montaj, temel ve standart işçilik dahildir. İç malzeme tercihleri (banyo, mutfak, zemin) toplam tutarı etkiler; net teklif uzmanımız tarafından netleştirilir.' },
      { q: 'Ne kadar sürede teslim ediliyor?', a: 'Sipariş onayından sonra modele ve detaya göre değişir; net süreyi uzmanımız size projeye özel verir. Prefabrik yapının betonarmeye göre temel avantajı bu hızdır.' },
      { q: 'Depreme dayanıklı mı?', a: 'Evet. Tüm yapılarımız Türk Deprem Yönetmeliği\'ne ve hassas statik hesaba uygun üretilir. Hafif çelik yapıların kütlesinin az olması, deprem performansında lehinize çalışır.' },
      { q: 'Arsa imar durumu olmalı mı?', a: 'Evet. Üretime başlamadan önce arsanızın alınmış ve imar durumunun (resmi izinlerin) netleşmiş olması gerekir. İmar belgesi belediyenizden alınır; biz arsa satışı veya gayrimenkul danışmanlığı yapmıyoruz.' }
    ]
  },
  {
    id: 'konstruksiyon',
    code: 'H-03',
    title: 'Çelik Konstrüksiyon İmalatı',
    tag: 'endustriyel',
    short: 'Kolon, kiriş, makas, platform, merdiven, korkuluk — özel ölçü çelik konstrüksiyon imalatı.',
    lead: 'Mevcut bir projeye veya mimari çizime göre çelik elemanların imalatı. Kolondan kirişe, platformdan korkuluğa — kendi atölyemizde, ölçüye özel üretim.',
    tags: ['Kolon', 'Kiriş', 'Makas', 'Platform'],
    features: [
      { num: 'F-01', t: 'Standart Profil İmalatı', p: 'HEA, HEB, IPE, IPN, NPU ve özel profillerden ölçüye uygun kesim, kaynak ve montaj.' },
      { num: 'F-02', t: 'Kafes Sistem (Makas)', p: 'Geniş açıklıklı çatı sistemleri için kafes/makas çelik konstrüksiyon imalatı.' },
      { num: 'F-03', t: 'Endüstriyel Platform', p: 'Üretim bandı, makine bakımı veya ara depolama için tasarlanmış çelik platformlar.' },
      { num: 'F-04', t: 'Merdiven & Korkuluk', p: 'Endüstriyel merdivenler, kaçış merdivenleri, ferforje ve çelik korkuluk imalatı.' }
    ],
    faq: [
      { q: 'Kendi projem üzerinden teklif alabilir miyim?', a: 'Evet. Mimari ve statik projenizi paylaşırsanız, ölçüye özel çelik imalat teklifimizi çıkarırız. Projeniz yoksa biz de hazırlayabiliriz.' },
      { q: 'Hangi kalitede malzeme kullanıyorsunuz?', a: 'Standart olarak S235, S275 ve gerektiğinde S355 kalite çelik kullanırız. Galvaniz kaplama, boyama, paslanmaz seçenekleri projeye göre belirlenir.' },
      { q: 'Sadece imalat mı yapıyorsunuz, montaj da var mı?', a: 'İkisi de var. Yalnızca imalat alıp kendi montajınızı yapabilirsiniz ya da bizimle anahtar teslim ilerleyebilirsiniz.' }
    ]
  },
  {
    id: 'mezzanine',
    code: 'H-04',
    title: 'Mezzanine / Ara Kat Sistemleri',
    tag: 'endustriyel',
    short: 'Mevcut yapınızın yüksekliğini değerlendirin. Çelik mezzanine ile depolama ve kullanım alanını ikiye katlayın.',
    lead: 'Mevcut deponuzun veya tesisinizin tavan yüksekliğini ekonomik bir mezzanine sistemiyle değerlendirin. Yapıyı genişletmeden m²\'yi katlayın.',
    tags: ['Mezzanine', 'Ara Kat', 'Depo Modernizasyonu'],
    features: [
      { num: 'F-01', t: 'Statik Hesap Önce', p: 'Mevcut yapının taşıma kapasitesi ve zemin durumu detaylı incelenir. Hesap doğrulanmadan imalat yapılmaz.' },
      { num: 'F-02', t: 'Modüler Üretim', p: 'Tamamen sökülebilir ve genişletilebilir modüler sistem. İhtiyaç değişirse mezzanineniz de değişir.' },
      { num: 'F-03', t: 'Yangın & Güvenlik', p: 'İlgili yangın güvenliği standartlarına uygun, korkuluk, merdiven ve yük güvenliği detayları dahil.' },
      { num: 'F-04', t: 'Hızlı Kurulum', p: 'Operasyonunuzu en az durdurarak, çoğunlukla hafta sonu kurulumu mümkün.' }
    ],
    faq: [
      { q: 'Mevcut deponun yapısı uygun mu nasıl anlarız?', a: 'İlk keşifte ekibimiz mevcut taşıyıcı sistemi, kolon-kiriş kapasitesini ve zemin durumunu inceler. Statik hesap sonrasında uygunluk netleşir.' },
      { q: 'Üretimi durdurmadan kurulabilir mi?', a: 'Çoğu projemizde evet. Modüler sistem sayesinde aşamalı kurulum yapılabilir; operasyonel risk en aza indirilir.' }
    ]
  },
  {
    id: 'guclendirme',
    code: 'H-05',
    title: 'Çelik Güçlendirme & Yenileme',
    tag: 'ozel',
    short: 'Mevcut betonarme veya çelik yapıların depreme karşı güçlendirilmesi ve yenilenmesi.',
    lead: 'Var olan binanızın yıkıp yeniden yapmadan, çelik konstrüksiyon ile güçlendirilmesi. Mevcut betonarme veya çelik yapılarda statik dayanım artırımı.',
    tags: ['Güçlendirme', 'Yenileme', 'Statik'],
    features: [
      { num: 'F-01', t: 'Detaylı İnceleme', p: 'Mevcut yapının taşıyıcı sisteminin yerinde tespiti, beton kalite testleri ve statik analiz.' },
      { num: 'F-02', t: 'Çelik Manto', p: 'Mevcut kolon ve kirişlerin çelik manto ile sarılarak taşıma kapasitesinin artırılması.' },
      { num: 'F-03', t: 'Perde Duvar Eklemeleri', p: 'Çelik perde duvar ilavesi ile yapının yatay yük taşıma kapasitesi artırılır.' },
      { num: 'F-04', t: 'Çatı & Kabuk Yenileme', p: 'Eski çelik çatıların yenilenmesi, kabuk değişimi ve kapasite artırımı.' }
    ],
    faq: [
      { q: 'Güçlendirme mi, yıkıp yeniden yapmak mı?', a: 'Bu kararı yapı denetim raporu ve statik analiz sonrası netleştiriyoruz. Bazı durumlarda güçlendirme çok daha ekonomik ve hızlı; bazılarında yıkıp yenilemek gerekiyor. Önce inceleme.' }
    ]
  },
  {
    id: 'muhendislik',
    code: 'H-06',
    title: 'Proje & Mühendislik Hizmetleri',
    tag: 'ozel',
    short: 'Statik hesap, 3D modelleme, shop drawing — sadece mühendislik hizmeti olarak da sunuyoruz.',
    lead: 'İmalatı başka firmada olan veya kendi imalatınızı yapacağınız projelerde, sadece mühendislik tarafını üstleniyoruz. Statik hesaptan üretim resimlerine kadar.',
    tags: ['Statik', '3D Model', 'Shop Drawing', 'Mühendislik'],
    features: [
      { num: 'F-01', t: 'Statik Hesap', p: 'Yapının tüm taşıyıcı elemanlarının ulusal ve uluslararası standartlara uygun hesabı.' },
      { num: 'F-02', t: '3D Modelleme', p: 'Tekla veya benzeri yazılımlarda detaylı 3D model, çakışma kontrolü ve görselleştirme.' },
      { num: 'F-03', t: 'Shop Drawing', p: 'Üretime hazır, atölye/saha ölçeğinde detaylı imalat resimleri.' },
      { num: 'F-04', t: 'Danışmanlık', p: 'Proje süresince teknik danışmanlık, malzeme önerisi, alternatif çözüm önerileri.' }
    ],
    faq: [
      { q: 'Sadece mühendislik için fiyat veriyor musunuz?', a: 'Evet. Projenin büyüklüğüne, karmaşıklığına ve teslim süresine göre fiyat çıkarırız. Standart bir endüstriyel projede tipik teslim süresi 2-4 hafta.' }
    ]
  }
];

const PROJECTS = [
  { code: '2024-014', name: 'Aydın OSB Tekstil Fabrikası', cat: 'endustriyel', year: 2024, area: '12.450 m²', loc: 'Aydın', type: 'Fabrika', icon: 'factory' },
  { code: '2024-009', name: 'İzmir Lojistik Depo Kompleksi', cat: 'lojistik', year: 2024, area: '8.500 m²', loc: 'İzmir', type: 'Depo', icon: 'warehouse' },
  { code: '2024-006', name: 'Bodrum Prefabrik Villa Sitesi', cat: 'konut', year: 2024, area: '14 Ünite', loc: 'Muğla', type: 'Villa', icon: 'house' },
  { code: '2023-018', name: 'Denizli Otomotiv Yedek Parça Hangarı', cat: 'endustriyel', year: 2023, area: '5.200 m²', loc: 'Denizli', type: 'Hangar', icon: 'hangar' },
  { code: '2023-022', name: 'Bursa Gıda İşleme Tesisi', cat: 'endustriyel', year: 2023, area: '6.800 m²', loc: 'Bursa', type: 'Üretim', icon: 'factory' },
  { code: '2023-031', name: 'Antalya Kemer Prefabrik Konut Projesi', cat: 'konut', year: 2023, area: '28 Ünite', loc: 'Antalya', type: 'Konut', icon: 'house' },
  { code: '2024-002', name: 'Ankara Endüstri Mezzanine Sistemi', cat: 'endustriyel', year: 2024, area: '3.000 m²', loc: 'Ankara', type: 'Mezzanine', icon: 'mezzanine' },
  { code: '2022-027', name: 'Eskişehir Soğuk Hava Deposu', cat: 'lojistik', year: 2022, area: '4.500 m²', loc: 'Eskişehir', type: 'Soğuk Depo', icon: 'warehouse' },
  { code: '2023-040', name: 'İstanbul Ataşehir Showroom Çelik Yapı', cat: 'ozel', year: 2023, area: '1.800 m²', loc: 'İstanbul', type: 'Ticari', icon: 'showroom' },
  { code: '2024-011', name: 'Mersin Liman Hangar Projesi', cat: 'lojistik', year: 2024, area: '9.200 m²', loc: 'Mersin', type: 'Hangar', icon: 'hangar' },
  { code: '2023-015', name: 'Konya OSB Üretim Tesisi', cat: 'endustriyel', year: 2023, area: '7.500 m²', loc: 'Konya', type: 'Fabrika', icon: 'factory' },
  { code: '2024-007', name: 'Çeşme Butik Otel Prefabrik Yapısı', cat: 'konut', year: 2024, area: '22 Ünite', loc: 'İzmir', type: 'Otel', icon: 'house' }
];

const BLOG_POSTS = [
  { date: '12 NİS 2026', cat: 'MÜHENDİSLİK', title: 'Çelik Yapılarda Deprem Dayanımı: Yatırımcının Bilmesi Gerekenler', excerpt: 'Hafif çelik ve geleneksel betonarmenin deprem performansı, yönetmelik gereklilikleri ve doğru statik hesabın önemi üzerine bir derleme.' },
  { date: '02 NİS 2026', cat: 'KARŞILAŞTIRMA', title: 'Prefabrik Ev mi, Çelik Konstrüksiyon mu? Hangisi Size Uygun?', excerpt: 'İki yapı sisteminin maliyet, süre, dayanıklılık ve estetik açısından dürüst karşılaştırması. Karar kriterleri.' },
  { date: '18 MAR 2026', cat: 'SÜREÇ', title: 'Endüstriyel Çelik Yapı Projelerinde Süreç Yönetimi', excerpt: 'Tekliften anahtar teslime — bir endüstriyel projenin gerçekte nasıl ilerlediği, kritik karar noktaları ve sık yapılan hatalar.' },
  { date: '01 MAR 2026', cat: 'DEPOLAMA', title: 'Mezzanine Sistemleriyle Depolama Kapasitesini İkiye Katlamak', excerpt: 'Mevcut yapınızı genişletmeden, mezzanine ile m² kazancı sağlamanın teknik ve mali yönleri.' },
  { date: '15 ŞUB 2026', cat: 'MALİYET', title: 'Çelik Yapı Maliyetlerini Etkileyen 7 Kritik Faktör', excerpt: 'Aynı m²\'de neden fiyat farkı? Çelik kalitesi, açıklık, kaplama, lokasyon, statik karmaşıklık — gerçek maliyet bileşenleri.' },
  { date: '28 OCA 2026', cat: 'MALZEME', title: 'Hafif Çelik Profil Seçimi: Galvaniz mi, Boyalı mı?', excerpt: 'Prefabrik konutta kullanılan çelik profillerin korozyon koruması, dayanım ve maliyet açısından karşılaştırması.' }
];

// SVG icons for project visuals
const PROJECT_ICONS = {
  factory: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 130 L20 60 L60 60 L60 90 L100 60 L100 90 L140 60 L140 130 Z"/><rect x="30" y="100" width="14" height="30"/><rect x="70" y="100" width="14" height="30"/><rect x="110" y="100" width="14" height="30"/><line x1="20" y1="130" x2="180" y2="130"/><rect x="150" y="30" width="14" height="100"/></svg>`,
  warehouse: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 130 L20 80 L100 40 L180 80 L180 130 Z"/><line x1="20" y1="130" x2="180" y2="130"/><rect x="80" y="90" width="40" height="40"/><line x1="100" y1="90" x2="100" y2="130"/></svg>`,
  hangar: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M20 130 Q20 50 100 40 Q180 50 180 130 Z"/><line x1="20" y1="130" x2="180" y2="130"/><rect x="80" y="100" width="40" height="30"/></svg>`,
  house: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M40 130 L40 80 L100 40 L160 80 L160 130 Z"/><line x1="40" y1="130" x2="160" y2="130"/><rect x="85" y="95" width="30" height="35"/><rect x="55" y="90" width="20" height="20"/><rect x="125" y="90" width="20" height="20"/></svg>`,
  mezzanine: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="20" y="40" width="160" height="90"/><line x1="20" y1="85" x2="180" y2="85"/><line x1="40" y1="40" x2="40" y2="130"/><line x1="100" y1="40" x2="100" y2="130"/><line x1="160" y1="40" x2="160" y2="130"/></svg>`,
  showroom: `<svg viewBox="0 0 200 150" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="30" y="50" width="140" height="80"/><line x1="30" y1="130" x2="170" y2="130"/><rect x="50" y="70" width="30" height="60"/><rect x="90" y="70" width="30" height="60"/><rect x="130" y="70" width="30" height="60"/></svg>`
};

// ============================================
// ROUTER & PAGE SWITCHING
// ============================================
const pages = document.querySelectorAll('[data-page]');
const allLinks = document.querySelectorAll('[data-link], [data-service]');

function showPage(name, opts = {}) {
  pages.forEach(p => p.classList.remove('active'));
  const target = document.querySelector(`[data-page="${name}"]`);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.link === name || (name.startsWith('hizmet') && a.dataset.link === 'hizmetler'));
  });
  window.scrollTo({ top: 0, behavior: 'instant' });
  // Manage focus for keyboard/screen reader users
  setTimeout(() => {
    observeReveals();
    runCounters();
    const heading = target && target.querySelector('h1');
    if (heading) {
      heading.setAttribute('tabindex', '-1');
      heading.focus({ preventScroll: true });
    }
  }, 60);
}

function loadService(id) {
  const svc = SERVICES.find(s => s.id === id);
  if (!svc) return;
  document.getElementById('serviceCurrentName').textContent = svc.title;
  document.getElementById('serviceCode').textContent = `— ${svc.code} HİZMET`;
  document.getElementById('serviceTitle').textContent = svc.title;
  document.getElementById('serviceLead').textContent = svc.lead;
  document.getElementById('serviceCtaTitle').textContent = `${svc.title} projeniz var mı?`;

  // Features
  const fGrid = document.getElementById('serviceFeatures');
  fGrid.innerHTML = svc.features.map(f => `
    <div class="feature">
      <div class="num">${f.num}</div>
      <h3>${f.t}</h3>
      <p>${f.p}</p>
    </div>
  `).join('');

  // FAQ
  const fq = document.getElementById('serviceFaq');
  fq.innerHTML = svc.faq.map((f, i) => `
    <div class="faq-item">
      <button class="q" type="button" aria-expanded="false" aria-controls="faq-answer-${i}" id="faq-btn-${i}">
        <span>${f.q}</span><span class="icon" aria-hidden="true">+</span>
      </button>
      <div class="a" id="faq-answer-${i}" role="region" aria-labelledby="faq-btn-${i}">${f.a}</div>
    </div>
  `).join('');

  // Attach faq listeners
  fq.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.q');
    function toggleFaq() {
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen.toString());
    }
    btn.addEventListener('click', toggleFaq);
  });

  showPage('hizmet-detay');
}

// Handle all link clicks
document.addEventListener('click', e => {
  const linkEl = e.target.closest('[data-link]');
  const svcEl = e.target.closest('[data-service]');

  if (svcEl) {
    e.preventDefault();
    loadService(svcEl.dataset.service);
    return;
  }

  if (linkEl) {
    e.preventDefault();
    const target = linkEl.dataset.link;
    showPage(target);
    closeMobileMenu();
  }
});

// ============================================
// RENDER: HOMEPAGE SERVICES GRID
// ============================================
function renderServices(targetId) {
  const el = document.getElementById(targetId);
  if (!el) return;
  el.innerHTML = SERVICES.map((s, i) => `
    <a href="#hizmet-detay" data-service="${s.id}" class="service-card">
      <div class="top-row">
        <span class="service-num">${s.code}</span>
        <span class="service-arrow">↗</span>
      </div>
      <h3 class="h-3">${s.title}</h3>
      <p>${s.short}</p>
      <div class="tags">
        ${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </a>
  `).join('');
}
renderServices('servicesGrid');
renderServices('allServicesGrid');

// ============================================
// RENDER: PROJECTS
// ============================================
function renderProjects(targetId, items, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = limit ? items.slice(0, limit) : items;
  el.innerHTML = list.map(p => `
    <article class="project-card" data-cat="${p.cat}">
      <div class="visual">
        <div class="silhouette">${PROJECT_ICONS[p.icon] || PROJECT_ICONS.factory}</div>
        <div class="corner">${p.code}</div>
      </div>
      <div class="body">
        <div class="meta"><span>${p.type}</span><span>${p.year}</span></div>
        <h3 class="title">${p.name}</h3>
        <div class="specs">
          <div class="spec">Alan<strong>${p.area}</strong></div>
          <div class="spec">Konum<strong>${p.loc}</strong></div>
        </div>
      </div>
    </article>
  `).join('');
  // Set svg color
  el.querySelectorAll('.silhouette svg').forEach(s => s.style.color = 'rgba(234,228,212,0.85)');
}

renderProjects('featuredProjects', PROJECTS, 6);
renderProjects('allProjects', PROJECTS);

// Project filter
document.getElementById('projectsFilter')?.addEventListener('click', e => {
  const btn = e.target.closest('.filter-chip');
  if (!btn) return;
  document.querySelectorAll('.filter-chip').forEach(b => {
    b.classList.remove('active');
    b.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');
  const filter = btn.dataset.filter;
  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
  renderProjects('allProjects', filtered);
  setTimeout(observeReveals, 50);
});

// ============================================
// RENDER: BLOG
// ============================================
function renderBlog(targetId, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const list = limit ? BLOG_POSTS.slice(0, limit) : BLOG_POSTS;
  el.innerHTML = list.map(p => `
    <article class="blog-card">
      <div class="meta"><span class="cat">${p.cat}</span><span>${p.date}</span></div>
      <h3 class="title">${p.title}</h3>
      <p class="excerpt">${p.excerpt}</p>
      <a class="read" href="#blog" data-link="blog" aria-label="Yazıyı okuyun: ${p.title.replace(/"/g, '&quot;')}">Yazıyı Okuyun <span aria-hidden="true">→</span></a>
    </article>
  `).join('');
}
renderBlog('blogPreview', 3);
renderBlog('allBlog');

// ============================================
// HEADER SCROLL
// ============================================
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ============================================
// MOBILE MENU
// ============================================
const mobileMenu = document.getElementById('mobileMenu');
const menuToggleBtn = document.getElementById('menuToggle');
function openMobileMenu() {
  mobileMenu.classList.add('open');
  document.body.style.overflow = 'hidden';
  menuToggleBtn.setAttribute('aria-expanded', 'true');
  menuToggleBtn.setAttribute('aria-label', 'Menüyü kapat');
  const firstLink = mobileMenu.querySelector('nav a');
  if (firstLink) firstLink.focus();
}
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
  menuToggleBtn.setAttribute('aria-expanded', 'false');
  menuToggleBtn.setAttribute('aria-label', 'Menüyü aç');
}
document.getElementById('menuToggle').addEventListener('click', openMobileMenu);
document.getElementById('menuClose').addEventListener('click', closeMobileMenu);

// ============================================
// SEARCH OVERLAY
// ============================================
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function openSearch() {
  searchOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => searchInput.focus(), 50);
}
function closeSearch() {
  searchOverlay.classList.remove('open');
  document.body.style.overflow = '';
  searchInput.value = '';
  searchResults.innerHTML = '';
}
document.getElementById('searchOpen').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeSearch(); closeMobileMenu(); }
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
});

// Build search index
const searchIndex = [
  ...SERVICES.map(s => ({ title: s.title, cat: 'HİZMET', text: s.short + ' ' + s.tags.join(' '), action: () => loadService(s.id) })),
  ...PROJECTS.map(p => ({ title: p.name, cat: 'PROJE · ' + p.type, text: p.loc + ' ' + p.type, action: () => showPage('projeler') })),
  ...BLOG_POSTS.map(b => ({ title: b.title, cat: 'YAZI · ' + b.cat, text: b.excerpt, action: () => showPage('blog') })),
  { title: 'Hakkımızda', cat: 'SAYFA', text: '30 yıl mühendislik denizli kuruluş tarihçe', action: () => showPage('hakkimizda') },
  { title: 'İletişim & Keşif Talebi', cat: 'SAYFA', text: 'telefon adres mesai keşif teklif', action: () => showPage('iletisim') }
];

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) { searchResults.innerHTML = ''; return; }
  const results = searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.text.toLowerCase().includes(q)
  ).slice(0, 7);
  searchResults.innerHTML = results.length
    ? results.map((r, i) => `<a href="#" data-idx="${i}"><span>${r.title}</span><span class="cat">${r.cat}</span></a>`).join('')
    : `<a href="#" style="opacity: 0.6; pointer-events: none;"><span>Sonuç bulunamadı.</span><span class="cat">—</span></a>`;
  searchResults.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const idx = parseInt(a.dataset.idx);
      if (!isNaN(idx) && results[idx]) {
        closeSearch();
        results[idx].action();
      }
    });
  });
});

// ============================================
// SCROLL REVEAL (IntersectionObserver)
// ============================================
let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
    if (!el.classList.contains('in')) revealObserver.observe(el);
  });
}
observeReveals();

// ============================================
// COUNTER ANIMATION
// ============================================
let countersRan = false;
function runCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting || e.target.dataset.done) return;
      e.target.dataset.done = 1;
      const target = parseFloat(e.target.dataset.target);
      const isDecimal = target % 1 !== 0;
      const duration = 1600;
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = target * eased;
        e.target.textContent = isDecimal ? val.toFixed(1) : Math.floor(val);
        if (t < 1) requestAnimationFrame(step);
        else e.target.textContent = isDecimal ? target.toFixed(1) : target;
      }
      requestAnimationFrame(step);
      obs.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  counters.forEach(c => obs.observe(c));
}
runCounters();

// ============================================
// CONTACT FORM
// ============================================
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"] span:first-child');
  btn.textContent = 'Talebiniz Alındı';
  e.target.style.opacity = '0.6';
  e.target.style.pointerEvents = 'none';
  setTimeout(() => {
    e.target.reset();
    btn.textContent = 'Talebi Gönder';
    e.target.style.opacity = '';
    e.target.style.pointerEvents = '';
  }, 4000);
});

// ============================================
// INITIAL ROUTING from hash
// ============================================
function handleHash() {
  const hash = window.location.hash.replace('#', '');
  if (!hash) { showPage('home'); return; }
  const validPages = ['home', 'hakkimizda', 'hizmetler', 'projeler', 'blog', 'iletisim'];
  if (validPages.includes(hash)) showPage(hash);
}
handleHash();
window.addEventListener('hashchange', handleHash);

