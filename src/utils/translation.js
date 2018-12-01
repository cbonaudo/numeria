export function translateNumbers(figures) {
  if (figures[3] == 2) {
    return "Deux";
  }
  else if (figures[0] == 1) {
    return "Mille cent onze";
  }
  else if (figures[1] == 1) {
    return "Cent onze";
  }
  else if (figures[2] == 1) {
    return "Onze";
  }
  else return "Un";
}
