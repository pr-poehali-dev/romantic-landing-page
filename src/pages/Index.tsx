import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://cdn.poehali.dev/projects/3cd8a897-1b6c-4197-a1b7-2d7eade6f092/files/9ef86b64-b27e-4f11-9cc1-5fb5cc9ce55b.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)",
          }}
        />
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary">
            Meeting with Geping
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Приглашаем вас на закрытое мероприятие<br />
            8 ноября 2025 года в Санкт-Петербурге
          </p>
        </div>
      </section>

      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-primary/20 animate-fade-in-delay">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary text-center">
              Программа мероприятия
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">
                    Пешая экскурсия по достопримечательностям культурного города с опытным гидом
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="MessageCircle" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">
                    Светские незаурядные беседы на различную тематику (шутки, истории из жизни — включены в стоимость)
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Coffee" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">
                    Холодный кофе без ограничений (по желанию, можно горячий)
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="Award" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">
                    Торжество по случаю перехода на новую карьерную ступень
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <Icon name="Utensils" className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-foreground/90 leading-relaxed">
                    Гастрономическое путешествие в ресторан "Сад" в стиле smart-casual
                  </p>
                </div>
              </div>
            </div>

            <div className="relative my-12">
              <img 
                src="https://cdn.poehali.dev/projects/3cd8a897-1b6c-4197-a1b7-2d7eade6f092/files/a7e8fbed-cdca-4a29-99bf-4863fdd83a3a.jpg"
                alt="Coffee"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-primary">Преимущества</h3>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Доверительная и расслабляющая атмосфера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Получение новых впечатлений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Насыщенная программа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Бережное отношение к нервной системе</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Исключение стрессовых ситуаций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Абсолютно бесплатно</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Отсутствие отзывов иных пользователей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Приятная атмосфера</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-6 text-destructive">Минусы</h3>
                <p className="text-foreground/90 leading-relaxed mb-8">
                  Волнение и стеснение со стороны организатора
                </p>

                <h3 className="text-3xl font-bold mb-6 text-primary">Кому подходит</h3>
                <ul className="space-y-3 text-foreground/90">
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Главным младшим научным сотрудникам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Тельцам</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Любящим пионы и чипсы</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Людям у которых есть питомец по имени Элис</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative my-12">
              <img 
                src="https://cdn.poehali.dev/projects/3cd8a897-1b6c-4197-a1b7-2d7eade6f092/files/48e992f7-7049-4387-96e4-fc0ef389dbae.jpg"
                alt="Restaurant"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm border-primary/20 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
              Обратная связь
            </h2>
            
            <div className="space-y-6 text-foreground/90">
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-primary" size={24} />
                <p className="text-lg">г. Санкт-Петербург, ул. Буденного 15, стр.1</p>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                <a href="tel:+79643792866" className="text-lg hover:text-primary transition-colors">
                  +7 (964) 379-28-66
                </a>
              </div>
              
              <div className="pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a 
                    href="https://t.me/afonasovkirill" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Icon name="Send" size={20} />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-8 text-center text-muted-foreground">
        <p className="text-sm">Meeting with Geping • 8 ноября 2025</p>
      </footer>
    </div>
  );
};

export default Index;
