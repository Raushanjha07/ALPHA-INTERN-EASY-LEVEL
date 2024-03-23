function convert() {
    const input = parseFloat(document.getElementById("input").value);
    const fromUnit = document.getElementById("fromUnit").value;
    let result;
  
    switch (fromUnit) {
      case "m":
        result = input;
        break;
      case "km":
        result = input * 1000;
        break;
      case "ft":
        result = input * 0.3048;
        break;
      case "mi":
        result = input * 1609.34;
        break;
      default:
        result = "Invalid unit";
    }
  
    document.getElementById("result").textContent = "Result: " + result.toFixed(2) + " meters";
  }
  