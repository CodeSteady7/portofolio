import BtnNavbar from "../../small/btn_navbar";

interface DataTypesMenuNavbar {
  className?: string;
}

export default function MenuNavbar(props: DataTypesMenuNavbar) {
  const {
    className = "font-semibold text-xl  text-[#394149] hover:text-[#0e0e0e] mdx:hidden",
  } = props;

  return (
    <>
      <a href='#' className={className}>
        About
      </a>
      <a href='#' className={className}>
        Works
      </a>
      <a href='#' className={className}>
        Project
      </a>
    </>
  );
}
