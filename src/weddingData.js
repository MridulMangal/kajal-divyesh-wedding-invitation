/**
 * WEDDING DATA CONFIGURATION
 * Edit this file to change the invitation details.
 */
export const WEDDING_DATA = {
  // Couple Information
  bride: {
    name: "Kajal",
    hindiName: "काजल"
  },
  groom: {
    name: "Divyesh",
    hindiName: "दिव्येश"
  },
  initials: "K ♥ D",

  // Primary Event Details
  date: {
    full: "9 February 2027",
    day: "Tuesday",
    hindiDate: "९ फरवरी २०२७",
    hindiDay: "मंगलवार",
    formattedPill: "09 · FEBRUARY · 2027"
  },
  time: "5:00 PM Onwards",
  hindiTime: "सायं ५:०० बजे से",

  // Venue Information
  venue: {
    name: "Jalsa Garden",
    hindiName: "जलसा गार्डन",
    address: "Jalsa Garden, Gwalior",
    city: "Gwalior, Madhya Pradesh, India",
    hindiCity: "ग्वालियर, मध्य प्रदेश",
    googleMapsUrl: "https://maps.app.goo.gl/SEwmeKRLkNea4Z5G6?g_st=aw"
  },

  // Narrative / Our Story
  story: {
    quoteHindi: "",
    quoteEnglish: "Two hearts, one beautiful journey, and a lifetime to go.",
    leadText: "",
    description: ""
  },

  // Wedding event
  events: [
    {
      id: "shubh-vivah",
      badgeHindi: "शुभ विवाह",
      badgeEnglish: "Wedding Ceremony",
      date: "9 February 2027",
      day: "Tuesday",
      time: "5:00 PM Onwards",
      venue: "Jalsa Garden, Gwalior",
      description: "Varmala, Pheras & Wedding Dinner"
    }
  ],

  // Add your four personal wedding photos in public/photos/
  // photo1.jpg = main story photo
  // photo2.jpg = large gallery photo
  // photo3.jpg and photo4.jpg = gallery thumbnails
  photos: {
    heroCouple: "/photos/photo1.jpg",
    secondaryCouple: "/photos/photo2.jpg",
    gallery: [
      "/photos/photo3.jpg",
      "/photos/photo4.jpg",
      "/photos/photo5.jpeg"
    ]
  },

  // Color Palette tokens
  theme: {
    bgBlush: "#FBF3F4",
    cardIvory: "#FFFBF7",
    dustyRose: "#C98F9B",
    deepBurgundy: "#5E2938",
    champagneGold: "#C5A059",
    deepText: "#3E2723",
    subtleBorder: "rgba(197, 160, 89, 0.3)"
  }
};
