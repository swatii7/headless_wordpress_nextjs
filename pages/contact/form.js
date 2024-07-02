'use client';

import Button from "components/button/button";
import Input from "components/input/input";
import TextArea from "components/textArea/textArea";

const INPUT = 'INPUT';
const TEXTAREA = 'TEXTAREA';

const fields = [
    {
        label: 'Name',
        component: INPUT,
        type: 'text',
        name: 'full_name',
        id: 'fullName'
    },
    {
        label: 'Email',
        component: INPUT,
        type: 'email',
        name: 'email',
        id: 'email'
    },
    {
        label: 'Subject',
        component: INPUT,
        type: 'text',
        name: 'subject',
        id: 'subject'
    },
    {
        label: 'Message',
        component: TEXTAREA,
        type: 'text',
        name: 'message',
        id: 'message'
    },
];

const Form = () => {
    return (
        <form className="flex flex-col gap-6">
            {fields.map(field => (
                <div key={field.id} className='grid'>
                    <label htmlFor={field.id} className='text-slate-900'>{field.label}</label>
                    {field.component === INPUT && (
                        <Input
                            name={field.name}
                            id={field.id}
                            type={field.type}
                            required={field.required}
                        />
                    )}
                    {field.component === TEXTAREA && (
                        <TextArea
                            name={field.name}
                            id={field.id}
                            required={field.required}
                        />
                    )}
                </div>
            ))}
            <Button type="submit" className='w-40'>Submit</Button>
        </form>
    );
}

export default Form;
