NAT - Network Address Translation
===

ChatGPT:

> NAT is a technology used in computer networking to enable multiple devices on a local network to share a single public IP address for connecting to the internet. It serves as a mediator between the private local network and the public internet.


## How NAT works

- Private IP Addresses: Devices within a local network are assigned private IP addresses, which are not routable on the internet.

- Public IP Address: The router or gateway connecting the local network to the internet has a public IP address that is visible on the global network.

- Translation: When a device from the local network initiates a connection to the internet, NAT translates the private IP address of the device into the public IP address of the router. This translation is stored in a NAT table.

- Response Translation: When the internet server responds, the router uses the NAT table to determine which device on the local network should receive the response. It then translates the public IP address back to the private IP address of the corresponding device.
