import { Autoplay, EffectFade } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { Swiper, SwiperSlide } from 'swiper/react';
import Hero from '../components/Hero';
import hero1 from '../img/hero/1.jpg';
import hero2 from '../img/hero/2.jpg';
import hero3 from '../img/hero/3.jpg';

const HomeCarousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      effect='fade'
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Autoplay, EffectFade]}
    >
      <SwiperSlide>
        <Hero
          title='Animes'
          text='Temos Actions figures de diversas obras animes'
          heroCss={{
            backgroundImage: `url(${hero1})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(45deg, rgb(109, 142, 173, 0.5), rgba(0, 0, 0, 0))',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          title='Coleção Marvel'
          text="Venha ver os novos lançamentos de Actions figures da Marvel"
          posRight={true}
          heroCss={{
            backgroundImage: `url(${hero2})`,
            backgroundPositionX: 'center',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(135deg, rgba(0, 0, 0, 0), rgb(121, 169, 171, 0.5))',
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Hero
          title='Figures Game'
          text='Os jogos também não estão de fora dessa, temos Actions figures de varias franquias de jogos também, venha conferir.'
          heroCss={{
            backgroundImage: `url(${hero3})`,
            backgroundPositionX: 'right',
            backgroundPositionY: 'center',
            color: '#fff',
          }}
          bgCss={{
            background:
              'linear-gradient(45deg, rgba(68, 45, 39, 0.5), rgba(0, 0, 0, 0))',
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousel;
