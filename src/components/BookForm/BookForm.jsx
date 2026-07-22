import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function BookForm() {
    const formik = useFormik({
        initialValues: {
            date: '',
            time: '',
            name: '',
            phone: '',
            Person: '',
        },
        validationSchema: Yup.object({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
            phone: Yup.string().matches(/^[0-9]{11}$/, "Phone must be 11 digits").required("Phone is required"),
            Person: Yup.string().required('Please select total person'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section className='bg-[#F9F9F7]'>
            <header>
                <div>
                    <h2 className="text-center font-sans text-[#2C2F24] font-medium text-5xl md:text-6xl mb-3 pt-12 leading-tight">Book A Table</h2>
                    <p className="text-center text-[#495460] text-xl max-w-xl  mx-auto font-sans leading-tight">We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>
            </header>
            <form onSubmit={formik.handleSubmit} className='bg-white max-w-5xl mx-auto rounded-3xl p-4 shadow-2xl mt-14 relative z-10 translate-y-20 '>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="date" className='font-bold text-[#2C2F24] block mb-3'>Date</label>
                        <input
                            id="date"
                            type="date"
                            lang="en"
                            dir="rtl"
                            className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                            {...formik.getFieldProps('date')}
                        />
                        {formik.touched.date && formik.errors.date ? (
                            <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.date}</div>
                        ) : null}
                    </div>
                    <div>
                        <label htmlFor="time" className='font-bold text-[#2C2F24] block mb-3'>Time</label>
                        <input
                            id="time"
                            type="time"
                            className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                            {...formik.getFieldProps('time')}
                        />
                        {formik.touched.time && formik.errors.time ? (
                            <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.time}</div>
                        ) : null}
                    </div>
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
                        <label htmlFor="phone" className='font-bold text-[#2C2F24] block mb-3'>Phone</label>
                        <input
                            id="phone"
                            type="phone"
                            placeholder="x-xxx-xxx-xxxx"
                            className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                            {...formik.getFieldProps('phone')}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    <div className='md:col-span-2'>
                        <label className='font-bold text-[#2C2F24] block mb-3'>Total Person</label>
                        <select className='border border-[#DBDFD0] rounded-full w-full py-3 px-5 outline-none '
                            {...formik.getFieldProps('Person')}
                        >

                            <option value="">Select Person</option>
                            <option value="1">1 Person</option>
                            <option value="2">2 Persons</option>
                            <option value="3">3 Persons</option>
                            <option value="4">4 Persons</option>
                        </select>
                        {formik.touched.Person && formik.errors.Person ? (
                            <div className='text-[#AD343E] text-sm mt-3'>{formik.errors.Person}</div>
                        ) : null}
                    </div>
                </div>
                <button type="submit" className='w-full font-bold text-white rounded-full mt-3 bg-[#AD343E] py-3 hover:bg-[#922b36] transition'>Book A Table</button>

            </form >
        </section>

    );
}
