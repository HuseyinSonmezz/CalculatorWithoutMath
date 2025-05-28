# CalculatorWithoutMath (English & Turkish)

This JavaScript program performs the four basic arithmetic operations (addition, subtraction, multiplication, division) using **strings** instead of traditional mathematical operators. (The `"--"` operator used for decrementing in loops is the only exception.)


## 🔧 How Does It Work?

The user is asked which operation they want to perform:

1. Addition  
2. Subtraction  
3. Multiplication  
4. Division  

Then, the user inputs two numbers. The program processes these two numbers by:

- For addition, writing `"c"` characters consecutively to calculate the total length.  
- For subtraction, creating two `"c"` character strings and cutting one from the other to find the difference.  
- For multiplication, writing `"c"` characters repeatedly.  
- For division, splitting the `"c"` characters into parts of specific lengths to find the quotient.

This calculation method aims to reach the result solely through string manipulations without teaching the computer numeric processing concepts. It is an educational and experimental project.

## 🎯 Why This Method?

- **To understand basic programming concepts:** It practices loops, string operations, and working with arrays.  
- **To develop abstraction skills:** Converting numbers into strings and operating on them enhances abstract thinking.  
- **To grasp the fundamentals of mathematics:** It shows that arithmetic is not just about numbers but also about representations of quantities.


## 💡 Purpose

This program is written especially for beginners to reinforce:

- Loop structures (for),  
- Conditions (if),  
- String operations (concat, slice, length),  
- User interaction (prompt, alert).


## 🧪 Example Usage

### 1) Addition (`+`)

- For the two numbers entered by the user, a `'c'` character string is created for each.  
- The two strings are concatenated.  
- The length of the combined string gives the sum.

**Example:**  
`3 + 2` → `"ccc" + "cc"` → `"ccccc"` → length 5 → result 5.

---

### 2) Subtraction (`-`)

- A `'c'` character string is created for the first number.  
- Another `'c'` string is created for the second number.  
- Characters equal to the length of the second string are sliced off from the start of the first string.  
- The length of the remaining string gives the difference.

**Example:**  
`5 - 2` → `"ccccc"` - `"cc"` → remaining `"ccc"` → length 3 → result 3.

---

### 3) Multiplication (`×`)

- A `'c'` character string is created for the first number.  
- This string is repeated as many times as the second number.  
- The length of the resulting string gives the product.

**Example:**  
`3 × 4` → `"ccc"` × 4 → `"ccc" + "ccc" + "ccc" + "ccc"` → length 12 → result 12.

---

### 4) Division (`÷`)

- A `'c'` character string is created for the first number (dividend).  
- Another `'c'` string is created for the second number (divisor).  
- The dividend string is split into parts equal in length to the divisor string.  
- The number of full parts obtained is the quotient (integer division).

**Example:**  
`10 ÷ 3` → `"cccccccccc"` split into chunks of 3 → 3 full parts (9 characters), 1 character left → result 3.

---


## 🧠 Notes

- Numbers should not be negative or decimal.  
- No extra validation against user errors.  
- Performance may degrade with large numbers (slows down as string length grows).

---


## 🚀 Contribute

Try experimenting with different string characters, add a UI, or create a command-line version using Node.js!


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


# CalculatorWithoutMath

Bu JavaScript programı, dört temel aritmetik işlemi (toplama, çıkarma, çarpma, bölme) geleneksel matematiksel operatörler yerine **karakter dizileri (stringler)** ile gerçekleştirir. (Döngülerde azaltma için kullanılan `"--"` operatörü istisnadır.)


## 🔧 Nasıl Çalışır?

Kullanıcıdan hangi işlemi yapmak istediği sorulur:

1. Toplama  
2. Çıkarma  
3. Çarpma  
4. Bölme  

Ardından iki sayı girmesi istenir. Program bu iki sayıyı:

- Toplama için `"c"` karakterlerini art arda yazarak toplam uzunluğunu hesaplar.
- Çıkarma için `"c"` karakterleriyle iki dize oluşturur, sonra birini diğerinden keserek farkı bulur.
- Çarpma için `"c"` karakterlerini tekrar tekrar yazar.
- Bölme için `"c"` karakterlerini belirli uzunlukta parçalara ayırarak bölüm bulur.

Bu hesaplama yöntemi, bilgisayara sayısal işlem kavramı öğretilmeden sadece dize manipülasyonlarıyla sonuca ulaşmayı amaçlar. Eğitimsel ve deneysel bir projedir.


## 🎯 Neden Böyle Bir Yöntem?

- **Temel programlama kavramlarını anlamak:** Döngüler, string işlemleri, dizilerle çalışmak gibi konuları pratik ettirir.  
- **Soyutlama yeteneği geliştirmek:** Sayıları karakter dizilerine dönüştürüp üzerinde işlem yapmak, soyut düşünmeyi artırır.  
- **Matematiğin temellerini kavramak:** Aritmetiğin sadece sayılar değil, aynı zamanda miktarların temsili olduğunu göstermek.


## 💡 Amaç

Bu program, özellikle yeni başlayanlar için:

- Döngü yapıları (for),
- Koşullar (if),
- String işlemleri (concat, slice, length),
- Kullanıcı etkileşimi (prompt, alert)

konularını pekiştirmek amacıyla yazılmıştır.


## 🧪 Örnek Kullanım

### 1) Toplama | Addition (`+`)

- Kullanıcının girdiği iki sayı için, her biri kadar `'c'` karakteri oluşturulur.
- İki karakter dizisi birleştirilir.
- Sonuç olarak birleşen dizinin uzunluğu toplamı verir.

**Örnek:**  
`3 + 2` → `"ccc" + "cc"` → `"ccccc"` → uzunluk 5 → sonuç 5.

---

### 2) Çıkarma | Subtraction (`-`)

- İlk sayı kadar `'c'` karakter dizisi oluşturulur.
- İkinci sayı kadar `'c'` karakter dizisi oluşturulur.
- İkinci dizinin uzunluğu kadar ilk dizinin başından karakterler çıkarılır (dilimlenir).
- Kalan dizinin uzunluğu farkı verir.

**Örnek:**  
`5 - 2` → `"ccccc"` - `"cc"` → kalan `"ccc"` → uzunluk 3 → sonuç 3.

---

### 3) Çarpma | Multiplication (`×`)

- İlk sayı kadar `'c'` karakter dizisi oluşturulur.
- Bu dizi, ikinci sayı kadar tekrar edilir (birleştirilir).
- Sonuç dizinin uzunluğu çarpımı verir.

**Örnek:**  
`3 × 4` → `"ccc"` × 4 → `"ccc" + "ccc" + "ccc" + "ccc"` → uzunluk 12 → sonuç 12.

---

### 4) Bölme | Division (`÷`)

- İlk sayı kadar `'c'` karakter dizisi oluşturulur (bölünen).
- İkinci sayı kadar `'c'` karakter dizisi oluşturulur (bölen).
- Bölünen dizi, bölenin uzunluğu kadar parçalara bölünür.
- Kaç tane tam parça çıkarsa sonuç o olur (tam bölme).

**Örnek:**  
`10 ÷ 3` → `"cccccccccc"` bölünür 3'erli parçalara → 3 tam parça (9 karakter), 1 karakter artar → sonuç 3.

---


## 🧠 Dikkat Edilecekler

- Sayılar negatif veya ondalıklı olmamalı.
- Kullanıcı hatalarına karşı ekstra kontrol yok.
- Performans büyük sayılarda düşebilir (string uzunluğu arttıkça yavaşlar). 

---

## 🚀 Katkıda Bulun

Farklı string karakterleriyle başka işlemler deneyebilir, UI ekleyebilir ya da Node.js ile komut satırı sürümü yapabilirsin!
