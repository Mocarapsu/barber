import { Calendar, Clock, Scissors, Star, Users, Phone, MapPin, Instagram } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">BarberPro</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#servicios" className="text-neutral-300 hover:text-white transition-colors">Servicios</a>
              <a href="#equipo" className="text-neutral-300 hover:text-white transition-colors">Equipo</a>
              <a href="#horario" className="text-neutral-300 hover:text-white transition-colors">Horario</a>
              <a href="#contacto" className="text-neutral-300 hover:text-white transition-colors">Contacto</a>
            </nav>
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-4 py-2 rounded-lg transition-colors">
              Reservar Cita
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Tu Estilo, <span className="text-amber-500">Nuestra Pasion</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10 text-pretty">
            Experimenta el arte del corte de cabello con nuestros expertos barberos. 
            Reserva tu cita ahora y descubre la diferencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5" />
              Reservar Ahora
            </button>
            <button className="border border-neutral-700 hover:border-neutral-500 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
              Ver Servicios
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-neutral-800 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">5+</div>
              <div className="text-neutral-400">Anos de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">2000+</div>
              <div className="text-neutral-400">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">4</div>
              <div className="text-neutral-400">Barberos Expertos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">4.9</div>
              <div className="text-neutral-400">Calificacion Promedio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de barberia para satisfacer todas tus necesidades de estilo.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Corte Clasico', price: '$150', duration: '30 min', description: 'Corte tradicional con acabado profesional' },
              { name: 'Corte + Barba', price: '$250', duration: '45 min', description: 'Combo completo de corte y arreglo de barba' },
              { name: 'Barba Completa', price: '$120', duration: '25 min', description: 'Perfilado, afeitado y tratamiento de barba' },
              { name: 'Corte Fade', price: '$180', duration: '40 min', description: 'Degradado profesional con precision' },
              { name: 'Diseno de Cejas', price: '$80', duration: '15 min', description: 'Perfilado y limpieza de cejas' },
              { name: 'Tratamiento Capilar', price: '$200', duration: '30 min', description: 'Hidratacion y cuidado del cabello' },
            ].map((service, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold">{service.name}</h3>
                  <span className="text-2xl font-bold text-amber-500">{service.price}</span>
                </div>
                <p className="text-neutral-400 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-neutral-500">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Conoce a nuestros barberos profesionales, cada uno con su estilo unico y anos de experiencia.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Carlos Mendez', role: 'Master Barber', experience: '8 anos' },
              { name: 'Miguel Torres', role: 'Senior Barber', experience: '5 anos' },
              { name: 'David Garcia', role: 'Barber', experience: '3 anos' },
              { name: 'Luis Ramirez', role: 'Junior Barber', experience: '2 anos' },
            ].map((barber, index) => (
              <div key={index} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center hover:border-amber-500/50 transition-colors">
                <div className="w-24 h-24 bg-neutral-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{barber.name}</h3>
                <p className="text-amber-500 mb-2">{barber.role}</p>
                <p className="text-neutral-500 text-sm">{barber.experience} de experiencia</p>
                <div className="flex items-center justify-center gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="horario" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Horario de Atencion</h2>
              <p className="text-neutral-400 mb-8">
                Estamos disponibles para atenderte durante la semana. Reserva tu cita con anticipacion para garantizar tu espacio.
              </p>
              <div className="space-y-4">
                {[
                  { day: 'Lunes - Viernes', hours: '9:00 AM - 8:00 PM' },
                  { day: 'Sabado', hours: '9:00 AM - 6:00 PM' },
                  { day: 'Domingo', hours: '10:00 AM - 4:00 PM' },
                ].map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-neutral-800">
                    <span className="font-medium">{schedule.day}</span>
                    <span className="text-amber-500">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Reserva tu Cita</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefono</label>
                  <input 
                    type="tel" 
                    className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors"
                    placeholder="Tu telefono"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Servicio</label>
                  <select className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 focus:outline-none focus:border-amber-500 transition-colors">
                    <option>Selecciona un servicio</option>
                    <option>Corte Clasico</option>
                    <option>Corte + Barba</option>
                    <option>Barba Completa</option>
                    <option>Corte Fade</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 rounded-lg transition-colors"
                >
                  Reservar Ahora
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neutral-800 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="h-8 w-8 text-amber-500" />
                <span className="text-xl font-bold">BarberPro</span>
              </div>
              <p className="text-neutral-400">
                Tu barberia de confianza. Calidad, estilo y profesionalismo en cada corte.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-amber-500" />
                  <span>+52 555 123 4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-amber-500" />
                  <span>Av. Principal 123, Ciudad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-amber-500" />
                  <span>@barberpro</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces Rapidos</h4>
              <div className="space-y-2 text-neutral-400">
                <a href="#servicios" className="block hover:text-white transition-colors">Servicios</a>
                <a href="#equipo" className="block hover:text-white transition-colors">Nuestro Equipo</a>
                <a href="#horario" className="block hover:text-white transition-colors">Horario</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-neutral-800 text-center text-neutral-500">
            <p>&copy; 2026 BarberPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
