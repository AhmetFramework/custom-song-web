🔀 Branch Yönetimi & Main’e Merge Süreci

Bu projede ekip çalışması için üç ana branch kullanılır:

main → Canlı / stabil sürüm

develop →  Ahmet geliştirme branch’i

? → İsmail geliştirme branch’i

❗ Önemli Kural

main branch’e doğrudan geliştirme yapılmaz.
Tüm geliştirmeler önce develop üzerinde yapılır, ardından kontrollü şekilde main’e merge edilir.

🧭 Geliştirme Akışı (Özet)

Geliştirme develop branch’inde yapılır

Değişiklikler commit edilir ve GitHub’a pushlanır

develop branch’i main branch’e merge edilir

main her zaman stabil kalır

🚀 Develop → Main Merge (VS Code Terminal Üzerinden)

Aşağıdaki adımlar VS Code içindeki terminalden yapılabilir.

1️⃣ Develop Branch’inde Olduğunu Kontrol Et
git branch


Çıktıda * develop görmelisin.

2️⃣ Develop Branch’ini Güncellediğinden Emin Ol
git pull origin develop

3️⃣ Main Branch’ine Geç
git checkout main

4️⃣ Main Branch’ini Güncelle
git pull origin main

5️⃣ Develop’u Main’e Merge Et
git merge develop


Eğer conflict yoksa merge otomatik tamamlanır.

6️⃣ Main Branch’ini GitHub’a Pushla
git push origin main


🎉 Artık develop’ta yaptığın değişiklikler GitHub’daki main branch’te görünür.

🧠 Ne Zaman Merge Yapılmalı?

Bir özellik tamamlandığında

Site çalışır durumdaysa

Kırık UI / hatalı akış yoksa

❌ Deneme kodları varken merge yapılmaz
❌ Yarım bırakılmış işler merge edilmez

👥 Ekip İçin Önerilen Çalışma Şekli
# Geliştirmeye başla
git checkout develop
git pull
git checkout -b feature/feature-name

# İş bitince
git add .
git commit -m "Add feature description"
git push origin feature/feature-name


Ardından GitHub üzerinden Pull Request açılması önerilir.

📌 Not

Bu yapı:

Kod güvenliğini artırır

Ekip içi hataları azaltır

Profesyonel proje standartlarına uygundur

🔚 README’YE EKLEME TALİMATI

README.md dosyasını aç

Yukarıdaki bölümü uygun bir yere ekle

Kaydet

Commit & push:

git add README.md
git commit -m "Add branch and merge workflow documentation"
git push
