import Form from "./form";

const Contact = () =>{
    return(
        <div className="container mx-auto p-6 pb-16">
            <section>
            <h1 className="text-4xl text-center bold font-bold mb-8">Contact</h1>
            <div className="max-w-2xl mx-auto">
                <Form />
            </div>
            </section>
        </div>
    )
}

export default Contact;