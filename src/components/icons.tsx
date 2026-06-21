import { type ComponentType, type CSSProperties } from "react";
import {
  Activity, Zap, Globe, PieChart, Handshake, TrendingUp, Target, Shield,
  Building2, Link2, Ruler, Infinity, Scale, Book, FileText, Gavel, ArrowRight,
  type LucideProps,
} from "lucide-react";

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Activity, Zap, Globe, PieChart, Handshake, TrendingUp, Target, Shield,
  Building2, Link2, Ruler, Infinity, Scale, Book, FileText, Gavel, ArrowRight,
};

export function Icon({ name, className, size = 16, style }: { name: string; className?: string; size?: number; style?: CSSProperties }) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} size={size} style={style} />;
}
