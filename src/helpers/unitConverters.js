export const convertTimeUnitToWord = (unit) => {
  switch (unit) {
    case 's':
      return 'Second';
    case 'm':
      return 'Minute';
    case 'h':
      return 'Hour';
    case 'd':
      return 'Day';
    case 'w':
      return 'Week';
    case 'M':
      return 'Month';
    case 'y':
      return 'Year';
    default:
      return 'N/A';
  }
};
