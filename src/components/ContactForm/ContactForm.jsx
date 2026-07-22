import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
            email: Yup.string().email('Invalid email address').required('Required'),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().min(10, "Message must be at least 10 characters").required("Message is required"),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section className='bg-[#F9F9F7] pb-20'>
            <section>
                <header>
                    <div>
                        <h2 className="text-center font-sans text-[#2C2F24] font-medium text-5xl md:text-6xl mb-3 pt-12 leading-tight">Contact Us</h2>
                        <p className="text-center text-[#495460] text-xl max-w-xl  mx-auto font-sans leading-tight">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                    </div>
                </header>
            </section>

            <section className='relative z-10'>
                <div className='bg-white max-w-5xl mx-auto rounded-2xl  p-8 md:p-10 shadow-lg mt-14  translate-y-20 '>
                    <form onSubmit={formik.handleSubmit} className='space-y-6' >
                        <div className='grid md:grid-cols-2 gap-4'>

                            <div>
                                <label htmlFor="name" className='font-bold text-[#2C2F24] block mb-3'>Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                                    {...formik.getFieldProps('name')}
                                />
                                {formik.touched.name && formik.errors.name ? (
                                    <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.name}</div>
                                ) : null}
                            </div>

                            <div>
                                <label htmlFor="email" className='font-bold text-[#2C2F24] block mb-3'>Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email address"
                                    className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                                    {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.email}</div>
                                ) : null}
                            </div>

                            <div className='md:col-span-2'>
                                <label htmlFor="subject" className='font-bold text-[#2C2F24] block mb-3'>Subject</label>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Write a subject"
                                    className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                                    {...formik.getFieldProps('subject')}
                                />
                                {formik.touched.subject && formik.errors.subject ? (
                                    <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.subject}</div>
                                ) : null}
                            </div>

                            <div className='md:col-span-2'>
                                <label className='font-bold text-[#2C2F24] block mb-3'>Message</label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    placeholder="Write your message"

                                    className='border border-[#DBDFD0] rounded-2xl w-full py-3 px-5 outline-none resize-none '
                                    {...formik.getFieldProps('message')}
                                />

                                {formik.touched.message && formik.errors.message ? (
                                    <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.message}</div>
                                ) : null}
                            </div>
                        </div>
                        <button type="submit" className='w-full font-bold text-white rounded-full mt-3 bg-[#AD343E] py-3   hover:bg-[#922b36] transition'>Send</button>

                    </form >
                </div>
            </section>
        </section>

    );
}
