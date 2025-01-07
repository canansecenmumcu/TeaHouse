import * as Yup from 'yup';

export const contactSchema = Yup.object({
    user_firstName: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    user_lastName: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    user_email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    user_message: Yup.string()
        .required('Required')
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
})