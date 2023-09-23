import Logo from "../assets/img/Logo.png";
import { useFormik } from "formik";

const Contact = () =>{
    const validate = values => {
        const errors = {};
      
        if(!values.userName){
            errors.userName = '*Required';
          } else if(values.userName.length < 4){
            errors.userName = "*UserName must be more than or equal to 4 characters length"
          }

        if (!values.email) {
          errors.email = '*Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = '*Invalid email address';
        }
      
        if(!values.querry){
            errors.querry = '*Required';
        }
        
      
        return errors;
      };

    const formik = useFormik({
        initialValues: {
          userName: '',
          email: '',
          querry: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

    return(
        <>
          <div className="bg-red-500 text-white h-48 py-16">
              <h1 className="text-3xl text-center ">Contact FoodBytes Support</h1>
              <h3 className="text-xl text-center">Our customer support team is available 24/7</h3>
              <img className="h-24 ml-48 mt-5 border-y-2" src={Logo}/>
          </div>

          <div className="m-24 p-8 bg-red-50">
              <h1 className="text-2xl font-medium text-red-500 mb-3">How can we help?</h1>
              <form onSubmit={formik.handleSubmit} className="flex flex-col">
                <div className="flex justify-between">
                 <input
                    className='p-1 mr-5 my-2 border-2 border-grey-500 w-1/2'
                    id="userName"
                    name="userName"
                    type="text"
                    placeholder="Your Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                  />
                  {(formik.touched.userName && formik.errors.userName) ? <div className='text-xs text-red-600'>{formik.errors.userName}</div> : null}
                 
                  <input
                    className='p-1 my-2 border-2 border-grey-500 w-1/2'
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {(formik.touched.email && formik.errors.email) ? <div className='text-xs text-red-600'>{formik.errors.email}</div> : null}
                 
                  </div>

                  <input
                    className='p-1 my-2 border-2 border-grey-500 h-28'
                    id="querry"
                    name="querry"
                    type="querry"
                    placeholder="Type your querry here, ex., I could not avail offers on my order"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.querry}
                  />
                  {(formik.touched.querry && formik.errors.querry) ? <div className='text-xs text-red-600'>{formik.errors.querry}</div> : null}
                 
                  <button type="submit" className='my-3 p-1 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md w-28'>Submit</button>

              </form>
          </div>
        </>
    )
}

export default Contact;