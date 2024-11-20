interface ButtonType {
  name: string;
  onClick: () => void;
}

function Button({ name, onClick }: ButtonType) {
  return (
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-[100%] mt-2"
      onClick={() => onClick()}
    >
      {name}
    </button>
  );
}

export default Button;