interface DataTypesBtnNavbar {
  className?: string;
}

export default function BtnNavbar(props: DataTypesBtnNavbar) {
  const {
    className = "font-semibold text-xl text-blue-600 hover:text-blue-300 py-2 px-8 rounded-md outline outline-offset-2 outline-blue-500",
  } = props;
  return (
    <a type='button' href='#' className={className}>
      Let’s Connect
    </a>
  );
}
