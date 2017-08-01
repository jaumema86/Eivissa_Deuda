var size = 0;
var ranges_Deudavivaporhabitante0 = [[0.000000, 100.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,78,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,255,178,1.0)'})
    })]],
[100.000000, 300.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,78,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(254,183,81,1.0)'})
    })]],
[300.000000, 600.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,78,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(245,86,41,1.0)'})
    })]],
[600.000000, 600.320000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(78,78,78,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(189,0,38,1.0)'})
    })]]];
var styleCache_Deudavivaporhabitante0={}
var style_Deudavivaporhabitante0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Deuda viva por habitante (€)");
    var labelText = "";
    var key = "";
    size = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    if ("" !== null) {
        labelText = String("");
    } else {
        labelText = ""
    }
    var style = ranges_Deudavivaporhabitante0[0][2];
    for (i = 0; i < ranges_Deudavivaporhabitante0.length; i++){
        var range = ranges_Deudavivaporhabitante0[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    key = value + "_" + labelText
    if (!styleCache_Deudavivaporhabitante0[key]){
        var text = new ol.style.Text({
                font: '10.725px \'MS Shell Dlg 2\', sans-serif',
                text: labelText,
                textBaseline: "middle",
                textAlign: textAlign,
                offsetX: offsetX,
                offsetY: offsetY,
                fill: new ol.style.Fill({
                  color: 'rgba(0, 0, 0, 1)'
                })
            });
        styleCache_Deudavivaporhabitante0[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Deudavivaporhabitante0[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};