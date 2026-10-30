# VastuGeo Store - Setup & Integration Guide

Aapki serverless website ready ho chuki hai! Yeh guide follow karke aap isse **Google Sheet**, **WhatsApp**, aur **Facebook Ads** ke sath connect kar sakte hain.

---

## 📁 Project Files
1. **`index.html`**: Complete Frontend website (Modern Gold/Indigo theme, Responsive, Category filters, WhatsApp order modal, UPI QR code generator, FAQs).
2. **`Code.gs`**: Google Apps Script code (Jo Google Sheet ko Live API bana deta hai).

---

## 🚀 Step 1: Apne Browser Me Website Open Karke Dekhein
Aap bina kisi server ke abhi ke abhi isse test kar sakte hain:
* Apne computer par `g:\Vastu_website\index.html` file par double click karein.
* Website aapke Chrome ya browser me open ho jayegi!
* Isme pehle se dummy products loaded hain taaki aap design aur WhatsApp order modal dekh sakein.

---

## 📊 Step 2: Google Sheet Setup (Backend CMS)

### 1. Nayi Google Sheet Banayein:
* [sheets.google.com](https://sheets.google.com) par jayein aur **Blank Sheet** banayein.
* Sheet ka naam rakhein: `VastuGeo Products`.
* Tab ka naam (niche sheet name) `Products` kar dein.

### 2. Sheet me pehli row (Headers) yeh likhein:
Row 1 me yeh 10 columns honge:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| **id** | **title** | **category** | **badge** | **price_original** | **price_selling** | **thumbnail** | **description** | **features** | **is_active** |

### 3. Google Apps Script Code Dalein (Free API):
1. Sheet ke menu me jayein: **Extensions** ➔ **Apps Script**.
2. Jo default code ho use mita kar hamari `Code.gs` file ka code paste kar dein.
3. Upar blue button **"Deploy"** par click karein ➔ **"New deployment"** select karein.
4. Settings:
   - **Select type:** Web app (gear icon par click karke)
   - **Execute as:** `Me` (aapka email)
   - **Who has access:** `Anyone` (Bahut zaroori hai!)
5. **Deploy** button dabayein aur permission grant karein.
6. Jo **Web App URL** milega (jaise `https://script.google.com/macros/s/AKfycb.../exec`), use copy kar lein!

---

## 🔗 Step 3: Google Sheet ko Website Se Connect Karein

1. Apni website (`index.html`) ko browser me kholein.
2. Sabse niche Footer me **"Sheet Settings"** link par click karein.
3. Ek popup khulega:
   - **WhatsApp Number:** Apna 10-digit number country code ke sath dalein (e.g., `919876543210`).
   - **UPI ID:** Apni UPI ID dalein (e.g., `vastu@oksbi` ya `mobile@paytm`).
   - **Google Sheet URL:** Jo Step 2 me Web App URL mila tha, yahan paste kar dein.
4. **"Save & Refresh"** dabayein!
5. **Kamaal dekhein:** Ab website direct aapki Google Sheet se live products uthayegi! Jab bhi aap sheet me price ya title badlenge, site par refresh karte hi update ho jayega.

---

## 🎯 Step 4: Facebook Ads (Meta Ads) Ke Liye 100% Free Hosting

Facebook ads me `script.google.com` link daalenge toh ad reject ho sakti hai. Isliye is `index.html` file ko 2 minute me free host karein:

### Tarika: Cloudflare Pages ya Netlify (100% Free & Unlimited Traffic)
1. [app.netlify.com/drop](https://app.netlify.com/drop) par jayein (koi credit card nahi lagta).
2. Apna `Vastu_website` folder drag-and-drop kar dein.
3. 5 second me aapko ek sundar live link mil jayega (e.g. `vastu-tools.netlify.app`).
4. Agar aapke paas apni domain hai (e.g., `vastutools.in`), toh wo bhi 1-click me connect ho jati hai.
5. Ab aap is link par **Facebook Meta Pixel** aur **FB Ads** bina kisi dar ya policy rejection ke chala sakte hain!

---

## 💬 Step 5: WhatsApp Pe Order Kaise Aayega?
1. Customer website par aayega aur **"Buy via WhatsApp"** dabayega.
2. Pre-typed message khulega:
   > *"Namaste VastuGeo! Mujhe yeh GeoGebra Software file chahiye: 16 Zones Template (₹799)..."*
3. Customer aapko message bhejega.
4. Aap WhatsApp par hi unko UPI QR bhejenge ya instant Google Drive download link share kar denge!

