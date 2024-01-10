// @ts-nocheck

interface NATTranslationEntry {
  privateIP: string;
  publicIP: string;
}

class NATTranslationTable {
  private translations: NATTranslationEntry[] = [];

  addTranslation(entry: NATTranslationEntry): void {
    this.translations.push(entry);
  }

  getPublicIP(privateIP: string): string | undefined {
    const entry = this.translations.find((e) => e.privateIP === privateIP);
    return entry ? entry.publicIP : undefined;
  }
}

const translationTable = new NATTranslationTable();
translationTable.addTranslation({ privateIP: "192.168.1.2", publicIP: "203.0.113.2" });
translationTable.addTranslation({ privateIP: "10.0.0.3", publicIP: "203.0.113.3" });

const publicIP = translationTable.getPublicIP("192.168.1.2");
console.log(publicIP); // Output: 203.0.113.2
