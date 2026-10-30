/**
 * GOOGLE APPS SCRIPT CODE (Code.gs)
 * ----------------------------------------------------
 * Dynamic E-Commerce Backend: Products + Site Settings
 * 
 * 1. Google Sheet me 2 Tabs honge: 'Products' aur 'Settings'
 * 2. 'Settings' tab me: Brand Name, Logo, Hero Text, WhatsApp, UPI
 * 3. 'Products' tab me: Saare products ki list
 */

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // 1. Fetch Site Settings (Key-Value tab)
    var settings = {};
    var settingsSheet = ss.getSheetByName("Settings");
    if (settingsSheet) {
      var sRows = settingsSheet.getDataRange().getValues();
      for (var s = 1; s < sRows.length; s++) {
        var k = String(sRows[s][0]).trim().toLowerCase();
        var v = sRows[s][1];
        if (k) {
          settings[k] = v;
        }
      }
    }
    
    // 2. Fetch Products
    var productsSheet = ss.getSheetByName("Products") || ss.getActiveSheet();
    var values = productsSheet.getDataRange().getValues();
    var products = [];
    
    if (values.length > 1) {
      var headers = values[0];
      for (var i = 1; i < values.length; i++) {
        var row = values[i];
        var item = {};
        var hasData = false;
        
        for (var j = 0; j < headers.length; j++) {
          var key = String(headers[j]).trim().toLowerCase();
          var val = row[j];
          if (val !== "") hasData = true;
          item[key] = val;
        }
        
        if (hasData) {
          // Default to TRUE if is_active is omitted
          if (!item.is_active || String(item.is_active).toUpperCase() === "TRUE") {
            products.push(item);
          }
        }
      }
    }
    
    var responseData = {
      settings: settings,
      products: products
    };
    
    // Optional: Return HTML view if parameter view=html is present
    if (e && e.parameter && e.parameter.view === "html") {
      return HtmlService.createHtmlOutputFromFile("Index")
        .setTitle(settings.brand_name || "VastuGeo Tools")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    }
    
    // Default: Return JSON
    return returnJsonResponse(responseData);

  } catch (err) {
    return returnJsonResponse({ error: err.toString() });
  }
}

function returnJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Run this function once in Apps Script to automatically generate both 
 * 'Settings' and 'Products' tabs with full pre-filled templates!
 */
function setupAutoTabs() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Create or Reset 'Settings' Sheet
  var sSheet = ss.getSheetByName("Settings") || ss.insertSheet("Settings");
  sSheet.clear();
  sSheet.appendRow(["key", "value", "description"]);
  sSheet.getRange(1, 1, 1, 3).setFontWeight("bold").setBackground("#D4AF37").setFontColor("#000000");
  
  var defaultSettings = [
    ["brand_name", "VastuGeo", "Website ka main naam"],
    ["brand_tagline", "Mathematical Vastu Tools", "Logo ke niche chota text"],
    ["logo_url", "", "Custom logo image URL (khali chhodne par default icon aayega)"],
    ["announcement_text", "Special Launch Discount: 50% OFF on all GeoGebra Vastu Grids & Templates!", "Top notification bar ka text"],
    ["hero_badge", "For Modern Vastu Consultants, Architects & Civil Engineers", "Hero section ka chota trust badge"],
    ["hero_title", "Khatam Karein Manual Compass Ki Galatfehmi. 100% Accurate Vastu with GeoGebra", "Main Badi Headline"],
    ["hero_subtitle", "Kisi bhi floor plan ko sirf 2 minute me 16 Zones, 32 Entrances aur 45 Devtas ke sath degree-to-degree map karein. Ready-to-use .ggb templates bina kisi AutoCAD ya heavy software ke!", "Hero section ka description"],
    ["whatsapp_number", "919999999999", "Customer WhatsApp order number (with country code e.g. 91)"],
    ["upi_id", "vastuconsultant@upi", "UPI QR code payment address"]
  ];
  
  for (var k = 0; k < defaultSettings.length; k++) {
    sSheet.appendRow(defaultSettings[k]);
  }
  
  // 2. Create or Reset 'Products' Sheet
  var pSheet = ss.getSheetByName("Products") || ss.getActiveSheet();
  pSheet.setName("Products");
  pSheet.clear();
  
  var pHeaders = [
    "id",
    "title",
    "category",
    "badge",
    "price_original",
    "price_selling",
    "thumbnail",
    "description",
    "features",
    "is_active"
  ];
  
  pSheet.appendRow(pHeaders);
  pSheet.getRange(1, 1, 1, pHeaders.length).setFontWeight("bold").setBackground("#D4AF37").setFontColor("#000000");
  
  pSheet.appendRow([
    "ggb-16-zones",
    "16 Zones GeoGebra Vastu Chakra Template",
    "software",
    "Most Popular",
    1999,
    799,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    "Automatic North locking, 22.5 degree zone division and center-finding algorithm for any house plan.",
    "16 Precise Vedic Zones, Auto Center Brahmasthan Finder, Works on PC & Mobile GeoGebra, Video Tutorial Included",
    "TRUE"
  ]);

  pSheet.appendRow([
    "ggb-32-entrances",
    "32 Entrances (Padavinyas) Calculator File",
    "software",
    "High Accuracy",
    2499,
    999,
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    "Calculate exact 11.25 degree energy entrance zones (N1 to N8, E1 to E8, S1 to S8, W1 to W8) effortlessly.",
    "All 32 Door Entrances Marked, Exact Degree Projection on Outer Walls, Avoid Door Cut Errors, Lifetime Access",
    "TRUE"
  ]);

  pSheet.appendRow([
    "ggb-45-devta",
    "45 Devta Energy Grid (.GGB Template)",
    "template",
    "Advanced Vastu",
    2999,
    1299,
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
    "Vedic 45 Devtas (32 outer + 13 inner devtas) mapped mathematically on your floor plan for precision remedies.",
    "45 Devta Boundaries, Color-coded Energy Fields, Elemental balance check, GeoGebra 5 & 6 Compatible",
    "TRUE"
  ]);

  pSheet.appendRow([
    "ggb-master-bundle",
    "Complete Master Vastu GeoGebra Suite (All-In-One)",
    "bundle",
    "Mega Saver 65% OFF",
    7499,
    2499,
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    "Full suite containing 16 Zones + 32 Entrances + 45 Devtas + Ayadi Calculations + High-Res PNG Chakra Overlays.",
    "All 5 Premium Files Included, Client Report Presentation Templates, Priority WhatsApp Support, Future Updates Included",
    "TRUE"
  ]);

  SpreadsheetApp.flush();
}
