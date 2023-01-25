import Joi from "joi";

const carValidator = Joi.object({
    brand: Joi.string().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required().messages({
        'string.pattern.base': 'Тільки букви від 1 до 20 символів'}),
    year: Joi.number().min(1990).max(new Date().getFullYear()).required().messages({
        'number.min': 'мінімум 1990 рік',
        'number.max': `максимум ${new Date().getFullYear()}`
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min': 'мінімальна ціна 0',
        'number.max': `максимальна ціна 1000000`
    }),
})

export {
    carValidator
}