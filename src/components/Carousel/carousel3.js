import React from 'react';
import { styled } from '@mui/system';

const CarouselContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  padding: 8,
  overflow: 'hidden',
  margin: '0 auto',
}));

const CarouselImage = styled('img')({
  objectFit: 'cover',
  borderRadius: 48,
});

const Carousel = ({ images }) => {

  const news = [
    {title: 'Arrivé de NetRiv', image: 'https://news.xbox.com/fr-fr/wp-content/uploads/sites/5/Minecraft-Legends-Interview-Key-Art-d6eb720b2e465dabd55c.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://btsbrasil.tv/wp-content/uploads/2021/12/minecraft.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://conteudo.imguol.com.br/c/entretenimento/70/2017/06/06/minecraft-1496774181942_v2_4x3.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://s2-techtudo.glbimg.com/AAKu3d26sxeXemB3PCuwcX77aJ8=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/C/M/8NssvyS6u66uKtUqx0yw/2015-02-20-minecraft-versoes-jogo-pc-playstation-3-4-vita-xbox-360-one.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://img.cuisineaz.com/1024x576/2018/07/03/i140783-gateau-minecraft-anniversaire.webp', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://www.papierpeintpanoramique.fr/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w09388_-_small.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://pic.clubic.com/v1/images/2040504/raw?fit=max&width=1200&hash=c8434331dff76ee6d652d5da5f7274175975ad36', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/03/minecraft-trident.jpg', link: 'https://netriv.fr'},
    {title: 'Arrivé de NetRiv', image: 'https://d1fmx1rbmqrxrr.cloudfront.net/zdnet/i/edit/ne/2020/10/Minecraft.jpg', link: 'https://netriv.fr'},
  ]



  return (
    <CarouselContainer>
      {news.map((news, index) => (
        <CarouselImage
          key={index}
          src={news.image}
          alt={news.title}
          width={336}
          height={336}
        />
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
