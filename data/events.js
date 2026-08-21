/**
 * gezenbiri — Central Master Event & Trip Data Model
 * Version: 2.0 (Single Source of Truth)
 * 
 * Bu veri tablosu; web sitesi, seyahat kartları, Instagram önizlemeleri ve
 * marka kılavuzundaki tüm etkinlik/rota bilgilerinin tek ve resmi kaynağıdır.
 */

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.GezenbiriData = factory();
    }
}(typeof self !== 'undefined' ? self : this, function () {

    // Helper: ISO tarihten (YYYY-MM-DD) Türkçe gün ve formatlı tarih üretimi
    function formatDateTurkish(isoDateStr) {
        const dateObj = new Date(isoDateStr + "T12:00:00Z");
        const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
        const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
        
        const dayName = days[dateObj.getUTCDay()];
        const dayNum = dateObj.getUTCDate();
        const monthName = months[dateObj.getUTCMonth()];
        const year = dateObj.getUTCFullYear();

        return {
            fullFormatted: `${dayNum} ${monthName} ${year}, ${dayName}`,
            shortFormatted: `${dayNum} ${monthName.slice(0, 3).toUpperCase()}`,
            dayName: dayName,
            dayNum: dayNum,
            monthName: monthName,
            year: year
        };
    }

    const events = [
        /* ================= 1. ATÖLYELER & ŞEHİR (EXPERIENCE) ================= */
        {
            id: "EVT-WS-001",
            type: "workshop",
            category: "atölye",
            categoryLabel: "Seramik & El Sanatları",
            title: "Seramik Atölyesi: Doğal Formlar",
            location: "Alaçatı, Çeşme",
            venue: "Taş Konak Atölyesi",
            startDate: "2026-08-21", // 21 Ağustos 2026 = Cuma
            endDate: "2026-08-21",
            time: "14:00 – 17:30",
            price: "₺850",
            priceRaw: 850,
            capacity: 12,
            availableSlots: 4,
            status: "open",
            tag: "Popüler",
            instructor: "Selin Y. (Seramik Sanatçısı)",
            description: "Doğal çamurla tanışma, elle şekillendirme ve vazo formu oluşturma. Çay/kahve ve fırınlama dahildir.",
            included: ["Tüm Malzemeler & Çamur", "Fırınlama Hizmeti", "Kahve & Atıştırmalık", "Rehberlik & Eğitmenlik"],
            image: "assets/v2/workshop_seramik.jpg",
            isPrototype: true
        },
        {
            id: "EVT-WS-002",
            type: "workshop",
            category: "sofra",
            categoryLabel: "Gastronomi & Tadım",
            title: "Urla Bağları & Şarap Tadımı",
            location: "Urla Bağ Yolu, İzmir",
            venue: "Bağ Evi Mahzeni",
            startDate: "2026-08-22", // 22 Ağustos 2026 = Cumartesi
            endDate: "2026-08-22",
            time: "17:00 – 20:30",
            price: "₺1.250",
            priceRaw: 1250,
            capacity: 14,
            availableSlots: 2,
            status: "limited",
            tag: "Son 2 Yer",
            instructor: "Caner D. (Sommelier)",
            description: "Yerel üzüm çeşitleri, 5 farklı yerel şarap tadımı ve gün batımında zeytinyağlı Ege peynir tabağı eşleşmesi.",
            included: ["5 Kadeh Tadım", "Gurme Peynir & Şarküteri", "Bağ Gezisi", "Sommelier Anlatımı"],
            image: "assets/v2/workshop_sarap.jpg",
            isPrototype: true
        },
        {
            id: "EVT-WS-003",
            type: "workshop",
            category: "yerel",
            categoryLabel: "Sanat & Yürüyüş",
            title: "Sokak Fotoğrafçılığı Yürüyüşü",
            location: "Tarihi Kemeraltı, İzmir",
            venue: "Kızlarağası Hanı Önü",
            startDate: "2026-08-28", // 28 Ağustos 2026 = Cuma
            endDate: "2026-08-28",
            time: "10:00 – 13:30",
            price: "₺600",
            priceRaw: 600,
            capacity: 10,
            availableSlots: 5,
            status: "open",
            tag: "Yeni",
            instructor: "Murat B. (Belgesel Fotoğrafçısı)",
            description: "Doğal ışık kullanımı, sokakta insan hikayeleri yakalama ve kompozisyon atölyesi. Telefon kamerası uygundur.",
            included: ["Eğitim & Geribildirim", "Han Kahvesi", "Baskı Sertifikası"],
            image: "assets/v2/workshop_fotograf.jpg",
            isPrototype: true
        },
        {
            id: "EVT-WS-004",
            type: "workshop",
            category: "sofra",
            categoryLabel: "Mutfak & Lezzet",
            title: "Ege Zeytinyağlıları & Uzun Sofra",
            location: "Germiyan Köyü, Çeşme",
            venue: "Köy Fırını Bahçesi",
            startDate: "2026-08-29", // 29 Ağustos 2026 = Cumartesi
            endDate: "2026-08-29",
            time: "12:00 – 16:00",
            price: "₺950",
            priceRaw: 950,
            capacity: 16,
            availableSlots: 6,
            status: "open",
            tag: "Topluluk Sofrası",
            instructor: "Hatice Teyze & Gezenbiri Ekibi",
            description: "Köy pazarından ot toplama, ekşi mayalı ekmek yapımı ve asma altında kurulan 16 kişilik uzun masa yemeği.",
            included: ["Tüm Malzemeler", "Ortak Öğle Yemeği", "Sıcak Köy Ekmeği", "Köy İçi Yürüyüş"],
            image: "assets/v2/workshop_ege.jpg",
            isPrototype: true
        },

        /* ================= 2. GEZİLER, KAÇAMAKLAR & ROTALAR (ESCAPE) ================= */
        {
            id: "EVT-TRIP-001",
            type: "trip",
            category: "rota",
            categoryLabel: "Vadi & Doğa Keşfi",
            title: "Kapadokya Vadi Kaçamağı",
            location: "Kapadokya, Nevşehir",
            venue: "Göreme & Kızılçukur Vadisi",
            startDate: "2026-10-16", // 16 Ekim 2026 = Cuma
            endDate: "2026-10-18",   // 18 Ekim 2026 = Pazar
            duration: "2 Gece 3 Gün",
            price: "₺3.600",
            priceRaw: 3600,
            capacity: 16,
            availableSlots: 5,
            status: "open",
            tag: "Hafta Sonu",
            stay: "Cave Butik Otel",
            description: "Balon seyri, Kızılçukur gün batımı yürüyüşü, sıcak şarap tadımı ve yerel çömlek atölyesi.",
            included: ["Gidiş-Dönüş Ulaşım", "2 Gece Butik Cave Otel", "Serpme Kahvaltılar", "Vadi Transferleri", "Rehberlik"],
            image: "assets/kapadokya.jpg",
            isPrototype: true
        },
        {
            id: "EVT-TRIP-002",
            type: "trip",
            category: "hafta sonu",
            categoryLabel: "Ege & Sahil",
            title: "Alaçatı Taş Sokaklar & Deniz",
            location: "Alaçatı & Çeşme, İzmir",
            venue: "Taş Konak & Ilıca Koyu",
            startDate: "2026-08-21", // 21 Ağustos 2026 = Cuma
            endDate: "2026-08-23",   // 23 Ağustos 2026 = Pazar
            duration: "2 Gece 3 Gün",
            price: "₺2.950",
            priceRaw: 2950,
            capacity: 14,
            availableSlots: 3,
            status: "limited",
            tag: "Bu Hafta Sonu",
            stay: "Taş Konak Butik Otel",
            description: "Antika pazarı turu, butik kahveciler, taş konak dinlenmesi ve akşam zeytinyağlı Ege sofrası.",
            included: ["Ulaşım", "2 Gece Taş Konak", "Serpme Köy Kahvaltısı", "Koy Transferleri"],
            image: "assets/alacati.jpg",
            isPrototype: true
        },
        {
            id: "EVT-TRIP-003",
            type: "trip",
            category: "hafta sonu",
            categoryLabel: "Ada Kaçamağı",
            title: "Bozcaada Rüzgar Gülleri & Gün Batımı",
            location: "Bozcaada, Çanakkale",
            venue: "Rum Mahallesi & Polente Feneri",
            startDate: "2026-08-28", // 28 Ağustos 2026 = Cuma
            endDate: "2026-08-30",   // 30 Ağustos 2026 = Pazar
            duration: "2 Gece 3 Gün",
            price: "₺2.450",
            priceRaw: 2450,
            capacity: 16,
            availableSlots: 6,
            status: "open",
            tag: "Ada Rotası",
            stay: "Ada Butik Oteli",
            description: "Vapur yolculuğu, Rum mahallesi taş sokakları, Ayazma plajı ve Polente fenerinde rüzgar gülleri eşliğinde gün batımı.",
            included: ["Ulaşım", "Vapur Geçiş Ücretleri", "2 Gece Ada Oteli", "Ada Kahvaltıları"],
            image: "assets/v2/escape_cesme.jpg",
            isPrototype: true
        },
        {
            id: "EVT-TRIP-004",
            type: "trip",
            category: "sürpriz",
            categoryLabel: "Gizli Destinasyon",
            title: "Gizli Sürpriz Rota",
            location: "Sürpriz Destinasyon (Ege / Akdeniz)",
            venue: "Gizli Butik Konak",
            startDate: "2026-10-09", // 9 Ekim 2026 = Cuma
            endDate: "2026-10-11",   // 11 Ekim 2026 = Pazar
            duration: "2 Gece 3 Gün",
            price: "₺2.900",
            priceRaw: 2900,
            capacity: 12,
            availableSlots: 4,
            status: "open",
            tag: "Sürpriz",
            stay: "Özel Butik Mekan",
            description: "Nereye gittiğimizi minibüse binince öğreniyoruz. Şeffaf lojistik: Orta seviye yürüyüş, konforlu butik konaklama, bol kahkaha.",
            included: ["Tüm Ulaşım", "2 Gece Butik Konaklama", "Tüm Kahvaltılar & Akşam Yemekleri", "Sürpriz Etkinlikler"],
            image: "assets/v2/manifesto_dinner.jpg",
            isPrototype: true
        }
    ];

    // Format all dates dynamically upon loading
    events.forEach(evt => {
        evt.startMeta = formatDateTurkish(evt.startDate);
        evt.endMeta = formatDateTurkish(evt.endDate);
    });

    return {
        events: events,
        getWorkshops: function () {
            return events.filter(e => e.type === "workshop");
        },
        getTrips: function () {
            return events.filter(e => e.type === "trip");
        },
        getById: function (id) {
            return events.find(e => e.id === id);
        },
        formatDateTurkish: formatDateTurkish
    };

}));
