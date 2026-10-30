# VastuGeo Store - Setup & Dynamic Google Sheet Guide

Aapki website ab **100% Dynamic** ho chuki hai! Aap Google Sheet se na sirf **Products aur Prices**, balki **Website ka Naam, Logo, Headline, WhatsApp Number aur UPI ID** bhi live change kar sakte hain.

---

## 🚀 Live Website
👉 **https://yuviteltechnologies-art.github.io/vastu-website/**

---

## 📊 Google Sheet Setup (2 Tabs Format)

Apni Google Sheet me niche diye gaye **2 Tabs (Sheets)** banayein:

### 📑 Tab 1: `Settings` (Website Details)
Sheet ke pehle tab ka naam rakhein: `Settings`  
Row 1 me headers: `key` | `value` | `description`

| key | value | description |
| :--- | :--- | :--- |
| `brand_name` | VastuGeo | Website ka main naam / Logo text |
| `brand_tagline` | Mathematical Vastu Tools | Logo ke niche chota text |
| `logo_url` | (Image link ya khali chhod dein) | Custom logo image URL |
| `announcement_text` | Special Launch Discount: 50% OFF today! | Top bar announcement text |
| `hero_badge` | For Modern Vastu Consultants & Architects | Chota trust badge |
| `hero_title` | Khatam Karein Manual Compass Ki Galatfehmi. 100% Accurate Vastu with GeoGebra | Hero headline |
| `hero_subtitle` | 16 Zones, 32 Entrances aur 45 Devtas map karein... | Hero description |
| `whatsapp_number` | 919876543210 | WhatsApp order number (with 91) |
| `upi_id` | yourname@okaxis | UPI QR code payment address |

---

### 📑 Tab 2: `Products` (Digital Goods Catalog)
Sheet ke doosre tab ka naam rakhein: `Products`  
Row 1 me yeh 10 headers honge:

| id | title | category | badge | price_original | price_selling | thumbnail | description | features | is_active |
|---|---|---|---|---|---|---|---|---|---|
| `ggb-16-zones` | 16 Zones GeoGebra Vastu Chakra | `software` | Most Popular | 1999 | 799 | image_url | Details... | Feature 1, Feature 2 | TRUE |
| `ggb-32-doors` | 32 Entrances Calculator | `software` | Best Seller | 2499 | 999 | image_url | Details... | Feature 1, Feature 2 | TRUE |
| `ggb-bundle` | Master Vastu Suite | `bundle` | 65% OFF | 7499 | 2499 | image_url | Details... | Feature 1, Feature 2 | TRUE |

---

## ⚡ 1-Minute Auto Setup (Apps Script)

Aapko manual tables banane ki bhi zaroorat nahi hai:
1. Google Sheet me jayein ➔ **Extensions** ➔ **Apps Script**.
2. Hamari `Code.gs` file ka pura code paste karein.
3. Dropdown me function select karein: **`setupAutoTabs`** aur **Run** daba dein!
4. Google Sheet me dono tabs (`Settings` aur `Products`) **apne aap sample data ke sath create ho jayenge!**
5. Fir upar blue button **Deploy** ➔ **New deployment** ➔ **Web app** (Who has access: `Anyone`) karke URL copy karein.
6. Website ke footer me **"Sheet Settings"** par click karke wo URL paste kar dein aur **Save** daba dein!
