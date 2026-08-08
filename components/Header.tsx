import { inter, roboto } from "../utils/fonts"

// Variant Prop
// Style dictionary
// Shared styles -  constants/strings for styles that don't change
// Combine string from style dictinoary and shared styles

type HeadingLevel = "h1" | "h2" | "h3" | "h4"

interface HeaderProps {
  level: HeadingLevel
  children: React.ReactNode
}

export default function Header({ level, children }: HeaderProps) {
  // Dictionary mapping header level to specific style
  const LevelStyles = {
    "h1": `${inter.className} font-bold lg:text-[115px] lg:leading-[100px] tracking-[-0.02em] text-[#FFFFFF] relative z-10`,
    "h2": `${inter.className} font-bold text-[80px] tracking-[-0.04em] leading-[1.8] text-[#092035]`,
    "h3": `${inter.className} font-bold text-[60px] tracking-[-0.04em] leading-[1.8] text-[#092035]`,
    "h4": `${roboto.className} font-black text-[30px] tracking-[0em] leading-[0.8] text-[#092035]`,
  }

  const ComponentTag = level
  const SelectedStyle = LevelStyles[ComponentTag]
  return (
    <ComponentTag className={SelectedStyle}>{children}</ComponentTag>
  )
}