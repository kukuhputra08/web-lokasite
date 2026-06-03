import { Link } from "react-router";
import { Zap, Palette, Handshake, MessageCircle, Mail, Camera } from "lucide-react";

const menuLinks = [
  { href: "#home", label: "Home" },
  { href: "#layanan", label: "Layanan" },
  { href: "#paket", label: "Paket" },
  { href: "/order", label: "Konsultasi" },
];

const traits = [
  { icon: Zap, label: "Cepat" },
  { icon: Palette, label: "Elegan" },
  { icon: Handshake, label: "Ramah" },
];

const contacts = [
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Mail, label: "Email" },
  { icon: Camera, label: "Instagram" },
];

function Footer() {
  return (
    <footer
      id="kontak"
      className="border-t border-white/10 bg-navy-dark pt-20 pb-10 text-white"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-5 md:col-span-2">
            <div className="text-2xl font-bold tracking-tight">
              Loka<span className="text-salmon">Site</span>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-slate-400">
              Membantu UMKM tampil profesional secara digital dengan website
              yang modern, elegan, cepat, dan friendly.
            </p>
            <div className="flex flex-wrap gap-5 pt-2">
              {traits.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300"
                >
                  <Icon strokeWidth={1.5} className="h-4 w-4 text-salmon" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-6 font-inconsolata text-xs font-semibold uppercase tracking-widest text-white">
              Menu
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("/") ? (
                    <Link
                      to={link.href}
                      className="text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 font-inconsolata text-xs font-semibold uppercase tracking-widest text-white">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              {contacts.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex cursor-pointer items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  <Icon strokeWidth={1.5} className="h-5 w-5" />
                  <span className="text-sm font-medium">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center md:text-left">
          <p className="text-xs font-medium text-slate-500">
            © 2026 LokaSite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
