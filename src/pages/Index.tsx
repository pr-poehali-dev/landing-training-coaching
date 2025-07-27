import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

export default function Index() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Акция действует 3 дня
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const courses = [
    {
      id: 1,
      title: "Эмоциональный интеллект",
      description: "Развивайте навыки управления эмоциями и улучшите качество жизни",
      price: "19 990 ₽",
      originalPrice: "29 990 ₽",
      duration: "4 недели",
      icon: "Heart",
      color: "bg-gradient-to-br from-rose-400 to-pink-500"
    },
    {
      id: 2,
      title: "Лидерство и команда",
      description: "Станьте эффективным лидером и научитесь управлять командой",
      price: "24 990 ₽",
      originalPrice: "34 990 ₽", 
      duration: "6 недель",
      icon: "Users",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Время и продуктивность",
      description: "Овладейте искусством тайм-менеджмента и повысьте эффективность",
      price: "16 990 ₽",
      originalPrice: "22 990 ₽",
      duration: "3 недели", 
      icon: "Clock",
      color: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      id: 4,
      title: "Публичные выступления",
      description: "Преодолейте страх сцены и станьте убедительным спикером",
      price: "21 990 ₽",
      originalPrice: "31 990 ₽",
      duration: "5 недель",
      icon: "Mic",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Финансовая грамотность",
      description: "Научитесь управлять деньгами и создавать пассивный доход",
      price: "29 990 ₽",
      originalPrice: "49 990 ₽",
      duration: "8 недель",
      icon: "TrendingUp",
      color: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 6,
      title: "Коммуникация и переговоры",
      description: "Развивайте навыки общения и ведения переговоров",
      price: "18 990 ₽",
      originalPrice: "26 990 ₽",
      duration: "4 недели",
      icon: "MessageCircle",
      color: "bg-gradient-to-br from-teal-400 to-cyan-500"
    },
    {
      id: 7,
      title: "Стрессоустойчивость",
      description: "Научитесь справляться со стрессом и найдите баланс в жизни",
      price: "17 990 ₽",
      originalPrice: "25 990 ₽",
      duration: "4 недели",
      icon: "Shield",
      color: "bg-gradient-to-br from-indigo-400 to-indigo-600"
    },
    {
      id: 8,
      title: "Целеполагание и мотивация",
      description: "Ставьте правильные цели и находите мотивацию для их достижения",
      price: "22 990 ₽",
      originalPrice: "32 990 ₽",
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

      {/* Timer Section */}
      <section className="py-6 px-4 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-montserrat font-bold mb-2">
                🔥 Летняя акция -33% на все курсы!
              </h3>
              <p className="text-lg opacity-95">
                Успей записаться по специальной цене до окончания акции
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{timeLeft.days.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">дней</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">часов</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">минут</div>
                </div>
              </div>
              <div className="text-2xl">:</div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg px-3 py-2 backdrop-blur-sm">
                  <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                  <div className="text-xs opacity-80">секунд</div>
                </div>
              </div>
            </div>
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
                    <Badge className="bg-red-500 text-white">
                      -33%
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg text-gray-400 line-through">
                      {course.originalPrice}
                    </div>
                    <div className="text-2xl font-montserrat font-bold text-primary">
                      {course.price}
                    </div>
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

      {/* Certificates Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-accent mb-4">
              Официальные сертификаты
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Подтвердите свою квалификацию документами государственного образца
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-accent mb-2">
                    Государственный образец
                  </h3>
                  <p className="text-gray-600">
                    Сертификаты соответствуют требованиям Министерства образования и признаются работодателями
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="CheckCircle" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-accent mb-2">
                    Верификация онлайн
                  </h3>
                  <p className="text-gray-600">
                    Каждый сертификат имеет уникальный QR-код для мгновенной проверки подлинности
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Download" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-accent mb-2">
                    Цифровой и печатный формат
                  </h3>
                  <p className="text-gray-600">
                    Получите сертификат в электронном виде сразу после окончания и закажите печатную версию
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name="Globe" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-montserrat font-bold text-accent mb-2">
                    Международное признание
                  </h3>
                  <p className="text-gray-600">
                    Наши сертификаты признаются в России, СНГ и странах Европы
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon name="Award" size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-accent mb-2">
                    СЕРТИФИКАТ
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">о прохождении курса</p>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-4"></div>
                  <p className="font-semibold text-lg text-accent mb-2">Эмоциональный интеллект</p>
                  <p className="text-gray-600 mb-4">40 академических часов</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>№ 2024-EI-1247</span>
                    <div className="w-8 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Icon name="Stamp" size={32} className="text-white" />
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-montserrat font-bold text-primary mb-2">5000+</div>
                <p className="text-gray-600">Выданных сертификатов</p>
              </div>
              <div>
                <div className="text-3xl font-montserrat font-bold text-secondary mb-2">98%</div>
                <p className="text-gray-600">Успешных выпускников</p>
              </div>
              <div>
                <div className="text-3xl font-montserrat font-bold text-accent mb-2">24ч</div>
                <p className="text-gray-600">Получение сертификата</p>
              </div>
            </div>
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