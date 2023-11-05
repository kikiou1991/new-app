export default function MenuItem({
  dictionary,
  selectedLanguageFromCookie,
  name,
}) {
  return {
    name: (
      <Translation
        defaultValue={
          dictionary?.[`leftBar.menu.${name}`]?.[selectedLanguageFromCookie]
        }
        transkey={`leftBar.menu.${name}`}
      />
    ),
    icon: (
      <DashboardIcon
        strokeColor={
          pathname === `/brand/${name}` ? "stroke-primary" : "stroke-current"
        }
      />
    ),
    href: `/brand/${name}`,
    haveSubmenu: false,
  };
}
