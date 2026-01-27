export const formatUzPhone = (value: string): string => {
  // Оставляем только цифры
  const digits = value.replace(/\D/g, '');

  // Отбрасываем ведущий 998, если пользователь вставил полный номер
  let local = digits.startsWith('998') ? digits.slice(3) : digits;

  // Ограничиваем длину локальной части (2 + 3 + 2 + 2 = 9 цифр)
  local = local.slice(0, 9);

  const part1 = local.slice(0, 2);
  const part2 = local.slice(2, 5);
  const part3 = local.slice(5, 7);
  const part4 = local.slice(7, 9);

  let formatted = '+998';
  if (part1) formatted += ` ${part1}`;
  if (part2) formatted += ` ${part2}`;
  if (part3) formatted += ` ${part3}`;
  if (part4) formatted += ` ${part4}`;

  return formatted;
};

