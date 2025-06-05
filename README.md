![image](https://github.com/user-attachments/assets/0eec7ddd-9b0c-46f4-93c4-800792618241)# TweetFetcher
# 🧠 AI Tweet Analiz Otomatı

Swipeline AI Studio – Developer Intern teknik görevi kapsamında geliştirilen bu mini uygulama, kullanıcıdan bir tweet URL'si alır, içeriğini analiz eder ve sonucu Airtable tablosuna kaydeder.

---

## 🚀 Özellikler

✅ Tweet URL’si girilir  
✅ Tweet içeriği, kullanıcı adı ve sahte gönderim tarihi alınır  
✅ OpenAI API ile içerik özeti ve duygu analizi yapılır  
✅ Sonuçlar şu bilgilerle birlikte Airtable tablosuna yazılır:

| @username | Tweet İçeriği | Duygu | Özet | Tarih ve Saat |
|-----------|---------------|-------|------|----------------|

---

## 🛠️ Kullanılan Teknolojiler

- React (zorunlu)
- OpenAI ChatGPT API (duygu ve özet analizi)
- Airtable API (veri kaydı)
- Vite (geliştirme sunucusu)
- (Opsiyonel) Node.js backend — kullanılmamıştır

---

## 📦 Kurulum ve Çalıştırma

### 1. Reposu Klonlayın


git clone https://github.com/kullanici-adi/tweet-analyzer-app.git
cd tweet-analyzer-app
2. Bağımlılıkları Kurun
npm install
3. .env Dosyasını Oluşturun
Proje kök dizinine .env dosyası oluşturun ve aşağıdaki örnek ortam değişkenlerini ekleyin:

env
REACT_APP_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
REACT_APP_AIRTABLE_API_KEY=patXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
REACT_APP_OPENAI_API_KEY=sk-proj-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
📌 Gerçek anahtarlarınızı Airtable Developer Hub ve OpenAI Platform üzerinden alabilirsiniz.

4. Uygulamayı Başlatın

npm run dev
Tarayıcıda http://localhost:3000 adresine giderek uygulamayı kullanmaya başlayabilirsiniz.
![image](https://github.com/user-attachments/assets/c4e012ac-5054-4252-b29a-e1ab4208d678)


💡 Neler Yapıldı?
 Tweet URL’si input alındı

 Kullanıcı adı çıkarıldı (@username)

 Tweet içeriği ve saat (sahte) üretildi

 OpenAI ile içerik özeti + duygu analizi yapıldı

 Airtable tablosuna yeni satır eklendi

 Her yeni girişte önceki veriler silinmeden eklenmeye devam edildi

🧪 Geliştirici Notları
Tweet içeriğini doğrudan Twitter'dan almak, frontend'de teknik sınırlamalar ve X.com politikaları nedeniyle mümkün değildir. Bu nedenle analiz işlemi ChatGPT API üzerinden simüle edilmiştir.
https://developer.x.com/en dan api key alma yöntemi de denendi ama mümkün olmadı:
![image](https://github.com/user-attachments/assets/3eb6eb5e-35f7-45fc-a68d-f770d7471db1)

Uygulama sade ve işlevsel olarak tasarlanmıştır, UI/UX öncelikli değildir.


![image](https://github.com/user-attachments/assets/8ca68964-5c2b-4068-9554-aeff9e5805f5)

