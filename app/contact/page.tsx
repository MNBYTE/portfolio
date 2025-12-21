import ContactForm from "@/components/contact/ContactForm";
import ContactSidebar from "@/components/contact/ContactSidebar";

export default function ContactPage() {
  return (
    <main className="grid md:grid-cols-2 gap-16 px-6">
      <ContactSidebar />
      <ContactForm />
    </main>
  );
}
