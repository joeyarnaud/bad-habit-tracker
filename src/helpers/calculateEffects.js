import moment from 'moment';
import {
  MILLIGRAMS,
  GRAMS,
  KILOGRAMS,
  METRIC_TONNE,
  METER,
  KILOMETER,
} from './constants';

const metricUnits = [
  MILLIGRAMS,
  GRAMS,
  KILOGRAMS,
  METRIC_TONNE,
  METER,
  KILOMETER,
];

const merticWeights = [MILLIGRAMS, GRAMS, KILOGRAMS, METRIC_TONNE];

export const calculateEffects = (habits) => {
  const effects = [];
  for (let i = 0; i < habits.length; i++) {
    let tempHabit = habits[i];
    let tempDate = tempHabit.date;
    let tempEffects = tempHabit.effects;
    for (let j = 0; j < tempEffects.length; j++) {
      effects.push({ ...tempEffects[j], tempDate });
    }
  }

  const addedEffects = [];
  for (let i = 0; i < effects.length; i++) {
    let index = addedEffects.findIndex((effect) => {
      return effect.name === effects[i].name;
    });

    const [addAmount, addUnit] = normalizeUnits(
      effects[i].amount *
        moment().diff(moment(effects[i].tempDate), effects[i].time, true),
      effects[i].unit
    );
    if (index !== -1) {
      const [curAmount, curUnit] = normalizeUnits(
        addedEffects[index].amount,
        addedEffects[index].unit
      );
      addedEffects[index].amount = addAmount + curAmount;
    } else {
      addedEffects.push({
        name: effects[i].name,
        amount: addAmount,
        unit: addUnit,
        effect: effects[i].effect,
      });
    }
  }

  return addedEffects.sort((a, b) => b.amount - a.amount).slice(0, 8);
};

const normalizeUnits = (amount, unit) => {
  if (isMetric(unit)) {
    if (isWeight(unit)) {
      let tempAmount = amount;
      let index = merticWeights.findIndex((a) => unit === a);
      while (++index < 4) {
        tempAmount /= 1000;
      }
      return [tempAmount, METRIC_TONNE];
    }
  }
  return [amount, unit];
};

export const isWeight = (unit) => {
  if (merticWeights.includes(unit)) {
    return true;
  }
  return false;
};

export const isMetric = (unit) => {
  if (metricUnits.includes(unit)) {
    return true;
  }
  return false;
};

const effectAmount = () => {};
