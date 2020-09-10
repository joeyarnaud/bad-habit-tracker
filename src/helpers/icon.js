export const mapToIconiconNameAndColor = (name, effect) => {
  switch (name) {
    case 'Money':
      return { iconName: 'money-bill', color: '#3CFACB' };
    case 'Tar':
      return { iconName: 'smoking', color: '#000000' };
    case 'CO{2}':
      return { iconName: 'biohazard', color: '#96FA3C' };
    case 'Cigarette':
      return { iconName: 'smoking', color: '#000000' };
    case 'Alcohol':
      return { iconName: 'glass-martini', color: '#000000' };
    case 'Methane':
      return { iconName: 'biohazard', color: '#96FA3C' };
    case 'Waste':
      return { iconName: 'trash', color: '#A2E0CE' };
    case 'Land':
      return { iconName: 'leaf', color: '#47F567' };
    default:
      if (effect === 'Save' || effect === 'Do') {
        return { iconName: 'plus-circle', color: '#000' };
      } else if (effect === 'Avoid') {
        return { iconName: 'minus-circle', color: '#000' };
      }
      return { iconName: 'calendar', color: '#000' };
  }
};
