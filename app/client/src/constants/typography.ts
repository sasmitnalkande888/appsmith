export const typography = {
  h1: {
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: -0.204,
    fontWeight: 500,
  },
  h2: {
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.204,
    fontWeight: 500,
  },
  h3: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.204,
    fontWeight: 500,
  },
  h4: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.24,
    fontWeight: 500,
  },
  h5: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    fontWeight: 500,
  },
  h6: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.8,
    fontWeight: 500,
  },
  p1: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    fontWeight: "normal",
  },
  p2: {
    fontSize: 13,
    lineHeight: 17,
    letterSpacing: -0.24,
    fontWeight: "normal",
  },
  p3: {
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.221538,
    fontWeight: "normal",
  },
  p4: {
    fontSize: 13,
    lineHeight: 16,
    letterSpacing: -0.221538,
    fontWeight: 600,
  },
  btnLarge: {
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.6,
    fontWeight: 600,
  },
  btnMedium: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.6,
    fontWeight: 600,
  },
  btnSmall: {
    fontSize: 11,
    lineHeight: 12,
    letterSpacing: 0.4,
    fontWeight: 600,
  },
  floatingBtn: {
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: -0.24,
    fontWeight: "normal",
  },
  releaseList: {
    fontSize: 14,
    lineHeight: 23,
    letterSpacing: -0.24,
    fontWeight: "normal",
  },
  cardHeader: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 25,
    lineHeight: 20,
  },
  cardSubheader: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 15,
    lineHeight: 20,
  },
  largeH1: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 28,
    lineHeight: 36,
  },
  docHeader: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 17,
  },
  spacedOutP1: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 24,
  },
  categoryBtn: {
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.2,
    fontWeight: 500,
  },
  sideHeading: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 13,
  },
};

export type TypographyKeys = keyof typeof typography;
export type Typography = typeof typography;
