// @ts-nocheck

function performNATTranslation(privateIP: string, natTable: NATTranslationTable): string {
  const publicIP = natTable.getPublicIP(privateIP);

  if (publicIP) {
    console.log(`Translated ${privateIP} to ${publicIP}`);
    return publicIP;
  } else {
    console.log(`No translation available for ${privateIP}`);
    return privateIP;
  }
}

const translatedIP = performNATTranslation("192.168.1.3", translationTable);
