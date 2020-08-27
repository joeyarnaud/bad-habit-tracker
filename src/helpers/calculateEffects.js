import moment from 'moment';

export const calculateEffects = (habits) => {
  console.log(habits);
  for (let i = 0; i < habits.length; i++) {
    let tempHabit = habits[i];
    let tempDate = tempHabit.date;
    let tempEffects = tempHabit.effects;
    for (let j = 0; j < tempEffects.length; j++) {
      let effect = tempEffects[j];
      // if ()
    }
  }
};
