const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const cars = [
  { id: 1, name: 'Mercedes-Benz S-Class', year: 2024, price: 110000, type: 'أوتوماتيك', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80' },
  { id: 2, name: 'BMW M5 Competition', year: 2023, price: 135000, type: 'أوتوماتيك', image: 'https://images.unsplash.com/photo-1555353540-64fd2b37c020?w=500&q=80' },
  { id: 3, name: 'Audi RS7', year: 2024, price: 120000, type: 'أوتوماتيك', image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=500&q=80' }
];

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));