// @ts-nocheck
// Simulating a log event with timestamp, source, and message
interface LogEvent {
  timestamp: Date;
  source: string;
  message: string;
}

function logEvent(source: string, message: string): LogEvent {
  const timestamp = new Date();
  return { timestamp, source, message };
}

// Example usage
const securityLog = logEvent("Firewall", "Unauthorized access attempt");
console.log(securityLog);
