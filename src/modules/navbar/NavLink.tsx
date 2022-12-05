type NavLinkProps = {
  title: string;
};

export function NavLink({ title }: NavLinkProps) {
  return (
    <a
      href="#"
      className="px-5 py-2 decoration-none font-semibold rounded-lg hover:bg-slate-50 hover:bg-opacity-10"
    >
      {title}
    </a>
  );
}
