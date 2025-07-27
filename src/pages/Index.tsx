import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Index() {
  const courses = [
    {
      id: 1,
      title: "Эмоциональный интеллект",
      description: "Развивайте навыки управления эмоциями и улучшите качество жизни",
      price: "19 990 ₽",
      duration: "4 недели",
      icon: "Heart",
      color: "bg-gradient-to-br from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "Лидерство и команда",
      description: "Станьте эффективным лидером и научитесь управлять командой",
      price: "24 990 ₽", 
      duration: "6 недель",
      icon: "Users",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Время и продуктивность",
      description: "Овладейте искусством тайм-менеджмента и повысьте эффективность",
      price: "16 990 ₽",
      duration: "3 недели", 
      icon: "Clock",
      color: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      id: 4,
      title: "Публичные выступления",
      description: "Преодолейте страх сцены и станьте убедительным спикером",
      price: "21 990 ₽",
      duration: "5 недель",
      icon: "Mic",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Финансовая грамотность",
      description: "Научитесь управлять деньгами и создавать пассивный доход",
      price: "29 990 ₽",
      duration: "8 недель",
      icon: "TrendingUp",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      title: "Коммуникация и переговоры",
      description: "Развивайте навыки общения и ведения переговоров",
      price: "18 990 ₽",
      duration: "4 недели",
      icon: "MessageCircle",
      color: "bg-gradient-to-br from-teal-400 to-cyan-500"
    },
    {
      id: 7,
      title: "Стрессоустойчивость",
      description: "Научитесь справляться со стрессом и найдите баланс в жизни",
      price: "17 990 ₽",
      duration: "4 недели",
      icon: "Shield",
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600"
    },
    {
      id: 8,
      title: "Целеполагание и мотивация",
      description: "Ставьте правильные цели и находите мотивацию для их достижения",
      price: "22 990 ₽",
      duration: "5 недель",
      icon: "Target",
      color: "bg-gradient-to-br from-red-400 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      course: "Эмоциональный интеллект",
      text: "Курс полностью изменил мое отношение к себе и окружающим. Теперь я лучше понимаю свои эмоции.",
      rating: 5
    },
    {
      name: "Михаил Соколов", 
      course: "Лидерство и команда",
      text: "Отличная программа! Получил повышение на работе благодаря новым навыкам управления.",
      rating: 5
    },
    {
      name: "Елена Васильева",
      course: "Публичные выступления", 
      text: "Преодолела страх сцены и теперь легко выступаю перед большой аудиторией. Спасибо!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white font-open-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-secondary to-accent text-white py-20 px-4">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Топ-8 курсов для новой жизни!
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 opacity-95">
            Выберите направление и начните обучение уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 text-lg">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-4">
              Наши курсы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Профессиональные программы развития от экспертов с многолетним опытом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-xl font-montserrat font-bold text-accent group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-secondary border-secondary">
                      <Icon name="Calendar" size={14} className="mr-1" />
                      {course.duration}
                    </Badge>
                  </div>
                  <div className="text-2xl font-montserrat font-bold text-primary">
                    {course.price}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3">
                    <Icon name="ArrowRight" size={16} className="mr-2" />
                    Записаться
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-4">
              Отзывы учеников
            </h2>
            <p className="text-xl text-gray-600">
              Истории успеха наших выпускников
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-montserrat font-semibold text-accent">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-accent to-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-6">
            Готовы изменить свою жизнь?
          </h2>
          <p className="text-xl mb-8 opacity-95">
            Присоединяйтесь к тысячам успешных выпускников наших программ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold px-8 py-4 text-lg">
              <Icon name="Zap" size={20} className="mr-2" />
              Выбрать курс
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-accent font-semibold px-8 py-4 text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">Тренинги & Коучинг</h3>
          <p className="text-gray-300 mb-6">Профессиональное развитие для успешной жизни</p>
          <div className="flex justify-center space-x-6">
            <Icon name="Mail" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <Icon name="Phone" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
            <Icon name="MessageCircle" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
}