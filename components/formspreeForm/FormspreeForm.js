import { useForm, ValidationError } from '@formspree/react';
import Input from 'components/input/input';

export const FormspreeForm = ({formId}) =>{

    const [state, handleSubmit] = useForm(formId);
  if (state.succeeded) {
      return <p className="max-w-5xl mx-auto my-5">Thanks for joining!</p>;
  }

    return(
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto my-5">
      <label htmlFor="email">
        Email Address
      </label>
      <div>
      <Input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      </div>
      
      <div className='mt-6 grid'>
      <label htmlFor="email">
        Message
      </label>
      <textarea
      className='border-2 border-teal-700 p-1 hover:border-teal-800 focus:border-teal-800 outline-0 rounded w-2/4'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      </div>
      <div className="mt-6">
      <button type="submit" disabled={state.submitting} className="bg-teal-800 hover:bg-teal-900 text-white py-3 px-4">
        Submit
      </button>
      </div>
    </form>
    )
}