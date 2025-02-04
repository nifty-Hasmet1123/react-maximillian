export function toTitleCase(argString) {
  const capitalFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  if (argString.includes("-")) {
    let word = argString
      .split("-")
      .map(word => capitalFirstLetter(word))
      .join(" ");

    return word;
  }

  return capitalFirstLetter(argString);
}

export function convertToCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}