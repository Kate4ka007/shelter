interface IProduct {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    rate: number,
    count: number
  },
  title: string,
  color: string,
  release: number,
  countInStock: number
}

export default IProduct;