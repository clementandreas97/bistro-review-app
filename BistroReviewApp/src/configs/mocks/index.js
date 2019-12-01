const mockBannerData = [
  {
    id: 1,
    user: {
      name: 'Jane Doe',
      image: 'https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg'
    },
    location: 'Las Vegas',
    title: 'Momofuku',
    description: "Momofuku Las Vegas is Momofuku's first restaurant on the West Coast. Drawing influence from all over the world, including the United States, Korea and Japan, the menu features steamed buns, noodles, and meat and seafood meant for sharing.",
    rating: 4.7,
    totalReview: 100,
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1554679665-f5537f187268?auto=format&fit=crop&w=668&q=80',
      'https://images.unsplash.com/photo-1546195643-70f48f9c5b87?auto=format&fit=crop&w=800&q=60',
      'https://images.unsplash.com/photo-1502301103665-0b95cc738daf?auto=format&fit=crop&w=1000&q=80'
    ]
  },
  {
    id: 2,
    user: {
      name: 'Megan Doe',
      image: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExNTM5NDE4NV5BMl5BanBnXkFtZTcwNzczMzEzOQ@@._V1_UX172_CR0,0,172,256_AL_.jpg'
    },
    location: 'Hangzhou',
    title: '2100 Club',
    description: '2100 Club, the world’s first blockchain bar, designed by LYCS Architecture.The bar is initiated by Chen Weixing , founder of Funcity Captial and Kuadi (Chinese Uber), and participated by many well-known entrepreneurs and cornerstone investors in the Blockchain industry. The slogan of 2100Club shares the idea ‘to own, to live to live until 2100’ to all the new economic drivers and innovators. It has been further developed as the basis design concept of interior space which interpreting its intellectual spirit instead of creating a theme bar.',
    rating: 4.5,
    totalReview: 100,
    thumbnail: 'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?auto=format&fit=crop&w=1650&q=80',
    images: [
      'https://images.unsplash.com/photo-1531973819741-e27a5ae2cc7b?auto=format&fit=crop&w=1650&q=80',
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=953&q=80',
      'https://images.unsplash.com/photo-1502998070258-dc1338445ac2?auto=format&fit=crop&w=654&q=80',
      'https://images.unsplash.com/photo-1518962932192-546200b30a68?auto=format&fit=crop&w=668&q=80'
    ]
  }
]

const mockUser = {
  id: 1,
  name: 'Jane Doe',
  image: 'https://m.media-amazon.com/images/M/MV5BOThhZTkxMWMtY2UyYS00MTdlLTk1ZmMtZWQ0OWFkZjE2YTA1XkEyXkFqcGdeQXVyMjU0ODI4MzY@._V1_UX172_CR0,0,172,256_AL_.jpg'
}

const mockRecommendationData = [
  {
    id: 1,
    location: 'Denmark',
    title: 'Admiraldage',
    rating: 4.7,
    thumbnail: 'https://images.unsplash.com/photo-1554679665-f5537f187268?auto=format&fit=crop&w=668&q=80'
  },
  {
    id: 2,
    location: 'Belfast',
    title: 'National Grande Cafe',
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1526069631228-723c945bea6b?auto=format&fit=crop&w=668&q=80'
  },
  {
    id: 3,
    location: 'Bali',
    title: 'Katamama Hotel',
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1541086095944-f4b5412d3666?auto=format&fit=crop&w=1100&q=80'
  },
  {
    id: 4,
    location: 'Denmark',
    title: 'Copenhague',
    rating: 4.5,
    thumbnail: 'https://images.unsplash.com/photo-1569096651661-820d0de8b4ab?auto=format&fit=crop&w=626&q=80'
  }
]

export { mockBannerData, mockUser, mockRecommendationData }