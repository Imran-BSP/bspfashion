Skip to main content
Ctrl+J



Worked for 1m 4s
Live site https://bspfashion.vercel.app check kiya. Summary:

Critical (orders / business)
1. Orders seller dashboard mein nahi aa rahe
Firebase mein products collection hai, orders collection empty / nahi bani
Matlab abhi tak koi order Place Order (login ke baad) se cloud pe save nahi hua
Ya customer sirf WhatsApp use kar rahe hain bina complete flow ke
Fix: Customer → Login → Cart ≥ ₹5000 → Order Place Karein → Firebase Data mein orders dikhna chahiye

2. Customers data cloud pe nahi
Customer register sirf browser localStorage mein hai
Alag phone pe seller ko registered customers list cloud se nahi milegi
Orders Firebase pe hain to order ke saath name/phone/address dikhega — alag customers collection sync abhi nahi hai
High priority (broken assets)
Asset	Status	Effect
/favicon.png	404	Browser tab icon missing
/og-image.jpg	404	WhatsApp / Facebook share preview broken
/logo.png	404	Agar logo is path se load ho to nahi dikhega
Navbar abhi “BSP” text circle use karti hai — alag logo file deploy nahi hai.

Medium (UI / category bugs)
3. Winter category partial
Filter + Add Product mein Winter Items hai ✅
Product modal mein category ab bhi sirf Kids / Men's / Ladies dikhati hai — Winter select hone par bhi “Kids Wear” likh sakta hai
4. Base catalog mein Winter product 0
HTML mein: Kids ~129, Men ~7, Women ~5, Winter = 0
Winter filter empty dikhega jab tak seller Winter category se product add na kare
5. Hinglish incomplete
Cart / buttons Hinglish hain
Nav ab bhi English: Home, Products, Gallery, About, Contact
Working theek hai ✅
Site load (200), size ~248 KB
Firebase connected (bsp-fashion-kol)
Product images (ImageKit) load ho rahe hain
Winter filter button, Edit product, login-required order flow code mein hai
gallery.html available (200)
Netlify links hata diye, Vercel URL set hai
Priority action list
Ek test order khud: Login → Place Order → Firebase orders check
favicon.png + og-image.jpg Vercel project root mein upload
Modal category line mein Winter label fix
Seller se Winter Items products add karo
Baad mein customers bhi Firebase pe save (optional)
Jo item pehle fix karna hai bolo — code fix (Winter modal + Hinglish nav) ya deploy checklist (favicon/og-image) — uspe turant kaam kar sakta hoon.

site mein kuch changes karna hoga jaisas maine screenshot upload kiya hai k bar language option add karna hoga


Worked for 1m 44s
Language option add ho gaya — UIDAI jaisa top bar mein dropdown.

File

Kya add hua
Top bar (right side) pe:

🌐 English ▾
   ├── English
   ├── हिन्दी
   └── বাংলা
Language choose karo → nav, headings, cart buttons change
Choice save rehti hai (localStorage) — dubara open pe same language
Languages
Code	Language
en	English
hi	हिन्दी
bn	বাংলা
Deploy
Is HTML ko Vercel pe upload/replace karo → site pe top-right language dropdown dikhega.

Agar Tamil / Hinglish aur languages chahiye, ya poori page ka har text translate, bata dena.

site ko multilanguage karna hoga jaise Assamese, Bengali, Gujarati, hindi, kannada, malayalam, marathi, odia, punjabi, tamil, telugu, urdu bhi add hoga


Worked for 2m 11s
Saari languages add ho gayi.

File

Language menu (top bar)
#	Language
1	English
2	অসমীয়া (Assamese)
3	বাংলা (Bengali)
4	ગુજરાતી (Gujarati)
5	हिन्दी (Hindi)
6	ಕನ್ನಡ (Kannada)
7	മലയാളം (Malayalam)
8	मराठी (Marathi)
9	ଓଡ଼ିଆ (Odia)
10	ਪੰਜਾਬੀ (Punjabi)
11	தமிழ் (Tamil)
12	తెలుగు (Telugu)
13	اردو (Urdu)
Kya change hota hai language select pe
Top bar MOQ text
Nav: Home, Products, Gallery, Reviews, About, Contact
Section headings
Cart title, Place Order, Add to Cart, WhatsApp, Invoice
Filters (All / Winter)
Choice save rehti hai (localStorage)
Deploy
Is HTML ko Vercel pe replace karo → top-right language dropdown mein saari 13 languages dikhengi.

Note: Product names / reviews abhi original language mein hain. Agar unka bhi full translation chahiye to alag se extend kar sakte hain.

har product card par size and rate show kar raha hai but add to cart ka option nehi hai aur products img full open nhi horaha isko bhi fix karo


Worked for 59s
Fix ho gaya.

File

Product card pe ab kya hai
Feature	Detail
Size + Rate	Har size ke saath price list (max 4, baaki “+more”)
Add to Cart	Seedha card pe button — pehla size + MOQ qty cart mein
Details	Modal open (size choose, qty change)
Full image	Image pe zoom icon → full screen open
Modal image	Click → full enlarge (“Click to enlarge”)
Flow
Add to Cart (card) → default pehla size + MOQ qty
Details → size / qty choose karke cart
Image 🔍 ya modal image click → full screen lightbox
Vercel pe yeh HTML replace karke check karo. Agar card pe size select bhi chahiye (bina Details ke), bata dena.

mistake kiye ho add to cart par click karte hi customers ko option pop-up hona chahiye k konsa size add karna hai aur uska rate customer dekh kar order kar sake


Worked for 52s
Ab Add to Cart pe click karte hi size-select popup khulega.

File

Naya flow
Add to Cart click
    ↓
Popup open
    ├── Product image + name
    ├── Saari sizes + unka rate (₹)
    ├── Size select (highlight)
    ├── Qty (+ / −) — MOQ se kam nahi
    └── Total amount
    ↓
Cart mein Daalo
Customer:

Size choose karega
Rate dekhega
Qty set karega
Tab cart mein add hoga
Vercel pe deploy karke test karo.

yeh toh thik hai but har size k according add to cart hona chahiye customer agar 2siz ebook karna chahe toh ek add to card hone k baad popup close ho raha ahi


Worked for 41s
Fix ho gaya.

Ab flow
Add to Cart → popup open
Size 1 select → rate dekho → Is Size ko Cart mein Daalo
Popup band nahi hota
Size 2 select → phir se cart mein daalo
Jitne sizes chahiye utne add karo
Done pe click → popup close
Buttons
Is Size ko Cart mein Daalo — current size add, popup open rahe
Done — jab kaam khatam, popup band
File:

Vercel pe replace karke test karo.

YEH EK PRODUCT UNDEFINED KYU DIKHA RAH AHAI


Worked for 59s
Kyun dikha raha tha

Left product (TP-778) ka Firebase data galat format mein hai — isliye:

undefined size
₹undefined
From ₹NaN
Right product (TP-784) ka data sahi hai (sizes array with size + price).

Pehle aapne kabhi field ka naam size rakha tha, code sizes expect karta hai. Ya size/price values missing hain.

Code fix (ho gaya)
Firestore se load pe size / sizes dono samajh lega
Galat entries filter — NaN / undefined nahi dikhega
Agar size hi nahi → toast: seller se contact
File:

TP-778 Firebase mein fix karo
Firestore → products → TP-778 wala document:

Field name: sizes (with s)

Type: array

[0] map
  size  → string → 20x30
  price → number → 285

[1] map
  size  → string → 32x34
  price → number → 335
Save → site refresh → dono products sahi dikhenge.

Ya seller panel se us product ko Edit karke sizes dubara save kar do — automatic sahi format mein chala jayega.

ISKO STEPBY STEP BATAO KAISE THIK KARE

Yeh data galat format mein hai. Screenshot mein:

sizes: [ { "20x30": 285 } ]   ❌ galat
Sahi format:

sizes: [ { size: "20x30", price: 285 } ]   ✅ sahi
Step-by-step fix (Firebase Console)
Step 1
Firestore → products → document Premium Top Middie TP-778 open karo

(ID: Lbfag76rx6Or...)

Step 2
Right side fields mein sizes field dhundo.

Step 3 — Purana sizes delete karo
sizes ke saamne trash / delete icon pe click
Confirm delete
Step 4 — Naya sizes field add karo
+ Add field pe click
Field name: sizes
Type: array
Step 5 — Array item [0] = map
Array ke andar pehla item type: map
Step 6 — Map ke andar 2 fields
Field name	Type	Value
size	string	20x30
price	number / int64	285
Important:

Field ka naam size aur price hona chahiye
20x30 field name mat banao
Step 7 (optional) — doosra size
Array mein [1] add karo → phir se map:

Field	Type	Value
size	string	32x34
price	number	335
Step 8
Save / Update

Step 9
Site refresh karo (Ctrl+F5)

Ab dikhna chahiye: 20x30  ₹285 — undefined / NaN nahi

Visual check
sizes          → array
  └── 0        → map
        ├── size   → "20x30"
        └── price  → 285
Asaan option
Seller panel → Products → is product pe Edit → size 20x30 price 285 likho → Save

Code khud sahi format Firebase mein save kar dega.

Pehle console se fix karo ya Edit se — dono theek hain.

Isko step by step batao

Ab products collection khali hai — saare documents delete ho gaye.

Naya product sahi format mein aise add karo:

Step-by-step: Naya product add karo
Step 1
Left side products selected hai ✅

Beech mein + Add document pe click karo

Step 2 — Document ID
Auto-ID use karo (recommended)
→ “Auto-ID” / blank chhod ke continue
Ya koi ID type karo (optional)
Step 3 — Fields ek-ek karke add karo
Har field ke liye + Add field:

1. name

Field	name
Type	string
Value	Premium Top Middie TP-778
2. category

Field	category
Type	string
Value	kids
(men / women / kids / winter)

3. moq

Field	moq
Type	number (int64)
Value	6
4. outOfStock

Field	outOfStock
Type	boolean
Value	false
5. images

Field	images
Type	array
Array item [0]:

Type	string
Value	image URL
https://ik.imagekit.io/bsp/....jpg	
6. sizes ← sabse important

Field	sizes
Type	array
[0] type: map

Map ke andar:

Field	Type	Value
size	string	20x30
price	number	285
Doosra size chahiye to array mein [1] → map:

Field	Type	Value
size	string	32x34
price	number	335
Step 4
Neeche Save pe click

Step 5
Site refresh (Ctrl+F5) — product dikhna chahiye

Final structure aisa dikhe
name: "Premium Top Middie TP-778"
category: "kids"
moq: 6
outOfStock: false
images: ["https://..."]
sizes:
  0:
    size: "20x30"
    price: 285
  1:
    size: "32x34"
    price: 335
Asaan tareeka (recommended)
Firebase console mein manually add karne se better:

Site → Seller Login
Products → Naya Product Add
Name, images, sizes + prices
Add Product
Code khud Firebase mein sahi format save karega — undefined / NaN nahi aayega.

Agar + Add document screen ka screenshot bhejoge, us pe exact kya click karna hai bata dunga.

Gallery k saare images ko isme jo added images hai unke saath replace kardo aur Index page mein add kardo


Worked for 1m 38s
Gallery section ab 3D Cool Slide Gallery hai — aapke site ke gallery images se.

File

Kya change hua
Pehle	Ab
Static 8 image grid	3D coverflow carousel
Unsplash / fixed URLs	Aapke galleryImages (355 mein se ~24 evenly)
Sirf click zoom	Swipe / arrows / dots + click full lightbox
Features (React component jaisa)
3D tilt + side cards
Autoplay (~3 sec)
Left / Right arrows
Dots + counter
Drag / swipe
Active card click → full lightbox
Puri Gallery Dekho → gallery.html
Note
Site pure HTML hai, isliye React + framer-motion component seedha nahi chala. Same look vanilla JS + CSS mein banaya — Vercel pe deploy ke baad kaam karega.

Deploy karke #gallery section check karo.

3D coverflow carousel mein in images ko add kardo                                           // Tshirt Set
            "https://i.ibb.co/0RqxsYmT/1777788000451.jpg",
            "https://i.ibb.co/tpmt9MwK/6.jpg",
            "https://i.ibb.co/8LMbmjYb/2.jpg",

            "https://i.ibb.co/RTMh8mxz/1782817862779.jpg",
            "https://i.ibb.co/1fdmH1cM/1782814036198.jpg",
            "https://i.ibb.co/qMZrz8v8/1782813906245-1.jpg",

            "https://i.ibb.co/hxXfcHGX/1783835518369.jpg",
            "https://i.ibb.co/fdqZnJW9/1783835505815.jpg","https://i.ibb.co/nsMWwxz0/1783835496862.jpg",

            "https://i.ibb.co/mFRQFqJL/1783835477664.jpg",
            "https://i.ibb.co/HDVpbsWq/1783835469478.jpg",
            "https://i.ibb.co/v4Tsd4kR/1783835463355.jpg",

            "https://i.ibb.co/YFMpjGQG/5.jpg",
            "https://i.ibb.co/mF6prHGq/4.jpg",
            "https://i.ibb.co/mV3nnc0R/3.jpg",

           "https://i.ibb.co/rfq8rZ1b/snrc-dig-sleep-white-1.png",
           "https://i.ibb.co/xS5CKT8p/snrc-dig-sleep-pink-1.png",
           "https://i.ibb.co/1BF0gRn/snrc-dig-sleep-cream-1.png",

            "https://i.ibb.co/Dfz4tGKF/Picsart-26-03-30-00-27-24-279.jpg",
            "https://i.ibb.co/6L3mLHh/Picsart-26-03-30-00-26-57-460.jpg",
            "https://i.ibb.co/HfFS6j8b/Picsart-26-03-30-00-24-52-022.jpg",

            "https://i.ibb.co/5WpvdC33/Picsart-26-03-30-00-25-21-818.jpg",

            "https://i.ibb.co/xtSr1Z35/Picsart-26-03-30-00-23-26-511.jpg",

// T.N, T.S Set
            "https://i.ibb.co/TSbfr2j/Photoroom-20240729-231533-4.png",
            "https://i.ibb.co/r2fX64C0/Photoroom-20240729-231533-3.png",
            "https://i.ibb.co/N2fyX2nb/Photoroom-20240729-231532-2.png",
            "https://i.ibb.co/8gccqwmq/Photoroom-20240729-231532-1.png",

 // cord set
            "https://i.ibb.co/7NZ9tPkM/Raima-Catalog-7.jpg",
            "https://i.ibb.co/8n8v0Rby/image-18.png",
            "https://i.ibb.co/0pNbRDXp/image-10.png",
            "https://i.ibb.co/S4XDybfX/image-9.png",
            "https://i.ibb.co/VY8m9qty/image-8.png",
            "https://i.ibb.co/hxXPxZQy/image-7.png",
            "https://i.ibb.co/RpfnpGHj/image-6.png",
            "https://i.ibb.co/Jws7Y2y1/IMG-20251231-WA0033.jpg",
            "https://i.ibb.co/N6hGrzC3/IMG-20251231-WA0029.jpg",
            "https://i.ibb.co/SX8vqhhz/IMG-20251231-WA0025.jpg",
            "https://i.ibb.co/c94NMhM/IMG-20251231-WA0023.jpg",
            "https://i.ibb.co/pBL2nVNs/IMG-20251231-WA0017.jpg",
            "https://i.ibb.co/B2pgyfTq/IMG-20260115-WA0102.jpg",
            "https://i.ibb.co/q36tTJTc/IMG-20260115-WA0101.jpg",
            "https://i.ibb.co/r2kSWdQx/IMG-20260115-WA0100.jpg",
            "https://i.ibb.co/0yf5LwWg/IMG-20260115-WA0099.jpg",
            "https://i.ibb.co/ycZhhPkk/IMG-20260115-WA0098.jpg",
            "https://i.ibb.co/cXYM3Qk3/IMG-20260115-WA0097.jpg",
            "https://i.ibb.co/hRfq7WWc/IMG-20260115-WA0096.jpg",
            "https://i.ibb.co/4RjvWbGY/IMG-20260115-WA0095.jpg",
            "https://i.ibb.co/d0SvpVFS/IMG-20260115-WA0016.jpg",
            "https://i.ibb.co/0knhrZc/IMG-20260115-WA0013.jpg",
            "https://i.ibb.co/cXwwtcKQ/IMG-20260115-WA0012.jpg",
            "https://i.ibb.co/sJCf3fzC/IMG-20260427-WA0015.jpg",
            "https://i.ibb.co/HL8hK9LV/IMG-20260427-WA0014.jpg",
            "https://i.ibb.co/4w5YdG67/IMG-20260427-WA0013.jpg",
            "https://i.ibb.co/8nCh99h7/IMG-20260427-WA0012.jpg",
            "https://i.ibb.co/7J3MnDjr/IMG-20260427-WA0011.jpg",
            "https://i.ibb.co/SXdMp4Mm/Photoroom-20240926-184327.png",
            "https://i.ibb.co/q32bJTqg/Photoroom-20240926-182553.png",
            "https://i.ibb.co/4ZCrcQfy/Photoroom-20240926-180139.png",
            "https://i.ibb.co/0RwDSTYf/Photoroom-20240926-134247.png",
            "https://i.ibb.co/5Ws79vFy/Picsart-25-10-27-03-00-45-453.jpg",
            "https://i.ibb.co/GfvvWWS7/Picsart-25-10-27-02-58-55-764.jpg",

// boys 3pcs set
"https://i.ibb.co/LDSkBSBL/1783830650006.jpg",
"https://i.ibb.co/4RpKjvCR/1783830639885.jpg",
"https://i.ibb.co/ZpQKB8WM/1783830532682.jpg",

// akash bhaiyaji
"https://i.ibb.co/tTrxF7q7/IMG-20260206-WA0002.jpg",
"https://i.ibb.co/gZXgN3kR/IMG-20260206-WA0001.jpg",
"https://i.ibb.co/R4pyCYh4/IMG-20260206-WA0000.jpg",
"https://i.ibb.co/v72wCSF/IMG-20250621-WA0043.jpg",
"https://i.ibb.co/zW3vTLzQ/IMG-20250621-WA0039.jpg",
"https://i.ibb.co/V0fd2gTx/IMG-20250621-WA0038.jpg",
"https://i.ibb.co/QjfShnhN/IMG-20240321-WA0044.jpg",
"https://i.ibb.co/TxHGsPYp/IMG-20240321-WA0042.jpg",
"https://i.ibb.co/m362z62/IMG-20240321-WA0037.jpg",
"https://i.ibb.co/5zFvPff/IMG-20240321-WA0032.jpg",
"https://i.ibb.co/rRXwZpGJ/IMG-20240321-WA0031.jpg",

// ujeer 3pc
"https://i.ibb.co/1JKc18c8/IMG-20260331-WA0108.jpg",
"https://i.ibb.co/3ndphb8/IMG-20260331-WA0107.jpg",
"https://i.ibb.co/21QHxKmv/IMG-20260331-WA0106.jpg",
"https://i.ibb.co/xqqcL8rd/IMG-20260331-WA0105.jpg",

// asif
"https://i.ibb.co/20pL9Dhq/Picsart-26-01-04-16-00-50-091.jpg",
"https://i.ibb.co/5Wg3JPxh/Picsart-26-01-04-15-58-29-566.png",
"https://i.ibb.co/XfKzyLXW/Picsart-26-01-04-15-56-32-319.jpg",
"https://i.ibb.co/4cRH0h4/IMG-20260403-WA0031.jpg",
"https://i.ibb.co/Kcs0QCNr/IMG-20260403-WA0030.jpg",
"https://i.ibb.co/svkDMgKt/IMG-20260403-WA0029.jpg",
"https://i.ibb.co/dCvmmxw/IMG-20260403-WA0028.jpg",
"https://i.ibb.co/ccwKXvHn/IMG-20260403-WA0027.jpg",
"https://i.ibb.co/TxWj5RbQ/IMG-20260403-WA0026.jpg",
"https://i.ibb.co/hFzS0g5H/IMG-20260403-WA0025.jpg",
"https://i.ibb.co/SGvMBDN/IMG-20260403-WA0024.jpg",

// boys half shirt
"https://i.ibb.co/23hb95nX/Photoroom-20250205-023005.png",
"https://i.ibb.co/tT6pFW5k/IMG-20260502-WA0113.jpg",
"https://i.ibb.co/n8M8Dz9N/IMG-20260502-WA0112.jpg",
"https://i.ibb.co/HpgBZ0J7/IMG-20260502-WA0111.jpg",
"https://i.ibb.co/1tmS4C5c/IMG-20260502-WA0110.jpg",
"https://i.ibb.co/mChnYnyv/IMG-20260502-WA0109.jpg",
"https://i.ibb.co/JWvJTpsX/IMG-20260502-WA0108.jpg",


// boys half full jeans 
"https://i.ibb.co/ccnBWjpQ/Photoroom-20250202-210628.png",
"https://i.ibb.co/99Nz8jkv/Photoroom-20250202-210446.png",
"https://i.ibb.co/Ld1Vj6KS/Photoroom-20250202-210023.png",
"https://i.ibb.co/35M4KZh0/Photoroom-20250202-205648.png",

// low tshirt set
"https://i.ibb.co/8Dmk5xDj/IMG-20260502-WA0037.jpg",
"https://i.ibb.co/9mPSNLXd/IMG-20260502-WA0036.jpg",
"https://i.ibb.co/bgNqp58Z/IMG-20260502-WA0035.jpg",

// capri
"https://i.ibb.co/Mk7NHrBX/Photoroom-20250119-011852.png",
"https://i.ibb.co/F4k9kQTP/Photoroom-20250119-010428.png",
"https://i.ibb.co/5hHQ6dbv/Photoroom-20250119-010101.png",
"https://i.ibb.co/6RRJJRyM/IMG-20260204-WA0017-1.jpg",
"https://i.ibb.co/bjFsVR3w/IMG-20260125-WA0017-1.jpg",

// legging
"https://i.ibb.co/2YC5HvMZ/Photoroom-20241231-091945.png",

// M Hossain
"https://i.ibb.co/BVY5f22N/1767930287733-1.jpg",
"https://i.ibb.co/5xrYTGFG/1767930140398-1.jpg",
"https://i.ibb.co/XfYjXTL0/1767904538405-1.jpg",
"https://i.ibb.co/PGnNQ2bw/1767904463162-1.jpg",
"https://i.ibb.co/YFhxS7HV/1767904372438-1.jpg",
"https://i.ibb.co/VYCVq4jP/1767901587709-1.jpg",
"https://i.ibb.co/vxfkzN4N/1767851359961-1.jpg",
"https://i.ibb.co/zWn05Lf6/1767851284695-1.jpg",
"https://i.ibb.co/qYR200j9/1767851217901-1.jpg",
"https://i.ibb.co/YBG2XBBR/1767851150602-1.jpg",
"https://i.ibb.co/4wqfJMCB/1767850971694-1.jpg",
"https://i.ibb.co/xKhDZRQc/1767850887319-1.jpg",
"https://i.ibb.co/4ZPC9XyR/1767849025314-1.jpg",
"https://i.ibb.co/WW6WK6NX/1767848953361-1.jpg",
"https://i.ibb.co/jPxh74Mv/1767848887989-1.jpg",        
"https://i.ibb.co/0jNSyHLH/1767848631552-1.jpg",
"https://i.ibb.co/DgW0R6v9/1767848558208-1.jpg",
"https://i.ibb.co/1fw7wgjK/1767848466141-1.jpg",
"https://i.ibb.co/SDndV2LH/1767848390500-1.jpg",
"https://i.ibb.co/CpfM7LNH/1767848296131-1.jpg",
"https://i.ibb.co/j9H4RxQp/1767848150948-1.jpg",
"https://i.ibb.co/W49m9wBy/1767848071227-1.jpg",
"https://i.ibb.co/gFJsFfN3/1767847994649-1.jpg",
"https://i.ibb.co/jP4w05xK/1767847935410-1.jpg",
"https://i.ibb.co/r2rpV0S2/1767847839824-1.jpg",
"https://i.ibb.co/9Hk52Rwk/1767847770174-1.jpg",
"https://i.ibb.co/4nzZPWJT/1767847690277-1.jpg",
"https://i.ibb.co/R402m9Gd/1767847103654-1.jpg",
"https://i.ibb.co/cS1RqZNq/IMG-20260107-WA0028-1.jpg",
"https://i.ibb.co/wZPTdShc/IMG-20260107-WA0027-1.jpg",
"https://i.ibb.co/p6D6n6SX/IMG-20260107-WA0026-1.jpg",
"https://i.ibb.co/JW4BtJNq/IMG-20260107-WA0025-2.jpg",
"https://i.ibb.co/pjd1Hjdw/IMG-20260107-WA0025-1.jpg",
"https://i.ibb.co/vxpQ9ppT/IMG-20260107-WA0024-1.jpg",

// Western FEM And Princess
"https://i.ibb.co/hFkFJqd2/IMG-20260219-WA0054-1.jpg",
"https://i.ibb.co/Jfc5VZf/IMG-20260219-WA0053-1.jpg",
"https://i.ibb.co/TMMwvSW9/IMG-20260219-WA0052-1.jpg",
"https://i.ibb.co/0yFM9YJr/IMG-20260219-WA0051-1.jpg",
"https://i.ibb.co/WbMzwkP/IMG-20260219-WA0050-1.jpg",
"https://i.ibb.co/GvJ6DHkk/IMG-20260219-WA0049-1.jpg",
"https://i.ibb.co/jPMTwCxF/IMG-20260219-WA0048-1.jpg",
"https://i.ibb.co/BKSvJJ9S/IMG-20260219-WA0047-1.jpg",
"https://i.ibb.co/gLw8LkTs/IMG-20260219-WA0046-1.jpg",
"https://i.ibb.co/N5m4Z5M/IMG-20260219-WA0045-1.jpg",
"https://i.ibb.co/pvHdxbW1/IMG-20260219-WA0044-1.jpg",
"https://i.ibb.co/hF47gpQf/IMG-20260219-WA0043-1.jpg",
"https://i.ibb.co/ycK0Bp9X/IMG-20260219-WA0042-1.jpg",
"https://i.ibb.co/gMZht552/IMG-20260219-WA0041-1.jpg",
"https://i.ibb.co/4wFXZ03X/IMG-20260219-WA0040-1.jpg",
"https://i.ibb.co/VYmXxdJG/IMG-20260219-WA0039-1.jpg",
"https://i.ibb.co/3Ys77hG3/IMG-20260506-WA0092-1.jpg",
"https://i.ibb.co/1Gy11wQ7/IMG-20260506-WA0091-1.jpg",
"https://i.ibb.co/RpyX1mvN/IMG-20260506-WA0090-1.jpg",
"https://i.ibb.co/1fMcKMC2/IMG-20260506-WA0089-1.jpg",
"https://i.ibb.co/vCKsbjSn/IMG-20260506-WA0088-1.jpg",
"https://i.ibb.co/q3v4gN46/IMG-20260506-WA0087-1.jpg",
"https://i.ibb.co/TDwjjLvW/IMG-20260506-WA0086-1.jpg",
"https://i.ibb.co/TDBCp1Lt/IMG-20260506-WA0085-1.jpg",
"https://i.ibb.co/BDgPZhr/IMG-20260506-WA0084-1.jpg",
"https://i.ibb.co/KkRH0PF/IMG-20260506-WA0083-1.jpg",
"https://i.ibb.co/BHZJRxR8/IMG-20260506-WA0082-1.jpg",
"https://i.ibb.co/PZ6PvFD7/IMG-20260506-WA0081-1.jpg",
"https://i.ibb.co/7xGCq6CB/IMG-20260506-WA0080-1.jpg",
"https://i.ibb.co/b5yqxDh9/IMG-20260506-WA0079-1.jpg",
"https://i.ibb.co/FkFf1HGs/IMG-20260506-WA0078-1.jpg",
"https://i.ibb.co/278rLSNg/IMG-20260506-WA0077-1.jpg",
"https://i.ibb.co/HfcnRgX7/IMG-20260506-WA0076-1.jpg",
"https://i.ibb.co/2Y7SDyfM/IMG-20260506-WA0075-1.jpg",
"https://i.ibb.co/rKMCSKKw/IMG-20260506-WA0074-1.jpg",
"https://i.ibb.co/CSPh9XN/IMG-20260506-WA0073-1.jpg",
"https://i.ibb.co/hJhFJ6Fq/IMG-20260506-WA0072-1.jpg",
"https://i.ibb.co/tphL3jjs/IMG-20260506-WA0071-1.jpg",
"https://i.ibb.co/zy9cjvL/IMG-20260506-WA0070-1.jpg",
"https://i.ibb.co/pBVqCx9H/IMG-20260506-WA0069-1.jpg",
"https://i.ibb.co/svB5PS6r/IMG-20260506-WA0068-1.jpg",
"https://i.ibb.co/bMhJ6NMv/IMG-20260506-WA0067-1.jpg",
"https://i.ibb.co/DDjwBV2Q/IMG-20260506-WA0066-1.jpg",
"https://i.ibb.co/kVNrF5Z6/IMG-20260506-WA0065-1.jpg",
"https://i.ibb.co/nNKSKzP7/IMG-20260506-WA0064-1.jpg",
"https://i.ibb.co/GvWDVRkv/IMG-20260506-WA0063-1.jpg",
"https://i.ibb.co/G46xy4jD/IMG-20260506-WA0062-1.jpg",
"https://i.ibb.co/wF0Kkhb7/IMG-20260506-WA0061-1.jpg",
"https://i.ibb.co/WNVcMWjG/IMG-20260506-WA0060-1.jpg",
"https://i.ibb.co/Z1Kh12ZJ/IMG-20260506-WA0059-1.jpg",
"https://i.ibb.co/YTZYf4xT/IMG-20260506-WA0058-1.jpg",
"https://i.ibb.co/kVJgstX6/IMG-20260506-WA0057-1.jpg",
"https://i.ibb.co/gLYw0KGP/IMG-20260506-WA0056-1.jpg",
"https://i.ibb.co/B5BvDsLJ/IMG-20260506-WA0055-1.jpg",
"https://i.ibb.co/27zxxWzr/IMG-20260506-WA0054-1.jpg",
"https://i.ibb.co/RkGK215K/IMG-20260506-WA0053-1.jpg",
"https://i.ibb.co/fdXGPbzh/IMG-20260506-WA0052-1.jpg",

// ladies 3pc
"https://i.ibb.co/hxHHpX9z/1780156555853.jpg",
"https://i.ibb.co/4RzvhsXg/1780156534223.jpg",
"https://i.ibb.co/xwbnqcg/1780156499140.jpg",
"https://i.ibb.co/CpHLDZVQ/1777927504202.jpg",
"https://i.ibb.co/yB5dRS6x/Photoroom-20250221-121113.png",

// own stock low
"https://i.ibb.co/39KFHDdr/Photoroom-20240823-222857-2.png",
"https://i.ibb.co/FLkZrfJS/Photoroom-20240823-222857-1.png",
"https://i.ibb.co/7JcLGC0p/Photoroom-20250118-131152.png",
"https://i.ibb.co/HLXgknG1/Photoroom-20250118-130830.png",
"https://i.ibb.co/9H2hQq1V/Photoroom-20250111-114736.png",
"https://i.ibb.co/8Dtdbx7R/1771444660130.png",
"https://i.ibb.co/vx9QsmDh/1771444591345.png",
"https://i.ibb.co/zWvw53Y9/IMG-20260331-WA0071.jpg",
"https://i.ibb.co/7tyCY5cp/IMG-20260331-WA0070.jpg",
"https://i.ibb.co/Zpb4vgyg/IMG-20260331-WA0069.jpg",
"https://i.ibb.co/FL8y5dhQ/IMG-20260331-WA0068.jpg",
"https://i.ibb.co/Q3CjC745/IMG-20260331-WA0067.jpg",
"https://i.ibb.co/sZKHxtg/IMG-20260331-WA0066.jpg",
"https://i.ibb.co/JFmxX705/IMG-20260331-WA0065.jpg",
"https://i.ibb.co/sc6B3yd/IMG-20260331-WA0064.jpg",
"https://i.ibb.co/5hcrsgMX/IMG-20260331-WA0063.jpg",
"https://i.ibb.co/JWkN1NcB/IMG-20260331-WA0062.jpg",
"https://i.ibb.co/mCrw0pKh/IMG-20260331-WA0061.jpg",
"https://i.ibb.co/tT5LKnBJ/IMG-20260331-WA0060.jpg",
"https://i.ibb.co/99W9S16R/IMG-20260331-WA0059.jpg",
"https://i.ibb.co/GSTp7GZ/IMG-20260331-WA0058.jpg",
"https://i.ibb.co/8nhvcyxm/IMG-20260331-WA0057.jpg",
"https://i.ibb.co/Txn9gsFb/IMG-20260331-WA0056.jpg",
"https://i.ibb.co/RRvKrB9/IMG-20260331-WA0055.jpg",
"https://i.ibb.co/M5CcCVH7/IMG-20260331-WA0054.jpg",
"https://i.ibb.co/23rpGyH7/IMG-20260331-WA0053.jpg",
"https://i.ibb.co/zhp1pZk8/IMG-20260331-WA0052.jpg",
"https://i.ibb.co/cSzJmgnM/IMG-20260331-WA0051.jpg",
"https://i.ibb.co/6RBrq4nm/IMG-20260331-WA0050.jpg",
"https://i.ibb.co/hJGThHCn/IMG-20260331-WA0048.jpg",
"https://i.ibb.co/8DPZGzf7/IMG-20260331-WA0047.jpg",
"https://i.ibb.co/5g62jWRK/IMG-20260331-WA0046.jpg",
"https://i.ibb.co/NdHfTNH7/IMG-20260331-WA0043.jpg",
"https://i.ibb.co/g8KPPV9/IMG-20260331-WA0042.jpg",
"https://i.ibb.co/Sw7fXFRf/IMG-20260226-WA0060.jpg",
"https://i.ibb.co/tpNQxT5X/IMG-20260226-WA0056.jpg",
"https://i.ibb.co/1fXry6DJ/IMG-20260226-WA0051.jpg",
"https://i.ibb.co/HLRdyV3r/IMG-20260225-WA0047.jpg",
"https://i.ibb.co/d4SC0vKK/IMG-20260225-WA0038.jpg",
"https://i.ibb.co/KpKxd90v/IMG-20260225-WA0037.jpg",
"https://i.ibb.co/CpqcmMWd/IMG-20260225-WA0020.jpg",
"https://i.ibb.co/0yXyVW2H/IMG-20260225-WA0004.jpg",
"https://i.ibb.co/84XTsqvV/IMG-20260225-WA0003.jpg",
"https://i.ibb.co/SXnyKjXQ/IMG-20260225-WA0002.jpg",
"https://i.ibb.co/7tS9tdYt/1768319318103.png",
"https://i.ibb.co/5g3BC3wj/IMG-20260517-WA0043.jpg",
"https://i.ibb.co/p6yvF1gr/IMG-20260510-WA0077.jpg",
"https://i.ibb.co/dwHmCD8q/IMG-20260510-WA0069.jpg",
"https://i.ibb.co/V0rNCdWT/IMG-20260510-WA0062.jpg",
"https://i.ibb.co/5h1FSc0R/IMG-20260510-WA0061.jpg",
"https://i.ibb.co/hFvgsWs3/IMG-20260505-WA0062.jpg",
"https://i.ibb.co/N6ZwCKdf/IMG-20260505-WA0060.jpg",

// kids dungaree
"https://i.ibb.co/4nkZkGxq/Photoroom-20240731-192316.png",
"https://i.ibb.co/7Jd7MZFn/Photoroom-20240731-192102.png",
"https://i.ibb.co/CK7ZF0tD/IMG-20260418-WA0016.jpg",
"https://i.ibb.co/4ZMTtBvt/IMG-20260418-WA0011.jpg",
"https://i.ibb.co/jPSG6Ypz/IMG-20260418-WA0010.jpg",
"https://i.ibb.co/JjtdMD0k/IMG-20260418-WA0009.jpg",
"https://i.ibb.co/XZNP4SHF/IMG-20260418-WA0008.jpg",
"https://i.ibb.co/V0PF0K4x/IMG-20260220-WA0034.jpg",
"https://i.ibb.co/YBLGvGQL/IMG-20260205-WA0020.jpg",
"https://i.ibb.co/sd6TbmPV/IMG-20260205-WA0019.jpg",
"https://i.ibb.co/KxmjLfng/IMG-20260205-WA0018.jpg",
"https://i.ibb.co/rKhQ5F8r/IMG-20260205-WA0017.jpg",
"https://i.ibb.co/xS4sp9Jy/IMG-20260205-WA0016.jpg",
"https://i.ibb.co/q3m9D6kk/IMG-20260205-WA0015.jpg",
"https://i.ibb.co/G3nK6KCR/IMG-20260205-WA0014.jpg",
"https://i.ibb.co/xSMvV1Sn/IMG-20260205-WA0013.jpg",
"https://i.ibb.co/7dP2LjgM/IMG-20260205-WA0012.jpg",
"https://i.ibb.co/hJQ3mJvG/IMG-20260205-WA0011.jpg",
"https://i.ibb.co/XxCSwNtD/IMG-20260205-WA0010.jpg",
"https://i.ibb.co/PZ01cxJ1/IMG-20260205-WA0009.jpg",
"https://i.ibb.co/27jRHJmZ/IMG-20260205-WA0008.jpg",
"https://i.ibb.co/R4Mbq4S4/IMG-20260205-WA0007.jpg",
"https://i.ibb.co/LdJbbTqx/IMG-20260205-WA0006.jpg",
"https://i.ibb.co/B5rHgcNh/IMG-20260205-WA0004.jpg",
"https://i.ibb.co/nNB71rRQ/IMG-20251012-WA0032.jpg",
"https://i.ibb.co/qMfCMfGm/IMG-20251012-WA0031.jpg",
"https://i.ibb.co/DgW1hs37/IMG-20251012-WA0030.jpg",
"https://i.ibb.co/PvZynF5P/IMG-20250216-WA0056.jpg",

// new born bandi
"https://i.ibb.co/wZfKFmfx/Picsart-24-08-29-16-29-39-696.jpg",

// mens jeans
"https://i.ibb.co/1tM366VB/1783707103260.jpg",
"https://i.ibb.co/n8KZCzdG/1783706940796.jpg",
"https://i.ibb.co/DPT5CFHW/1783706776699.jpg",
"https://i.ibb.co/qM3rS1B4/1783706614131.jpg",
"https://i.ibb.co/gLGw1xsB/1783706456138.jpg",
"https://i.ibb.co/1fVwkXFC/1783706242403.jpg",
"https://i.ibb.co/Pz5JD49D/1783705938494.jpg",
"https://i.ibb.co/mVysGWTc/1783705878808.jpg",
"https://i.ibb.co/ZzNFhLbR/1783705810110.jpg",
"https://i.ibb.co/wZkzQzf5/IMG-20260516-WA0024.jpg",
"https://i.ibb.co/pvHh0FQD/IMG-20260516-WA0023.jpg",
"https://i.ibb.co/VWY7cw51/IMG-20260516-WA0022.jpg",
"https://i.ibb.co/60JC9pdP/IMG-20260516-WA0021.jpg",
"https://i.ibb.co/0Rpyb2X1/IMG-20260516-WA0020.jpg",
"https://i.ibb.co/chzk3k0H/IMG-20260516-WA0019.jpg",
"https://i.ibb.co/sJgsd4B7/IMG-20260516-WA0018.jpg",
"https://i.ibb.co/Kz8SFyFV/IMG-20260516-WA0017.jpg",
"https://i.ibb.co/Psb2LBpD/IMG-20260516-WA0016.jpg",
"https://i.ibb.co/S4rwLbt3/IMG-20260516-WA0015.jpg",
"https://i.ibb.co/3m7CyYBM/IMG-20260516-WA0014.jpg",
"https://i.ibb.co/whcvHcj9/IMG-20260516-WA0013.jpg",
"https://i.ibb.co/xSkKhMYp/IMG-20260516-WA0012.jpg",
"https://i.ibb.co/Gvhx0dxV/IMG-20260516-WA0011.jpg",
"https://i.ibb.co/twh9PVXT/IMG-20260516-WA0010.jpg",
"https://i.ibb.co/x88bCctc/IMG-20260516-WA0009.jpg",
"https://i.ibb.co/mVTsYKc9/IMG-20260516-WA0008.jpg",
"https://i.ibb.co/gLqTmxFR/IMG-20260516-WA0007.jpg",
"https://i.ibb.co/rKYM9dwV/IMG-20260516-WA0006.jpg",
"https://i.ibb.co/1Gp8b4HZ/IMG-20260521-WA0039-1.jpg",
"https://i.ibb.co/YB8Rd7L9/IMG-20260521-WA0038-1.jpg",
"https://i.ibb.co/F4RVNqgY/IMG-20260521-WA0037-1.jpg",
"https://i.ibb.co/nMTkxmK7/IMG-20260521-WA0036-1.jpg",
"https://i.ibb.co/NnnkLztF/IMG-20260521-WA0035-1.jpg",
"https://i.ibb.co/3mXJgLv9/IMG-20260521-WA0034-1.jpg",
"https://i.ibb.co/S4XcMkxj/IMG-20260521-WA0033-1.jpg",
"https://i.ibb.co/JR9d5VLt/IMG-20260521-WA0032-1.jpg",
"https://i.ibb.co/r269HxSY/IMG-20260521-WA0031-1.jpg",
"https://i.ibb.co/b5rDv4Gd/IMG-20260521-WA0030-1.jpg",
"https://i.ibb.co/zHSk0Pz2/IMG-20260501-WA0191.jpg",
"https://i.ibb.co/ymqyJGb3/IMG-20260501-WA0190.jpg",
"https://i.ibb.co/dw4ps0xk/IMG-20260501-WA0189.jpg",
"https://i.ibb.co/CpXXpCMJ/IMG-20260501-WA0187.jpg",
"https://i.ibb.co/JW2VBFTW/IMG-20260501-WA0188.jpg",
"https://i.ibb.co/3YVnJ6Gt/IMG-20260501-WA0173.jpg",
"https://i.ibb.co/0yY74Jb5/IMG-20260501-WA0172.jpg",
"https://i.ibb.co/zVGfkhqG/IMG-20260501-WA0171.jpg",
"https://i.ibb.co/yFsswpGr/IMG-20260501-WA0170.jpg",
"https://i.ibb.co/Tq4g2WCL/IMG-20260429-WA0006-1.jpg",
"https://i.ibb.co/Xf9s6Fr7/IMG-20260429-WA0004-2.jpg",
"https://i.ibb.co/CKprZJqR/IMG-20260101-WA0021-1.jpg",
"https://i.ibb.co/ymK2PSw6/IMG-20260101-WA0020-1.jpg",
"https://i.ibb.co/mFX519cx/IMG-20260101-WA0019-1.jpg",

// mens rfd shirt
"https://i.ibb.co/hNYFQb4/Picsart-24-07-29-02-30-21-335.png",
"https://i.ibb.co/twcm7Ycf/Picsart-24-07-29-02-29-22-307.png",
"https://i.ibb.co/pB14Spbq/Picsart-24-07-29-02-27-33-907.png",
"https://i.ibb.co/QvJ5PnSg/Picsart-24-07-29-02-26-19-968.png",
"https://i.ibb.co/4Z0ndDMK/Picsart-24-07-29-02-25-07-808.png",
"https://i.ibb.co/5WZTvryP/Picsart-24-07-29-02-23-54-793.png",

// mens sando
"https://i.ibb.co/ZpFnYJt8/Picsart-26-02-12-23-51-25-122.png",
"https://i.ibb.co/tTb133vZ/Picsart-26-02-12-23-50-18-094.png",
"https://i.ibb.co/tMwSf22T/Picsart-26-02-12-23-49-06-635.png",
"https://i.ibb.co/tTRxg4tP/Picsart-26-02-12-23-47-47-701.png",
"https://i.ibb.co/bMpG5Xcc/Picsart-26-02-12-23-46-23-484.png",
"https://i.ibb.co/9XL9MTq/Picsart-26-02-12-23-44-48-367.jpg",
"https://i.ibb.co/chJw9s7Z/Picsart-26-02-12-23-40-56-236.jpg",

// mens joggers
"https://i.ibb.co/vW3QzWK/IMG-20240506-WA0058.jpg",
"https://i.ibb.co/mVXR77Tf/IMG-20240506-WA0057.jpg",
"https://i.ibb.co/JjwSqdF5/IMG-20240506-WA0055.jpg"

Worked for 3m 28s
Ho gaya — 3D coverflow carousel mein aapki di hui saari images add ho gayi hain (~355).

File

Ab carousel mein
Tshirt Set
T.N / T.S Set
Cord set
Boys 3pcs, half shirt, jeans
Ladies / Western / Princess
Mens jeans, RFD shirt, sando, joggers
Kids dungaree, newborn, aur baaki sab jo list mein the
Behaviour
Autoplay + arrows + dots + swipe
Active image click → full lightbox
Puri Gallery Dekho → gallery.html
Vercel pe yeh HTML replace karke #gallery section check karo.

Note: Bahut images hain, pehli load thodi slow ho sakti hai (mobile pe). Agar sirf 30–40 highlight images chahiye to bata dena.

https://bspfashion.vercel.app Site mein toh 3D gallery work nhi kar raha


Worked for 52s
Problem mil gaya: 3D gallery ka code site pe tha, lekin initCoolGallery() page load pe call nahi ho raha tha — isliye stage khali rehti thi.

Fix
Ab DOMContentLoaded mein call add ho gaya:

initCoolGallery();
Updated file

Aap kya karo
Yeh naya HTML Vercel pe deploy / replace karo
Hard refresh: Ctrl + Shift + R (mobile pe cache clear)
Photo Gallery section tak scroll karo
Dikhega:

Beech mein badi image (3D tilt)
Side pe dim cards
Arrows + dots + autoplay
Agar phir bhi blank ho to browser mein F12 → Console ka error screenshot bhejna.

Products share karne ka option add kar sakte hai


Worked for 1m 52s
Haan — product share add ho gaya.

File

Kahan share milega
Jagah	Options
Product card	Share icon (↗)
Product Details modal	Share · WhatsApp · Copy
Share mein kya jata hai
Product name
Category + MOQ
Sizes & rates
Site link (#product-ID)
WhatsApp number
Behaviour
Share → mobile pe native share sheet (WhatsApp, Messages, etc.)
WhatsApp → seedha WhatsApp with product text
Copy → poora detail clipboard pe
Shared link open → product modal auto open (#product-123)
Vercel pe deploy karke test karo: product → Share / WhatsApp.

animated premium share button add karna hoga


Worked for 1m 19s
Premium animated share button add ho gaya.

File

Look & animation
Effect	Detail
Gold gradient	Moving shimmer background
Shine sweep	Light bar bar-bar slide
Pulse glow	Soft gold outer glow
Icon bounce	Share icon halka rotate + scale
Hover	Lift + stronger glow
Kahan dikhega
Product Details modal → full-width Share Product · PREMIUM button
Neeche WhatsApp + Copy
Product card → gold circular animated share icon
Vercel pe deploy karke product open karke share button check karo.

share icon isko karna hoga cursor ya share button pe click karte hi sab social media option show hona chahiye aur copy link option popup hona chahiye ui/ux designed look mein kardo


Worked for 2m 1s
Ho gaya — share icon ab paper-plane jaisa hai, click pe social popup khulta hai.

File

Share icon
Screenshot jaisa blue send / paper-plane icon

Modal: gold Share Product button + plane
Card: blue circular plane button
Click pe popup (premium UI)
Option	Action
WhatsApp	Product details share
Facebook	Link share
X / Twitter	Tweet
Telegram	Share
Message	SMS
Email	Mail
More	Native device share
Copy	Full text copy
Copy link	URL field + button
Neeche product link bhi dikhega jo select/copy ho sakta hai.

Vercel pe deploy karke product → Share try karo.

Product item link jab share kar rahe hai customer ko open graph mein Product image nhi show ho raha website ka Open graph show ho raha hai toh customer ko kaise pata chalega konsa item ka link share kiya hai isko thik kar do


Worked for 2m 55s
Problem: WhatsApp/Facebook sirf pehle page ke OG tags padhte hain. #product-123 server tak jata hi nahi, isliye hamesha website wala preview aata tha — product photo nahi.

Fix (3 layers)
Layer	Kya hota hai
1. /api/p share link	Product title + image OG tags ke saath
2. WhatsApp text	Product photo URL + details message mein
3. ?product=id	Link open pe woh product modal khule
Deploy (important)
Vercel pe sirf HTML nahi — yeh structure chahiye:

project/
  index.html          ← bsp-fashion-firebase.html ko rename
  api/
    p.js              ← naya OG share API
  vercel.json
Files:

 → site root pe index.html
Share ke baad preview
Title:  Premium Top Middie TP-778 | BSP Fashion
Image:  (usi product ki photo)
Desc:   MOQ 6 pcs • From ₹285 • kids
Click pe: bspfashion.vercel.app/?product=ID → product open.

Test
Deploy above structure
Product → Share → WhatsApp
Apne number pe bhejo — product image preview mein aani chahiye
Agar /api/p 404 aaye to Vercel project Framework = Other, root mein api folder confirm karo.

project/
  index.html          ← bsp-fashion-firebase.html ko rename
  api/
    p.js              ← naya OG share API
  vercel.json
Yeh thik samjha nhi isko ckear karje samjhao

2: Site Root Pe index.html pe jo p.js file diye ho usko kaha paste kare aur vercel.json ko kaha paste kare

Bilkul simple language mein:

Folder structure kya hai
Aapka project folder (computer pe ya GitHub pe) aisa hona chahiye:

📁 bsp-fashion          ← yeh aapka main project folder
 │
 ├── 📄 index.html       ← yahan website ka HTML
 ├── 📄 vercel.json      ← yahan vercel.json
 │
 └── 📁 api             ← naya folder banao (naam exact: api)
      └── 📄 p.js       ← is folder ke ANDAR p.js
Har file kahan paste karni hai
File	Kahan	Kaise
index.html	Project ki root (sabse bahar)	bsp-fashion-firebase.html download → rename karke index.html → root mein rakho
vercel.json	Bhi root mein	index.html ke saath same level pe paste
p.js	api folder ke andar	Pehle folder api banao → uske andar p.js paste
Galat example:

❌ index.html ke andar p.js
❌ api.js root pe (bina folder)
❌ p.js root pe freely
Sahi example:

✅ bsp-fashion/index.html
✅ bsp-fashion/vercel.json
✅ bsp-fashion/api/p.js
Step-by-step (computer pe)
Step 1 — Folder kholo
Jis folder se aap Vercel pe upload / deploy karte ho, woh kholo.

Step 2 — HTML
Jo naya HTML maine diya hai, save karo
Naam rakho: index.html
Is folder ki root mein rakho (bahar)
Step 3 — api folder
Us hi folder mein naya folder banao
Folder ka naam exact: api (chhote letters)
Step 4 — p.js
p.js file lo
api folder ke andar paste / save karo
Path banega: api/p.js
Step 5 — vercel.json
vercel.json lo
Root mein paste — index.html ke paas, api folder ke bahar
Vercel pe kaise deploy
Option A — Vercel website se drag-drop
vercel.com → project
Poora folder upload (sirf ek file nahi)
Folder ke andar index.html + api + vercel.json hone chahiye
Option B — GitHub
GitHub repo mein yahi structure push karo
Vercel us repo se deploy kare
Option C — Pehle se project hai
Vercel → project → File browser / local re-upload
Root pe index.html replace
api folder add karke usme p.js
Root pe vercel.json
Redeploy
Deploy ke baad check
Browser mein yeh URL kholo:

https://bspfashion.vercel.app/api/p?id=test&t=Test%20Product&img=https://i.ibb.co/0RqxsYmT/1777788000451.jpg&d=MOQ%206
HTML page / redirect aaye → API sahi kaam kar rahi hai
404 aaye → api/p.js galat jagah hai ya deploy nahi hua
Ek line mein
index.html     →  site ka ghar (root)
vercel.json    →  usi ghar mein
p.js           →  api naam ke room (folder) ke andar
Agar aap bata do aap drag-drop se deploy karte ho ya GitHub se, us hisaab se exact clicks bhi likh dunga.

github mein upload kaise kare

GitHub pe upload bilkul simple hai. Do tareeke hain — website se (asaan) aur computer se.

Method 1: GitHub website se (sabse asaan)
Step 1 — Account
github.com kholo
Login / Sign up karo
Step 2 — Naya repository
Right side + → New repository
Repository name: bsp-fashion (ya jo chaho)
Public select karo
Add a README tick mat karo (optional)
Create repository
Step 3 — Files upload
Naye repo page pe uploading an existing file / Add file → Upload files
Apne computer se yeh files drag & drop karo:
index.html
vercel.json
api/p.js        ← pehle api folder banao, usme p.js
Important:

Pehle local folder mein structure banao:
bsp-fashion/
  index.html
  vercel.json
  api/
    p.js
Phir poora folder ke files GitHub pe upload.
api folder ke liye: pehle api/p.js path se upload — GitHub folder khud bana lega agar path api/p.js ho.
Folder kaise banaye upload pe:

Upload screen pe file choose karte waqt, kuch systems mein folder select hota hai.
Ya pehle sirf index.html + vercel.json upload karo.
Phir Add file → Create new file → naam likho: api/p.js → p.js ka code paste → Commit.
Step 4 — Commit
Neeche Commit changes
Message: BSP Fashion website upload
Commit changes
Method 2: Computer se (Git)
Agar Git installed hai:

# 1. Project folder mein jao
cd bsp-fashion

# 2. Git start
git init

# 3. Files add
git add index.html vercel.json api/p.js

# 4. Commit
git commit -m "BSP Fashion website"

# 5. GitHub repo se connect (apna URL dalo)
git branch -M main
git remote add origin https://github.com/AAPKA-USERNAME/bsp-fashion.git

# 6. Upload
git push -u origin main
Pehli baar username + password/token maangega.

Upload ke baad Vercel se connect
vercel.com → Login (GitHub se bhi login kar sakte ho)
Add New Project
Import → apna bsp-fashion repo select
Deploy
Site live: https://bsp-fashion.vercel.app (ya custom domain)
Baad mein GitHub pe file change → Commit → Vercel auto update kar deta hai.

Checklist
Item	Status
index.html root pe	✅
vercel.json root pe	✅
api/p.js api folder mein	✅
GitHub repo public/private	✅
Vercel se import + deploy	✅
Short path (sirf 4 steps)
GitHub → New repository → bsp-fashion
Upload files → index.html, vercel.json
Create new file → path: api/p.js → code paste → Commit
Vercel → Import GitHub repo → Deploy
Agar kisi step ka screenshot bhejoge (GitHub upload screen), us pe exact kya click karna hai bata dunga.

respiratory jo pehle bana hua hai usme upload karne se hoga

Haan — purane repository mein bhi upload / update ho jayega. Naya banane ki zaroorat nahi.

Existing repo mein kaise daalo
Step 1
github.com → apna purana repo kholo

(jo pehle bana hua hai — jaise bsp-fashion ya jo bhi naam hai)

Step 2 — Files add / replace
A) Root files (index.html, vercel.json)

Repo mein Add file → Upload files
index.html aur vercel.json drag & drop
Agar pehle se index.html hai → overwrite / replace ho jayega
Commit changes
B) api/p.js (naya folder)

Add file → Create new file
File name box mein exact likho:
api/p.js
p.js ka poora code paste karo
Neeche Commit changes
Isse GitHub khud api folder bana dega aur andar p.js rakh dega.

Agar pehle se files hain
Situation	Kya karo
Purana index.html hai	Naya HTML upload → replace → Commit
api folder nahi hai	api/p.js path se create
api/p.js pehle se hai	File open → Edit (pencil) → naya code → Commit
Vercel side
Agar yeh same repo already Vercel se connected hai → Commit ke baad auto redeploy hoga
Connected nahi hai → Vercel → Import → yahi existing repo select → Deploy
Short answer
Haan, existing repository mein upload se ho jayega.

Bas usi repo mein files daalo / replace karo + Commit — naya repo banane ki need nahi.

plz check and fix

2 / 2
High Demand
Please try again soon, or upgrade for higher priority access

now check this

High Demand
Please try again soon, or upgrade for higher priority access

retry


Worked for 1m 28s
Screenshot se 3 problems clear hain:

1. “Protected Deployment – Vercel”
Aapne preview / password-protected link se share kiya:
bsp-fashion-kutge046w-bsp10.vercel.app

Ispe WhatsApp bot andar nahi ja sakta → sirf Vercel ka black “Protected” preview aata hai.

Fix: Hamesha production se share karo:

https://bspfashion.vercel.app

(Code mein ab share link force production pe set hai.)

2. Product image nahi, website OG aa raha
Live site pe abhi bhi purana share code hai:

https://bspfashion.vercel.app/#product-1009
#product-... se WhatsApp ko product photo nahi milti.

Sahi link aisa hona chahiye:

https://bspfashion.vercel.app/api/p?id=...&t=...&img=PRODUCT_IMAGE&d=...
3. /api/p live pe 404
Matlab api/p.js GitHub/Vercel pe deploy nahi hua.

Aapko kya karna hai (order mein)
A) Files deploy karo
Repo / Vercel project mein yeh structure:

index.html      ← naya bsp-fashion-firebase.html (rename)
vercel.json
api/
  p.js          ← zaroor
Files yahan hain:

B) GitHub pe
Purane repo mein index.html replace
api/p.js add (Create file → path: api/p.js)
vercel.json root pe
Commit
C) Vercel
Auto deploy wait karo, ya Redeploy
Deployment Protection OFF rakho production pe (Settings → Deployment Protection)
D) Test
Browser mein kholo:

https://bspfashion.vercel.app/api/p?id=test&t=Test%20Frock&img=https://i.ibb.co/0RqxsYmT/1777788000451.jpg&d=MOQ%206
Product title + image dikhe → API OK
404 → api/p.js abhi bhi missing
Phir site se naya Share → WhatsApp (purana message dubara mat bhejo).

Share ke baad kya dikhna chahiye
Field	Expected
Title	Product name (e.g. Long Frock…)
Image	Usi product ki photo
Link	bspfashion.vercel.app/api/p?...
Note: Purane WhatsApp messages ka preview change nahi hota. Naya share karke test karo.

2 / 2
Refer to the following content:


Worked for 23s
Screenshot sahi problem dikha raha hai — lekin yeh code ka bug live pe abhi bhi hai, isliye same preview aa raha hai.

Screenshot mein kya galat hai
Dikha raha hai	Problem
Link: #product-1009	Purana format — product photo OG nahi banati
Preview image	Website ka default catalog / logo
Title	“BSP Fashion - Premium Clothing…” (site title, product nahi)
Yani production (bspfashion.vercel.app) pe abhi bhi purana HTML chal raha hai.

Maine abhi check kiya:

Live code: abhi bhi #product- use karta hai
/api/p → 404 (file deploy nahi hui)
Isliye WhatsApp ko product image nahi milti.

Yeh message dubara share se theek nahi hoga
Purana WhatsApp message ka preview change nahi hota.

Pehle naya code deploy, phir naya Share karna hoga.

Ab kya karna hai (mandatory)
1) GitHub repo mein yeh 3 cheezein daalo / replace karo
📁 aapka-repo
 ├── index.html     ← naya HTML (rename from bsp-fashion-firebase.html)
 ├── vercel.json
 └── api/
      └── p.js
Download:

 → index.html naam se
 → path api/p.js
 → root
2) Commit + Vercel deploy wait
3) Browser test (deploy ke baad)
https://bspfashion.vercel.app/api/p?id=1009&t=Long%20Frock&img=https://i.ibb.co/0RqxsYmT/1777788000451.jpg&d=MOQ%206
404 = api/p.js abhi bhi missing
Product name + image dikhe = OK
4) Site se naya Share → WhatsApp
Purane chat wala message ignore karo.

Deploy ke baad share aisa dikhega
Title:  Long Frock Sequence Work | BSP Fashion
Image:  usi frock ki photo
Link:   bspfashion.vercel.app/api/p?id=1009&t=...&img=...
Short: Screenshot confirm karta hai ki naya share code live nahi hai.

Pehle index.html + api/p.js deploy karo, phir naya share test karo — tab product image aayegi.

api folder name kiya rakhe

Folder ka naam exactly yeh hona chahiye:

api
Chhote letters: api
API, Api, apis mat likhna
Structure
📁 aapka-project
 ├── index.html
 ├── vercel.json
 └── 📁 api          ← folder name: api
      └── p.js       ← iske andar file: p.js
GitHub pe nayi file banate waqt path likho:

api/p.js
Vercel is folder ko serverless function samajhta hai. Naam alag hoga to /api/p 404 aayega.

next process step by step bato

Screenshot ke hisaab se ab yeh steps follow karo.

Aapka repo: Imran-BSP / bspfashion

Root pe pehle se index.html hai — yahi theek hai.

Step 1 — api/p.js banao
Add file pe click (jo dropdown open hai)
Create new file choose karo
Upar Name your file… box mein exactly yeh type karo:
api/p.js
GitHub automatically api folder bana dega.

Badi white editor box mein neeche wala poora code paste karo:
// Vercel Serverless — Product OG for WhatsApp
function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

module.exports = (req, res) => {
  const q = req.query || {};
  const id = q.id || '';
  const title = q.t || 'BSP Fashion Product';
  const image = q.img || 'https://i.ibb.co/0RqxsYmT/1777788000451.jpg';
  const desc = q.d || 'Premium wholesale clothing • BSP Fashion Kolkata';
  const site = 'https://bspfashion.vercel.app';
  const dest = site + '/?product=' + encodeURIComponent(id);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)} | BSP Fashion</title>
  <meta name="description" content="${esc(desc)}" />
  <meta property="og:type" content="product" />
  <meta property="og:site_name" content="BSP Fashion" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:secure_url" content="${esc(image)}" />
  <meta property="og:url" content="${esc(dest)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <meta http-equiv="refresh" content="0;url=${esc(dest)}" />
  <link rel="canonical" href="${esc(dest)}" />
</head>
<body>
  <p>Opening product…</p>
  <p><a href="${esc(dest)}">View on BSP Fashion</a></p>
  <script>location.replace(${JSON.stringify(dest)});</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=86400');
  res.statusCode = 200;
  res.end(html);
};
Neeche scroll → Commit changes
Message: Add api/p.js for product share
Commit changes (green button)
Step 2 — vercel.json banao
Phir se Add file → Create new file
File name:
vercel.json
Paste:
{
  "rewrites": [
    { "source": "/api/p", "destination": "/api/p" }
  ]
}
Commit changes
Step 3 — index.html update (naya share code)
Repo list mein index.html pe click
Pencil icon Edit (ya Add file → Upload files se replace)
Jo naya HTML maine diya tha (bsp-fashion-firebase.html), uska poora content yahan paste / upload karo
Commit changes
Message: Update index.html product share OG
Agar file bahut badi hai aur paste mushkil ho:

Add file → Upload files
Computer se naya index.html drag karo
Commit
Step 4 — Deploy check
2–3 minute wait (Vercel auto deploy — right side “Production 2 hours ago” update hoga)
Browser mein test:
https://bspfashion.vercel.app/api/p?id=1009&t=Long%20Frock&img=https://i.ibb.co/0RqxsYmT/1777788000451.jpg&d=MOQ%206
Result	Matlab
“Opening product…” / redirect	API OK
404	api/p.js path galat / commit nahi hua
Step 5 — WhatsApp test
https://bspfashion.vercel.app kholo (hard refresh: Ctrl+Shift+R)
Koi product → Share → WhatsApp
Naya message bhejo (purana message mat dekho)
Preview mein product name + product photo aana chahiye.

Abhi aap kahan ho
Screenshot mein Add file dropdown open hai → seedha Create new file dabao → Step 1 (api/p.js) se start karo.

Pehle Step 1 complete karke bata dena — agla step confirm kar denge.

Abhi tak img nhi aaraha hai aur link bhi lamba chowda hogaya hai


Worked for 1m 16s
API ab kaam kar rahi hai (200 OK + product OG tags).

Problem yeh thi ki message mein 3–4 lamba links the (image + api + site), isliye WhatsApp confuse hoke koi sahi preview nahi dikhata.

Fix (code mein kar diya)
Ab WhatsApp message short hoga, sirf 1 link:

*Tencel Dobby Set (Trending)*
BSP Fashion • Wholesale

MOQ 6 • From ₹140
• 16x18 — ₹140
• 20x30 — ₹160

https://bspfashion.vercel.app/api/p?id=1016&t=...&img=...
Extra image URL hata di
Extra “Site:” link hata di
Image URL se ?updatedAt=... hata di (link chhota)
Us ek link ka preview = product photo + name

Aapko kya deploy karna hai
index.html replace (naya short share)
api/p.js update
Commit → Vercel deploy wait
Naya Share → WhatsApp (purana message ignore)
Test
Browser:

https://bspfashion.vercel.app/api/p?id=1016&t=Tencel%20Dobby%20Set&img=https://ik.imagekit.io/bsp/1788066275504-clean.png&d=MOQ%206
Page pe title “Tencel Dobby Set” dikhna chahiye.

Phir WhatsApp pe naya share — upar product image card aana chahiye.

Note: Apne aap ko message (“Message yourself”) pe kabhi preview late / weak aata hai. Kisi dusre number pe bhej ke test karna best hai.

2 / 2
*Handwork Design Indo Western Set*
BSP Fashion • Wholesale

MOQ 6 pcs • From ₹240 • kids

Sizes & Rates:
• 26x30 — ₹240
• 32x34 — ₹270

https://ik.imagekit.io/bsp/file_00000000b23c8211880f47c34cfb0f36.png?updatedAt=1788118403955

🛒 Order:
https://bspfashion.vercel.app/api/p?id=1015&t=Handwork%20Design%20Indo%20Western%20Set&img=https%3A%2F%2Fik.imagekit.io%2Fbsp%2Ffile_00000000b23c8211880f47c34cfb0f36.png%3FupdatedAt%3D1788118403955&d=MOQ%206%20pcs%20%E2%80%A2%20From%20%E2%82%B9240%20%E2%80%A2%20kids

Site: https://bspfashion.vercel.app/?product=1015
WhatsApp: +91 8981839702


Worked for 38s
Jo message aapne paste kiya hai woh purane share ka hai.

Usme ab bhi yeh cheezein hain jo naye code mein nahi honi chahiye:

Alag se ImageKit photo link
Site: ...
WhatsApp: +91...
Image pe ?updatedAt=...
Live site ab kya kar raha hai
Maine check kiya — naya short code live pe hai, aur /api/p bhi theek hai:

Title: Handwork Design Indo Western Set
Image: product photo (ImageKit)
Status: 200 OK
Matlab problem deploy ki nahi, purana WhatsApp message / cache ki hai.

Ab kya karo
1) Phone / browser hard refresh
Site: https://bspfashion.vercel.app
Ctrl+Shift+R (laptop) ya browser cache clear (phone)
2) Naya share
Product → Share → WhatsApp

3) Message aisa hona chahiye (short)
*Handwork Design Indo Western Set*
BSP Fashion • Wholesale

MOQ 6 • From ₹240
• 26x30 — ₹240
• 32x34 — ₹270

https://bspfashion.vercel.app/api/p?id=1015&t=Handwork%20Design%20Indo%20Western%20Set&img=https%3A%2F%2Fik.imagekit.io%2Fbsp%2Ffile_00000000b23c8211880f47c34cfb0f36.png&d=MOQ%206%20%E2%80%A2%20From%20%E2%82%B9240
Sirf ek link — iske upar WhatsApp ko product image card dikhana chahiye.

Agar phir bhi image na aaye
Purana message delete karke naya bhejo (purane ka preview update nahi hota)
Apne aap ko (“Message yourself”) ki jagah kisi dusre number pe bhejo
Browser mein yeh link kholo — title + image meta sahi hai ya nahi:
https://bspfashion.vercel.app/api/p?id=1015&t=Handwork%20Design%20Indo%20Western%20Set&img=https://ik.imagekit.io/bsp/file_00000000b23c8211880f47c34cfb0f36.png&d=MOQ%206
Optional: Facebook Sharing Debugger pe wahi /api/p?... link daal ke Scrape Again — WhatsApp bhi isse related cache use karta hai
Short: Aapka pasted text = old share.

Live pe naya short format already hai. Hard refresh → naya Share → dusre number pe test.

Yeh link copy ho raha hai isko thik karo


Worked for 1m 12s
Link ab short ho gaya.

Pehle (lamba)
https://bspfashion.vercel.app/api/p?id=1015&t=Handwork%20Design...&img=https%3A%2F%2Fik...
Ab
WhatsApp / Share:

https://bspfashion.vercel.app/api/p?id=1015
Copy link button:

https://bspfashion.vercel.app/?product=1015
API sirf id se Firestore mein product dhoondh kar naam + photo OG mein set karegi — isliye URL chhota reh sakta hai.

Deploy (dono files)
 → index.html
 → api/p.js
Commit → Vercel deploy → hard refresh → naya Share.

Message ab aisa dikhega
*Handwork Design Indo Western Set*
BSP Fashion • Wholesale

MOQ 6 • From ₹240
• 26x30 — ₹240
• 32x34 — ₹270

https://bspfashion.vercel.app/api/p?id=1015
Note: Product image WhatsApp preview mein aane ke liye Firestore read rules open honi chahiye (test mode / products read allow). Agar API ko product na mile to generic image aayegi.

Abhi aisa hua hai

Bahut badhiya — product image ab aa rahi hai!

Screenshot mein preview card theek hai:

Photo ✓
Handwork Design Indo Western Set ✓
MOQ 6 • From ₹240 ✓
Jo bacha hai: neeche wala lamba link
Message body mein abhi bhi purana lamba URL hai (&t=...&img=...).

Short wala code abhi fully use nahi ho raha / cache. Deploy ke baad link sirf itna hona chahiye:

https://bspfashion.vercel.app/api/p?id=1015
Ab kya karo
Latest files GitHub pe commit karo (agar abhi nahi kiye):
→ index.html
 → api/p.js
Vercel deploy wait
Site hard refresh (Ctrl+Shift+R)
Naya Share → WhatsApp (purana message mat dekho)
Final message aisa dikhega
*Handwork Design Indo Western Set*
BSP Fashion • Wholesale

MOQ 6 • From ₹240
• 26x30 — ₹240
• 32x34 — ₹270

https://bspfashion.vercel.app/api/p?id=1015
Upar image card + neeche short link.

Summary: Image preview problem solve ho chuki hai. Ab sirf short link deploy karke naya share karo.

Link alag hona chahiye, product name alag imagekit ka link nhi hona chahiye isme


Worked for 33s
Ho gaya. Ab message clean rahega.

WhatsApp mein ab yeh aayega
*Handwork Design Indo Western Set*
BSP Fashion • Wholesale

MOQ 6 • From ₹240
• 26x30 — ₹240
• 32x34 — ₹270

https://bspfashion.vercel.app/api/p?id=1015
Cheez	Status
Product name	Alag, clear
Sizes / rates	Alag
Link	Short, sirf id
ImageKit URL	Message mein nahi
Preview image	API se (link open / OG)
Photo WhatsApp preview card mein aayegi (jaise pehle screenshot mein), text mein ImageKit link nahi dikhegi.

Deploy
→ index.html
→ api/p.js (pehle jaisa)

Commit → deploy → hard refresh → naya Share.

iss files mein se jo mistaken upload hua hai umko kaise remove kare

GitHub se galat files aise hatao.

Screenshot mein extra / galat files:

File	Status
1	❌ hatao
pjs	❌ hatao (root pe)
verceljson	❌ hatao (galat naam)
bspfashion/ folder	❌ shayad duplicate — hatao agar andar same files hain
api/	✅ rakhna
index.html	✅ rakhna
vercel.json	✅ hona chahiye (agar nahi dikh raha to dubara add)
Step-by-step: file delete
Ek file hatani ho (jaise 1, pjs, verceljson)
Us file pe click karo (1 ya pjs)
File open hote hi right side trash / Delete icon (🗑️)
Commit changes
Message: Remove wrong file
Green Commit changes
Yahi process har galat file ke liye repeat karo.

Folder hatana (bspfashion folder)
GitHub website pe folder seedha delete mushkil hota hai. Options:

Option A — folder ke andar ki files delete

bspfashion folder open karo
Har file open → Delete → Commit
Folder khali hone pe gayab ho jata hai
Option B — Create new file se overwrite nahi

Folder delete ke liye Git use karna better hai (neeche).

Sahi structure aisa hona chahiye
bspfashion (repo)
├── api/
│   └── p.js          ← andar p.js
├── index.html
├── gallery.html
├── vercel.json       ← exact yeh naam
├── og-image.jpg
├── og-image.png
└── README.md
Root pe nahi hone chahiye: 1, pjs, verceljson, extra bspfashion folder

api/p.js check
api folder pe click
Andar p.js hona chahiye
Agar api khali hai / galat file hai:
Add file → Create new file
Path: api/p.js
Code paste → Commit
vercel.json sahi naam se
Agar sirf verceljson hai (bina dot ke):

verceljson delete karo
Add file → Create new file
Name: vercel.json
Content:
{
  "rewrites": [
    { "source": "/api/p", "destination": "/api/p" }
  ]
}
Commit
Order (abhi)
Delete → 1 → Commit
Delete → pjs → Commit
Delete → verceljson → Commit
api/p.js confirm karo
vercel.json sahi add karo
index.html latest wala rakho
Delete ke baad Vercel khud naya deploy chala dega.

Koi file pe Delete icon nahi dikhe to us file ka screenshot bhejna.

Jo bhi products share karta hu toh ek hi product ka og show ho raha hai


Worked for 1m 22s
Problem clear hai.

GitHub pe kya galat hai
Repo mein api ek FILE hai, folder nahi.

Vercel ko chahiye:

api/p.js     ← folder "api" ke ANDAR file "p.js"
Abhi hai:

api          ← yeh FILE hai (galat)
Isliye /api/p 404 → WhatsApp purana cache / ek hi product ka OG dikhata hai.

Fix (step by step)
Step 1 — Galat api file delete
Repo mein api file pe click
Delete (trash icon)
Commit: Remove wrong api file
Step 2 — Sahi folder + file banao
Add file → Create new file
Name box mein exactly:
api/p.js
Neeche  ka poora code paste
Commit: Add api/p.js folder
Step 3 — index.html update
Latest  se replace

Commit: Short unique product share links

Step 4 — Deploy ke baad test
Browser mein alag-alag IDs:

https://bspfashion.vercel.app/api/p?id=1015&t=Handwork
https://bspfashion.vercel.app/api/p?id=1016&t=Tencel
Har ek pe alag title dikhna chahiye.

Agar dono pe same / 404 → api/p.js abhi bhi galat path pe hai.

Step 5 — WhatsApp
Naya share (purane messages ka preview cache rehta hai)
Alag products share karo → alag image card aani chahiye
Sahi repo structure
✅ api/
✅    p.js
✅ index.html
✅ vercel.json
✅ gallery.html
❌ api          (file — mat rakho)
❌ pjs
❌ 1
Short: Ek hi OG isliye aa raha tha kyunki api folder toot chuka tha.

api file delete → api/p.js sahi banao → naya share.

Refer to the following content:


Worked for 1m 10s
Repo structure ab theek hai — api/p.js folder sahi hai, API bhi chal rahi hai.

Asli problem
Har product pe same image isliye aa rahi hai kyunki live api/p.js abhi bhi purana simple code hai:

Title → URL se t= (alag-alag ho sakta hai)
Image → hamesha default photo (Firestore se nahi nikalti)
Isliye WhatsApp har baar ek jaisi image dikhata hai.

Ab kya karna hai
1) api/p.js replace (Firestore wala naya code)
GitHub → api folder → p.js open
Pencil Edit
Saara purana code hatao
Yeh naya code paste karo:
Commit: Fix unique product OG from Firestore
2) index.html bhi latest
 se replace → Commit

3) Deploy ke baad test
https://bspfashion.vercel.app/api/p?id=1015
https://bspfashion.vercel.app/api/p?id=1016
ID	Title	Image
1015	Handwork Design Indo Western Set	usi product ki photo
1016	Tencel Dobby Set	alag photo
Agar dono pe alag image dikhe → theek hai.

4) WhatsApp
Purane messages ignore → naya share alag-alag products ka.

Screenshot pe ek chhoti cheez
verceljson naam galat lag sakta hai list mein — confirm karo file vercel.json hai (beech mein dot).

Git tree mein vercel.json sahi dikh raha tha, to OK.

Short: Folder theek hai. Ab api/p.js ke andar naya Firestore code paste karo, tab har product ka apna OG image aayega.

till now not fixed yaar isko jaldi repair karo


Worked for 1m 11s
Abhi bhi default OG isliye aa raha hai kyunki share pe product title + image URL API tak nahi ja rahe, aur live API Firestore se photo nahi nikaal pa rahi.

Maine fix tight kar diya:

Share link mein har product ka id + name + image jayega → OG unique
Message mein alag se ImageKit line nahi — sirf ek Order link
API pehle URL se image legi, warna Firestore se
Abhi yeh 2 files REPLACE karo (jaldi)
1) api/p.js
GitHub → api → p.js → Edit → pura code hatao → yeh paste:


Commit: Fix unique product image OG

2) index.html
Root index.html → latest se replace:


Commit: Share unique OG per product

Deploy ke 2 min baad test
Browser:

https://bspfashion.vercel.app/api/p?id=1007&t=Fancy%20Top%20Plazo&img=https://ik.imagekit.io/bsp/1788098508651-clean.jpg&d=MOQ%206
Title: Fancy Top Plazo… (BSP Fashion Product nahi)
Image: usi set ki photo
Phir site se naya Share → WhatsApp (purana message mat dekho).

Message aisa dikhega
*Fancy Top Plazo Set (Handwork)*
BSP Fashion • Wholesale

MOQ 6 • From ₹240
• 26x30 — ₹240
…

https://bspfashion.vercel.app/api/p?id=1007&t=...&img=...
Upar preview card = sahi product name + sahi photo.

Link thoda lamba hoga — bina img= ke WhatsApp unique photo nahi dikha sakta. Yeh zaroori hai.





api

p.js

Files
// /api/p?id=1007&t=Name&img=ImageURL&d=Desc
// Query params win first (unique OG). Firestore localId lookup as backup.

const PROJECT_ID = 'bsp-fashion-kol';

function esc(s) {
  return String(s || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function cleanImg(url) {
  if (!url) return '';
  try {
    const u = new URL(url);
    return u.origin + u.pathname;
  } catch (e) {
    return String(url).split('?')[0];
  }
}

function fromFirestoreValue(v) {
  if (v == null) return null;
  if (v.stringValue !== undefined) return v.stringValue;
  if (v.integerValue !== undefined) return Number(v.integerValue);
  if (v.doubleValue !== undefined) return Number(v.doubleValue);
  if (v.booleanValue !== undefined) return v.booleanValue;
  if (v.arrayValue && v.arrayValue.values) return v.arrayValue.values.map(fromFirestoreValue);
  if (v.mapValue && v.mapValue.fields) {
    const o = {};
    for (const [k, val] of Object.entries(v.mapValue.fields)) o[k] = fromFirestoreValue(val);
    return o;
  }
  return null;
}

function parseDoc(doc) {
  const f = doc.fields || {};
  const name = fromFirestoreValue(f.name) || 'BSP Fashion Product';
  const moq = fromFirestoreValue(f.moq) || 12;
  const category = fromFirestoreValue(f.category) || '';
  let images = fromFirestoreValue(f.images) || [];
  if (!Array.isArray(images)) images = [];
  let sizes = fromFirestoreValue(f.sizes) || [];
  if (!Array.isArray(sizes)) sizes = [];
  const prices = sizes.map((s) => (s && s.price != null ? Number(s.price) : NaN)).filter((n) => !isNaN(n));
  const minPrice = prices.length ? Math.min(...prices) : 0;
  return {
    name,
    img: cleanImg(images[0] || ''),
    desc: `MOQ ${moq} • From ₹${minPrice}${category ? ' • ' + category : ''}`
  };
}

async function findByLocalId(id) {
  const sid = String(id || '').trim();
  if (!sid) return null;

  const attempts = [];
  if (/^\d+$/.test(sid)) {
    attempts.push({ integerValue: sid });
    attempts.push({ stringValue: sid });
  } else {
    attempts.push({ stringValue: sid });
  }

  for (const value of attempts) {
    try {
      const body = {
        structuredQuery: {
          from: [{ collectionId: 'products' }],
          where: {
            fieldFilter: {
              field: { fieldPath: 'localId' },
              op: 'EQUAL',
              value
            }
          },
          limit: 1
        }
      };
      const r = await fetch(
        `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents:runQuery`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) }
      );
      if (!r.ok) continue;
      const rows = await r.json();
      const hit = (rows || []).find((x) => x.document);
      if (hit) return parseDoc(hit.document);
    } catch (e) {}
  }

  // direct doc id
  try {
    const r = await fetch(
      `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/products/${encodeURIComponent(sid)}`
    );
    if (r.ok) {
      const doc = await r.json();
      if (doc.fields) return parseDoc(doc);
    }
  } catch (e) {}

  return null;
}

module.exports = async (req, res) => {
  try {
    const q = req.query || {};
    const id = q.id || '';
    let title = q.t ? String(q.t) : '';
    let image = q.img ? cleanImg(String(q.img)) : '';
    let desc = q.d ? String(q.d) : '';

    // Always try Firestore when id present (fills missing title/image)
    if (id && (!title || !image || !desc)) {
      const prod = await findByLocalId(id);
      if (prod) {
        if (!title) title = prod.name;
        if (!image) image = prod.img;
        if (!desc) desc = prod.desc;
      }
    }

    title = (title || 'BSP Fashion Product').slice(0, 100);
    image = image || 'https://ik.imagekit.io/bsp/1788066275504-clean.png';
    desc = (desc || 'Wholesale clothing • BSP Fashion Kolkata').slice(0, 160);
    const dest = 'https://bspfashion.vercel.app/?product=' + encodeURIComponent(id || '');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${esc(title)} | BSP Fashion</title>
  <meta name="robots" content="noindex" />
  <meta name="description" content="${esc(desc)}" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="BSP Fashion" />
  <meta property="og:title" content="${esc(title)}" />
  <meta property="og:description" content="${esc(desc)}" />
  <meta property="og:image" content="${esc(image)}" />
  <meta property="og:image:secure_url" content="${esc(image)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="1200" />
  <meta property="og:url" content="${esc(dest)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(title)}" />
  <meta name="twitter:description" content="${esc(desc)}" />
  <meta name="twitter:image" content="${esc(image)}" />
  <link rel="canonical" href="${esc(dest)}" />
  <meta http-equiv="refresh" content="0;url=${esc(dest)}" />
</head>
<body style="font-family:system-ui;background:#111;color:#eee;text-align:center;padding:40px">
  <p>Opening <strong>${esc(title)}</strong>…</p>
  <p><a href="${esc(dest)}" style="color:#d4af37">Open product</a></p>
  <script>location.replace(${JSON.stringify(dest)});</script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    res.statusCode = 200;
    res.end(html);
  } catch (err) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('<html><head><title>BSP Fashion</title></head><body>OK</body></html>');
  }
};
BSP Fashion: Premium Kids & Adult Wear - Grok
