function executeScript(action) {
    switch (action) {
      case "Home":
        alert("Running Home script...");
        break;
      case "About":
        alert("Running About script...");
        break;
      case "Services":
        alert("Running Services script...");
        break;
      case "Portfolio":
        alert("Running Portfolio script...");
        break;
      case "Contact":
        alert("Running Contact script...");
        break;
      default:
        console.log("No action defined.");
    }
  }
  