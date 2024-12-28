import ActiveLink from "@/components/ActiveLink";

export default function ServicesLayout({ children }) {
  return (
    <div>
      {/* Navbar */}
      <nav className="fixed max-[398px]:top-[160px] top-[148px] md:top-[100px] left-0 right-0 w-full bg-white shadow-md shadow-black z-10">
        <ul className="flex text-lg sm:text-xl md:text-2xl lg:text-3xl justify-center py-5 px-5">
          <li>
            <ActiveLink href="/services">LADIES</ActiveLink>&nbsp;<span>/</span>&nbsp;
          </li>
          <li>
            <ActiveLink href="/services/gents">GENTS</ActiveLink>&nbsp;<span>/</span>&nbsp;
          </li>
          <li>
            <ActiveLink href="/services/loyalty-card">LOYALTY CARD</ActiveLink>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <main>{children}</main>
    </div>
  );
}
