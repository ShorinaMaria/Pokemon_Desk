function toCapitalizeFirstLetter(value: string): string {
  if (!value || typeof value !== 'string') {
    return '';
  }

  return value[0].toLocaleUpperCase() + value.substr(1);
}

export default toCapitalizeFirstLetter;
