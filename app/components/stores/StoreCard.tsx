import Link from "next/link";
import Image from "next/image";

interface StoreCardProps {
  name: string;
  logo: string;
  location: string;
  href: string;
}

export default function StoreCard({
  name,
  logo,
  location,
  href,
}: StoreCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-lg border border-border bg-card p-4 shadow-sm transition hover:shadow-lg hover:scale-[1.02]"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-md overflow-hidden border border-border bg-muted">
          <Image
            src={logo}
            alt={`${name} logo`}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </div>
    </Link>
  );
}
