import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const testimonials = [
  { id: 1, name: 'Peter McBurnie', text: 'Amazing experience! The tour was well-organized and our guide was knowledgeable and friendly.' },
  { id: 2, name: 'Jane Abdo', text: 'Travel Dreams made our family vacation unforgettable. We can\'t wait to book our next trip with them!' },
  { id: 3, name: 'Sean Johnson', text: 'The attention to detail and personalized service was outstanding. Highly recommended!' },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id}>
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

