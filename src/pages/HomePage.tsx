import { Calendar, Clock, Scissors, Star, Phone, MapPin } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="h-8 w-8 text-amber-500" />
            <span className="text-2xl font-bold">BarberPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-zinc-400 hover:text-white transition-colors">Servicios</a>
            <a href="#horarios" className="text-zinc-400 hover:text-white transition-colors">Horarios</a>
            <a href="#contacto" className="text-zinc-400 hover:text-white transition-colors">Contacto</a>
          </nav>
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-6 py-2 rounded-lg transition-colors">
            Reservar Cita
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Tu Estilo, <span className="text-amber-500">Nuestra Pasion</span>
        </h1>
        <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Bienvenido a BarberPro, donde cada corte es una obra de arte. 
          Reserva tu cita y experimenta el mejor servicio de barberia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2">
            <Calendar className="h-5 w-5" />
            Agendar Cita
          </button>
          <button className="border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-lg text-lg transition-colors">
            Ver Servicios
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Corte Clasico', price: '$15', time: '30 min', desc: 'Corte tradicional con acabado profesional' },
            { name: 'Corte + Barba', price: '$25', time: '45 min', desc: 'Combo completo de corte y arreglo de barba' },
            { name: 'Afeitado Premium', price: '$20', time: '30 min', desc: 'Afeitado con toalla caliente y productos premium' },
          ].map((service, index) => (
            <div key={index} className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6 hover:border-amber-500/50 transition-colors">
              <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
              <p className="text-zinc-400 mb-4">{service.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-amber-500">{service.price}</span>
                <span className="text-zinc-500 flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {service.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Barberos Expertos</h3>
            <p className="text-zinc-400">Profesionales con anos de experiencia</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reservas Online</h3>
            <p className="text-zinc-400">Agenda tu cita en segundos</p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sin Esperas</h3>
            <p className="text-zinc-400">Llega a tu hora, te atendemos al instante</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="container mx-auto px-4 py-20">
        <div className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-8">Contactanos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Telefono</p>
                  <p className="text-lg">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Direccion</p>
                  <p className="text-lg">123 Calle Principal, Ciudad</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <p className="text-zinc-400 text-sm">Horario</p>
                  <p className="text-lg">Lun - Sab: 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-4 rounded-lg text-lg transition-colors">
                Reservar Ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8">
        <div className="container mx-auto px-4 text-center text-zinc-500">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Scissors className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold text-white">BarberPro</span>
          </div>
          <p>&copy; 2024 BarberPro. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
