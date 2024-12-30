import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p className="mb-6">
                  Have questions about our tours or need help planning your
                  dream vacation? We&apos;re here to help!
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold">Address</h3>
                    <p>4556 Peponi Road</p>
                    <p>Kitisuru, Nairobi Kenya</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p>(254) 0737605955</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p>info@traveldreams.com</p>
                  </div>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.877809285016!2d36.79247139999999!3d-1.2440893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1783c50eb555%3A0x790be4c1725d5d87!2sPeponi%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1735564754274!5m2!1sen!2ske"
                  width="600"
                  height="450"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
