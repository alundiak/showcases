// @ts-nocheck
// Simulating a basic alert structure
interface Alert {
  severity: string;
  message: string;
}

function generateAlert(severity: string, message: string): Alert {
  return { severity, message };
}

// Example usage
const highSeverityAlert = generateAlert("High", "Potential security threat detected");
console.log(highSeverityAlert);
