export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Цей регулярний вираз перевіряє, чи електронна пошта містить не менше одного символа перед символом "@", потім містить символ "@", далі не менше одного символа перед символом ".", символ ".", і, нарешті, не менше одного символа після символу ".".
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.{6,})/; //Цей регулярний вираз перевіряє, чи пароль містить принаймні одну цифру (\d), принаймні одну маленьку літеру ([a-z]), принаймні одну велику літеру ([A-Z]), та має довжину не менше 6 символів.
export const nameRegex = /^[A-Z][a-z]{1,19}(\s[A-Z][a-z]{1,19})?$/; //Цей регулярний вираз дозволяє вводити імена, які починаються з великої літери (A-Z) і мають довжину від 2 до 20 символів. Також він дозволяє вводити прізвища, якщо вони присутні, також починаються з великої літери (A-Z) і мають довжину від 2 до 20 символів."
