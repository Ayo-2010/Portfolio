import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="py-20 px-4 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-50 mb-4">Let's Connect</h2>
          <p className="text-slate-400 max-w-xl">
            Have an idea or want to collaborate? Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
