import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Calendar,
  Camera,
  Check,
  CircleCheck,
  CircleHelp,
  Clock,
  Cloud,
  Download,
  FileText,
  FolderOpen,
  GraduationCap,
  HardDrive,
  HeartHandshake,
  Info,
  Languages,
  LayoutGrid,
  Mail,
  Package,
  PackageCheck,
  Quote,
  ScanText,
  School,
  SearchX,
  ShieldCheck,
  Sigma,
  Smartphone,
  Tag,
  Type,
  User,
  UserCheck,
  Users,
  WifiOff,
} from "lucide-react";
import BrailleT from "./BrailleT";

/**
 * Every icon used on the site, by name. Content in site.ts refers to icons
 * by these names, so a typo is a type error. All names were checked against
 * the installed lucide-react version.
 */
const icons = {
  "arrow-down": ArrowDown,
  "arrow-right": ArrowRight,
  "book-open": BookOpen,
  braille: BrailleT,
  calendar: Calendar,
  camera: Camera,
  check: Check,
  "circle-check": CircleCheck,
  "circle-help": CircleHelp,
  clock: Clock,
  cloud: Cloud,
  download: Download,
  "file-text": FileText,
  "folder-open": FolderOpen,
  "graduation-cap": GraduationCap,
  "hard-drive": HardDrive,
  "heart-handshake": HeartHandshake,
  info: Info,
  languages: Languages,
  "layout-grid": LayoutGrid,
  mail: Mail,
  package: Package,
  "package-check": PackageCheck,
  quote: Quote,
  "scan-text": ScanText,
  school: School,
  "search-x": SearchX,
  "shield-check": ShieldCheck,
  sigma: Sigma,
  smartphone: Smartphone,
  tag: Tag,
  type: Type,
  user: User,
  "user-check": UserCheck,
  users: Users,
  "wifi-off": WifiOff,
};

export type IconName = keyof typeof icons;

type IconProps = {
  name: IconName;
  size?: number;
  className?: string;
};

/** A decorative icon. Always hidden from screen readers; put meaning in text. */
export default function Icon({ name, size = 24, className }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      size={size}
      className={className}
      strokeWidth={1.75}
      aria-hidden="true"
      focusable="false"
    />
  );
}
