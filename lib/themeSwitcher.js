;(function () {
	var cs = new CSInterface();
	var WHITE = 0xffffff,
			BLACK = 0x000000,
			DARK_LIGHT_SWITCH_COLOR = 0x888888,
			LIGHT1_2_SWITCH_COLOR = 0xcccccc,
			DARK1_2_SWITCH_COLOR = 0x444444;

	cs.addEventListener(CSInterface.THEME_COLOR_CHANGED_EVENT, setUIColors);
	setUIColors();

	function setUIColors() {
		var skinInfo = cs.getHostEnvironment().appSkinInfo;

		if (skinInfo) {
			var panelBgColor = toHex(skinInfo.panelBackgroundColor.color);

			var body = document.getElementsByTagName("body");
			body[0].style.backgroundColor = "#" + panelBgColor;

			panelBgColor = "0x" + panelBgColor;
			if (panelBgColor > DARK_LIGHT_SWITCH_COLOR) {
				if (panelBgColor > LIGHT1_2_SWITCH_COLOR) {
					addSheetFile("./css/ace.light.css");
				} else {
					addSheetFile("./css/ace.medium.gray.css");
				}
			} else {
				if (panelBgColor > DARK1_2_SWITCH_COLOR) {
					addSheetFile("./css/ace.gray.dark.css");
				} else {
					addSheetFile("./css/ace.dark.css");
				}
			}
		}
	}

	function addSheetFile(path){
		var fileref=document.createElement("link");
		fileref.rel="stylesheet";
		fileref.type="text/css";
		fileref.href= path;
		var headobj=document.getElementsByTagName('head')[0];
		headobj.appendChild(fileref);
	}

  function toHex(color, delta) {
    function computeValue(value, delta) {
      var computedValue = !isNaN(delta) ? value + delta : value;
      if (computedValue < 0) {
        computedValue = 0;
      } else if (computedValue > 255) {
        computedValue = 255;
      }            
      computedValue = Math.floor(computedValue);
      computedValue = computedValue.toString(16);
      return computedValue.length === 1 ? "0" + computedValue : computedValue;
    } 
    var hex = "";
    if (color) {
      hex = computeValue(color.red, delta) + computeValue(color.green, delta) + computeValue(color.blue, delta);
    }
    return hex;
  }
})();
