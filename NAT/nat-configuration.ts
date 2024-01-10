// @ts-nocheck

interface NATConfiguration {
  privateNetwork: string[];
  publicIPAddress: string;
}

const natConfig: NATConfiguration = {
  privateNetwork: ["192.168.1.0/24", "10.0.0.0/24"],
  publicIPAddress: "203.0.113.1",
};
