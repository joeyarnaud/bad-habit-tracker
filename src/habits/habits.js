const smoking = {
  environment: [
    { amount: 0.0011, unit: 'kg', description: 'CO{2}', impact: 'saved' },
    { amount: 0.0008, unit: 'kg', description: 'Methane', impact: 'saved' },
    { amount: 0.042, unit: 'M{2}', description: 'Land Used', impact: 'saved' },
    { amount: 0.00017, unit: 'kg', description: 'Waste', impact: 'saved' },
    { amount: 1, unit: 'n/a', description: 'Cigarette Butt', impact: 'saved' },
  ],
  health: [
    { amount: 12, unit: 'mg', description: 'Tar', impact: 'avoided' },
    { amount: 1, unit: 'n/a', description: 'Cigarettes', impact: 'avoided' },
  ],
  finance: [{ amount: 1, unit: 'aud', description: 'Money', impact: 'saved' }],
  name: 'Smoking',
  icon: <FontAwesome5 name='smoking' size={24} color='black' />,
};
