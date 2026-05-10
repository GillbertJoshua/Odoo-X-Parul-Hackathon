export const MOCK_TRIPS = [
  {
    id: '1',
    name: 'European Summer Tour',
    startDate: '2026-07-15',
    endDate: '2026-08-05',
    description: 'Exploring the best of Italy, France, and Switzerland.',
    coverImage: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop',
    destinationsCount: 5,
    budget: {
      total: 4500,
      spent: 1200,
      categories: [
        { name: 'Transport', amount: 1500, spent: 400 },
        { name: 'Stay', amount: 2000, spent: 600 },
        { name: 'Activities', amount: 700, spent: 150 },
        { name: 'Meals', amount: 300, spent: 50 },
      ]
    }
  },
  {
    id: '2',
    name: 'Tokyo & Kyoto Adventure',
    startDate: '2026-10-10',
    endDate: '2026-10-24',
    description: 'A deep dive into Japanese culture and cuisine.',
    coverImage: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    destinationsCount: 3,
    budget: {
      total: 3800,
      spent: 0,
      categories: [
        { name: 'Transport', amount: 1200, spent: 0 },
        { name: 'Stay', amount: 1800, spent: 0 },
        { name: 'Activities', amount: 500, spent: 0 },
        { name: 'Meals', amount: 300, spent: 0 },
      ]
    }
  }
];

export const MOCK_CITIES = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop',
    popularity: 9.8,
    costIndex: '$$$',
    description: 'City of lights and love.'
  },
  {
    id: '2',
    name: 'Rome',
    country: 'Italy',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    popularity: 9.5,
    costIndex: '$$',
    description: 'The eternal city.'
  },
  {
    id: '3',
    name: 'Tokyo',
    country: 'Japan',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop',
    popularity: 9.9,
    costIndex: '$$$',
    description: 'Neon lights and ancient traditions.'
  }
];

export const MOCK_ACTIVITIES = [
  {
    id: '1',
    name: 'Eiffel Tower Summit',
    city: 'Paris',
    category: 'Sightseeing',
    price: 25,
    duration: '2h',
    image: 'https://images.unsplash.com/photo-1543349689-9a4d426bee87?q=80&w=2001&auto=format&fit=crop'
  },
  {
    id: '2',
    name: 'Colosseum Private Tour',
    city: 'Rome',
    category: 'History',
    price: 45,
    duration: '3h',
    image: 'https://images.unsplash.com/photo-1555992336-fb0d394e884c?q=80&w=1964&auto=format&fit=crop'
  }
];

export const PACKING_CATEGORIES = [
  {
    name: 'Documents',
    items: ['Passport', 'Travel Insurance', 'Flight Tickets', 'Hotel Bookings']
  },
  {
    name: 'Electronics',
    items: ['Power Bank', 'Universal Adapter', 'Camera', 'Noise Cancelling Headphones']
  },
  {
    name: 'Clothing',
    items: ['Comfortable Walking Shoes', 'Rain Jacket', 'Swimwear', 'Sunglasses']
  }
];
