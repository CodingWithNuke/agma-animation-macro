exports.isNumeric = (n) => {
  return (
    !isNaN(typeof n === "string" ? parseFloat(n) : n) &&
    isFinite(typeof n === "string" ? parseFloat(n) : n)
  );
};

exports.isWriting = () => {
  return (
    document.activeElement.type === "text" ||
    document.activeElement.type === "password" ||
    document.activeElement.type === "textarea"
  );
};
