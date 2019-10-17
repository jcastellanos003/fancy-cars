export const toggleEntityProperty = (entity, key, value = {}) => {
  const { [key]: deleted, ...rest } = entity;

  return deleted ? rest : { ...rest, [key]: value }
};
