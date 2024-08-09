function getButtonStylling(styleType) {
  const primary =
    "bg-blue-500 border border-blue-700 hover:bg-blue-700 hover:border-blue-900 px-2 py-1 w-full";
  const secondary =
    "bg-gray-500 border border-gray-700 hover:bg-gray-700 hover:border-gray-900 px-2 py-1";
  const error =
    "bg-red-500 border border-red-700 hover:bg-red-700 hover:border-red-900 px-2 py-1";
  const warning =
    "bg-yellow-500 border border-yellow-500 hover:bg-yellow-700 hover:border-yellow-700 px-2 py-1";
  const view =
    "bg-[#268d37d8] border border-green-600 hover:bg-green-900 px-2 py-1 ";
  const desert =
    "text-white bg-[#71442b] px-2 py-1 rounded-md border border-[#4f2309] hover:bg-[#4f2309] hover:text-black";

  if (styleType === "primary") {
    return primary;
  } else if (styleType === "secondary") {
    return secondary;
  } else if (styleType === "error") {
    return error;
  } else if (styleType === "warning") {
    return warning;
  } else if (styleType === "view") {
    return view;
  } else if (styleType === "desert") {
    return desert;
  } else {
    return primary;
  }
}

export default getButtonStylling;
