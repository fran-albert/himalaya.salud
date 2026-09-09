export const siteUrl = "https://www.himalayasalud.com.ar";
export const portalUrl = "https://app.hci.himalayasalud.com.ar";

function subscriptionDestination() {
  const configured = process.env.NEXT_PUBLIC_SUBSCRIPTION_URL;
  if (!configured) return portalUrl;
  try {
    const url = new URL(configured);
    if (
      url.protocol !== "https:" ||
      url.origin !== portalUrl ||
      url.username ||
      url.password
    )
      throw new Error();
    return url.toString();
  } catch {
    throw new Error(
      "NEXT_PUBLIC_SUBSCRIPTION_URL debe ser una URL HTTPS del portal HCI.",
    );
  }
}
export const subscriptionUrl = subscriptionDestination();
export const businessWhatsappUrl =
  "https://wa.me/5493412429819?text=" +
  encodeURIComponent(
    "Hola, quiero consultar por Himalaya Salud para las personas de mi empresa.",
  );
