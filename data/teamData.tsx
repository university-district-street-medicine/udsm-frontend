export interface Member {
  id: number;
  name: string;
  role: string;
  description: string;
  imageURL: string
}

export const teamData: Member[] = [
  {
    id: 1,
    name: "Karissa Yamaguchi",
    role: "Co-director",
    description: "Medical Student who is passionate about affirming people's inherent dignity and worth through medicine.",
    imageURL: "/KarissaY.png"

  }
]