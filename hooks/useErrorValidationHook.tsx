const useErrorValidationHook = (value: String, field: String) => {
  if (value) {
    if (field === "linkedin") {
      if (value.substring(0, 28) === "https://www.linkedin.com/in/") {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return true;
  }
};

export default useErrorValidationHook;
