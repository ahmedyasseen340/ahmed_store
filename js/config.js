/* =========================================================
   ASPIRE — Store contact & payment settings
   This is the ONLY file you need to edit to change where
   contact messages and payment confirmations go.
   ========================================================= */

const STORE_CONFIG = {
  // Where the contact form email lands.
  contactEmail: "ahmedyasseen582@gmail.com",

  // Free email key from https://web3forms.com (enter your email there,
  // they instantly email you a key — paste it here). Without this key
  // the contact form CANNOT send emails.
  web3formsAccessKey: "20ace206-254d-4b03-8392-c7d111647e94",

  // WhatsApp number customers reach you on, and where order
  // confirmations get sent. International format, digits only,
  // no "+", no spaces — e.g. Egypt 010... becomes 201011207850.
  whatsappNumber: "201011207850",

  // Manual payment details shown to the customer at checkout.
  payment: {
    provider: "Vodafone Cash / InstaPay", // edit if you use a different wallet
    number: "01011207850",
    accountHolderName: "Ahmed yasseen", // IMPORTANT — edit this
  },
};
