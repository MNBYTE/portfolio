export default function ContactForm() {
  return (
    <form className="space-y-6">
      <input placeholder="Name" className="p-4 rounded-xl w-full" />
      <input placeholder="Email" className="p-4 rounded-xl w-full" />
      <textarea placeholder="Message" className="p-4 rounded-xl w-full" />
      <button className="p-4 rounded-xl bg-blue-600">Send</button>
    </form>
  );
}
