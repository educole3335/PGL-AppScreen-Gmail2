export type SuggestedCard = {
  id: string;
  ownerName: string;
  mainTitle: string;
  subtitle?: string;
  color?: string;
  files?: { id?: string; title: string; subtitle?: string; iconName?: string }[];
};

export type SharedItem = {
  id: string;
  title: string;
  subtitle?: string;
  avatarText?: string;
  avatarColor?: string;
  iconName?: string;
};
