# Bill Gates'in Parasını Harca (React Uygulaması)

## Canlı Demo
[Projeyi Canlı Görüntüle](https://your-demo-link.vercel.app)

Bu proje, Bill Gates'in servetini hayali olarak harcayabileceğiniz, modern ve eğlenceli bir React uygulamasıdır. Neal.fun sitesinin "Spend Bill Gates' Money" oyununa benzer şekilde tasarlanmıştır.

## Özellikler
- **Ürün Listesi:** Onlarca farklı ürün arasından seçim yaparak Bill Gates'in parasını harcayabilirsiniz.
- **Sepet ve Anlık Fiş:** Seçtiğiniz ürünler ve adetleri anlık olarak "Your Receipt" (fiş) kısmında görüntülenir.
- **Bakiye Takibi:** Harcamalarınıza göre kalan bakiyeniz anlık olarak güncellenir.
- **Buy/Sell Butonları:** Her ürün için istediğiniz adette alım/satım yapabilirsiniz.
- **Modern ve Responsive Tasarım:** Tüm cihazlarda şık ve kullanışlı bir arayüz.
- **Footer'da Öneriler:** Neal.fun'dan popüler oyunlara hızlı erişim.

## Kurulum

1. **Projeyi Klonlayın:**
   ```bash
   git clone <repo-link>
   cd bill-gates
   ```
2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```
3. **Projeyi Başlatın:**
   ```bash
   npm start
   ```
   Ardından tarayıcınızda `http://localhost:3000` adresine gidin.

## Kullanım
- Ürün kartlarındaki inputa almak/satmak istediğiniz adedi girin.
- "Buy" butonuna tıklayarak ürün satın alın, "Sell" ile satabilirsiniz.
- Alım/satım işlemleri ve inputtaki değerler anlık olarak fiş ve bakiye alanına yansır.
- Alt kısımdaki önerilerden Neal.fun'ın diğer popüler oyunlarına ulaşabilirsiniz.

## Ekran Görüntüsü

![Uygulama Ekran Görüntüsü](./screenshot.png)

## Proje Yapısı
```
bill-gates/
├── public/
├── src/
│   ├── components/
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.jsx
│   │   ├── Summary.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── ...
│   ├── App.js
│   ├── products.js
│   └── ...
├── package.json
└── ...
```

## Katkı ve Lisans
Bu proje eğitim ve eğlence amaçlıdır. Katkıda bulunmak isterseniz pull request gönderebilirsiniz.

---

**Not:** Bu proje Neal.fun'ın resmi bir ürünü değildir, sadece klon ve eğitim amaçlıdır. 