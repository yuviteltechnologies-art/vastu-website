/**
 * GOOGLE APPS SCRIPT CODE (Code.gs)
 * ----------------------------------------------------
 * Is code ko aapko apni Google Sheet ke andar daalna hai:
 * 1. Google Sheet open karein
 * 2. Menu me 'Extensions' -> 'Apps Script' par click karein
 * 3. Jo code pehle se ho use delete karke yeh code paste kar dein
 * 4. 'Deploy' -> 'New Deployment' -> Select type 'Web app'
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. 'Deploy' dabayein aur URL copy kar lein!
 */

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Products") || ss.getActiveSheet();
    var values = sheet.getDataRange().getValues();
    
    if (values.length <= 1) {
      return returnJsonResponse([]);
    }
    
    var headers = values[0];
    var results = [];
    
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
      
      // Agar row khali nahi hai aur is_active FALSE nahi hai
      if (hasData) {
        if (!item.is_active || String(item.is_active).toUpperCase() === "TRUE") {
          results.push(item);
        }
      }
    }
    
    // Agar user direct web page dekhna chahta hai Google Script me (view=html)
    if (e && e.parameter && e.parameter.view === "html") {
      return HtmlService.createHtmlOutputFromFile("Index")
        .setTitle("VastuGeo Tools")
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .addMetaTag('viewport', 'width=device-width, initial-scale=1');
    }
    
    // Default: JSON response return karega (Frontend website isse data legi)
    return returnJsonResponse(results);

  } catch (err) {
    return returnJsonResponse({ error: err.toString() });
  }
}

function returnJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Quick helper to populate initial dummy headers & rows if sheet is blank
 */
function setupVastuSheetTemplate() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.setName("Products");
  
  var headers = [
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
  
  sheet.clear();
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#D4AF37").setFontColor("#000000");
  
  sheet.appendRow([
    "ggb-16-zones",
    "16 Zones GeoGebra Vastu Chakra Template",
    "software",
    "Most Popular",
    1999,
    799,
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    "Automatic North locking, 22.5 degree zone division and center-finding algorithm for any house plan.",
    "16 Precise Vedic Zones, Auto Center Brahmasthan Finder, Works on PC & Mobile GeoGebra",
    "TRUE"
  ]);

  sheet.appendRow([
    "ggb-32-entrances",
    "32 Entrances (Padavinyas) Calculator File",
    "software",
    "High Accuracy",
    2499,
    999,
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    "Calculate exact 11.25 degree energy entrance zones (N1 to N8, E1 to E8) effortlessly.",
    "All 32 Door Entrances Marked, Exact Degree Projection, Avoid Door Cut Errors",
    "TRUE"
  ]);

  SpreadsheetApp.flush();
}

