import { Inter, Roboto, Space_Grotesk } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"]
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});

// Space Grotesk only goes up to 700 (font-bold); font-black won't render any heavier
export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"]
});

export const burveticaFont = "font-['Burvetica_NC',sans-serif]"

export const grayText = "text-[#7C8990]"

export const borderGray = "[#ADB7BD]"

export const yellowButton = "[#F4BE37]"

export const grayBlueText = "text-[#495A69]"

export const darkGreenText = "text-[#2F5D50]"

export const purpleBackground = "[#491E5B]"